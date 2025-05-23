// Contact Page Loader
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const progress = document.getElementById('progress');
    const mainContent = document.getElementById('main-content');

    // Hide the main content initially
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.visibility = 'hidden';
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

            // Hide loader and show main content
            setTimeout(() => {
                if (loader) {
                    loader.classList.add('hidden');
                }

                if (mainContent) {
                    mainContent.style.opacity = '1';
                    mainContent.style.visibility = 'visible';
                }


            }, 100);
        }
    }

    // Start the progress update
    requestAnimationFrame(updateProgress);

    // If page is already loaded, still show loader for full 2 seconds
    window.addEventListener('load', function() {
        // Do nothing - we want the full 2 seconds regardless
    });
});
