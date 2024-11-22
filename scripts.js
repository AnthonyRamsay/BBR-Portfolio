let images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("main-image").src = images[currentIndex];
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("main-image").src = images[currentIndex];
}
