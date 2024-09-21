
/*Navbar For Mobile Menu*/
document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
});

document.getElementById('mobile-menu-close').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('active');
});
/*Search bar */

function showDropdown() {
    const dropdown = document.getElementById('searchDropdown');
    dropdown.style.display = 'block';
}

window.onclick = function (event) {
    const dropdown = document.getElementById('searchDropdown');
    const searchBar = document.querySelector('.search-bar');

    if (!searchBar.contains(event.target)) {
        dropdown.style.display = 'none';
    }

    // Mobile dropdown close logic
    const dropdownMobile = document.getElementById('searchDropdownMobile');
    const searchBarMobile = document.querySelector('.search-bar-mobile');

    if (!searchBarMobile.contains(event.target)) {
        dropdownMobile.style.display = 'none';
    }
}

document.getElementById('closeDropdown').onclick = function () {
    document.getElementById('searchDropdown').style.display = 'none';
}
function showDropdownMobile() {
    const dropdownMobile = document.getElementById('searchDropdownMobile');
    dropdownMobile.style.display = 'block';
}

document.getElementById('closeDropdownMobile').onclick = function () {
    document.getElementById('searchDropdownMobile').style.display = 'none';
}
function addToRecentSearches(term) {
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];

    if (!recentSearches.includes(term)) {
        recentSearches.push(term);
        if (recentSearches.length > 5) {
            recentSearches.shift();
        }
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
        updateHistoryList();
        updateHistoryListMobile();
    }
}
function updateHistoryList() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];

    recentSearches.forEach(item => {
        const li = document.createElement('li');
        const timeIcon = document.createElement('i');
        timeIcon.className = 'fas fa-clock';
        li.appendChild(timeIcon);
        const textNode = document.createTextNode(' ' + item);
        li.appendChild(textNode);
        const closeIcon = document.createElement('i');
        closeIcon.className = 'fas fa-times close-icon';
        closeIcon.onclick = function () {
            removeFromRecentSearches(item);
        };
        li.appendChild(closeIcon);

        historyList.appendChild(li);
    });
}

function updateHistoryListMobile() {
    const historyListMobile = document.getElementById('historyListMobile');
    historyListMobile.innerHTML = '';

    const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];

    recentSearches.forEach(item => {
        const li = document.createElement('li');
        const timeIcon = document.createElement('i');
        timeIcon.className = 'fas fa-clock';
        li.appendChild(timeIcon);
        const textNode = document.createTextNode(' ' + item);
        li.appendChild(textNode);
        const closeIcon = document.createElement('i');
        closeIcon.className = 'fas fa-times close-icon';
        closeIcon.onclick = function () {
            removeFromRecentSearches(item);
        };
        li.appendChild(closeIcon);

        historyListMobile.appendChild(li);
    });
}
function removeFromRecentSearches(term) {
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    recentSearches = recentSearches.filter(item => item !== term);
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    updateHistoryList();
    updateHistoryListMobile();
}
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
        addToRecentSearches(searchTerm);
        searchInput.value = '';
    }
}
function handleSearchMobile() {
    const searchInputMobile = document.getElementById('searchInputMobile');
    const searchTermMobile = searchInputMobile.value.trim();

    if (searchTermMobile) {
        addToRecentSearches(searchTermMobile);
        searchInputMobile.value = '';
    }
}
document.querySelector('.search-icon').addEventListener('click', handleSearch);
document.querySelector('.search-bar-mobile .search-icon').addEventListener('click', handleSearchMobile);

updateHistoryList();
updateHistoryListMobile();



/*LOGIN */
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
/*SIGNUP */
document.addEventListener('DOMContentLoaded', function () {
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const signupFormElement = document.getElementById('signupFormElement');
    function showSignupForm(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
    function showLoginForm(e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    }
    function handleSignup(e) {
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

        let users = JSON.parse(localStorage.getItem('users')) || [];
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
    switchToSignup.addEventListener('click', showSignupForm);
    switchToLogin.addEventListener('click', showLoginForm);
    signupFormElement.addEventListener('submit', handleSignup);
});
/*FORGOT PASSWORD AND RESET */
document.addEventListener('DOMContentLoaded', function () {
    const forgotPassword = document.getElementById('forgotPassword');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeForgotPasswordModal = document.getElementById('closeForgotPasswordModal');
    const resetPasswordModal = document.getElementById('resetPasswordModal');
    const closeResetPasswordModal = document.getElementById('closeResetPasswordModal');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    function showForgotPasswordModal(e) {
        e.preventDefault();
        forgotPasswordModal.style.display = 'block';
    }
    function showResetPasswordModal() {
        forgotPasswordModal.style.display = 'none';
        resetPasswordModal.style.display = 'block';
    }
    function handleForgotPassword(e) {
        e.preventDefault();
        const resetEmail = document.getElementById('resetEmail').value.trim();

        if (!resetEmail) {
            alert('Please enter your email address.');
            return;
        }
        alert('A password reset link has been sent to ' + resetEmail);
        showResetPasswordModal();
    }
    function handleResetPassword(e) {
        e.preventDefault();
        const newPassword = document.getElementById('newPasswordReset').value.trim();
        const confirmNewPassword = document.getElementById('confirmNewPasswordReset').value.trim();
        const resetEmail = document.getElementById('resetEmail').value.trim(); // Get email from the field

        if (!newPassword || !confirmNewPassword) {
            alert('Please enter and confirm your new password.');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            alert('Passwords do not match.');
            return;
        }
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(user => user.email === resetEmail);
        if (userIndex === -1) {
            alert('No user found with this email address.');
            return;
        }

        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));

        alert('Your password has been successfully reset.');
        resetPasswordModal.style.display = 'none';
    }
    forgotPassword.addEventListener('click', showForgotPasswordModal);
    closeForgotPasswordModal.addEventListener('click', () => forgotPasswordModal.style.display = 'none');
    closeResetPasswordModal.addEventListener('click', () => resetPasswordModal.style.display = 'none');
    forgotPasswordForm.addEventListener('submit', handleForgotPassword);
    resetPasswordForm.addEventListener('submit', handleResetPassword);
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
    const volumeSlider = document.getElementById('volume-slider');

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

    volumeSlider.addEventListener('input', () => {
        player.volume = volumeSlider.value;
        console.log(`Volume set to ${player.volume}`);
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

/*Recommended Playlists*/document.addEventListener('DOMContentLoaded', function () {
    let currentAudio = null;
    let currentPlayButton = null; 
    let activeAlbum = null;

    function createPlaylistItem(playlist) {
        const li = document.createElement('li');

        const playlistImageDiv = document.createElement('div');
        playlistImageDiv.classList.add('playlist-image');

        const img = document.createElement('img');
        img.src = playlist.image;
        img.alt = playlist.title;
        img.classList.add('playlist-cover');
        playlistImageDiv.appendChild(img);

        const h4 = document.createElement('h4');
        h4.textContent = playlist.title;

        li.appendChild(playlistImageDiv);
        li.appendChild(h4);

        const songListContainer = document.createElement('div');
        songListContainer.classList.add('song-list-container');
        li.appendChild(songListContainer); 

        li.addEventListener('click', function (e) {
            e.stopPropagation();
            if (activeAlbum === li) {
                return;
            }
            if (activeAlbum) {
                const prevSongListContainer = activeAlbum.querySelector('.song-list-container');
                prevSongListContainer.innerHTML = ''; 
            }
            songListContainer.innerHTML = ''; 
            createSongList(playlist, songListContainer);
            activeAlbum = li;
        });

        return li;
    }

    function createSongList(playlist, container) {
        container.innerHTML = '';

        playlist.songs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.classList.add('song-item');

            const songImage = document.createElement('img');
            songImage.src = song.image;
            songImage.alt = song.title;

            const songTitle = document.createElement('span');
            songTitle.textContent = song.title;

            const playButton = document.createElement('button');
            playButton.textContent = 'Play';
            playButton.classList.add('play-button');

            playButton.addEventListener('click', function (e) {
                e.stopPropagation();
                if (playButton.textContent === 'Stop') {
                    stopSong();
                    return; 
                }
                if (currentAudio) {
                    stopSong(); 
                }
                playSong(song.audio, playButton);
            });

            songDiv.appendChild(songImage);
            songDiv.appendChild(songTitle);
            songDiv.appendChild(playButton);
            container.appendChild(songDiv); 
        });

        container.style.display = 'block';
    }

    function playSong(audioSrc, playButton) {
        currentAudio = new Audio(audioSrc);
        currentAudio.play();

        playButton.textContent = 'Stop'; 
        currentPlayButton = playButton;

        currentAudio.addEventListener('ended', function () {
            resetPlayButton(); 
            currentAudio = null; 
        });
    }

    function stopSong() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; 
            resetPlayButton(); 
            currentAudio = null; 
        }
    }

    function resetPlayButton() {
        if (currentPlayButton) {
            currentPlayButton.textContent = 'Play'; 
            currentPlayButton = null; 
        }
    }

    function displayPlaylists() {
        const playlistContainer = document.querySelector('.recommended-playlists .playlist');
        playlistContainer.innerHTML = '';
        playlists.forEach(playlist => {
            const playlistItem = createPlaylistItem(playlist);
            playlistContainer.appendChild(playlistItem);
        });
    }

    function handleShowAllButton() {
        const showAllBtn = document.querySelector('#show-all-playlists');
        const playlistList = document.querySelector('.recommended-playlists ul');

        function togglePlaylists() {
            if (playlistList.classList.contains('show-all')) {
                playlistList.classList.remove('show-all');
                showAllBtn.textContent = 'Show All';
            } else {
                playlistList.classList.add('show-all');
                showAllBtn.textContent = 'Show Less';
            }
        }

        showAllBtn.addEventListener('click', function (e) {
            e.preventDefault();
            togglePlaylists();
        });
    }
    displayPlaylists();
    handleShowAllButton();
});

/*Video */
document.addEventListener('DOMContentLoaded', function () {
    function createVideoItem(video) {
        const li = document.createElement('li');
        li.setAttribute('data-video', video.videoSrc);

        const videoImageDiv = document.createElement('div');
        videoImageDiv.classList.add('video-image');

        const img = document.createElement('img');
        img.src = video.imgSrc;
        img.alt = video.altText;
        img.classList.add('video-cover');
        videoImageDiv.appendChild(img);

        const playIcon = document.createElement('i');
        playIcon.classList.add('fa', 'fa-play', 'play-icon');
        videoImageDiv.appendChild(playIcon);

        const h4 = document.createElement('h4');
        h4.textContent = video.title;

        li.appendChild(videoImageDiv);
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

    function setupVideoPopup() {
        const playIcons = document.querySelectorAll('.video-image');
        const popup = document.getElementById('video-popup');
        const closeBtn = document.querySelector('.close-video');
        const videoPlayer = document.getElementById('video-player');
        const videoSource = document.getElementById('video-source');
        popup.style.display = 'none';
        playIcons.forEach(icon => {
            icon.addEventListener('click', function () {
                const li = this.closest('li');
                const videoUrl = li.getAttribute('data-video');

                popup.style.display = 'flex';
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
    function handleShowAllButton() {
        const showAllBtn = document.querySelector('#show-all-videos');
        const playlistList = document.querySelector('.videos ul');

        function togglePlaylists() {
            if (playlistList.classList.contains('show-all')) {
                playlistList.classList.remove('show-all');
                showAllBtn.textContent = 'Show All';
            } else {
                playlistList.classList.add('show-all');
                showAllBtn.textContent = 'Show Less';
            }
        }

        showAllBtn.addEventListener('click', function (e) {
            e.preventDefault();
            togglePlaylists();
        });
    }

    displayVideos();
    setupVideoPopup();
    handleShowAllButton();
});
/*Show Albums and Song in albums */
function handleShowAllButton() {
    const showAllBtn = document.querySelector('#show-all-albums');
    const songList = document.querySelector('.albums ul');

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

let activeAlbum = null;

document.querySelectorAll('.album-image').forEach(album => {
    album.addEventListener('click', function (e) {
        // Prevent clicking on the song item from closing the album
        if (e.target.classList.contains('song-item')) {
            return;
        }
        // Prevent re-clicking the same album from closing it
        if (activeAlbum === this) {
            return;
        }

        // Hide all other albums' track lists
        document.querySelectorAll('.album-image').forEach(item => {
            item.classList.remove('active');
            const trackList = item.parentElement.querySelector('.track-list');
            if (trackList) {
                trackList.style.display = 'none';
            }
        });

        // Activate the current album and show its tracks
        this.classList.add('active');
        activeAlbum = this;
        const trackList = this.parentElement.querySelector('.track-list');
        if (trackList) {
            trackList.style.display = 'block';
        }

        e.stopPropagation();
    });
});

document.querySelectorAll('.track-link').forEach(song => {
    song.addEventListener('click', function (e) {
        playSong(this.dataset.audio);
        e.stopPropagation();
    });
});
document.addEventListener('click', function (e) {
    if (activeAlbum && !e.target.closest('.album-image') && !e.target.closest('.track-list')) {
        activeAlbum.classList.remove('active');
        const trackList = activeAlbum.parentElement.querySelector('.track-list');
        if (trackList) {
            trackList.style.display = 'none';
        }
        activeAlbum = null;
    }
});
handleShowAllButton();
