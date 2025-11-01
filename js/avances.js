// ========== SISTEMA DE AVANCES ==========

const avancesData = {
    "Agosto 2025": [
        {
            date: "8 de agosto",
            preview: "../media/img/logos/logo_mathlabint_mix.webp",
            description: "Definición inicial del proyecto y creación de MATHLABINT",
            media: [
                {
                    type: "image",
                    src: "../media/img/logos/logo_mathlabint_mix.webp",
                    caption: "Habemus equipo conformado por <strong>Ismael</strong>, <strong>Fabio</strong>, <strong>Thomas</strong> y <strong>Riccardo</strong>.<br> Se trabajó en la definición inicial del proyecto; se discutieron las ideas generales sobre el hardware y el software a utilizar, así como las problemáticas que se podrían abordar. También se contextualizó el ámbito en el cual se aplicará la propuesta y se delinearon los primeros módulos y la lógica de funcionamiento, incluyendo un ejemplo de función matemática básica.<br>Se planteó además la intención de integrar inteligencia artificial en etapas futuras. En esta sesión no se inició el desarrollo práctico todavía, ya que estuvo centrada en la planificación conceptual."
                }
            ]
        },
        {
            date: "12 de agosto",
            preview: "../media/img/avances/2025-08-12_capturadepantalla1.jpg",
            description: "Reunión de coordinación y planificación inicial en línea",
            media: [
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-12_capturadepantalla1.jpg",
                    caption: "Entre las 19:00 y las 20:00, <strong>Fabio</strong>, <strong>Thomas</strong> y <strong>Riccardo</strong> mantuvieron una reunión virtual por Meet. En esta instancia se enfocaron en la coordinación general del proyecto y en cómo llevar las ideas iniciales a un esquema concreto para su implementación."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-12_capturadepantalla2.png",
                    caption: "Se discutió la posibilidad de incorporar ESP32 como alternativa tecnológica junto a la base de datos y los componentes iniciales necesarios para el arranque; se creó un repositorio en GitHub, organizado con una estructura base que incluye un espacio general y otro dedicado a la página web."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-12_capturadepantalla3.jpg",
                    caption: "En relación con la integración de inteligencia artificial, se planteó trabajar con un conjunto universo de datos para poder contextualizar el nivel y la complejidad de los ejercicios matemáticos. Para ello, se elaboró un maquetado inicial de un ejercicio de ejemplo, definiendo los datos mínimos, el contexto y la complejidad."
                }
            ]
        },
        {
            date: "15 de agosto",
            preview: "../media/img/avances/2025-08-15_20.24.58.jpg",
            description: "Redefinición del modelo físico y planificación inicial",
            media: [
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-15_20.24.58.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-15_20.24.59.jpg",
                    caption: "Entre todo el equipo actual por <strong>Ismael</strong>, <strong>Fabio</strong>, <strong>Thomas</strong> y <strong>Riccardo</strong>, nos enfocamos en redefinir el esquema del modelo físico del proyecto."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-15_20.25.00.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-15_20.25.01.jpg",
                    caption: "Se decidió comenzar con una estructura más acotada, compuesta por:<ul><li>Cliente (interfaz con microbit profesor).</li><li>Microbit estudiante.</li><li>Servidor con base de datos.</li><li>Nube con integración de IA.</li></ul> A partir de este modelo, se dividió el prototipado en pasos concretos:<ol><li>Vincular placas (profesor y estudiante).</li><li>Completar formulario (lista inicial de sensores, contexto y nivel educativo; se resolvió que en esta primera fase se usará solo un sensor para simplificar).</li><li>Enviar los datos desde el microbit profesor al estudiante.</li><li>Monitorear la información enviada.</li><li>Permitir que el microbit estudiante devuelva datos al microbit profesor.</li></ol>"
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-15_20.25.02.jpg",
                    caption: ""
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-15_capturadepantallatardia.png",
                    caption: " Para organizar las tareas se creó un tablero en Trello, donde se distribuyeron las primeras responsabilidades y se estableció la dinámica de trabajo colaborativo."
                }
            ]
        },
        {
            date: "22 de agosto",
            preview: "../media/img/avances/2025-08-22_19.39.19.jpg",
            description: "Integración API + Primeras pruebas",
            media: [
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-22_19.39.19.jpg",
                    caption: " En esta jornada se sumó Marcio Larrañaga al equipo, comenzando con tareas de documentación. Durante la reunión, el grupo debatió sobre cómo gestionar los prompts en la API y si era conveniente guardar interacciones previas, dado que las respuestas obtenidas resultaban genéricas. Para mejorar, se incorporó la región de Uruguay como parámetro y se evaluó el uso de recursos como Uruguay Educa y ANEP a futuro."
                },
                {
                    type: "video",
                    src: "../media/vid/avances/2025-08-22_20.56.21.mp4",
                    caption: "<strong>Riccardo</strong> consiguió que la API funcionara y realizara consultas, aunque persisten los desafíos de personalización en las respuestas.<br><strong>Thomas</strong> trabajó en la página web, logrando traducciones, modificaciones en la interfaz y correcciones menores, aunque algunas traducciones no aplicaron correctamente.<br><strong>Fabio</strong> inició las primeras pruebas de comunicación entre dos micro:bits: el dispositivo “profesor” envía datos al “alumno” sobre sensores, contexto y nivel, aunque la inexperiencia en la conexión demoró el proceso.<br><strong>Marcio</strong> registró estos avances en la bitácora, con la tarea pendiente de documentar hechos anteriores en los que no participó."
                }
            ]
        },
        {
            date: "29 de agosto",
            preview: "../media/img/avances/2025-08-29_18.47.12.jpg",
            description: "Comunicación estable entre Micro:bits y refactorización",
            media: [
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-29_18.47.12.jpg",
                    caption: "Se confirmaron las comunicaciones entre micro:bits y se refactorizó el código de las placas y el cliente."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-29_18.47.27.jpg",
                    caption: "Se detectaron desafíos con la señal, la longitud de los mensajes y la lectura repetida de valores."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-29_18.48.48.jpg",
                    caption: "El equipo avanzó también en la documentación, ajustes de la página y registro audiovisual de las pruebas."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-29_18.49.03.jpg",
                    caption: "En esta sesión, el grupo logró confirmar que los Micro:bits se comunican adecuadamente entre sí. Se procedió a refactorizar el código en ambas placas y el cliente, y se solucionó un problema de lectura."
                },
                {
                    type: "video",
                    src: "../media/vid/avances/2025-08-29_19.12.48.mp4",
                    caption: "Sin embargo, se identificó que las mediciones de temperatura se repetían con frecuencia (por ejemplo, 28° varias veces seguidas), lo que abrió la discusión sobre permitir que el usuario controle la cantidad y el momento de las lecturas a través de los botones del dispositivo."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-29_19.29.06.jpg",
                    caption: "Entre los desafíos técnicos, al compilar el código no se lograba cambiar la respuesta al microbit receptor; con la ayuda del profesor se sugirió probar en otro equipo. Además, se comprobó que la señal se debilitaba notablemente al aumentar la distancia entre los dispositivos."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-29_20.00.21.jpg",
                    caption: "<strong>Thomas</strong> trabajó en la página web y resolvió un problema con la inserción de imágenes. <strong>Fabio</strong> y <strong>Riccardo</strong> probaron el flujo completo de las tareas implementadas la semana anterior."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-08-29_20.02.45.jpg",
                    caption: "<strong>Marcio</strong> se encargó de resumir bitácoras previas y ajustar su formato. <strong>Ismael</strong> realizó documentación audiovisual de las pruebas de Fabio y Riccardo, además de investigar cómo apoyar en programación y testear los micro:bits en distintos escenarios de temperatura."
                }
            ]
        }
    ],
    "Septiembre 2025": [
        {
            date: "5 de septiembre",
            preview: "../media/img/avances/2025-09-05_19.54.00.jpg",
            description: "Avances en IA y Micro:Bits para ejercicios educativos",
            media: [
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-05_19.54.00.jpg",
                    caption: "Encontramos un problema: el servidor no encontraba la clave de la API de IA porque faltaba una variable de entorno. Al declarar correctamente la variable, el sistema funcionó sin problemas, permitiendo que la IA procese datos de sensores. Este fix fue clave para avanzar con las pruebas de ejercicios."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-05_20.30.00.jpg",
                    caption: "Logramos que la IA genere ejercicios matemáticos a partir de datos de sensores (ejemplo: temperaturas de 30°C, 32°C, 34°C). El resultado fue un JSON con preguntas como: <ul><li>¿Cuánto es la suma de los valores? (Opciones: 96°C, 90°C, 100°C; Respuesta: 96°C)</li><li>¿Cuál es la temperatura media? (Opciones: 32°C, 34°C, 30°C; Respuesta: 32°C)</li><li>¿Diferencia entre máxima y mínima? (Opciones: 0°C, 2°C, 5°C; Respuesta: 0°C)</li></ul><br>Esto demuestra que el sistema puede tomar medidas reales y convertirlas en ejercicios educativos."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-05_20.32.00.jpg",
                    caption: "Próximos pasos: usar más sensores (movimiento, distancia) y ejercicios inspirados en libros de texto uruguayos, o bien fuentes uruguayas."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-05_20.32.03.jpg",
                    caption: "Propuesta para el rediseño de la web demostrativa del proyecto: se rediseñará https://mathlabint.netlify.app/ para que sea más claro y accesible:<ul><li>Inicio: Qué es MathLabInt, objetivos puntuales, galería de imágenes.</li><li>Teórico: Detalles de hardware (Micro:Bits), software (IA), disciplinas (mates, ciencias).</li><li>Avances: Documentación accesible por mes y día, desafíos dados.</li><li>Práctico (desplegable): Estado actual, códigos fuentes.</li><li>Epílogo: Equipo de desarrollo, qué fuimos/vamos aprendiendo de todo esto, reflexión del equipo, profiles cards y cierre.</li>"
                }
            ]
        },
        {
            date: "12 de septiembre",
            preview: "../media/img/avances/2025-09-12_capturadepantalla.png",
            description: "Entre Trello, los sensores y la filosofía",
            media: [
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-12_capturadepantalla.png",
                    caption: "El equipo, compuesto por Fabio, Ismael y Riccardo, se reunió a pesar de la ausencia de dos miembros. Se usó Trello para asignar tareas y priorizar objetivos. Esta planificación fue clave para avanzar en las pruebas de sensores."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-12_19.59.00.png",
                    caption: "Confirmamos que la integración de la API de inteligencia artificial funciona correctamente tras el fix de la variable de entorno (avance previo). Ahora, el sistema está listo para procesar datos de los Micro:Bits. Comenzamos a conectar los Micro:Bits al servidor, asegurando que los datos de los sensores se transmitan sin errores para generar ejercicios matemáticos contextuales."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-12_19.59.01.png",
                    caption: "Probamos los sensores del Micro:Bit para explorar su potencial en ejercicios educativos: <ul><li>Acelerómetro: Detecta movimiento e inclinación, ideal para ejercicios de física.</li><li>Sensor de temperatura: Mide temperatura ambiental, útil para mates contextuales.</li><li>Sensor de luz: Captura intensidad lumínica, aplicable a contextos físicos o científicos.</li><li>Brújula: Indica dirección, perfecta para geometría o física básica.</li><li>Micrófono: Registra sonido, potencial para proyectos de análisis acústico.</li></ul> Estas pruebas confirman que los sensores pueden generar datos variados para ejercicios innovadores."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-12_19.59.02.png",
                    caption: "<strong>Desafío:</strong> Lograr una comunicación óptima entre los dos Micro:Bits (estudiante y docente) para que los datos fluyan sin retrasos.<br><strong>Logro:</strong> Fabio avanzó en la generación de ejercicios matemáticos usando IA, integrando datos de sensores en preguntas contextuales.<br>Según Riccardo, “la vida es como el Micro:Bit: a veces percibes el sonido, a veces la luz, a veces nada”."
                }
            ]
        },
        {
            date: "19 de septiembre",
            preview: "../media/img/avances/2025-09-19_capturadepantalla.png",
            description: "La web docente y el método científico",
            media: [
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-19_capturadepantalla.png",
                    caption: "La meta es trabajar en la web profesor para mostrar de forma más eficiente la información. Además de esto, se busca trabajar en la respuesta de la API para asegurarse de la efectividad.<br>19:16 se logra crear un ejercicio como tal con un buen interfaz. Profesor propone la idea de agregar múltiple opción seleccionable a futuro, donde se puede marcar la respuesta antes de mostrar el resultado."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-19_19.38.00.jpg",
                    caption: "Se trabaja en calibrar el sensor de luz usando un lector en el celular de Riccino y el sensor del Micro:Bit, para poder calcular el valor de conversión."
                }
            ]
        },
        {
            date: "26 de septiembre",
            preview: "../media/img/avances/2025-09-26_19.28.00.jpg",
            description: "Cuando el sistema entre en el clavo",
            media: [
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-26_19.28.00.jpg",
                    caption: "<strong>Introducción:</strong> Se realiza verificación del flujo de trabajo usando el sensor de temperatura del Micro:Bit. Desde la medición de datos ambientales (ej: 25°C en el aula) hacia la generación de ejercicios matemáticos por IA, logramos un proceso continuo: el Micro:Bit del estudiante captura datos, los envía al sistema, y la IA crea preguntas como “¿Cuál es la suma de las temperaturas medidas?”."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-26_19.34.00.jpg",
                    caption: "En esta interfaz es donde el profesor, como primer paso, deberá vincular la placa microbit “profesor”, con el sistema.<br>Al presionar el botón “conectar microbit” se abrirá una ventana indicando la placa microbit conectada en el puerto usb (COM4). Luego de finalizar el proceso, la placa quedará vinculada con el sistema."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-26_19.39.00.jpg",
                    caption: "Si la placa quedó vinculada, esto nos indica en el pop up verde que la conexión fue exitosa. "
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-26_19.51.00.jpg",
                    caption: "Se completan los datos del formulario con el tipo de sensor, el contexto y el nivel de complejidad. Después se presiona enviar."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-26_20.06.00.jpg",
                    caption: "Se envían datos hacia la Micro:bit del estudiante. Luego, el mismo realiza mediciones apretando el botón A en la placa. Ahí comienza la transmisión de datos."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-26_20.07.00.jpg",
                    caption: "La placa micro:bit -alumno- indica que ha recibido la orden de transmisión de datos del sensor con una carita feliz. Dependiendo del tipo de sensor, determinado tomará las medidas correspondientes. Apretando el Botón B se enviarán los distintos datos al micro:bit profesor, esto para generar los ejercicios con el modelo de IA."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-26_20.10.00.jpg",
                    caption: "Se muestran en pantalla los ejercicios realizados por el modelo, más los datos que envió la micro:bit -alumno-. Hay una sección que indica -Mostrar respuesta-."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-09-26_20.13.00.jpg",
                    caption: "En pantalla se puede observar la respuesta. Enjoy it!"
                }               
            ]
        }
    ],
    "Octubre 2025": [
        {
            date: "3 de octubre",
            preview: "../media/img/avances/2025-10-03_capturadepantalla1.png",
            description: "Dedicación del sitio y correcciones de octubre",
            media: [
                {
                    type: "image",
                    src: "../media/img/avances/2025-10-03_capturadepantalla1.png",
                    caption: "Mejoras en la interfaz web del proyecto y corrección de errores menores de navegación."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-10-03_capturadepantalla2.png",
                    caption: "Se integró un sistema de traducción automática al sitio, permitiendo visualizar el contenido en español, inglés y portugués para mayor accesibilidad."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-10-03_capturadepantalla3.png",
                    caption: "El equipo presentó los avances del proyecto en clase, mostrando el estado actual de desarrollo y recibiendo feedback constructivo."
                }
            ]
        },
        {
            date: "10 de octubre",
            preview: "../media/img/avances/2025-10-10_20.04.00.jpeg",
            description: "Jornada de expansión del hardware y documentación técnica",
            media: [
                {
                    type: "image",
                    src: "../media/img/avances/2025-10-10_20.04.00.jpeg",
                    caption: "El equipo trabajó en la incorporación de sensores externos al micro:bit, específicamente explorando la conexión de un potenciómetro mediante protoboard, placa expansora y cableado apropiado."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-10-10_20.04.02.jpeg",
                    caption: "Durante la investigación técnica y verificación de componentes, se identificó que el sensor adecuado para nuestros objetivos es un rotary encoder, realizándose los ajustes correspondientes en el diseño y programación."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-10-10_capturadepantalla1.png",
                    caption: "Inicio del proceso de documentación técnica detallada, sentando las bases para futuras réplicas y mejoras del proyecto."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-10-10_20.04.01.jpeg",
                    caption: "Logro significativo: implementación exitosa del rotary encoder, estableciendo comunicación bidireccional con el micro:bit y validando la transmisión de datos en tiempo real."
                }
            ]
        },
        {
            date: "17 de octubre",
            preview: "../media/img/avances/2025-10-17_19.21.00.jpeg",
            description: "Jornada de experimentación hardware-software",
            media: [
                {
                    type: "image",
                    src: "../media/img/avances/2025-10-17_19.21.00.jpeg",
                    caption: "Integración exitosa del rotary encoder al micro:bit mediante protoboard y programación en MicroPython."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-10-17_19.21.01.jpeg",
                    caption: "El sistema detecta la dirección de rotación (horaria o antihoraria) y representa visualmente el movimiento en la pantalla LED con imágenes de reloj, recorriendo 11 posiciones distintas."
                },
                {
                    type: "video",
                    src: "../media/vid/avances/2025-10-17_19.21.02.mp4",
                    caption: "Se implementó lógica de lectura de flancos para interpretación precisa de los giros del encoder."
                },
                {
                    type: "image",
                    src: "../media/img/avances/2025-10-17_capturadepantalla1.png",
                    caption: "Paralelamente, se publicó la interfaz web prototipo para uso docente-estudiantil, disponible en línea para pruebas de generación de ejercicios matemáticos."
                }
            ]
        },
        {
            date: "31 de octubre",
            preview: "../media/img/avances/2025-10-31_capturadepantalla1.png",
            description: "Cuando el proyecto llega a su fin",
            media: [
                {
                    type: "image",
                    src: "../media/img/avances/2025-10-31_capturadepantalla1.png",
                    caption: "Carga y organización de todos los avances del proyecto al sitio web, incorporando material fotográfico, videos y descripciones detalladas de cada jornada de trabajo."
                },
                {
                    type: "image",
                    src: "../media/img/logos/logo_mathlabint_mix.webp",
                    caption: "La documentación técnica formal y los recursos didácticos complementarios se encuentran en desarrollo final por parte del equipo."
                }
            ]
        }
    ]
};

// Renderizar todos los meses
function avancesRenderMonths() {
    const container = document.getElementById('avancesContainer');

    Object.keys(avancesData).forEach((month, monthIndex) => {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'avances-month-container';

        const header = document.createElement('div');
        header.className = 'avances-month-header';
        header.onclick = () => avancesToggleMonth(monthIndex);

        header.innerHTML = `
                    <h3>${month}</h3>
                    <span class="avances-month-toggle" id="avancesToggle${monthIndex}">▼</span>
                `;

        const content = document.createElement('div');
        content.className = 'avances-month-content';
        content.id = `avancesMonth${monthIndex}`;

        const daysGrid = document.createElement('div');
        daysGrid.className = 'avances-days-grid';

        avancesData[month].forEach((day, dayIndex) => {
            const dayCard = document.createElement('div');
            dayCard.className = 'avances-day-card';
            dayCard.onclick = () => avancesOpenModal(month, dayIndex);

            dayCard.innerHTML = `
                        <img src="${day.preview}" alt="${day.date}" class="avances-day-preview">
                        <div class="avances-day-info">
                            <p class="avances-day-date">${day.date}</p>
                            <p class="avances-day-description">${day.description}</p>
                        </div>
                    `;

            daysGrid.appendChild(dayCard);
        });

        content.appendChild(daysGrid);
        monthDiv.appendChild(header);
        monthDiv.appendChild(content);
        container.appendChild(monthDiv);
    });

}

// Toggle mes
function avancesToggleMonth(monthIndex) {
    const content = document.getElementById(`avancesMonth${monthIndex}`);
    const toggle = document.getElementById(`avancesToggle${monthIndex}`);

    content.classList.toggle('avances-active');
    toggle.classList.toggle('avances-rotated');
}

// Abrir modal con galería
function avancesOpenModal(month, dayIndex) {
    const day = avancesData[month][dayIndex];
    const modal = document.getElementById('avancesModal');
    const modalDate = document.getElementById('avancesModalDate');
    const modalDescription = document.getElementById('avancesModalDescription');
    const modalGallery = document.getElementById('avancesModalGallery');

    modalDate.textContent = day.date;
    modalDescription.textContent = day.description;

    modalGallery.innerHTML = '';

    day.media.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'avances-gallery-item';

        if (item.type === 'image') {
            galleryItem.innerHTML = `
                        <img src="${item.src}" alt="${item.caption}">
                        <div class="avances-gallery-caption">${item.caption}</div>
                    `;
        } else if (item.type === 'video') {
            galleryItem.innerHTML = `
                        <video controls>
                            <source src="${item.src}" type="video/mp4">
                            Tu navegador no soporta el tag de video.
                        </video>
                        <div class="avances-gallery-caption">${item.caption}</div>
                    `;
        }

        modalGallery.appendChild(galleryItem);
    });

    modal.classList.add('avances-modal-active');
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function avancesCloseModal() {
    const modal = document.getElementById('avancesModal');
    modal.classList.remove('avances-modal-active');
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer click fuera
document.getElementById('avancesModal').addEventListener('click', (e) => {
    if (e.target.id === 'avancesModal') {
        avancesCloseModal();
    }
});

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        avancesCloseModal();
    }
});

// zoom zoom zoom

function avancesImageZoom() {
    // Crear overlay para zoom
    const zoomOverlay = document.createElement('div');
    zoomOverlay.id = 'avancesZoomOverlay';
    zoomOverlay.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.95);
        z-index: 9999;
        justify-content: center;
        align-items: center;
        padding: 20px;
        cursor: zoom-out;
    `;
    
    const zoomedImg = document.createElement('img');
    zoomedImg.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 8px;
    `;
    
    zoomOverlay.appendChild(zoomedImg);
    document.body.appendChild(zoomOverlay);
    
    // Cerrar al hacer click
    zoomOverlay.addEventListener('click', () => {
        zoomOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Hacer todas las imágenes del modal clickeables
    document.addEventListener('click', (e) => {
        if (e.target.matches('.avances-modal-gallery img')) {
            zoomedImg.src = e.target.src;
            zoomOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });
}

// Llamar esta función después de avancesRenderMonths()
document.addEventListener('DOMContentLoaded', () => {
    avancesRenderMonths();
    avancesImageZoom(); // Agregar esta línea
    // ... resto del código
});