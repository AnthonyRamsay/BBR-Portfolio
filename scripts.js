document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    const updateSlide = (index) => {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                slide.classList.add('fade-in');
            } else {
                slide.classList.remove('active');
                slide.classList.remove('fade-in');
            }
        });
    };

    const changeSlide = (direction) => {
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        updateSlide(currentIndex);
    };

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') changeSlide(-1);
        if (e.key === 'ArrowRight') changeSlide(1);
    });

    // Swipe functionality
    let startX = 0;
    let endX = 0;

    const slideshow = document.querySelector('.slideshow');
    slideshow.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slideshow.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;

        if (startX > endX + 50) {
            // Swipe left
            changeSlide(1);
        } else if (startX < endX - 50) {
            // Swipe right
            changeSlide(-1);
        }
    });

    // Mobile nav toggle
    const toggleNav = () => {
        document.querySelector('.nav-links').classList.toggle('nav-open');
    };
    window.toggleNav = toggleNav;

    updateSlide(currentIndex); // Initialize the first slide
});
