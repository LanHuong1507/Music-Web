
/*Navbar For Mobile Menu*/
document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
});

document.getElementById('mobile-menu-close').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('active');
});

/* Login SignUp LogOut*/
document.addEventListener('DOMContentLoaded', function () {
    /*Login*/
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.querySelector('#loginModal .close');
    const mobileLoginBtn = document.getElementById('mobileLoginBtn');
    const loginForm = document.getElementById('login');
    const webUserContainer = document.getElementById('webUserContainer');
    const mobileUserContainer = document.getElementById('mobileUserContainer');
    const logoutModal = document.getElementById('logoutModal');
    const closeLogoutModal = document.querySelector('#logoutModal .close');
    const confirmLogoutBtn = document.getElementById('confirmLogout');
    const cancelLogoutBtn = document.getElementById('cancelLogout');
    loginBtn.onclick = function () {
        loginModal.style.display = 'block';
    }

    mobileLoginBtn.onclick = function () {
        loginModal.style.display = 'block';
    }

    closeModal.onclick = function () {
        loginModal.style.display = 'none';
    }

    webUserContainer.onclick = function () {
        logoutModal.style.display = 'block';
    }

    mobileUserContainer.onclick = function () {
        logoutModal.style.display = 'block';
    }

    window.onclick = function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == logoutModal) {
            logoutModal.style.display = 'none';
        }
    }

    loginForm.onsubmit = function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
            alert("Login successful!");
            loginModal.style.display = 'none';
            webUserContainer.style.display = 'inline-block';
            mobileUserContainer.style.display = 'inline-block';
            const userTemplate = `
                <div class="user-image" id="userImageContainer">
                    <img src="assets/img/default-user.webp" alt="User Image" id="userImage">
                    <span class="user-name">${username}</span>
                </div>
            `;
            webUserContainer.innerHTML = userTemplate;
            mobileUserContainer.innerHTML = userTemplate;
            loginBtn.style.display = 'none';
            mobileLoginBtn.style.display = 'none';
            document.getElementById('userImage').onclick = function () {
                logoutModal.style.display = 'block';
            };
        } else {
            alert("Wrong username or password. Please try again.");
        }
    }
    /*Logout */
    closeLogoutModal.onclick = function () {
        logoutModal.style.display = 'none';
    }

    confirmLogoutBtn.onclick = function () {
        logoutModal.style.display = 'none';
        webUserContainer.style.display = 'none';
        mobileUserContainer.style.display = 'none';
        loginBtn.style.display = 'inline-block';
        mobileLoginBtn.style.display = 'inline-block';
    }

    cancelLogoutBtn.onclick = function () {
        logoutModal.style.display = 'none';
    }
});

function saveUser(newUser) {
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}

document.addEventListener('DOMContentLoaded', function () {
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const signupFormElement = document.getElementById('signupFormElement');
    switchToSignup.onclick = function (e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
    switchToLogin.onclick = function (e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    }
    signupFormElement.onsubmit = function (e) {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value.trim();
        const newEmail = document.getElementById('newEmail').value.trim();
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (!newUsername || !newEmail || !newPassword) {
            alert('Please fill in all fields.');
            return;
        }
        const userExists = users.some(user => user.username === newUsername);
        if (userExists) {
            alert('Username already exists. Please choose a different username.');
            return;
        }
        const newUser = {
            username: newUsername,
            email: newEmail,
            password: newPassword
        };

        saveUser(newUser);
        alert('Signup successful! You can now log in.');
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    }
});

/* Mobile Menu */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

mobileMenuBtn.onclick = function () {
    mobileMenu.classList.add('active');
}

mobileMenuClose.onclick = function () {
    mobileMenu.classList.remove('active');
}

/*Bottom Player Controls*/
document.addEventListener('DOMContentLoaded', () => {
    const player = new Audio();
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const speedX2Btn = document.getElementById('speed-x2');
    const speedX4Btn = document.getElementById('speed-x4');
    const speedNormalBtn = document.getElementById('speed-normal');
    const trackLinks = Array.from(document.querySelectorAll('.track-link'));

    const playbackTime = document.getElementById('playback-time');
    const totalDuration = document.getElementById('total-duration');
    const seekSlider = document.getElementById('seek-slider');
    const progressBarFilled = document.getElementById('progress-bar-filled');

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
            seekSlider.value = progress;
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

    speedX2Btn.addEventListener('click', () => {
        if (currentTrack) {
            player.playbackRate = 2.0;
            console.log('Playback speed set to x2.');
        }
    });

    speedX4Btn.addEventListener('click', () => {
        if (currentTrack) {
            player.playbackRate = 4.0;
            console.log('Playback speed set to x4.');
        }
    });

    speedNormalBtn.addEventListener('click', () => {
        if (currentTrack) {
            player.playbackRate = 1.0;
            console.log('Playback speed reset to normal.');
        }
    });

    seekSlider.addEventListener('input', () => {
        if (currentTrack) {
            const newValue = seekSlider.value;
            const newTime = (newValue / 100) * player.duration;
            player.currentTime = newTime;
        }
    });

    player.addEventListener('timeupdate', updatePlaybackTime);
});

/*Tab Navigation In Hero Section*/
let currentTab = 0;
const tabs = document.querySelectorAll('.tab-content');
const tabNames = ['Most Listened', 'Most Favorite', 'New Releases', 'Top Rated', 'Top Artists'];
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
    tabs.forEach(tab => tab.classList.remove('active'));


    tabs[currentTab].classList.add('active');


    tabNameDisplay.textContent = tabNames[currentTab];
}
document.addEventListener('DOMContentLoaded', () => {
    showTab(currentTab);
});

/*Music Genres*/
document.addEventListener('DOMContentLoaded', function () {
    function createGenreItem(genre) {
        const div = document.createElement('div');
        div.classList.add('genre-item');

        const img = document.createElement('img');
        img.src = genre.imgSrc;
        img.alt = genre.altText;
        img.classList.add('genre-image');

        const genreDetailsDiv = document.createElement('div');
        genreDetailsDiv.classList.add('genre-details');

        const h3 = document.createElement('h3');
        h3.textContent = genre.title;

        const p = document.createElement('p');
        p.textContent = genre.description;

        const learnMoreLink = document.createElement('a');
        learnMoreLink.href = genre.link; 
        learnMoreLink.classList.add('learn-more');
        learnMoreLink.textContent = 'Learn More';

        genreDetailsDiv.appendChild(h3);
        genreDetailsDiv.appendChild(p);
        genreDetailsDiv.appendChild(learnMoreLink);

        div.appendChild(img);
        div.appendChild(genreDetailsDiv);

        return div;
    }

    function displayGenres() {
        const genreList = document.getElementById('genre-list');
        genres.forEach((genre, index) => {
            const genreItem = createGenreItem(genre);
            if (index >= 3) {
                genreItem.classList.add('hidden');
            }
            genreList.appendChild(genreItem);
        });
    }
    displayGenres();
});

document.addEventListener('DOMContentLoaded', () => {
    const loadMoreButton = document.getElementById('load-more');
    const visibleCount = 3;
    let isExpanded = false;
    function hideExtraGenres() {
        const genres = document.querySelectorAll('.genre-item');
        genres.forEach((genre, index) => {
            if (index >= visibleCount) {
                genre.classList.add('hidden');
            }
        });
    }
    function showAllGenres() {
        const hiddenGenres = document.querySelectorAll('.genre-item.hidden');
        hiddenGenres.forEach(genre => {
            genre.classList.remove('hidden');
        });
    }
    function updateButtonText() {
        if (isExpanded) {
            loadMoreButton.textContent = 'Show Less';
        } else {
            loadMoreButton.textContent = 'Load More';
        }
    }
    loadMoreButton.addEventListener('click', () => {
        if (isExpanded) {
            hideExtraGenres();
        } else {
            showAllGenres();
        }
        isExpanded = !isExpanded;
        updateButtonText();
    });
    hideExtraGenres();
    updateButtonText();
});

/*Tab Navigation In Music Section */
document.querySelectorAll('.bxh-tabs .tabs li').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.bxh-tabs .tabs li').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.bxh-content .tab-content-bxh').forEach(content => content.classList.remove('active'));
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

/*Play Button In Album */
document.querySelectorAll('.album-image').forEach(album => {
    album.addEventListener('click', function (e) {
        document.querySelectorAll('.album-image').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        e.stopPropagation();
    });
});
document.addEventListener('click', function () {
    document.querySelectorAll('.album-image').forEach(item => {
        item.classList.remove('active');
    });
});

/*Show All Songs */
document.addEventListener('DOMContentLoaded', function () {
    const showAllBtn = document.querySelector('.show-all-songs');
    const songList = document.querySelector('.songs ul');

    showAllBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (songList.classList.contains('show-all-songs')) {
            songList.classList.remove('show-all-songs');
            showAllBtn.textContent = 'Show All';
        } else {
            songList.classList.add('show-all-songs');
            showAllBtn.textContent = 'Show Less';
        }
    });
});

/*Music Carousel */
document.addEventListener('DOMContentLoaded', function () {
    const carouselSlide = document.querySelector('.carousel-slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const dotsContainer = document.querySelector('.dots-container');
    let counter = 0;
    let size = document.querySelector('.carousel-item')?.clientWidth || 0;
    function populateCarousel() {
        carouselData.forEach((item, index) => {
            const div = document.createElement('div');
            div.classList.add('carousel-item');
            div.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
            carouselSlide.appendChild(div);
        });
        size = document.querySelector('.carousel-item')?.clientWidth || 0;
        updateCarousel();
        updateDots();
    }

    function updateCarousel() {
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        updateDots();
    }
    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === counter);
        });
    }
    function autoSlide() {
        counter = (counter + 1) % carouselData.length;
        updateCarousel();
    }
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 2000);
    }

    let autoSlideInterval = setInterval(autoSlide, 2000);

    nextBtn.addEventListener('click', () => {
        counter = (counter + 1) % carouselData.length;
        updateCarousel();
        resetAutoSlide();
    });
    prevBtn.addEventListener('click', () => {
        counter = (counter - 1 + carouselData.length) % carouselData.length;
        updateCarousel();
        resetAutoSlide();
    });
    dotsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('dot')) {
            counter = parseInt(event.target.dataset.slide, 10);
            updateCarousel();
            resetAutoSlide();
        }
    });
    window.addEventListener('resize', () => {
        size = document.querySelector('.carousel-item')?.clientWidth || 0;
        updateCarousel();
    });
    populateCarousel();
});

/*Recommended Playlists*/
document.addEventListener('DOMContentLoaded', function () {
    function createPlaylistItem(playlist) {
        const li = document.createElement('li');
        li.setAttribute('data-video', playlist.video);

        const albumImageDiv = document.createElement('div');
        albumImageDiv.classList.add('album-image');

        const img = document.createElement('img');
        img.src = playlist.image;
        img.alt = playlist.title;
        img.classList.add('playlist-cover');
        albumImageDiv.appendChild(img);

        const playIcon = document.createElement('i');
        playIcon.classList.add('fa', 'fa-play', 'play-icon');
        albumImageDiv.appendChild(playIcon);

        const h4 = document.createElement('h4');
        h4.textContent = playlist.title;

        li.appendChild(albumImageDiv);
        li.appendChild(h4);

        return li;
    }
    function displayPlaylists() {
        const playlistContainer = document.querySelector('.recommended-playlists .playlist');
        playlists.forEach(playlist => {
            const playlistItem = createPlaylistItem(playlist);
            playlistContainer.appendChild(playlistItem);
        });
    }
    function handleAlbumImageClicks() {
        document.querySelectorAll('.album-image').forEach(album => {
            album.addEventListener('click', function (e) {
                document.querySelectorAll('.album-image').forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
                e.stopPropagation();
            });
        });

        document.addEventListener('click', function () {
            document.querySelectorAll('.album-image').forEach(item => {
                item.classList.remove('active');
            });
        });
    }
    function handleShowAllButton() {
        const showAllBtn = document.querySelector('#show-all-playlists');
        const songList = document.querySelector('.recommended-playlists ul');

        function toggleVideos() {
            if (songList.classList.contains('show-all')) {
                songList.classList.remove('show-all');
                showAllBtn.textContent = 'Show All';
            } else {
                songList.classList.add('show-all');
                showAllBtn.textContent = 'Show Less';
            }
        }

        showAllBtn.addEventListener('click', function (e) {
            e.preventDefault();
            toggleVideos();
        });
    }
    displayPlaylists();
    handleAlbumImageClicks();
    handleShowAllButton();
});

/*Video */
document.addEventListener('DOMContentLoaded', function () {
    function createVideoItem(video) {
        const li = document.createElement('li');
        li.setAttribute('data-video', video.videoSrc);

        const albumImageDiv = document.createElement('div');
        albumImageDiv.classList.add('album-image');

        const img = document.createElement('img');
        img.src = video.imgSrc;
        img.alt = video.altText;
        img.classList.add('video-cover');
        albumImageDiv.appendChild(img);

        const playIcon = document.createElement('i');
        playIcon.classList.add('fa', 'fa-play', 'play-icon');
        albumImageDiv.appendChild(playIcon);

        const h4 = document.createElement('h4');
        h4.textContent = video.title;

        li.appendChild(albumImageDiv);
        li.appendChild(h4);

        return li;
    }

    function displayVideos() {
        const videoContainer = document.querySelector('.videos .video-player');
        videoData.forEach(video => {
            const videoItem = createVideoItem(video);
            videoContainer.appendChild(videoItem);
        });
    }

    function playVideo(videoSrc) {
        const videoPlayer = document.querySelector('#video-player');
        const videoSource = document.querySelector('#video-source');
        videoSource.src = videoSrc;
        videoPlayer.load();
        videoPlayer.play();
    }

    function handleAlbumImageClicks() {
        document.querySelectorAll('.album-image').forEach(album => {
            album.addEventListener('click', function (e) {
                document.querySelectorAll('.album-image').forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
                e.stopPropagation();
            });
        });

        document.addEventListener('click', function () {
            document.querySelectorAll('.album-image').forEach(item => {
                item.classList.remove('active');
            });
        });
    }

    function handleShowAllButton() {
        const showAllBtn = document.querySelector('#show-all-videos');
        const videoList = document.querySelector('.videos ul');

        function toggleVideos() {
            if (videoList.classList.contains('show-all')) {
                videoList.classList.remove('show-all');
                showAllBtn.textContent = 'Show All';
            } else {
                videoList.classList.add('show-all');
                showAllBtn.textContent = 'Show Less';
            }
        }

        showAllBtn.addEventListener('click', function (e) {
            e.preventDefault();
            toggleVideos();
        });
    }

    function setupVideoPopup() {
        const playIcons = document.querySelectorAll('.play-icon');
        const popup = document.getElementById('video-popup');
        const closeBtn = document.querySelector('.close-video');
        const videoPlayer = document.getElementById('video-player');
        const videoSource = document.getElementById('video-source');

        playIcons.forEach(icon => {
            icon.addEventListener('click', function () {
                const li = this.closest('li');
                const videoUrl = li.getAttribute('data-video');

                popup.style.display = 'block';
                videoSource.src = videoUrl;
                videoPlayer.load();
                videoPlayer.play();
            });
        });

        closeBtn.addEventListener('click', function () {
            popup.style.display = 'none';
            videoPlayer.pause();
            videoSource.src = '';
        });

        window.addEventListener('click', function (event) {
            if (event.target === popup) {
                popup.style.display = 'none';
                videoPlayer.pause();
                videoSource.src = '';
            }
        });
    }
    displayVideos();
    handleAlbumImageClicks();
    handleShowAllButton();
    setupVideoPopup();
});
