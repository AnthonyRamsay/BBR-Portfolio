document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    const updateSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

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

    const changeSlide = (direction) => {
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        updateSlide(currentIndex);
    };

    updateSlide(currentIndex); // Initialize the first slide
});
