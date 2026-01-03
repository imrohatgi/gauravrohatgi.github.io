// Side Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sideNav = document.getElementById('sideNav');
    const overlay = document.getElementById('sideNavOverlay');
    
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        sideNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = sideNav.classList.contains('active') ? 'hidden' : '';
    }
    
    // Toggle menu on hamburger click
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu on overlay click
    overlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (sideNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideNav.classList.contains('active')) {
            toggleMenu();
        }
    });
});
