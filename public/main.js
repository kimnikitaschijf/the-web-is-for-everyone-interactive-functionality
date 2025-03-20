function toggleMenu() {
    const menu = document.getElementById('nav-links');
    const content = document.getElementById('content');

    if (menu.classList.contains('active')) {
        menu.style.maxHeight = "0px";
        setTimeout(() => {
            menu.classList.remove('active');
        }, 500); // Zorgt ervoor dat de class pas na de animatie wordt verwijderd
    } else {
        menu.classList.add('active');
        setTimeout(() => {
            menu.style.maxHeight = "300px"; // Pas aan afhankelijk van de menu-grootte
        }, 10);
    }

    content.classList.toggle('shifted');
}
