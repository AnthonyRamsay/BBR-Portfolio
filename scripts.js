let currentImageIndex = 0;
const images = document.querySelectorAll(".carousel-image");

function showImage(index) {
    images.forEach((img, i) => {
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
    
    // Highlight active category
    buttons.forEach(button => {
        button.classList.toggle('active', button.textContent.toLowerCase().includes(category));
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
