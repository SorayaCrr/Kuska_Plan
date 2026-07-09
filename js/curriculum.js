// MINEDU Curriculum Core Database (5 Core Areas + Transversal Competencies)
const CURRICULUM_DATA = {
    personal_social: {
        name: "Personal Social",
        competencies: {
            construye_identidad: {
                name: "Construye su identidad.",
                capacities: [
                    "Se valora a sí mismo.",
                    "Autorregula sus emociones."
                ]
            },
            convive_participa: {
                name: "Convive y participa democráticamente en la búsqueda del bien común.",
                capacities: [
                    "Interactúa con todas las personas.",
                    "Construye normas, y asume acuerdos y leyes.",
                    "Participa en acciones que promueven el bienestar común."
                ]
            },
            identidad_religiosa: {
                name: "Construye su identidad, como persona humana, amada por Dios, digna, libre y trascendente, comprendiendo la doctrina de su propia religión, abierto al diálogo con las que le son cercanas.",
                capacities: [
                    "Conoce a Dios y asume su identidad religiosa y espiritual como persona digna, libre y trascendente.",
                    "Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa."
                ]
            }
        }
    },
    psicomotriz: {
        name: "Psicomotriz",
        competencies: {
            desenvuelve_motricidad: {
                name: "Se desenvuelve de manera autónoma a través de su motricidad.",
                capacities: [
                    "Comprende su cuerpo.",
                    "Se expresa corporalmente."
                ]
            }
        }
    },
    comunicacion: {
        name: "Comunicación",
        competencies: {
            comunica_oralmente: {
                name: "Se comunica oralmente en su lengua materna.",
                capacities: [
                    "Obtiene información del texto oral.",
                    "Infiere e interpreta información del texto oral.",
                    "Adecúa, organiza y desarrolla el texto de forma coherente y cohesionada.",
                    "Utiliza recursos no verbales y paraverbales de forma estratégica.",
                    "Interactúa estratégicamente con distintos interlocutores.",
                    "Reflexiona y evalúa la forma, el contenido y contexto del texto oral."
                ]
            },
            lee_textos: {
                name: "Lee diversos tipos de textos escritos en su lengua materna.",
                capacities: [
                    "Obtiene información del texto escrito.",
                    "Infiere e interpreta información del texto.",
                    "Reflexiona y evalúa la forma, el contenido y contexto del texto."
                ]
            },
            escribe_textos: {
                name: "Escribe diversos tipos de textos en su lengua materna.",
                capacities: [
                    "Adecúa el texto a la situación comunicativa.",
                    "Organiza y desarrolla las ideas de forma coherente y cohesionada.",
                    "Utiliza convenciones del lenguaje escrito de forma pertinente.",
                    "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito."
                ]
            },
            crea_proyectos: {
                name: "Crea proyectos desde los lenguajes artísticos.",
                capacities: [
                    "Explora y experimenta los lenguajes del arte.",
                    "Aplica procesos creativos.",
                    "Socializa sus procesos y proyectos."
                ]
            },
            comunica_castellano: {
                name: "Se comunica oralmente en castellano como segunda lengua.",
                capacities: [
                    "Obtiene información del texto oral.",
                    "Infiere e interpreta información del texto oral.",
                    "Adecúa, organiza y desarrolla el texto de forma coherente y cohesionada.",
                    "Utiliza recursos no verbales y paraverbales de forma estratégica.",
                    "Interactúa estratégicamente con distintos interlocutores.",
                    "Reflexiona y evalúa la forma, el contenido y contexto del texto oral."
                ]
            }
        }
    },
    matematica: {
        name: "Matemática",
        competencies: {
            resuelve_cantidad: {
                name: "Resuelve problemas de cantidad.",
                capacities: [
                    "Traduce cantidades a expresiones numéricas.",
                    "Comunica su comprensión sobre los números y las operaciones.",
                    "Usa estrategias y procedimientos de estimación y cálculo."
                ]
            },
            resuelve_forma: {
                name: "Resuelve problemas de forma, movimiento y localización.",
                capacities: [
                    "Modela objetos con formas geométricas y sus transformaciones.",
                    "Comunica su comprensión sobre las formas y relaciones geométricas.",
                    "Usa estrategias y procedimientos para orientarse en el espacio."
                ]
            }
        }
    },
    ciencia_tecnologia: {
        name: "Ciencia y Tecnología",
        competencies: {
            indaga_metodos: {
                name: "Indaga mediante métodos científicos para construir sus conocimientos.",
                capacities: [
                    "Problematiza situaciones para hacer indagación.",
                    "Diseña estrategias para hacer indagación.",
                    "Genera y registra datos o información.",
                    "Analiza datos e información.",
                    "Evalúa y comunica el proceso y resultado de su indagación."
                ]
            }
        }
    }
};

const TRANSVERSAL_COMPETENCIES = {
    comp13: {
        name: "Se desenvuelve en los entornos virtuales generados por las TIC.",
        capacities: [
            "Personaliza entornos virtuales.",
            "Gestiona información del entorno virtual.",
            "Interactúa en entornos virtuales.",
            "Crea objetos virtuales en diversos formatos."
        ]
    },
    comp14: {
        name: "Gestiona su aprendizaje de manera autónoma.",
        capacities: [
            "Define metas de aprendizaje.",
            "Organiza acciones estratégicas para alcanzar sus metas de aprendizaje.",
            "Monitorea y ajusta su desempeño durante el proceso de aprendizaje."
        ]
    }
};

// Formulates observational criteria automatically from capacity definitions
const CRITERIA_FORMULATOR = {
    "Se valora a sí mismo.": "Identifica sus cualidades y gustos personales al participar en las dinámicas del aula.",
    "Autorregula sus emociones.": "Expresa de forma verbal y gestual sus emociones y utiliza técnicas sencillas para calmarse.",
    "Interactúa con todas las personas.": "Comparte materiales y respeta turnos en juegos dirigidos y espontáneos.",
    "Construye normas, y asume acuerdos y leyes.": "Participa activamente en redactar las normas del juego y asume acuerdos grupales.",
    "Participa en acciones que promueven el bienestar común.": "Colabora en ordenar el salón y asume responsabilidades del aula.",
    "Conoce a Dios y asume su identidad religiosa y espiritual como persona digna, libre y trascendente.": "Reconoce las creaciones de Dios en el entorno natural con agradecimiento.",
    "Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa.": "Muestra respeto en oraciones y gestos sencillos de fe compartidos.",
    "Comprende su cuerpo.": "Reconoce y nombra las partes de su cuerpo en actividades de coordinación motriz.",
    "Se expresa corporalmente.": "Realiza movimientos de equilibrio dinámico y se comunica libremente con gestos corporales.",
    "Obtiene información del texto oral.": "Recupera de forma oral datos específicos de cuentos narrados o indicaciones dadas.",
    "Infiere e interpreta información del texto oral.": "Explica con sus palabras el sentido de lo escuchado, deduciendo relaciones de causa-efecto.",
    "Adecúa, organiza y desarrolla el texto de forma coherente y cohesionada.": "Organiza sus ideas para relatar hechos o cuentos siguiendo una secuencia temporal comprensible.",
    "Utiliza recursos no verbales y paraverbales de forma estratégica.": "Usa gestos, tonos de voz y movimientos para enfatizar lo que expresa al hablar.",
    "Interactúa estratégicamente con distintos interlocutores.": "Participa activamente en conversaciones grupales del aula respetando turnos de habla.",
    "Reflexiona y evalúa la forma, el contenido y contexto del texto oral.": "Opina sobre lo que le gustó o no de los textos orales escuchados en clase.",
    "Obtiene información del texto escrito.": "Ubica información visible en cuentos gigantes o letreros sencillos del aula.",
    "Infiere e interpreta información del texto.": "Deduce características de personajes o el final de historias basándose en ilustraciones.",
    "Reflexiona y evalúa la forma, el contenido y contexto del texto.": "Comenta por qué es importante leer textos y de qué tratan las historias del aula.",
    "Adecúa el texto a la situación comunicativa.": "Elabora escritos o dibujos orientados a un propósito de comunicación específico.",
    "Organiza y desarrolla las ideas de forma coherente y cohesionada.": "Ordena sus trazos o dictados a la docente para expresar un mensaje sin contradicciones.",
    "Utiliza convenciones del lenguaje escrito de forma pertinente.": "Escribe de izquierda a derecha y de arriba abajo según sus propios códigos de escritura.",
    "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito.": "Revisa sus producciones escritas explicando lo que ha querido comunicar.",
    "Explora y experimenta los lenguajes del arte.": "Manipula libremente diversos materiales plásticos como témperas, arcilla o papel.",
    "Aplica procesos creativos.": "Combina líneas, formas y colores para elaborar sus propios trabajos de arte del aula.",
    "Socializa sus procesos y proyectos.": "Muestra y explica a sus compañeros cómo elaboró sus producciones artísticas.",
    "Traduce cantidades a expresiones numéricas.": "Agrupa colecciones de hasta 5 o 10 objetos cotidianos según sus características.",
    "Comunica su comprensión sobre los números y las operaciones.": "Expresa de forma verbal o gráfica cantidades usando cuantificadores (muchos, pocos).",
    "Usa estrategias y procedimientos de estimación y cálculo.": "Utiliza el conteo uno a uno de objetos para resolver problemas cotidianos de reparto.",
    "Modela objetos con formas geométricas y sus transformaciones.": "Construye estructuras usando bloques de diferentes formas geométricas planas y sólidas.",
    "Comunica su comprensión sobre las formas y relaciones geométricas.": "Identifica objetos de su entorno que ruedan y describe posiciones espaciales sencillas.",
    "Usa estrategias y procedimientos para orientarse en el espacio.": "Se desplaza en el aula siguiendo circuitos espaciales y giros de coordinación.",
    "Problematiza situaciones para hacer indagación.": "Plantea preguntas sobre comportamientos de seres vivos u objetos observados.",
    "Diseña estrategias para hacer indagación.": "Propone acciones simples y materiales para recolectar datos sobre fenómenos de la naturaleza.",
    "Genera y registra datos o información.": "Dibuja o registra en cuadros de doble entrada los hallazgos de sus observaciones científicas.",
    "Analiza datos e información.": "Establece relaciones sencillas al comparar los resultados de su indagación con sus ideas previas.",
    "Evalúa y comunica el proceso y resultado de su indagación.": "Explica oralmente y en grupo las conclusiones de sus pequeños descubrimientos científicos.",
    "Personaliza entornos virtuales.": "Configura y personaliza perfiles sencillos en tabletas educativas escolares.",
    "Gestiona información del entorno virtual.": "Busca y organiza de manera guiada videos o cuentos multimedia en plataformas escolares.",
    "Interactúa en entornos virtuales.": "Participa en juegos y aplicaciones educativas compartiendo la pantalla con sus compañeros.",
    "Crea objetos virtuales en diversos formatos.": "Dibuja digitalmente o graba audios sencillos para narrar sus vivencias escolares.",
    "Define metas de aprendizaje.": "Propone lo que desea lograr al iniciar un proyecto o actividad lúdica del aula.",
    "Organiza acciones estratégicas para alcanzar sus metas de aprendizaje.": "Elige y ordena de forma autónoma los materiales necesarios para lograr su objetivo diario.",
    "Monitorea y ajusta su desempeño durante el proceso de aprendizaje.": "Comenta de forma guiada los avances y dificultades experimentados en sus tareas escolares."
};

const CURRICULUM_IDEAS = {
    construye_identidad: {
        title: "El Espejo de las Cualidades",
        game: "Los niños se sientan frente a un espejo decorado en círculo. Cada uno se mira y dice una cualidad física o algo que le gusta hacer de sí mismo ('Soy alegre', 'Me gusta dibujar'). La miss les coloca una corona de papel destacando su cualidad.",
        questions: [
            "¿Qué es lo que más te gusta de ti?",
            "¿Cómo nos sentimos cuando alguien nos dice algo bonito?",
            "¿En qué somos diferentes y especiales cada uno?"
        ],
        materials: ["Espejo de cuerpo entero", "Témperas para decorar", "Coronas de cartulina", "Pegatinas de estrellas"]
    },
    convive_participa: {
        title: "La Red de los Acuerdos",
        game: "Sentados en asamblea, pasamos una madeja de lana de un niño a otro. Quien tiene la madeja propone una norma de convivencia para el aula (ej: 'Hablar sin gritar', 'Compartir juguetes') y luego lanza la madeja a un amigo formando una red de compromisos.",
        questions: [
            "¿Para qué nos sirven las normas en el salón?",
            "¿Qué pasaría si jugamos un juego y no hay reglas?",
            "¿Cómo podemos ayudar a un compañero que está triste?"
        ],
        materials: ["Lana de color brillante", "Papelógrafo para dibujar las normas", "Pictogramas ilustrados", "Caritas felices"]
    },
    identidad_religiosa: {
        title: "El Mural de la Creación y el Agradecimiento",
        game: "Salimos al patio o jardín del colegio a observar las plantas, flores e insectos. Al volver, elaboramos un gran mural cooperativo pegando hojas secas y pétalos, agradeciendo las creaciones de la naturaleza con una oración cantada.",
        questions: [
            "¿Qué cosas hermosas encontramos hoy en la naturaleza?",
            "¿Cómo podemos cuidar a las plantas y animalitos del colegio?",
            "¿Cómo agradecemos por los alimentos que comemos todos los días?"
        ],
        materials: ["Hojas y flores secas", "Papel bond continuo", "Goma escolar", "Crayolas gruesas"]
    },
    desenvuelve_motricidad: {
        title: "El Circuito Aventura",
        game: "Diseñamos un circuito motriz en el aula usando colchonetas, túneles de tela y huellas en el piso. Los niños deben gatear por la colchoneta, cruzar el túnel y saltar con un pie sobre las huellas pintadas de colores primarios.",
        questions: [
            "¿Qué parte del cuerpo usamos para saltar?",
            "¿Fue fácil o difícil pasar por el túnel?",
            "¿Cómo podemos mantener el equilibrio sin caernos?"
        ],
        materials: ["Colchonetas de espuma", "Túnel de tela plegable", "Huellas de cartulina de colores", "Música instrumental alegre"]
    },
    comunica_oralmente: {
        title: "El Teléfono Malogrado de la Asamblea",
        game: "Nos sentamos en círculo y la Miss susurra al oído de un niño una frase corta (ej: 'El oso come miel'). El susurro pasa de oído en oído hasta el último niño, quien debe decir la frase en voz alta para comparar el mensaje inicial y final.",
        questions: [
            "¿Llegó el mismo mensaje al final? ¿Por qué?",
            "¿Por qué es importante escuchar con atención cuando un amigo habla?",
            "¿Qué gestos nos ayudan a entender un cuento?"
        ],
        materials: ["Imágenes de animales", "Micrófono de juguete", "Tarjetas de gestos de asamblea"]
    },
    lee_textos: {
        title: "Buscando Tesoros en las Portadas",
        game: "Colocamos varios cuentos ilustrados en el centro. Los niños eligen uno observando solo la portada y formulan predicciones sobre de qué tratará la historia ('Hay un lobo, seguro es malo', 'Es un bosque de noche').",
        questions: [
            "¿Qué pista nos da el dibujo de la portada?",
            "¿De qué creen que tratará este cuento?",
            "¿Qué personaje creen que aparecerá en esta página?"
        ],
        materials: ["Cuentos ilustrados variados", "Lupas de cartulina", "Varitas mágicas de lectura"]
    },
    escribe_textos: {
        title: "El Buzón del Aula",
        game: "Los niños realizan trazos libres o dibujos (según sus códigos de escritura) para enviarle una carta de felicitación a un compañero de clase. Luego doblan su carta y la depositan en una caja decorada como buzón.",
        questions: [
            "¿Qué mensaje le has escrito a tu compañero?",
            "¿De qué lado empezamos a escribir en la hoja?",
            "¿Por qué es bonito recibir cartas de nuestros amigos?"
        ],
        materials: ["Caja de zapatos decorada como buzón", "Papel bond de colores", "Crayones y plumones", "Sellos de stickers"]
    },
    crea_proyectos: {
        title: "Pintando con las Manos",
        game: "Proporcionamos cartulinas grandes y platos con témpera espesa lavable de colores primarios. Los niños pintan con sus manos y dedos, mezclando colores para descubrir nuevos tonos (como el verde o morado) de forma espontánea.",
        questions: [
            "¿Qué color se formó al mezclar el azul y amarillo?",
            "¿Cómo se siente la témpera en tus manos?",
            "¿Qué historia nos cuenta tu pintura?"
        ],
        materials: ["Témperas lavables", "Platos de plástico", "Cartulinas escolares grandes", "Agua y toallas de limpieza"]
    },
    comunica_castellano: {
        title: "Juegos de Saludos y Títeres",
        game: "Utilizamos dos títeres sencillos para modelar una conversación simple en castellano ('Buenos días', '¿Cómo estás?'). Los niños repiten los saludos interactuando en parejas con sus propios títeres de dedo.",
        questions: [
            "¿Cómo saludamos a un amigo nuevo?",
            "¿Qué palabras usamos cuando queremos pedir un juguete prestado?",
            "¿Cómo decimos 'gracias' al recibir algo?"
        ],
        materials: ["Títeres de mano", "Títeres de dedo hechos con conos de papel", "Tarjetas ilustradas de saludos"]
    },
    resuelve_cantidad: {
        title: "Agrupando Tapitas en Bandejas",
        game: "Entregamos a cada mesa un tazón lleno de tapitas de botellas de varios colores y tamaños, junto con platos de clasificación. Los niños agrupan de forma autónoma las tapitas (por color, tamaño o forma) y comparan dónde hay muchas o pocas.",
        questions: [
            "¿Cómo ordenaron sus tapitas? ¿Por color o tamaño?",
            "¿En qué plato hay más tapitas? ¿Cómo lo saben?",
            "¿Cuántas tapitas tenemos si las contamos una a una?"
        ],
        materials: ["Tapitas de botellas plásticas", "Bandejas organizadoras de plástico", "Platos de colores primarios"]
    },
    resuelve_forma: {
        title: "Construyendo Castillos de Madera",
        game: "Utilizando bloques de construcción de madera o plástico, los niños construyen castillos o casitas. La docente pasa por las mesas preguntando las posiciones y nombres de los bloques ('¿Pusiste el cubo arriba o abajo del cilindro?').",
        questions: [
            "¿Qué bloque usaste para el techo? ¿Es plano o redondo?",
            "¿El bloque que pusiste arriba rueda o se queda quieto?",
            "¿Cómo hiciste para que tu torre no se cayera?"
        ],
        materials: ["Bloques de construcción de madera", "Figuras geométricas tridimensionales", "Planos de modelos de castillos"]
    },
    indaga_metodos: {
        title: "El Experimento de Flotabilidad",
        game: "Colocamos una tina grande con agua en el centro del aula. Los niños seleccionan objetos (corchos, llaves, hojas, plumas) y formulan predicciones antes de soltarlos en el agua, registrando en un papelógrafo cuáles flotan y cuáles se hunden.",
        questions: [
            "¿Por qué creen que el corcho se quedó arriba (flotó)?",
            "¿Qué le pasó a la llave de metal? ¿Por qué se fue al fondo?",
            "¿Qué otro objeto del salón creen que flotará?"
        ],
        materials: ["Tina plástica grande con agua", "Elementos variados (plumas, corchos, llaves, hojas)", "Lupas plásticas de exploración", "Fichas de registro"]
    }
};

const PEDAGOGICAL_TEMPLATES = {
    personal_social: [
        {
            title: "El Círculo de los Abrazos Sinceros",
            game: "Los niños caminan por el salón al ritmo de la pandereta. Cuando la música se detiene, deben buscar a un compañero y compartir un elogio sobre su personalidad ('Me gusta jugar contigo', 'Eres muy alegre') antes de darse un abrazo cooperativo.",
            questions: ["¿Cómo se siente tu corazón cuando un amigo te abraza?", "¿Por qué es importante tener amigos en el colegio?", "¿Qué cualidad te gusta más de tu compañero?"],
            materials: ["Pandereta decorada", "Pegatinas con caritas felices", "Globos de colores", "Música instrumental suave"]
        },
        {
            title: "La Torre de las Emociones del Aula",
            game: "Sentados en círculo, mostramos tarjetas con caras emocionales (alegría, tristeza, enojo). Los niños eligen una tarjeta y construyen una torre usando cubos gigantes. Cada cubo colocado representa una situación que les provoca esa emoción en el aula.",
            questions: ["¿Qué situación te hace sentir enojado?", "¿Cómo podemos ayudar a calmar a un amigo triste?", "¿Qué podemos hacer si alguien derrumba nuestra torre?"],
            materials: ["Tarjetas con caras emocionales", "Cubos gigantes de plástico", "Almohadones de relajación"]
        }
    ],
    psicomotriz: [
        {
            title: "El Camino del Jaguar en la Selva",
            game: "Simulamos un bosque tropical usando cintas y sillas. Los niños deben gatear por debajo de las cintas elásticas rojas sin tocarlas, caminar en puntillas sobre cuerdas ondulantes en el piso, y finalmente saltar como ranitas al llegar al otro extremo.",
            questions: ["¿Qué parte del cuerpo te ayudó a pasar por debajo de las cuerdas?", "¿Cómo hiciste para mantener el equilibrio en puntillas?", "¿Qué animal fue el más divertido de imitar?"],
            materials: ["Cintas elásticas rojas", "Cuerdas gruesas de colores", "Huellas de cartulina", "Imágenes de animales de la selva"]
        },
        {
            title: "El Baile de las Sombras Divertidas",
            game: "Apagamos las luces principales y proyectamos una luz potente contra una pared blanca. Los niños realizan diversas posturas corporales y movimientos (hacerse gigantes, enanos, animales voladores) para jugar con la silueta de sus sombras en la pared.",
            questions: ["¿Cómo lograste que tu sombra se viera tan grande?", "¿Qué movimientos corporales fueron más difíciles?", "¿De qué otra forma podemos hacer formas con las manos?"],
            materials: ["Proyector o lámpara potente", "Filtros de papel celofán de colores", "Pared libre o sábana blanca"]
        }
    ],
    comunicacion: [
        {
            title: "El Teatrín del Aula: Títeres Parlanchines",
            game: "Montamos un pequeño escenario con una caja de cartón gigante decorada. Los niños se colocan títeres de calcetín hechos por ellos mismos y dialogan en parejas interpretando personajes fantásticos creados al instante.",
            questions: ["¿Cómo se llama tu personaje y cuál es su superpoder?", "¿De qué conversaron los títeres hoy?", "¿Qué tono de voz usó tu títere cuando estaba alegre?"],
            materials: ["Escenario de cartón decorado", "Títeres de calcetín con botones", "Lanas de colores", "Cascabeles de juguete"]
        },
        {
            title: "Buscadores de Palabras en Gigantografías",
            game: "Colocamos un papelógrafo gigante con un cuento ilustrado. Los niños, armados con lupas de colores, deben buscar y señalar palabras que comiencen con la misma letra de sus nombres, rodeándolas con tizas o crayones.",
            questions: ["¿Qué palabra de la historia empieza con la misma letra que tu nombre?", "¿De qué trata la imagen que está al lado de esa palabra?", "¿Cuántas letras tiene esa palabra corta?"],
            materials: ["Lupas de plástico de colores", "Papelógrafo gigante con texto e imágenes", "Tizas y crayones gruesos"]
        }
    ],
    matematica: [
        {
            title: "El Supermercado del Salón",
            game: "Los niños traen cajas de productos vacías (leche, galletas) y arman una tienda en el aula. Por turnos, asumen roles de cajero y comprador, clasificando los productos por precio, tamaño o categoría, y contando monedas de cartón.",
            questions: ["¿Cómo agrupaste los productos en los estantes?", "¿Cuántas monedas necesitas para comprar esta caja?", "¿Qué producto es el más pesado de tu tienda?"],
            materials: ["Envases vacíos limpios", "Monedas y billetes de cartón", "Caja registradora de juguete", "Bolsas de compra"]
        },
        {
            title: "El Laberinto de las Formas Geométricas",
            game: "Dibujamos figuras geométricas gigantes en el suelo con tiza. La Miss da consignas en voz alta (ej: '¡Todos al círculo rojo!', '¡Caminamos sobre los lados del triángulo!'). Los niños saltan y cooperan para ubicar a todo el grupo en la forma correcta.",
            questions: ["¿Cuántos lados tiene el triángulo que estás pisando?", "¿Qué objetos del salón se parecen a este círculo gigante?", "¿El cuadrado tiene lados rectos o curvos?"],
            materials: ["Tizas de colores para suelo", "Silbatos de colores", "Tarjetas de figuras geométricas de referencia"]
        }
    ],
    ciencia_tecnologia: [
        {
            title: "El Misterioso Viaje de las Semillas",
            game: "Colocamos semillas de frijol en vasos con algodón húmedo. Cada niño observa con lupa y dibuja en un diario de campo los cambios diarios (raíces, tallos, hojas), formulando hipótesis sobre qué necesita la planta para crecer.",
            questions: ["¿Qué crees que pasará si dejamos el vaso en la oscuridad?", "¿Por qué le crecieron raíces al frijolito?", "¿Qué necesita nuestra plantita para vivir además de agua?"],
            materials: ["Vasos de plástico transparentes", "Semillas de frijol de calidad", "Algodón absorbente", "Lupas escolares", "Diarios de campo individuales"]
        },
        {
            title: "Buscando Colores en las Flores del Jardín",
            game: "Recolectamos pétalos caídos y hojas de diferentes tonos en el patio. Los niños los machacan suavemente con morteros de plástico y mezclan los extractos con gotas de agua para extraer pigmentos naturales, pintando dibujos libres en cartulina.",
            questions: ["¿De qué color salió el extracto de esta flor?", "¿Cómo se siente el pétalo machacado en tus dedos?", "¿Qué pasa si mezclamos el pigmento verde y rojo de las hojas?"],
            materials: ["Morteros de plástico pequeños", "Pétalos de flores y hojas variadas", "Pinceles finos", "Cartulinas de alto gramaje"]
        }
    ]
};

const CURRICULUM_IMAGES = {
    construye_identidad: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop",
    convive_participa: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&auto=format&fit=crop",
    identidad_religiosa: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop",
    desenvuelve_motricidad: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop",
    comunica_oralmente: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop",
    lee_textos: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop",
    escribe_textos: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop",
    crea_proyectos: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&auto=format&fit=crop",
    comunica_castellano: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop",
    resuelve_cantidad: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&auto=format&fit=crop",
    resuelve_forma: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop",
    indaga_metodos: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop"
};
