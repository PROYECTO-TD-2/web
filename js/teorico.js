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