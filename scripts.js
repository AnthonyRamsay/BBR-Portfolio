document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Function to update the active slide
    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Function to change the slide
    function changeSlide(direction) {
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        updateSlide(currentSlide);
    }

    // Add keyboard event listeners for left/right arrows
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (event.key === 'ArrowRight') {
            changeSlide(1);
        }
    });

    // Initialize the first slide
    updateSlide(currentSlide);
});
