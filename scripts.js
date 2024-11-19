function filterProjects(category) {
    const sections = document.querySelectorAll('.work-section');
    const buttons = document.querySelectorAll('.filter-menu button');

    // Update button styles
    buttons.forEach(button => {
        if (button.textContent.toLowerCase().includes(category) || category === 'all') {
            button.classList.add('active');
            button.classList.remove('inactive');
        } else {
            button.classList.remove('active');
            button.classList.add('inactive');
        }
    });

    // Show or hide sections
    sections.forEach(section => {
        if (section.classList.contains(category) || category === 'all') {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// Default to showing all
filterProjects('all');
