document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Function to update the active slide
    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    // Function to show the next slide
    function showNextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide(currentSlide);
    }

    // Function to show the previous slide
    function showPreviousSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide(currentSlide);
    }

    // Initialize the first slide
    updateSlide(currentSlide);

    // Expose functions globally for button use
    window.showNextSlide = showNextSlide;
    window.showPreviousSlide = showPreviousSlide;
});
