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


// Alternar logos en el nav
function logoAlternate() {
    const logoImg = document.querySelector('.logo img');
    if (!logoImg) return;

    const logos = [
        '../media/img/logos/logo_mathlabint_light.webp',
        '../media/img/logos/logo_mathlabint_mix.webp',
        '../media/img/logos/logo_mathlabint_dark.webp'
    ];
    
    let currentLogoIndex = 1; // Empieza en mix (índice 1)

    setInterval(() => {
        // Cambiar al siguiente logo
        currentLogoIndex = (currentLogoIndex + 1) % logos.length;
        
        // Transición suave
        logoImg.style.opacity = '0';
        
        setTimeout(() => {
            logoImg.src = logos[currentLogoIndex];
            logoImg.style.opacity = '1';
        }, 300);
    }, 20000); // 20 segundos
}

// Ejecutar cuando cargue la página
document.addEventListener('DOMContentLoaded', logoAlternate);


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