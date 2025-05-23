# Khuddam - Servants of the Quran Website

## 🌟 Overview

**Khuddam** (خُدَّام الْقُرآن) is a modern, responsive website for an Islamic educational organization focused on Quranic Arabic Grammar Learning. The website serves as a platform for course enrollment, community engagement, and educational outreach.

### 🎯 Mission
Deepening participants' connection to the Quran through linguistic tools and community building, making the divine message accessible to all Muslims regardless of their background.

## 🚀 Features

### ✨ Core Functionality
- **Multi-step Registration Form** with Google Forms integration
- **Contact Form** with automated email responses
- **Responsive Design** optimized for all devices
- **Progressive Web App (PWA)** capabilities
- **Multi-language Support** (English/Arabic)
- **SEO Optimized** with structured data
- **Performance Optimized** with lazy loading and caching

### 🎨 Design Features
- **Modern UI/UX** with Tailwind CSS
- **Islamic Aesthetic** with Arabic typography
- **Video Background** hero section
- **Smooth Animations** using AOS library
- **Loading Screen** with Islamic greeting
- **Dark/Light Theme** support

## 📁 Project Structure

```
khuddam-website/
├── index.html              # Homepage
├── about.html              # About Us page
├── contact-form.html       # Contact page
├── registration-form.html  # Registration page
├── css/
│   └── critical.css        # Critical CSS styles
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── loader.js          # Loading screen logic
├── images/                # Image assets
│   ├── logos/
│   ├── backgrounds/
│   └── icons/
├── 30fps.mp4             # Hero video background
├── sw.js                 # Service Worker for PWA
├── robots.txt            # SEO robots file
├── sitemap.xml           # XML sitemap
└── .htaccess             # Apache configuration
```

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Tailwind CSS** - Utility-first CSS framework

### External Libraries
- **Font Awesome 6.4.0** - Icons
- **AOS (Animate On Scroll)** - Scroll animations
- **Google Fonts** - Amiri (Arabic) & Poppins typography

### Backend Integration
- **Google Forms** - Form submissions and data collection
- **Google Analytics** - Website analytics
- **Service Worker** - Offline functionality and caching

## 📱 Pages Overview

### 🏠 Homepage (`index.html`)
- **Hero Section** with video background
- **Program Overview** with enrollment information
- **Testimonials** carousel
- **Call-to-Action** sections
- **Enrollment Modal** popup

### ℹ️ About Us (`about.html`)
- **Organization Mission** and values
- **Team Information** with instructor profiles
- **Our Journey** section with background image
- **Program Details** and methodology

### 📞 Contact (`contact-form.html`)
- **Contact Information** with location details
- **Contact Form** with Google Forms integration
- **Response Time** indicators
- **Social Media** links

### 📝 Registration (`registration-form.html`)
- **Multi-step Form** (2 steps)
- **Step 1**: Personal details and motivation
- **Step 2**: WhatsApp group joining
- **Thank You Modal** with home navigation
- **Form Validation** and error handling

## 🔧 Setup & Installation

### Prerequisites
- Web server (Apache/Nginx)
- Modern web browser
- Internet connection for CDN resources

### Local Development
1. **Clone/Download** the project files
2. **Maintain folder structure** as shown above
3. **Open index.html** in a web browser
4. **Test all forms** and functionality

### Production Deployment
1. **Upload all files** to web server root directory
2. **Configure .htaccess** for Apache servers
3. **Update Google Form URLs** in JavaScript files
4. **Test all pages** and forms on live server
5. **Verify SSL certificate** for HTTPS

## 📋 Configuration

### Google Forms Integration
Update the following form action URLs in the respective files:

**Registration Form** (`registration-form.html`):
```javascript
hiddenForm.action = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
```

**Contact Form** (`contact-form.html`):
```javascript
hiddenForm.action = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
```

### Form Field Mapping
**Registration Form Fields**:
- Full Name: `entry.496392723`
- Email: `entry.2056515345`
- Phone: `entry.1435714806`
- Motivation: `entry.1984046647`
- Comments: `entry.1578709933`

**Contact Form Fields**:
- First Name: `entry.1234567890`
- Last Name: `entry.0987654321`
- Email: `entry.1122334455`
- Subject: `entry.5566778899`
- Message: `entry.9988776655`

### SEO Configuration
Update the following in each HTML file:
- **Meta descriptions**
- **Open Graph tags**
- **Twitter Card data**
- **Structured data (JSON-LD)**
- **Canonical URLs**

## 🎨 Customization

### Colors (Tailwind Config)
```javascript
colors: {
    primary: '#deae35',    // Gold/Yellow
    secondary: '#606060',  // Gray
    light: '#F9F7F3',     // Light cream
    dark: '#101010'       // Dark black
}
```

### Fonts
- **Arabic Text**: Amiri (Google Fonts)
- **English Text**: Poppins (Google Fonts)

### Images
Replace images in the `/images/` folder:
- **Logo**: `old-logo-border.png`
- **Hero Background**: `image1.webp`
- **About Background**: `foldpages.avif`
- **Team Photos**: `teacher1.jpeg`, etc.

## 📊 Performance Features

### Optimization
- **Critical CSS** inlined for faster rendering
- **Lazy Loading** for images and videos
- **Service Worker** for offline caching
- **Preload** directives for key resources
- **Minified** CSS and JavaScript

### PWA Features
- **Service Worker** (`sw.js`)
- **Offline Functionality**
- **Cache Strategy** for static assets
- **Mobile App-like** experience

## 🔒 Security Features

### Form Security
- **Client-side Validation**
- **CSRF Protection** via Google Forms
- **Input Sanitization**
- **Rate Limiting** considerations

### General Security
- **HTTPS Enforcement**
- **Content Security Policy** headers
- **XSS Protection**
- **Secure Headers** in .htaccess

## 📱 Browser Support

### Supported Browsers
- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **Mobile Browsers** (iOS Safari, Chrome Mobile)

### Fallbacks
- **Video Fallback** to static image
- **JavaScript Fallback** for form submissions
- **CSS Fallback** for older browsers

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] Test all forms and submissions
- [ ] Verify Google Forms integration
- [ ] Check responsive design on all devices
- [ ] Validate HTML/CSS
- [ ] Test loading speeds
- [ ] Verify all links work

### Post-Deployment
- [ ] Test live forms
- [ ] Check SSL certificate
- [ ] Verify Google Analytics
- [ ] Test PWA functionality
- [ ] Check SEO meta tags
- [ ] Monitor error logs

## 📞 Support & Maintenance

### Regular Updates
- **Content Updates**: Course information, dates, etc.
- **Security Updates**: Dependencies and libraries
- **Performance Monitoring**: Loading speeds and user experience
- **Form Testing**: Regular submission testing

### Troubleshooting
- **Form Issues**: Check Google Forms URLs and entry IDs
- **Loading Issues**: Verify CDN resources and caching
- **Mobile Issues**: Test responsive design and touch interactions
- **Performance Issues**: Check image optimization and caching

## 📋 Version History

### 🚀 Version 5.0 (Latest) - Enhanced Registration Experience
**Release Date**: January 2025

#### ✨ New Features
- **Dynamic Form Title**: Title changes from "Register in 2 Steps" to "One Final Step" when user reaches Step 2
- **Streamlined Registration Flow**: Removed redundant "Submit Registration" button for cleaner user experience
- **Automatic Registration Completion**: WhatsApp button automatically changes to "Registration Complete" when user returns from WhatsApp
- **Smart Return Detection**: Uses localStorage and window focus events to detect when users return from WhatsApp
- **Auto Thank You Modal**: Automatically displays thank you popup when users return from WhatsApp group

#### 🔧 Technical Improvements
- **Enhanced Scroll Behavior**: Fixed scroll positioning to show Step 2 from the top of the form card
- **Improved State Management**: Better localStorage handling for tracking registration progress
- **Optimized User Flow**: Seamless transition between form steps and WhatsApp integration
- **Better Visual Feedback**: Clear indication of registration completion status

#### 🎯 User Experience Enhancements
- **Clearer Progress Indication**: Dynamic title reflects current step status
- **Reduced Friction**: Eliminated unnecessary button clicks in registration process
- **Automatic Completion**: No manual action required after joining WhatsApp group
- **Persistent State**: Registration state maintained across browser sessions
- **Improved Accessibility**: Better scroll positioning and visual hierarchy

#### 🐛 Bug Fixes
- Fixed scroll positioning issues when transitioning to Step 2
- Resolved form state management inconsistencies
- Corrected button text updates for WhatsApp integration
- Fixed localStorage cleanup on form reset

### 📋 Previous Versions
- **v4.x**: Multi-step registration form with WhatsApp integration
- **v3.x**: Contact form enhancements and SEO optimization
- **v2.x**: Responsive design improvements and PWA features
- **v1.x**: Initial website launch with basic functionality

## 📄 License

© 2025 Khuddam - Servants of the Quran. All rights reserved. This project is proprietary software for Khuddam - Servants of the Quran organization.

## 👥 Credits

- **Design & Development**: [Kiwiorbit](https://kiwiorbit.vercel.app/) - Full-stack web development
- **Developer Contact**: +64 22 325 9094
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Amiri, Poppins)
- **Framework**: Tailwind CSS
- **Animations**: AOS Library

---

**For technical support or questions, please contact:**
- **Kiwiorbit Development Team**: [https://kiwiorbit.vercel.app/](https://kiwiorbit.vercel.app/)
- **Phone**: +64 22 325 9094
