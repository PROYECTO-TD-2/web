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

class AutoCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.slides = document.querySelectorAll('.carousel-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.progressBar = document.querySelector('.progress-bar');
        this.container = document.querySelector('.carousel-container');
        
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.isAnimating = false;
        this.autoPlayInterval = null;
        
        this.init();
    }

    init() {
        // Configurar eventos de indicadores
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                if (!this.isAnimating) {
                    this.goToSlide(index);
                }
            });
        });

        // Pausar en hover (solo en desktop)
        if (window.innerWidth > 1024) {
            this.container.addEventListener('mouseenter', () => this.pause());
            this.container.addEventListener('mouseleave', () => this.play());
        }

        // Pausar en touch (móvil)
        this.container.addEventListener('touchstart', () => this.pause());
        this.container.addEventListener('touchend', () => {
            setTimeout(() => this.play(), 2000);
        });

        // Iniciar autoplay
        this.play();
    }

    goToSlide(slideIndex) {
        if (this.isAnimating || slideIndex === this.currentSlide) return;
        
        this.isAnimating = true;
        
        // Remover clases activas
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');
        
        // Actualizar slide actual
        this.currentSlide = slideIndex;
        
        // Calcular transformación
        const translateX = -this.currentSlide * 100;
        this.track.style.transform = `translateX(${translateX}%)`;
        
        // Activar nuevo slide
        setTimeout(() => {
            this.slides[this.currentSlide].classList.add('active');
            this.indicators[this.currentSlide].classList.add('active');
            
            // Aplicar animación especial a algunos slides
            if (this.currentSlide % 2 === 1) {
                this.slides[this.currentSlide].classList.add('fade-in');
                setTimeout(() => {
                    this.slides[this.currentSlide].classList.remove('fade-in');
                }, 800);
            }
            
            this.isAnimating = false;
        }, 100);
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    play() {
        this.pause(); // Limpiar interval existente
        
        // Reiniciar animación de la barra de progreso
        this.progressBar.style.animation = 'none';
        this.progressBar.offsetHeight; // Forzar reflow
        this.progressBar.style.animation = 'progress 3s linear infinite';
        
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 3000);
    }

    pause() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
        this.progressBar.style.animationPlayState = 'paused';
    }
}

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

// Base de datos de ejemplo con múltiples archivos por avance
        const avancesData = {
            'avance1': {
                date: '8 de agosto del 2025',
                title: 'Definición inicial del proyecto y creación de MATHLABINT',
                description: 'Habemus equipo conformado por <strong>Ismael</strong>, <strong>Fabio</strong>, <strong>Thomas</strong> y <strong>Riccardo</strong>.<br> Se trabajó en la definición inicial del proyecto; se discutieron las ideas generales sobre el hardware y el software a utilizar, así como las problemáticas que se podrían abordar. También se contextualizó el ámbito en el cual se aplicará la propuesta y se delinearon los primeros módulos y la lógica de funcionamiento, incluyendo un ejemplo de función matemática básica.<br>Se planteó además la intención de integrar inteligencia artificial en etapas futuras. En esta sesión no se inició el desarrollo práctico todavía, ya que estuvo centrada en la planificación conceptual.',
                files: [
                    { type: 'image', src: '../media/img/logos/logo_mathlabint_light.webp', },
                ]
            },
            'avance2': {
                date: '12 de agosto del 2025',
                title: 'Reunión de coordinación y planificación inicial en línea',
                description: 'Entre las 19:00 y las 20:00, <strong>Fabio</strong>, <strong>Thomas</strong> y <strong>Riccardo</strong> mantuvieron una reunión virtual por Meet. En esta instancia se enfocaron en la coordinación general del proyecto y en cómo llevar las ideas iniciales a un esquema concreto para su implementación. <br> Se discutió la posibilidad de incorporar ESP32 como alternativa tecnológica junto a la base de datos y los componentes iniciales necesarios para el arranque; se creó un repositorio en GitHub, organizado con una estructura base que incluye un espacio general y otro dedicado a la página web. <br> En relación con la integración de inteligencia artificial, se planteó trabajar con un conjunto universo de datos para poder contextualizar el nivel y la complejidad de los ejercicios matemáticos. Para ello, se elaboró un maquetado inicial de un ejercicio de ejemplo, definiendo los datos mínimos, el contexto y la complejidad.',
                files: [
                    { type: 'image', src: '../media/img/avances/2025-08-12_capturadepantalla1.jpg' },
                    { type: 'image', src: '../media/img/avances/2025-08-12_capturadepantalla2.png' },
                    { type: 'image', src: '../media/img/avances/2025-08-12_capturadepantalla3.jpg' },
                ]
            },
            'avance3': {
                date: '15 de agosto del 2025',
                title: 'Redefinición del modelo físico y planificación inicial',
                description: 'Entre todo el equipo actual por <strong>Ismael</strong>, <strong>Fabio</strong>, <strong>Thomas</strong> y <strong>Riccardo</strong>, nos enfocamos en redefinir el esquema del modelo físico del proyecto. Se decidió comenzar con una estructura más acotada, compuesta por Cliente (interfaz con microbit profesor), Microbit estudiante, Servidor con base de datos y Nube con integración de IA. <br> A partir de este modelo, se dividió el prototipado en pasos concretos: 1) Vincular placas (profesor y estudiante). 2) Completar formulario (lista inicial de sensores, contexto y nivel educativo; se resolvió que en esta primera fase se usará solo un sensor para simplificar). 3) Enviar los datos desde el microbit profesor al estudiante. 4) Monitorear la información enviada. 5) Permitir que el microbit estudiante devuelva datos al microbit profesor. <br> Para organizar las tareas se creó un tablero en Trello, donde se distribuyeron las primeras responsabilidades y se estableció la dinámica de trabajo colaborativo.',
                files: [
                    { type: 'image', src: '../media/img/avances/2025-08-15_20.24.58.jpg' },
                    { type: 'image', src: '../media/img/avances/2025-08-15_20.24.59.jpg' },
                    { type: 'image', src: '../media/img/avances/2025-08-15_20.25.00.jpg' },
                    { type: 'image', src: '../media/img/avances/2025-08-15_20.25.01.jpg' },
                    { type: 'image', src: '../media/img/avances/2025-08-15_20.25.02.jpg' },
                    { type: 'image', src: '../media/img/avances/2025-08-15_capturadepantallatardia.png' },
                ]
            },
            'avance4': {
                date: '22 de agosto de 2025',
                title: 'Integración API y primeras pruebas',
                description: 'En esta jornada se sumó Marcio Larrañaga al equipo, comenzando con tareas de documentación. Durante la reunión, el grupo debatió sobre cómo gestionar los prompts en la API y si era conveniente guardar interacciones previas, dado que las respuestas obtenidas resultaban genéricas. Para mejorar, se incorporó la región de Uruguay como parámetro y se evaluó el uso de recursos como Uruguay Educa y ANEP a futuro. <br> <strong>Riccardo</strong> consiguió que la API funcionara y realizara consultas, aunque persisten los desafíos de personalización en las respuestas. <strong>Thomas</strong> trabajó en la página web, logrando traducciones, modificaciones en la interfaz y correcciones menores, aunque algunas traducciones no aplicaron correctamente. <strong>Fabio</strong> inició las primeras pruebas de comunicación entre dos micro:bits: el dispositivo “profesor” envía datos al “alumno” sobre sensores, contexto y nivel, aunque la inexperiencia en la conexión demoró el proceso. <strong>Marcio</strong> registró estos avances en la bitácora, con la tarea pendiente de documentar hechos anteriores en los que no participó.',
                files: [
                    { type: 'image', src: '../media/img/avances/2025-08-22_19.39.19.jpg' },
                    { type: 'video', src: '../media/vid/avances/2025-08-22_20.56.21.mp4' },
                ]
            },
            'avance5': {
                date: '29 de agosto del 2025',
                title: 'Comunicación estable entre Micro:bits y refactorización',
                description: 'En esta sesión, el grupo logró confirmar que los Micro:bits se comunican adecuadamente entre sí. Se procedió a refactorizar el código en ambas placas y el cliente, y se solucionó un problema de lectura. Sin embargo, se identificó que las mediciones de temperatura se repetían con frecuencia (por ejemplo, 28° varias veces seguidas), lo que abrió la discusión sobre permitir que el usuario controle la cantidad y el momento de las lecturas a través de los botones del dispositivo. Entre los desafíos técnicos, al compilar el código no se lograba cambiar la respuesta al microbit receptor; con la ayuda del profesor se sugirió probar en otro equipo. Además, se comprobó que la señal se debilitaba notablemente al aumentar la distancia entre los dispositivos. <br> <strong>Thomas</strong> trabajó en la página web y resolvió un problema con la inserción de imágenes. <strong>Fabio</strong> y <strong>Riccardo</strong> probaron el flujo completo de las tareas implementadas la semana anterior. <strong>Marcio</strong> se encargó de resumir bitácoras previas y ajustar su formato. <strong>Ismael</strong> realizó documentación audiovisual de las pruebas de Fabio y Riccardo, además de investigar cómo apoyar en programación y testear los micro:bits en distintos escenarios de temperatura.',
                files: [
                    { type: 'image', src: '../media/img/avances/2025-08-29_18.47.12.jpg' },
                    { type: 'image', src: '../media/img/avances/2025-08-29_18.47.27.jpg' },
                    { type: 'image', src: '../media/img/avances/2025-08-29_18.48.48.jpg' },
                    { type: 'image', src: '../media/img/avances/2025-08-29_18.49.03.jpg' },
                    { type: 'video', src: '../media/vid/avances/2025-08-29_19.12.48.mp4' },
                    { type: 'image', src: '../media/img/avances/2025-08-29_19.29.06.jpg' },
                    { type: 'image', src: '../media/img/avances/2025-08-29_20.00.21.jpg' },
                    { type: 'image', src: '../media/img/avances/2025-08-29_20.02.45.jpg' },
                ]
            }
        };

        let currentSlide = 0;
        let currentAvance = null;

        function openModal(avanceId) {
            currentAvance = avancesData[avanceId];
            currentSlide = 0;
            
            if (!currentAvance) return;
            
            const modal = document.getElementById('modal');
            const modalInfo = document.getElementById('modalInfo');
            
            // Configurar información del avance
            modalInfo.innerHTML = `
                <div class="media-date">${currentAvance.date}</div>
                <div class="media-title">${currentAvance.title}</div>
                <div class="media-text">${currentAvance.description}</div>
            `;
            
            // Generar slides
            generateSlides();
            
            // Generar dots
            generateDots();
            
            // Actualizar navegación
            updateNavigation();
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function generateSlides() {
            const slidesContainer = document.getElementById('gallerySlides');
            slidesContainer.innerHTML = '';
            
            currentAvance.files.forEach((file, index) => {
                const slide = document.createElement('div');
                slide.className = 'gallery-slide';
                
                if (file.type === 'video') {
                    slide.innerHTML = `
                        <video controls poster="">
                            <source src="${file.src}" type="video/mp4">
                        </video>
                    `;
                } else {
                    slide.innerHTML = `<img src="${file.src}" loading="lazy">`;
                }
                
                slidesContainer.appendChild(slide);
            });
            
            updateSlidePosition();
        }

        function generateDots() {
            const dotsContainer = document.getElementById('galleryDots');
            dotsContainer.innerHTML = '';
            
            currentAvance.files.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
                dot.onclick = () => goToSlide(index);
                dotsContainer.appendChild(dot);
            });
        }

        function updateSlidePosition() {
            const slidesContainer = document.getElementById('gallerySlides');
            const offset = -currentSlide * 100;
            slidesContainer.style.transform = `translateX(${offset}%)`;
        }

        function updateNavigation() {
            const counter = document.getElementById('modalCounter');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const dots = document.querySelectorAll('.gallery-dot');
            
            // Actualizar contador
            counter.textContent = `${currentSlide + 1} / ${currentAvance.files.length}`;
            
            // Actualizar botones
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === currentAvance.files.length - 1;
            
            // Actualizar dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
            
            // Mostrar descripción del archivo actual
            updateFileInfo();
        }

        function updateFileInfo() {
            const currentFile = currentAvance.files[currentSlide];
            const modalInfo = document.getElementById('modalInfo');
            
            modalInfo.innerHTML = `
                <div class="media-date">${currentAvance.date}</div>
                <div class="media-title">${currentAvance.title}</div>
                <div class="media-text">${currentAvance.description}</div>
            `;
        }

        function changeSlide(direction) {
            const newSlide = currentSlide + direction;
            
            if (newSlide >= 0 && newSlide < currentAvance.files.length) {
                // Pausar videos antes de cambiar
                pauseCurrentVideo();
                
                currentSlide = newSlide;
                updateSlidePosition();
                updateNavigation();
            }
        }

        function goToSlide(index) {
            if (index >= 0 && index < currentAvance.files.length) {
                pauseCurrentVideo();
                currentSlide = index;
                updateSlidePosition();
                updateNavigation();
            }
        }

        function pauseCurrentVideo() {
            const currentSlideElement = document.querySelector('.gallery-slide:nth-child(' + (currentSlide + 1) + ')');
            const video = currentSlideElement?.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        }

        function closeModal(event) {
            // Si se hace click en el contenido del modal, no cerrar
            if (event && event.target.closest('.modal-content') && !event.target.classList.contains('modal-close')) {
                return;
            }
            
            const modal = document.getElementById('modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Pausar todos los videos
            const videos = modal.querySelectorAll('video');
            videos.forEach(video => {
                video.pause();
                video.currentTime = 0;
            });
        }
        
        // Navegación con teclado
        document.addEventListener('keydown', function(e) {
            if (!document.getElementById('modal').classList.contains('active')) return;
            
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    changeSlide(-1);
                    break;
                case 'ArrowRight':
                    changeSlide(1);
                    break;
            }
        });
        
        // Función para agregar nuevos avances (para uso futuro)
        function addAvance(id, data) {
            avancesData[id] = data;
        }