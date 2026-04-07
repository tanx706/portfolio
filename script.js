function showHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("resume").style.display = "none";
}

function showResume() {
    document.getElementById("home").style.display = "none";
    document.getElementById("resume").style.display = "block";
}

function filterProjects(category, element) {
    const cards = document.querySelectorAll('.project-card');
    const filterItems = document.querySelectorAll('.filter-item');

    // Update active state on filter buttons
    filterItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    // Filter the cards
    cards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hide');
        } else {
            // Check if the card has the matching class (env or arch)
            if (card.classList.contains(category)) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        }
    });
}