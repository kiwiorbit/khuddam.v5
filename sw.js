// Khuddam Service Worker for Browser Caching
// Version: 1.0.0

// Cache names with versioning
const CACHE_NAME = 'khuddam-cache-v1';
const STATIC_CACHE = 'khuddam-static-v1';
const DYNAMIC_CACHE = 'khuddam-dynamic-v1';
const EXTERNAL_CACHE = 'khuddam-external-v1';
const IMAGE_CACHE = 'khuddam-images-v1';

// Assets to cache during installation
const STATIC_ASSETS = [
  // HTML files
  '/',
  '/index.html',
  '/about.html',
  '/registration-form.html',
  '/contact-form.html',

  // CSS files
  '/css/critical.css',

  // JavaScript files
  '/js/main.js',
  '/js/loader.js',
  '/sw.js',

  // Images
  '/images/khuddam-logo-white.png',
  '/images/image1.webp',
  '/images/Quran photo.webp',
  '/images/kaaba2.webp',
  '/images/barcode.png',
  '/images/enrollment-post.png',
  '/images/aboutus.jpeg',
  '/images/teacher1.jpeg',

  // Gallery images
  '/images/gallery/arabicclass1.webp',
  '/images/gallery/arabicclass2.webp',
  '/images/gallery/arabicclass3.webp',
  '/images/gallery/arabicclass4.webp',
  '/images/gallery/arabicclass5.webp',
  '/images/gallery/arabicclass8.webp',
  '/images/gallery/arabicclass9.webp',
  '/images/gallery/arabicclass10.webp',
  '/images/gallery/arabicclass12.webp',

  // Video
  '/30fps.mp4'
];

// External resources to cache
const EXTERNAL_ASSETS = [
  // Tailwind CSS
  'https://cdn.tailwindcss.com',

  // Font Awesome
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2',

  // Google Fonts
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap',

  // AOS Animation
  'https://unpkg.com/aos@next/dist/aos.css',
  'https://unpkg.com/aos@next/dist/aos.js'
];

// Maximum cache size (in bytes) - 50MB
const MAX_CACHE_SIZE = 50 * 1024 * 1024;

// Install event - Cache static assets
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing Service Worker...');

  // Skip waiting to ensure the new service worker activates immediately
  self.skipWaiting();

  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE)
        .then(cache => {
          console.log('[Service Worker] Precaching static assets');
          return cache.addAll(STATIC_ASSETS);
        }),

      // Cache external assets
      caches.open(EXTERNAL_CACHE)
        .then(cache => {
          console.log('[Service Worker] Precaching external assets');
          return cache.addAll(EXTERNAL_ASSETS);
        })
    ])
  );
});

// Activate event - Clean up old caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating Service Worker...');

  // Claim clients to ensure the service worker controls all pages
  self.clients.claim();

  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            // Delete any old caches that don't match our current cache names
            if (
              cacheName !== STATIC_CACHE &&
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== EXTERNAL_CACHE &&
              cacheName !== IMAGE_CACHE
            ) {
              console.log('[Service Worker] Removing old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
});

// Fetch event - Serve cached content when available
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET requests and browser extension requests
  if (event.request.method !== 'GET' || url.protocol === 'chrome-extension:') {
    return;
  }

  // Handle different types of requests with appropriate strategies
  if (isHtmlRequest(event.request)) {
    // Network-first strategy for HTML files
    event.respondWith(networkFirstStrategy(event.request));
  } else if (isImageRequest(event.request)) {
    // Cache-first strategy for images
    event.respondWith(cacheFirstStrategy(event.request, IMAGE_CACHE));
  } else if (isExternalRequest(event.request)) {
    // Cache-first strategy for external resources
    event.respondWith(cacheFirstStrategy(event.request, EXTERNAL_CACHE));
  } else {
    // Cache-first strategy for all other static assets
    event.respondWith(cacheFirstStrategy(event.request, STATIC_CACHE));
  }
});

// Network-first strategy: Try network, fall back to cache
function networkFirstStrategy(request) {
  return fetch(request)
    .then(response => {
      // Cache the response if it's valid
      if (response && response.status === 200) {
        const clonedResponse = response.clone();
        caches.open(DYNAMIC_CACHE)
          .then(cache => cache.put(request, clonedResponse))
          .catch(err => console.error('[Service Worker] Error caching response:', err));
      }
      return response;
    })
    .catch(() => {
      // If network fails, try to get from cache
      return caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Return null if not in cache
          return null;
        });
    });
}

// Cache-first strategy: Try cache, fall back to network
function cacheFirstStrategy(request, cacheName) {
  return caches.match(request)
    .then(cachedResponse => {
      if (cachedResponse) {
        // Return cached response
        return cachedResponse;
      }

      // If not in cache, fetch from network
      return fetch(request)
        .then(response => {
          // Cache the response if it's valid
          if (response && response.status === 200) {
            const clonedResponse = response.clone();
            caches.open(cacheName)
              .then(cache => {
                cache.put(request, clonedResponse);
                // Check and manage cache size
                manageCacheSize(cacheName);
              })
              .catch(err => console.error('[Service Worker] Error caching response:', err));
          }
          return response;
        })
        .catch(err => {
          console.error('[Service Worker] Fetch failed:', err);
          // For image requests, return a fallback image
          if (isImageRequest(request)) {
            return caches.match('/images/image1.webp');
          }
          return null;
        });
    });
}

// Helper function to check if request is for an HTML file
function isHtmlRequest(request) {
  const url = new URL(request.url);
  return (
    request.headers.get('accept')?.includes('text/html') ||
    url.pathname.endsWith('.html') ||
    url.pathname === '/' ||
    url.pathname.endsWith('/')
  );
}

// Helper function to check if request is for an image
function isImageRequest(request) {
  const url = new URL(request.url);
  return (
    url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/i) ||
    request.headers.get('accept')?.includes('image/')
  );
}

// Helper function to check if request is for an external resource
function isExternalRequest(request) {
  const url = new URL(request.url);
  return (
    !url.hostname.includes(self.location.hostname) &&
    (url.hostname.includes('cdn') ||
     url.hostname.includes('googleapis') ||
     url.hostname.includes('cdnjs') ||
     url.hostname.includes('jsdelivr'))
  );
}

// Manage cache size to prevent it from growing too large
async function manageCacheSize(cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    const cacheSize = await getCacheSize(cache, keys);

    if (cacheSize > MAX_CACHE_SIZE) {
      console.log(`[Service Worker] Cache ${cacheName} is too large (${Math.round(cacheSize/1024/1024)}MB). Trimming...`);
      // Remove oldest items first (LRU strategy)
      const keysToDelete = keys.slice(0, Math.ceil(keys.length * 0.2)); // Remove oldest 20%
      await Promise.all(keysToDelete.map(key => cache.delete(key)));
    }
  } catch (err) {
    console.error('[Service Worker] Error managing cache size:', err);
  }
}

// Calculate the total size of a cache
async function getCacheSize(cache, keys) {
  let size = 0;
  for (const key of keys) {
    const response = await cache.match(key);
    if (response) {
      const blob = await response.blob();
      size += blob.size;
    }
  }
  return size;
}
