document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
});

document.getElementById('mobile-menu-close').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('active');
});
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentIndex = 0;
    let interval;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    function updateDots() {
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function createDots() {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('carousel-dot');
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        });
        updateDots();
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    function startAutoSlide() {
        interval = setInterval(() => {
            nextButton.click();
        }, 5000); // 5 seconds
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    createDots();
    startAutoSlide();

    // Optional: Pause the automatic sliding when the user hovers over the carousel
    document.querySelector('.music-carousel').addEventListener('mouseover', stopAutoSlide);
    document.querySelector('.music-carousel').addEventListener('mouseout', startAutoSlide);
});
