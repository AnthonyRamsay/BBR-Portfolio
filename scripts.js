function filterProjects(category) {
    const sections = document.querySelectorAll('.work-section');
    const buttons = document.querySelectorAll('.filter-menu button');
    
    buttons.forEach(button => {
        if (button.textContent.toLowerCase().includes(category) || category === 'all') {
            button.classList.add('active');
            button.classList.remove('inactive');
        } else {
            button.classList.remove('active');
            button.classList.add('inactive');
        }
    });

    sections.forEach(section => {
        if (section.classList.contains(category) || category === 'all') {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Default to showing all
filterProjects('all');
