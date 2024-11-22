document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Function to update slides
    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Change slide based on direction
    window.changeSlide = (direction) => {
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        updateSlide(currentSlide);
    };

    // Initialize first slide
    updateSlide(currentSlide);
});
