document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('wildlifeVideo');
    const videoContainer = document.getElementById('videoContainer');
    const actionBtn = document.getElementById('actionBtn');

    // Toggle play/hide logic
    actionBtn.addEventListener('click', () => {
        if (video.paused) {
            // If the video is not playing, show it and play it
            videoContainer.style.display = 'block';
            video.play();
        } else {
            // If the video is playing, pause it and hide it
            video.pause();
            videoContainer.style.display = 'none';
        }
    });
    
    // Update button text based on native video state
    video.addEventListener('play', () => {
         actionBtn.textContent = 'Hide Video';
    });

    video.addEventListener('pause', () => {
        if (videoContainer.style.display !== 'none') {
             actionBtn.textContent = 'Play Video';
        } else {
             actionBtn.textContent = 'Show & Play Video';
        }
    });
});