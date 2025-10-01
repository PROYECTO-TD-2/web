document.addEventListener('DOMContentLoaded', () => {
    console.log('¡El DOM ha sido cargado completamente! JavaScript listo para la acción.');

    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

});

function toggleSummary() {
    const content = document.getElementById('summary-content');
    const icon = document.getElementById('toggle-icon');
    
    content.classList.toggle('active');
    
    if (content.classList.contains('active')) {
        icon.textContent = '▲';
    } else {
        icon.textContent = '▼';
    }
}
