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

        // Base de datos de ejemplo con múltiples archivos por avance
        const avancesData = {
            /*
            'avance1': {
                date: '15 Agosto 2025',
                title: 'Primer prototipo funcional',
                description: 'Logramos implementar la funcionalidad básica del sistema. Todo funciona según lo esperado.',
                files: [
                    { type: 'image', src: 'https://picsum.photos/800/600?random=1', caption: 'Vista general del prototipo' },
                    { type: 'image', src: 'https://picsum.photos/800/600?random=11', caption: 'Detalle de la interfaz principal' },
                    { type: 'video', src: 'https://sample-videos.com/zip/10/mp4/360/SampleVideo_360x240_1mb.mp4', caption: 'Demostración del flujo básico' }
                ]
            },
            'avance2': {
                date: '18 Agosto 2025',
                title: 'Demo de funcionalidades',
                description: 'Video mostrando las principales características implementadas.',
                files: [
                    { type: 'video', src: 'https://sample-videos.com/zip/10/mp4/360/SampleVideo_360x240_1mb.mp4', caption: 'Demo completa del sistema' },
                    { type: 'image', src: 'https://picsum.photos/800/600?random=2', caption: 'Captura de la nueva funcionalidad' },
                    { type: 'image', src: 'https://picsum.photos/800/600?random=21', caption: 'Comparación antes/después' },
                    { type: 'image', src: 'https://picsum.photos/800/600?random=22', caption: 'Métricas de rendimiento' }
                ]
            },
            'avance3': {
                date: '22 Agosto 2025',
                title: 'Interfaz mejorada',
                description: 'Nuevos elementos visuales que mejoran la experiencia del usuario.',
                files: [
                    { type: 'image', src: 'https://picsum.photos/800/600?random=3', caption: 'Nueva interfaz de usuario' },
                    { type: 'image', src: 'https://picsum.photos/800/600?random=31', caption: 'Paleta de colores actualizada' },
                    { type: 'image', src: 'https://picsum.photos/800/600?random=32', caption: 'Componentes rediseñados' },
                    { type: 'image', src: 'https://picsum.photos/800/600?random=33', caption: 'Vista móvil optimizada' },
                    { type: 'video', src: 'https://sample-videos.com/zip/10/mp4/360/SampleVideo_360x240_1mb.mp4', caption: 'Tour por la nueva interfaz' }
                ]
            },*/
            'avance4': {
                date: '29 de agosto del 2025',
                title: 'Integración API',
                description: 'Se pudo solventar el problema de la lectura MicroBit; se evalúan otros lapsos de evaluación de temperatura ya que toma muchas veces la misma. <br> Desafíos: Se compiló el código pero no cambió la respuesta al microbit anterior. Se revisa con el profesor; sugiere probar en otro equipo. <br> Se encuentra un problema: Micro:Bit no lee a mucha distancia; al alejarse a la otra punta del salón, la señal se debilita considerablemente.',
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
                    slide.innerHTML = `<img src="${file.src}" alt="${file.caption}">`;
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
                <hr style="margin: 1rem 0; border: none; border-top: 1px solid rgba(255,255,255,0.3);">
                <div style="font-style: italic; color: var(--amarillo-led);">${currentFile.caption}</div>
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