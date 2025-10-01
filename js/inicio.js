document.addEventListener('DOMContentLoaded', () => {

    console.log('¡El DOM ha sido cargado completamente! JavaScript listo para la acción.');

    startLogoAnimation();

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

let simpleCurrentSlide = 0;
const simpleSlides = document.querySelectorAll('.simple-carousel-slide');
const simpleCarousel = document.getElementById('simpleCarouselSlides');
const simpleProgressBar = document.getElementById('simpleProgressBar');
const simpleTotalSlides = simpleSlides.length;
const simpleSlideInterval = 5000; // 5 segundos

function simpleGoToSlide(n) {
    simpleCurrentSlide = n % simpleTotalSlides;
    
    // Mover carrusel
    simpleCarousel.style.transform = `translateX(-${simpleCurrentSlide * 100}%)`;
    
    // Resetear y activar barra de progreso
    simpleProgressBar.classList.remove('simple-active');
    void simpleProgressBar.offsetWidth; // Force reflow
    simpleProgressBar.classList.add('simple-active');
}

function simpleNextSlide() {
    simpleGoToSlide(simpleCurrentSlide + 1);
}

// Iniciar con la primera slide
simpleGoToSlide(0);

// Cambiar slide cada 2 segundos
setInterval(simpleNextSlide, simpleSlideInterval);