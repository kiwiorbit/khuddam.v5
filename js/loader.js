// Enhanced Book Animation Loader with smooth fade-in transition
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const progress = document.getElementById('progress');
    const mainContent = document.getElementById('main-content');

    // Hide the main content initially
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.visibility = 'hidden';
        // Add transition for smoother fade-in
        mainContent.style.transition = 'opacity 1.2s ease-in-out, visibility 1.2s ease-in-out';
    }

    // Fixed 2-second duration for the loader
    const totalDuration = 2000; // 2 seconds in milliseconds
    const startTime = Date.now();
    const endTime = startTime + totalDuration;

    // Update progress bar function
    function updateProgress() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const percentComplete = Math.min(100, (elapsedTime / totalDuration) * 100);

        // Update progress bar width
        if (progress) {
            progress.style.width = percentComplete + '%';
        }

        if (currentTime < endTime) {
            // Continue updating if we haven't reached 2 seconds
            requestAnimationFrame(updateProgress);
        } else {
            // Exactly 2 seconds have passed
            if (progress) {
                progress.style.width = '100%';
            }

            // Add transition to loader for smooth fade-out
            if (loader) {
                loader.style.transition = 'opacity 0.8s ease-out, visibility 0.8s ease-out';
            }

            // Hide loader and show main content with a slight delay for smoother transition
            setTimeout(() => {
                if (loader) {
                    loader.classList.add('hidden');
                }

                if (mainContent) {
                    // Apply smooth fade-in
                    mainContent.style.opacity = '1';
                    mainContent.style.visibility = 'visible';
                    
                    // Initialize Locomotive Scroll if it exists
                    if (window.locomotiveScroll) {
                        setTimeout(() => {
                            window.locomotiveScroll.update();
                        }, 300);
                    }
                }
            }, 200);
        }
    }

    // Start the progress update
    requestAnimationFrame(updateProgress);

    // If page is already loaded, still show loader for full 2 seconds
    window.addEventListener('load', function() {
        // Do nothing - we want the full 2 seconds regardless
    });
});
