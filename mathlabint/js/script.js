// Add JS heredocument.addEventListener('DOMContentLoaded', () => {
    console.log('¡El DOM ha sido cargado completamente! JavaScript listo para la acción.');

    // --- 1. Lógica del Menú Hamburguesa ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    
    if (mobileMenu && navList) { // Asegurarse de que los elementos existan
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active'); // Muestra/oculta el menú
            mobileMenu.classList.toggle('active'); // Anima el ícono de hamburguesa a cruz
        });
    }