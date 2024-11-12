let currentImageIndex = 0;
const images = document.querySelectorAll(".carousel-image");

function showImage(index) {
    images.forEach((img, i) => {
        img.style.opacity = i === index ? "1" : "0";
        img.style.display = i === index ? "block" : "none";
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Initial display
showImage(currentImageIndex);

function filterProjects(category) {
    const items = document.querySelectorAll('.work-item');
    const buttons = document.querySelectorAll('.filter-menu button');
    
    // Highlight the active category button
    buttons.forEach(button => {
        if (button.textContent.toLowerCase().includes(category)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Filter projects
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
