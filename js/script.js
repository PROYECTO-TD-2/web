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

function startLogoAnimation() {
    const logoLight = document.getElementById('logo-light');
    const logoDark = document.getElementById('logo-dark');
    const logoMix = document.getElementById('logo-mix');
    
    // Reset inicial
    [logoLight, logoDark, logoMix].forEach(logo => {
        logo.classList.remove('show', 'final-show');
    });
    
    // Secuencia de animación
    setTimeout(() => {
        logoLight.classList.add('show'); // Logo izquierda aparece
    }, 500);
    
    setTimeout(() => {
        logoLight.classList.remove('show'); // Logo izquierda desaparece
        logoDark.classList.add('show');     // Logo centro aparece
    }, 3500);
    
    setTimeout(() => {
        logoDark.classList.remove('show');  // Logo centro desaparece
        logoMix.classList.add('show');      // Logo derecha aparece
    }, 6500);
    
    setTimeout(() => {
        logoMix.classList.remove('show');   // Logo derecha desaparece
        // Aparecen todos juntos con animación final
        logoLight.classList.add('final-show');
        logoDark.classList.add('final-show');
        logoMix.classList.add('final-show');
    }, 9500);
}

const microbitImages = [
    {
        src: '../media/img/complementos/microbit_1.webp',
        alt: 'Micro:bit',
    },
    {
        src: '../media/img/complementos/microbit_2.webp',
        alt: 'Micro:bit',
    },
    {
        src: '../media/img/complementos/microbit_3.webp',
        alt: 'Micro:bit',
    }
];

let microbitCurrentIndex = 0;
const microbitImgWrapper = document.getElementById('microbitImgWrapper');
const microbitGalleryImg = document.getElementById('microbitGalleryImg');
const microbitImgDescription = document.getElementById('microbitImgDescription');
const microbitClickHint = document.getElementById('microbitClickHint');
const microbitCounterDots = document.querySelectorAll('.microbit-counter-dot');

// Ocultar hint después del primer click
let microbitHasClicked = false;

microbitImgWrapper.addEventListener('click', () => {
    // Marcar como clicked
    if (!microbitHasClicked) {
        microbitHasClicked = true;
        microbitImgWrapper.classList.add('microbit-hide-hint');
    }

    // Efecto visual
    microbitImgWrapper.classList.add('microbit-changing');
    
    // Cambiar a siguiente imagen
    microbitCurrentIndex = (microbitCurrentIndex + 1) % microbitImages.length;
    
    setTimeout(() => {
        microbitGalleryImg.src = microbitImages[microbitCurrentIndex].src;
        microbitGalleryImg.alt = microbitImages[microbitCurrentIndex].alt;
        microbitImgDescription.textContent = microbitImages[microbitCurrentIndex].description;
        
        // Actualizar contador
        microbitCounterDots.forEach((dot, index) => {
            dot.classList.toggle('microbit-active', index === microbitCurrentIndex);
        });
        
        microbitImgWrapper.classList.remove('microbit-changing');
    }, 150);
});

// Ocultar hint después de 5 segundos si no hubo click
setTimeout(() => {
    if (!microbitHasClicked) {
        microbitImgWrapper.classList.add('microbit-hide-hint');
    }
}, 5000);

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new AutoCarousel();
});

// Manejar cambios de orientación en móviles
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        // Reinicializar si es necesario
        const carousel = document.querySelector('.carousel-track');
        const currentSlide = document.querySelector('.carousel-slide.active');
        if (currentSlide && carousel) {
            const slideIndex = Array.from(currentSlide.parentNode.children).indexOf(currentSlide);
            carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
        }
    }, 100);
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
