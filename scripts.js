const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Show the next slide
function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
    slides[currentSlide].classList.add('active');
}

// Show the previous slide
function showPreviousSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to the last slide
    slides[currentSlide].classList.add('active');
}

// Automatic slideshow every 12 seconds
setInterval(showNextSlide, 12000);

// Keyboard navigation for slideshow
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        showNextSlide();
    } else if (event.key === 'ArrowLeft') {
        showPreviousSlide();
    }
});
