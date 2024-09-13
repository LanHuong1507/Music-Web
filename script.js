/*Navbar*/
document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
});

document.getElementById('mobile-menu-close').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('active');
});
/*Player Control*/
document.addEventListener('DOMContentLoaded', () => {
    const player = new Audio();
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const trackLinks = Array.from(document.querySelectorAll('.track-link'));

    const playbackTime = document.getElementById('playback-time');
    const totalDuration = document.getElementById('total-duration');
    const progressBar = document.getElementById('progress-bar');

    const bottomTrackImage = document.getElementById('bottom-track-image');
    const bottomTrackTitle = document.getElementById('bottom-track-title');

    let currentTrack = null;
    let currentTrackIndex = -1;
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${secs}`;
    }
    function updatePlaybackTime() {
        if (currentTrack && !currentTrack.paused) {
            playbackTime.textContent = formatTime(player.currentTime);

            const progress = (player.currentTime / player.duration) * 100;
            progressBar.style.width = `${progress}%`;
        }
    }
    function playTrack(index) {
        const trackLink = trackLinks[index];
        if (!trackLink) return;

        const audioSrc = trackLink.getAttribute('data-audio');
        const imageSrc = trackLink.getAttribute('data-image') || 'assets/img/default-user.webp';
        const title = trackLink.textContent;
        document.querySelectorAll('.track-item').forEach(item => item.classList.remove('playing'));

        if (currentTrack && currentTrack.src !== audioSrc) {
            player.pause();
        }

        if (player.src !== audioSrc) {
            player.src = audioSrc;
            player.play();
            currentTrack = player;
            currentTrackIndex = index;
            bottomTrackImage.src = imageSrc;
            bottomTrackTitle.textContent = title;
            player.addEventListener('loadedmetadata', () => {
                totalDuration.textContent = formatTime(player.duration);
            });
            trackLink.parentElement.classList.add('playing');
        } else {
            player.paused ? player.play() : player.pause();
        }
    }

    trackLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            playTrack(index);
        });
    });

    playBtn.addEventListener('click', () => {
        if (currentTrack) {
            player.play();
            console.log('Play button clicked.');
        }
    });

    pauseBtn.addEventListener('click', () => {
        if (currentTrack) {
            player.pause();
            console.log('Pause button clicked.');
        }
    });

    nextBtn.addEventListener('click', () => {
        console.log('Next button clicked.');

        if (currentTrackIndex >= 0 && currentTrackIndex < trackLinks.length - 1) {
            playTrack(currentTrackIndex + 1);
        } else {
            console.log("No more tracks to play, or no track selected.");
        }
    });

    prevBtn.addEventListener('click', () => {
        console.log('Previous button clicked.');

        if (currentTrackIndex > 0) {
            playTrack(currentTrackIndex - 1);
        } else {
            console.log("No previous track to play, or no track selected.");
        }
    });
    player.addEventListener('timeupdate', updatePlaybackTime);
});

/*Tab Navigation */
let currentTab = 0;
const tabs = document.querySelectorAll('.tab-content');
const tabNames = ['Most Listened', 'Most Favorite', 'New Releases', 'Top Rated','Top Artists'];
const tabNameDisplay = document.getElementById('tab-name');

document.getElementById('next-btn-tab').addEventListener('click', () => {
    showTab(currentTab + 1);
});

document.getElementById('prev-btn-tab').addEventListener('click', () => {
    showTab(currentTab - 1);
});

function showTab(index) {
    if (index < 0) {
        currentTab = tabs.length - 1;
    } else if (index >= tabs.length) {
        currentTab = 0;
    } else {
        currentTab = index;
    }

    // Hide all tabs
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the current tab
    tabs[currentTab].classList.add('active');

    // Update the tab name display
    tabNameDisplay.textContent = tabNames[currentTab];
}

// Initialize the first tab as active and display its name
document.addEventListener('DOMContentLoaded', () => {
    showTab(currentTab);
});

