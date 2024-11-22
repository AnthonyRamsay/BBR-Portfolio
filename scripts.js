document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
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
    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to the last slide
        updateSlide(currentSlide);
    }

    // Attach click events to the arrows
    document.querySelector('.arrow.left').addEventListener('click', showPrevSlide);
    document.querySelector('.arrow.right').addEventListener('click', showNextSlide);

    // Initialize the first slide
    updateSlide(currentSlide);
});
