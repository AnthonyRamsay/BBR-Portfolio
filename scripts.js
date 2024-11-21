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

    // Event listeners for keyboard arrows
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            showNextSlide();
        } else if (e.key === 'ArrowLeft') {
            showPreviousSlide();
        }
    });

    // Automatic slideshow every 12 seconds
    setInterval(showNextSlide, 12000);

    // Initialize the first slide
    updateSlide(currentSlide);
});
