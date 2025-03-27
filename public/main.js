function toggleMenu() {
    const menu = document.getElementById('nav-links');
    const content = document.getElementById('content');

    // Toggle de actieve status van het menu
    menu.classList.toggle('active');
    
    // Toggle de verschuiving van de content
    content.classList.toggle('shifted');
}
