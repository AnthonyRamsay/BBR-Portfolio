document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    let currentSlide = 0;

    // Function to update the active slide
    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Function to show the next slide
    function showNextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
        updateSlide(currentSlide);
    }

    // Function to show the previous slide
    function showPreviousSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to the last slide
        updateSlide(currentSlide);
    }

    // Event listeners for arrows
    leftArrow.addEventListener('click', showPreviousSlide);
    rightArrow.addEventListener('click', showNextSlide);

    // Event listeners for keyboard
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            showNextSlide();
        } else if (event.key === 'ArrowLeft') {
            showPreviousSlide();
        }
    });

    // Initialize the first slide
    updateSlide(currentSlide);
});
