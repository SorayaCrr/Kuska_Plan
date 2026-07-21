// Zero-Effort Automation Templates Database
const AI_GENERATOR_DATABASE = {
    personal_social: {
        title: "Kuska IA: Identidad y Convivencia",
        steps: [
            "Nos sentamos en asamblea en un círculo sobre las alfombras. Cantamos la canción '¿Cómo me siento hoy?'. Les muestro un espejo mágico decorado con flores y pregunto: ¿A quién vemos en el espejo? ¿Qué nos gusta hacer?",
            "Invitamos a los niños a mirarse en el espejo y modelar con plastilina de colores su rostro, expresando con gestos si están contentos o sorprendidos. La docente acompaña individualmente validando sus emociones e intereses.",
            "Colocamos nuestras creaciones de plastilina en una galería del aula. Hacemos preguntas de metacognición: ¿Fue fácil moldear tu carita? ¿Cómo te sientes al ver el trabajo de tus amigos?"
        ]
    },
    psicomotriz: {
        title: "Kuska IA: Expresividad Corporal",
        steps: [
            "Nos reunimos en asamblea en el aula psicomotriz. Recordamos las reglas de cuidado: respetar el cuerpo de mis amigos y cuidar el material. Hacemos calentamientos simulando ser ranitas que despiertan y estiran sus patitas.",
            "Extendemos cintas de colores, telas ligeras y colchonetas. Los niños exploran de forma autónoma: saltan, reptan sobre las colchonetas y lanzan las cintas hacia arriba, moviéndose al ritmo de la música clásica.",
            "Invitamos a los niños a recostarse en el piso imaginando que somos ositos cansados que respiran lento. Música instrumental suave para relajar el pulso corporal.",
            "Entregamos hojas de papel grandes y tizas de colores gruesas. Los niños dibujan de forma libre los saltos y giros que realizaron.",
            "Nos reunimos en asamblea. Los niños señalan sus dibujos y comentan con sonidos o palabras cortas qué parte del cuerpo movieron."
        ]
    },
    comunicacion: {
        title: "Kuska IA: Competencia Comunicativa",
        steps: [
            "Les presento un sobre misterioso de color pastel con siluetas de animales y letras grandes pegadas. Pregunto: ¿Qué habrá adentro? Escuchamos ruidos divertidos.",
            "Extraigo un cuento gigante ilustrado sobre la situación significativa del aula. Leemos haciendo entonaciones divertidas. Los niños participan imitando sonidos o completando frases de la historia no convencional.",
            "Preguntamos: ¿Qué personaje nos sorprendió más? Los niños dibujan su parte favorita y reconstruyen oralmente el cuento de manera colectiva utilizando títeres sencillos."
        ]
    },
    matematica: {
        title: "Kuska IA: Pensamiento Lógico Matemático",
        steps: [
            "Presento un problema cotidiano: 'La Miss tiene muchas hojas secas y piedritas del patio mezcladas en una canasta y necesita ordenarlas para hacer un mural'. ¿Cómo podemos ordenarlas rápido?",
            "Los niños manipulan y clasifican el material concreto en bandejas de madera. Agrupan por forma, tamaño o textura de forma autónoma utilizando sus propios criterios.",
            "Dibujan en un papelógrafo las agrupaciones realizadas, encerrando en un círculo de color sus clasificaciones de piedritas y hojas.",
            "Contamos de manera grupal cuántas agrupaciones creamos. Los niños verbalizan: 'Ordené las hojas grandes en este lado y las piedritas redondas en este otro'."
        ]
    },
    ciencia_tecnologia: {
        title: "Kuska IA: Indagación Científica",
        steps: [
            "Colocamos en el centro una tina transparente con agua templada y diversos materiales (plumas, corchos, llaves, hojas). Lanzamos la pregunta indagatoria: ¿Cuáles flotan y cuáles se hunden?",
            "Los niños dictan sus ideas previas: 'Los juguetes de plástico flotan porque son ligeros', 'las llaves de metal se caen al fondo porque pesan mucho'.",
            "Los niños toman un objeto a la vez, anticipan lo que pasará, lo colocan en el agua y observan de forma directa el fenómeno físico de flotabilidad.",
            "Registramos los resultados colocando imágenes de los objetos en una pizarra magnética dividida en: 'Flota' / 'Se hunde'.",
            "Explicamos de forma colectiva y sencilla nuestros hallazgos, respondiendo: ¿Qué aprendimos hoy sobre los materiales del aula?"
        ]
    }
};

const AUTOMATION_TEMPLATES = {
    "3_anios": {
        personal_social: {
            situation: "Descubriendo mis emociones: Aprendo a identificar cuando estoy alegre o molesto a través del juego.",
            routines: {
                recibimiento: ["Saludo afectuoso con títeres de mano", "Guardar la mochila con ayuda", "Lavado guiado de manos"],
                higiene: ["Lavado de manos cantando 'Los Paticos'", "Secado suave con toallas de colores", "Orden del baño"],
                alimentacion: ["Canto de gratitud por la lonchera", "Apertura asistida de envases", "Limpieza de migas individuales"]
            },
            play: [
                "Los niños de 3 años se reúnen en asamblea. Usamos un peluche para animarles a elegir un sector con señas o palabras sencillas.",
                "Se desplazan con cuidado al sector de Hogar o Construcción. Se agrupan en parejas pequeñas de forma espontánea.",
                "Juegan simulando dar de comer a los muñecos o apilando bloques grandes. La docente observa activamente y media los turnos.",
                "Cantamos la canción del orden. Guardamos los bloques en cajas grandes identificadas con colores llamativos.",
                "Regresamos a la asamblea. La docente pregunta con títeres: ¿A qué jugaron? Los niños responden señalando los sectores.",
                "Modelamos libremente con plastilina suave sobre la mesa de trabajo lo que más nos gustó de nuestro juego libre."
            ],
            session: [
                "Nos sentamos en círculo. Cantamos 'Si tú tienes muchas ganas de aplaudir'. Presento un espejo decorado y los niños se miran uno a uno haciendo muecas de alegría o enojo.",
                "Entregamos masas de colores. Los niños modelan su propio rostro. La docente acompaña preguntando si su figura está feliz o triste. Los niños identifican emociones básicas en sí mismos.",
                "Hacemos una galería con los rostros de masa. Dialogamos en asamblea: ¿Qué nos hace sentir felices? ¿Qué nos enoja? Guardamos los materiales cantando."
            ]
        },
        psicomotriz: {
            situation: "Mi cuerpo saltarín: Exploro mi equilibrio corporal y saltos en colchonetas blandas.",
            routines: {
                recibimiento: ["Saludo afectuoso con canciones de palmadas", "Guardar mochila en su casillero", "Lavado de manos"],
                higiene: ["Lavado de manos con canción de jabón", "Secado autónomo", "Uso guiado de servicios"],
                alimentacion: ["Oración simple de agradecimiento", "Uso de mantel individual", "Limpieza de la mesa con paños suaves"]
            },
            play: [
                "Conversamos sobre las normas del juego libre. Los niños eligen a qué rincón ir de forma gestual.",
                "Se desplazan al sector de psicomotricidad o dramatización. Se distribuyen libremente.",
                "Exploran trepar y saltar. La docente realiza observación de seguridad activa sin interrumpir.",
                "Ordenamos el espacio de juego al ritmo de la música. Colocamos los aros en su estante.",
                "Comentamos en círculo qué movimientos o juegos nos gustaron más de forma voluntaria.",
                "Realizamos trazos con crayolas gruesas en papelógrafos pegados en la pared representando el juego."
            ],
            session: [
                "En círculo conversamos sobre las normas de seguridad del aula motriz. Calentamos el cuerpo trotando como tortugas y liebres.",
                "Colocamos colchonetas y rampas suaves de espuma. Los niños gatean, suben rampas y saltan de manera libre, explorando su equilibrio corporal.",
                "Invitamos a los niños a recostarse en el piso imaginando que somos hojas que caen del árbol lentamente. Música suave.",
                "Entregamos papelógrafos gigantes y tizas de colores gruesas. Los niños dibujan de forma libre los saltos que realizaron.",
                "Nos reunimos en asamblea. Los niños señalan sus dibujos y comentan con sonidos o palabras cortas qué parte del cuerpo movieron."
            ]
        },
        comunicacion: {
            situation: "El cofre de los cuentos: Escucho y juego a predecir historias divertidas del aula.",
            routines: {
                recibimiento: ["Saludo alegre con sonidos de animales", "Acomodar mochila", "Lavarse las manos"],
                higiene: ["Lavado de manos interactivo", "Secado de manos", "Uso de papel toalla"],
                alimentacion: ["Oración de lonchera cantada", "Comer sentaditos de forma autónoma", "Guardar los envases"]
            },
            play: [
                "En asamblea decidimos a qué sector de lectura o dramatización ir usando títeres de dedo.",
                "Los niños se organizan en los sectores tomando juguetes o disfraces sencillos.",
                "Simulan hablar por teléfono o leer imágenes de cuentos gigantes. Acompañamos el juego.",
                "Guardamos los libros en las repisas bajas cantando la canción del orden.",
                "Dialogamos: ¿A quién le leíste el cuento hoy? Los niños socializan sus experiencias.",
                "Pintamos con témperas usando los dedos sobre cartulinas simulando personajes del juego."
            ],
            session: [
                "Presento un sobre gigante decorado con huellas de animales. Pregunto: ¿Qué habrá adentro? Escuchamos ruidos divertidos.",
                "Leemos el cuento 'El Oso Glotón' con entonación expresiva y láminas gigantes. Los niños imitan al oso y completan frases sencillas.",
                "Preguntamos: ¿Qué le pasó al oso por comer rápido? Los niños ordenan 3 láminas gigantes y comentan qué les gustó del cuento."
            ]
        },
        matematica: {
            situation: "Agrupamos tapitas de colores: Descubro tamaños y colores agrupando de forma libre.",
            routines: {
                recibimiento: ["Saludo de bienvenida", "Guardar mochila", "Higiene de manos"],
                higiene: ["Lavado de manos", "Secado autónomo", "Uso de servicios"],
                alimentacion: ["Canto de lonchera", "Alimentarse solos con cuchara", "Limpieza de mesa"]
            },
            play: [
                "Elegimos los sectores de construcción o matemática en asamblea inicial.",
                "Los niños toman bloques de plástico gigantes y se distribuyen por afinidad.",
                "Apilan bloques haciendo torres altas y las derriban con alegría. Apoyamos el juego cooperativo.",
                "Guardamos los bloques en tachos de colores según el tamaño de forma divertida.",
                "Compartimos en el círculo: ¿Quién hizo la torre más alta hoy?",
                "Dibujamos con tizas en el piso del patio las torres de bloques que construimos."
            ],
            session: [
                "La Miss presenta un problema: 'Se han caído todas las tapitas de botellas y están mezcladas'. ¿Cómo podemos ordenarlas?",
                "Manipulamos las tapitas libremente. Los niños las agrupan por color en platos de plástico de forma autónoma.",
                "Pegamos tapitas en cartulinas celestes formando colecciones del mismo color.",
                "Verbalizamos en círculo: ¿De qué color es tu grupo de tapitas? Contamos hasta 3 de forma espontánea."
            ]
        },
        ciencia_tecnologia: {
            situation: "Jugando con el agua y hojas secas: Descubriendo qué cosas flotan y cuáles se hunden.",
            routines: {
                recibimiento: ["Saludo de bienvenida", "Guardar pertenencias", "Lavarse las manos"],
                higiene: ["Higiene guiada", "Secado de manos", "Uso de servicios"],
                alimentacion: ["Agradecer por alimentos", "Uso de servilleta", "Guardar lonchera"]
            },
            play: [
                "Elegimos el rincón de ciencia o juegos tranquilos en asamblea inicial.",
                "Se distribuyen en los rincones tomando lupas y elementos naturales.",
                "Exploran tocando arena, piedras y hojas de diferentes texturas. Monitoreamos la actividad.",
                "Ordenamos las canastas de elementos en las repisas correspondientes.",
                "Conversamos sobre qué texturas sintieron en sus manos hoy.",
                "Estampamos hojas de árbol con témpera marrón sobre papelógrafos."
            ],
            session: [
                "Colocamos recipientes de agua en las mesas. Pregunto: ¿Qué pasará si ponemos esta hoja seca en el agua?",
                "Los niños responden: 'Se moja', 'vuela', 'flota'. Registramos sus ideas de forma verbal.",
                "Lanzamos las hojas y piedras en el agua. Observamos con asombro que las hojas flotan y las piedras van al fondo.",
                "Clasificamos las imágenes de los objetos en un papelógrafo dividido en 'flota' y 'se hunde'.",
                "Nos reunimos y comentamos qué aprendimos sobre el agua y los objetos flotantes."
            ]
        }
    },
    "4_anios": {
        personal_social: {
            situation: "Creamos las normas de nuestra aula: Construimos acuerdos de convivencia jugando juntos.",
            routines: {
                recibimiento: ["Saludo de manos interactivo", "Guardar mochila de forma autónoma", "Higiene de manos"],
                higiene: ["Lavado de manos autónomo", "Uso correcto del papel higiénico", "Secado de manos"],
                alimentacion: ["Agradecer alimentos en grupo", "Comer con autonomía e higiene", "Limpiar y ordenar lonchera"]
            },
            play: [
                "En círculo elegimos sectores y recordamos las normas del aula (ej. cuidar los juguetes de mis amigos).",
                "Los niños se agrupan en sectores. Conversan brevemente sobre qué roles simularán hoy.",
                "Juegan representando roles en la cocinita o armando castillos. La docente acompaña y apoya la resolución de conflictos.",
                "Cantamos la canción del orden. Clasificamos y guardamos los juguetes en los contenedores correspondientes.",
                "En asamblea dialogamos: ¿Con quién jugaste hoy? ¿Qué acuerdos del aula respetamos?",
                "Dibujamos de forma libre el rincón donde jugamos y pintamos con crayolas."
            ],
            session: [
                "Sentados en asamblea, la Miss presenta una caja con juguetes rotos y desordenados. Pregunto: ¿Cómo se sentirán estos juguetes? ¿Qué podemos hacer para cuidarlos?",
                "En pequeños grupos, los niños proponen acuerdos y los dibujan en tarjetas de colores (ej. compartir los bloques, guardar al terminar).",
                "Pegamos las tarjetas en el 'Mural de Acuerdos del Aula Gotitas de Amor' y nos comprometemos a respetarlas mediante un sello de mano de témpera."
            ]
        },
        psicomotriz: {
            situation: "Circuito de equilibristas: Desplazamiento y balance corporal sobre líneas de colores.",
            routines: {
                recibimiento: ["Saludo de bienvenida", "Guardar mochila en casillero", "Lavarse las manos"],
                higiene: ["Lavado de manos autónomo", "Secado de manos", "Uso de toalla individual"],
                alimentacion: ["Oración de lonchera", "Alimentación limpia e independiente", "Limpieza de mesa"]
            },
            play: [
                "Elegimos los sectores de construcción y motricidad en asamblea de planificación.",
                "Los niños se organizan en los sectores, repartiendo roles del juego.",
                "Arman rampas de bloques y caminan balanceándose sobre ellas. Acompañamos el juego.",
                "Guardamos los bloques en cajones de madera ordenadamente al ritmo de la música.",
                "Comentamos en asamblea: ¿Qué dificultades tuvimos al armar la rampa?",
                "Modelamos con plastilina las rampas y caminos construidos."
            ],
            session: [
                "En asamblea, calentamos las articulaciones marchando al ritmo de un tambor. Delimitamos las zonas del circuito de equilibrio.",
                "Los niños caminan sobre cuerdas tensadas en el piso, saltan aros de colores de un pie al otro y trepan colchonetas de forma autónoma.",
                "Nos acostamos en colchonetas simulando ser plumas flotantes, respirando lento al ritmo de la flauta dulce.",
                "Los niños dibujan de manera espontánea con crayolas el circuito que completaron y cómo cruzaron la cuerda.",
                "En asamblea de cierre compartimos los dibujos y comentamos cómo mantuvimos el equilibrio."
            ]
        },
        comunicacion: {
            situation: "Lectores en acción: Descubro historias fascinantes en los cuentos de la biblioteca.",
            routines: {
                recibimiento: ["Saludo de bienvenida", "Colocar mochila en su lugar", "Lavado de manos"],
                higiene: ["Lavado de manos con jabón líquido", "Secado autónomo", "Uso de papel toalla"],
                alimentacion: ["Agradecer por los alimentos", "Comer de forma autónoma", "Limpiar el espacio de mesa"]
            },
            play: [
                "Elegimos los sectores de lectura, teatro o juegos de mesa en la asamblea inicial.",
                "Los niños se desplazan al sector y eligen los libros que más les llaman la atención.",
                "Hojean los libros, señalan imágenes y fingen leer la historia a sus muñecos. Interacción lúdica.",
                "Acomodamos los libros de cuentos ordenadamente en los estantes según el color de las etiquetas.",
                "Conversamos en círculo: ¿Qué libro de cuentos elegiste hoy? ¿De qué trataba?",
                "Dibujamos libremente con témperas al personaje del cuento que leímos."
            ],
            session: [
                "Mostramos la portada tapada de un cuento gigante misterioso. Pregunto: ¿Qué personaje aparecerá en este dibujo? ¿Cómo se llamará?",
                "Leemos el cuento de forma compartida. Señalo las letras de izquierda a derecha. Hago pausas para que los niños formulen hipótesis del final.",
                "Reconstruimos la secuencia del cuento usando tarjetas de cartulina en la pizarra. Dialogamos sobre lo que aprendimos."
            ]
        },
        matematica: {
            situation: "Clasificando las piedritas del jardín: Seriación y ordenamiento matemático por tamaño.",
            routines: {
                recibimiento: ["Saludo interactivo", "Guardar mochila", "Lavado de manos"],
                higiene: ["Lavado de manos con jabón", "Secado autónomo", "Uso de toalla"],
                alimentacion: ["Oración de lonchera", "Uso de individual y servilleta", "Guardar envases"]
            },
            play: [
                "Elegimos los sectores de ciencias o matemática en la asamblea.",
                "Se distribuyen en los rincónes y recolectan semillas y piedras del patio.",
                "Agrupan y ordenan las semillas formando caminos largos y cortos de forma lúdica.",
                "Ordenamos y limpiamos las bandejas de clasificación en los estantes del sector.",
                "Compartimos en asamblea: ¿Cómo ordenamos las semillas hoy?",
                "Dibujamos con tizas en el patio las agrupaciones de semillas que creamos."
            ],
            session: [
                "Presento el problema: 'La canasta de juguetes tiene bloques grandes, medianos y pequeños desordenados'. ¿Cómo podemos clasificarlos?",
                "Los niños manipulan los bloques en las mesas de trabajo. Los ordenan de forma libre de mayor a menor tamaño en grupos.",
                "Dibujan en hojas bond la seriación de 3 bloques realizada en su mesa.",
                "En círculo compartimos los resultados: ¿Cómo sabemos cuál es el bloque más grande? Verbalizan 'Es más alto'."
            ]
        },
        ciencia_tecnologia: {
            situation: "Descubriendo los insectos del jardín: Indagación sobre cómo viven los bichitos.",
            routines: {
                recibimiento: ["Saludo de bienvenida", "Guardar mochila", "Lavado de manos"],
                higiene: ["Lavado de manos", "Secado de manos", "Uso de servicios"],
                alimentacion: ["Agradecer por alimentos", "Comer autónomamente", "Limpieza de mesa"]
            },
            play: [
                "Elegimos el sector de ciencias en la asamblea inicial.",
                "Los niños toman lupas de plástico y se organizan para salir al jardín de la escuela.",
                "Observan hormigas y hojas caídas del jardín usando las lupas de forma autónoma.",
                "Limpiamos y guardamos las lupas de plástico en su cajón correspondiente.",
                "Socializamos en asamblea: ¿Qué bichitos encontramos en el jardín hoy?",
                "Dibujamos con crayolas de colores los bichitos que observamos en la exploración."
            ],
            session: [
                "Observamos una hilera de hormigas en el patio de la escuela. Pregunto: ¿Hacia dónde caminan? ¿De qué se alimentan?",
                "Los niños dictan sus ideas previas: 'Van a su casita debajo de la tierra', 'comen hojas verdes y azúcar'.",
                "Salimos con lupas a seguir el camino de las hormigas. Observamos que llevan hojitas secas hacia su hormiguero.",
                "Registramos en un papelógrafo colectivo mediante dibujos la ruta de las hormigas observadas.",
                "Dialogamos sobre la importancia de las hormigas en la naturaleza y cómo debemos cuidarlas."
            ]
        }
    },
    "5_anios": {
        personal_social: {
            situation: "Nuestra tiendita del aula: Organizamos roles y responsabilidades en el juego.",
            routines: {
                recibimiento: ["Saludo formal y asamblea inicial", "Acomodar mochila en su casillero", "Lavado de manos autónomo"],
                higiene: ["Lavado de manos independiente", "Uso responsable de toallas", "Uso de papel higiénico"],
                alimentacion: ["Oración de lonchera liderada por un alumno", "Comer solos con modales", "Limpieza y desecho de residuos"]
            },
            play: [
                "Planificamos los sectores. Los niños firman su nombre en la pizarra interactiva para elegir su rincón de juego preferido.",
                "Se agrupan en la tiendita del aula. Negocian los roles del juego (quién es el cajero, el comprador, el reponedor).",
                "Juegan simulando transacciones comerciales y ordenamiento de productos de desecho. Observamos y mediamos.",
                "Cantamos la canción del orden. Los niños limpian las repisas y guardan los juguetes clasificados por utilidad.",
                "En asamblea evaluamos: ¿Se respetaron los roles de la tienda hoy? ¿Cómo nos sentimos?",
                "Dibujamos el plano de la tiendita del aula utilizando lápices y colores."
            ],
            session: [
                "En círculo, la Miss presenta la tiendita del aula con productos vacíos y desordenados en el suelo. Pregunto: ¿Cómo podemos organizarnos para jugar en la tiendita?",
                "Los niños en asamblea proponen roles necesarios (cajero, reponedor, clientes). Escribimos carteles con sus nombres y responsabilidades del puesto.",
                "Simulamos el juego de roles de la tienda respetando turnos de atención. Reflexionamos sobre la importancia de organizarse cooperativamente."
            ]
        },
        psicomotriz: {
            situation: "Desafío de coordinación motriz: Lanzamientos y giros corporales con aros y pelotas.",
            routines: {
                recibimiento: ["Saludo de bienvenida", "Guardar mochila", "Lavarse las manos"],
                higiene: ["Higiene de manos", "Secado de manos", "Uso de toalla"],
                alimentacion: ["Oración de agradecimiento", "Alimentación limpia e independiente", "Limpieza de mesa"]
            },
            play: [
                "Elegimos los sectores de construcción y psicomotricidad de forma autónoma.",
                "Se distribuyen en los rincones organizando el espacio de lanzamientos y aros.",
                "Juegan lanzando pelotas a cajas y saltando en dos pies aros de colores. Coordinación corporal.",
                "Guardamos las pelotas y aros en las canastas de orden de forma colaborativa.",
                "Socializamos en asamblea: ¿Cómo logramos embocar la pelota en la caja?",
                "Dibujamos de forma detallada el circuito psicomotriz completado."
            ],
            session: [
                "En círculo, hacemos estiramientos corporales coordinando la respiración. Delimitamos las zonas de saltos y lanzamientos.",
                "Los niños corren en zig-zag esquivando conos, saltan sobre aros en un solo pie y lanzan pelotas de trapo hacia canastas suspendidas.",
                "Nos acostamos sobre alfombras simulando ser osos invernando, realizando respiraciones lentas del abdomen al ritmo del metalófono.",
                "Entregamos hojas y tizas pastel. Los niños dibujan el circuito representando su cuerpo y los aros utilizados.",
                "Compartimos los dibujos. Dialogamos sobre la importancia de coordinar los movimientos de nuestros brazos y piernas."
            ]
        },
        comunicacion: {
            situation: "Creamos un cuento colectivo: Redacción y dibujo de nuestra propia aventura del aula.",
            routines: {
                recibimiento: ["Saludo de bienvenida", "Guardar mochila", "Lavado de manos autónomo"],
                higiene: ["Lavado de manos autónomo", "Uso de papel toalla", "Desecho correcto de papel"],
                alimentacion: ["Oración de lonchera grupal", "Comer con buenos modales", "Limpieza del pupitre con paños"]
            },
            play: [
                "Elegimos los sectores de dramatización, lectura o arte de forma escrita en asamblea.",
                "Los niños toman títeres de mano y se distribuyen en parejas creando pequeños diálogos.",
                "Crean historias y las representan detrás del teatrín de títeres del aula. Acompañamos el juego.",
                "Guardamos los títeres ordenadamente en su caja de cartón decorada.",
                "Comentamos en asamblea: ¿De qué trataba la historia de títeres que vieron hoy?",
                "Dibujamos y recortamos máscaras sencillas del personaje favorito de la función."
            ],
            session: [
                "Presento un baúl misterioso que contiene sombreros y accesorios divertidos. Pregunto: ¿Qué personaje creen que usa este sombrero? ¿Qué aventuras vivirá?",
                "Los niños dictan a la docente ideas sueltas para crear un cuento colectivo. La Miss redacta las ideas en un papelógrafo gigante manteniendo la coherencia de la secuencia.",
                "Los niños dibujan de forma individual una escena del cuento creado para armar el libro ilustrado del aula."
            ]
        },
        matematica: {
            situation: "Construyendo con patrones geométricos: Creación de secuencias lógicas de bloques.",
            routines: {
                recibimiento: ["Saludo de bienvenida", "Colocar mochila en casillero", "Lavado de manos"],
                higiene: ["Higiene de manos independiente", "Secado de manos", "Uso de servicios"],
                alimentacion: ["Canto de gratitud", "Comer de forma ordenada e independiente", "Limpieza de mesa"]
            },
            play: [
                "Elegimos los sectores de matemática, construcción o juegos de mesa en asamblea.",
                "Los niños toman bloques de encaje geométricos y se agrupan en las mesas de juego.",
                "Construyen patrones de secuencias de colores (ej. rojo, azul, rojo, azul) de forma lúdica.",
                "Ordenamos y clasificamos los bloques geométricos en los tachos rotulados con las formas.",
                "Dialogamos en asamblea: ¿Qué patrones de colores lograste armar hoy?",
                "Dibujamos en hojas de papel cuadriculado las secuencias de colores completadas."
            ],
            session: [
                "Presento el problema: 'Tenemos un collar de cuentas rotas en el suelo y queremos reconstruirlo siguiendo el patrón de la pulsera de la Miss (círculo, cuadrado, círculo, cuadrado)'.",
                "Los niños manipulan bloques lógicos o cuentas de madera en relieve. Construyen secuencias siguiendo patrones de forma y color de 2 a 3 elementos.",
                "Dibujan en hojas bond la secuencia del collar creada en su mesa de trabajo.",
                "Reflexionamos en círculo: ¿Qué forma seguía después del cuadrado? Verbalizan: 'Sigue el círculo'."
            ]
        },
        ciencia_tecnologia: {
            situation: "El misterio de las plantas del colegio: Indagación de qué necesitan para crecer.",
            routines: {
                recibimiento: ["Asamblea de saludo", "Guardar mochila", "Higiene de manos"],
                higiene: ["Higiene autónoma", "Secado de manos", "Uso de servicios"],
                alimentacion: ["Agradecer por alimentos", "Comer autónomamente", "Desinfectar pupitres"]
            },
            play: [
                "Elegimos el rincón de ciencia o patio de exploración en la planificación.",
                "Se organizan en grupos y salen con palas pequeñas y lupas al huerto de la escuela.",
                "Remueven suavemente la tierra observando raíces y pequeñas plantitas. Promovemos el cuidado ambiental.",
                "Limpiamos las palas de plástico y las guardamos ordenadamente en la caja de herramientas de ciencias.",
                "Compartimos en asamblea: ¿Qué encontramos en la tierra de nuestro huerto hoy?",
                "Dibujamos con témperas de colores las raíces y plantas que exploramos."
            ],
            session: [
                "Mostramos dos macetas pequeñas en el aula: una con una planta verde y otra marchita y seca. Pregunto: ¿Por qué creen que esta planta se secó? ¿Qué necesita para vivir?",
                "Los niños dictan sus hipótesis: 'Le faltó agüita y sol', 'se enfermó porque estaba encerrada en la caja oscura'.",
                "Diseñamos un experimento simple: colocamos una maceta en la ventana con riego regular y otra en una caja oscura sin agua por 3 días.",
                "Creamos una hoja de registro individual donde dibujan diariamente los cambios de ambas plantas.",
                "Dialogamos en asamblea sobre lo observado y concluimos que las plantas necesitan agua, luz solar y aire para vivir."
            ]
        }
    }
};

/**
 * Returns a fully pre-populated automated plan object based on inputs.
 * Crucial for the 'Zero-Effort' automated system.
 */
function getAutomaticPlan(age, area, competence) {
    const ageKey = age || "4_anios";
    const areaKey = area || "personal_social";

    // Resolve templates
    const ageTemplates = AUTOMATION_TEMPLATES[ageKey];
    let template = ageTemplates && ageTemplates[areaKey]
        ? ageTemplates[areaKey]
        : AUTOMATION_TEMPLATES["4_anios"]["personal_social"]; // fallback

    // Build pre-filled didactic steps based on Area and Competence rules
    let didacticSteps = [];
    if (areaKey === "psicomotriz") {
        const stepNames = [
            "Inicio: Motivación, Saberes Previos, Problematización y Propósito",
            "Desarrollo: Procesos Psicomotrices (Expresividad Motriz y Relajación)",
            "Desarrollo: Procesos Psicomotrices (Representación Gráfico-Plástica)",
            "Cierre: Metacognición, Evaluación y Retroalimentación"
        ];
        const stepDescs = [
            "Asamblea inicial: delimitación de normas, calentamiento y presentación del propósito del juego.",
            "Movimiento corporal libre, retos de equilibrio, desplazamientos y posterior relajación para volver a la calma.",
            "Dibujo, pintura o modelado con plastilina sobre la experiencia vivida corporalmente.",
            "Conversatorio final para reflexionar sobre lo aprendido, coevaluación y comentarios constructivos."
        ];
        didacticSteps = stepNames.map((name, idx) => ({
            name: name,
            desc: stepDescs[idx],
            content: idx === 0 ? template.session[0] : (idx === 3 ? template.session[2] : (template.session[1] || "Actividad motriz complementaria."))
        }));
    } else if (areaKey === "comunicacion" && (competence === "lee_textos" || competence === "escribe_textos")) {
        const stepNames = [
            "Inicio: Motivación, Saberes Previos, Problematización y Propósito",
            "Desarrollo: Procesos de Comunicación (Antes y Durante la Lectura/Escritura)",
            "Desarrollo: Procesos de Comunicación (Después de la Lectura/Escritura)",
            "Cierre: Metacognición, Evaluación y Retroalimentación"
        ];
        const stepDescs = [
            "Despertar interés, rescatar saberes previos y plantear la problematización/propósito de la comunicación.",
            "Formulación de hipótesis basándose en portadas/siluetas, e interacción directa con el texto o planificación.",
            "Comprensión crítica, contraste de hipótesis, reescritura o socialización grupal.",
            "Reflexión sobre las dificultades al leer/escribir/hablar y retroalimentación oportuna de la Miss."
        ];
        didacticSteps = stepNames.map((name, idx) => ({
            name: name,
            desc: stepDescs[idx],
            content: idx === 0 ? template.session[0] : (idx === 3 ? template.session[2] : (template.session[1] || "Actividad comunicativa complementaria."))
        }));
    } else if (areaKey === "matematica") {
        const stepNames = [
            "Inicio: Motivación, Saberes Previos, Problematización y Propósito",
            "Desarrollo: Procesos Matemáticos (Familiarización y Vivenciación)",
            "Desarrollo: Procesos Matemáticos (Representación y Formalización)",
            "Cierre: Metacognición, Evaluación y Retroalimentación"
        ];
        const stepDescs = [
            "Introducción de un problema real del aula, diálogo motivador y establecimiento del propósito del día.",
            "Comprensión del reto y manipulación de material concreto (fichas, cuentas) o vivenciación corporal.",
            "Traspaso de lo concreto a lo gráfico (dibujos, esquemas) y verbalización de las conclusiones matemáticas.",
            "Preguntas de metacognición sobre el proceso de conteo/clasificación, evaluación y retroalimentación."
        ];
        didacticSteps = stepNames.map((name, idx) => ({
            name: name,
            desc: stepDescs[idx],
            content: idx === 0 ? template.session[0] : (idx === 3 ? template.session[2] : (template.session[1] || "Actividad de pensamiento matemático."))
        }));
    } else if (areaKey === "ciencia_tecnologia") {
        const stepNames = [
            "Inicio: Motivación, Saberes Previos, Problematización y Propósito",
            "Desarrollo: Procesos Científicos (Planteamiento de Hipótesis y Plan de Acción)",
            "Desarrollo: Procesos Científicos (Recojo de Datos y Estructuración del Saber)",
            "Cierre: Metacognición, Evaluación y Retroalimentación"
        ];
        const stepDescs = [
            "Observación inicial de un fenómeno (ej. hojas secas, agua), conflicto cognitivo y propósito de indagación.",
            "Formulación de respuestas preliminares y diseño colectivo de un plan para verificar (experimento).",
            "Experimentación activa, registro visual y contraste con la hipótesis inicial.",
            "Verificación final y explicación grupal de resultados, autoevaluación del proceso y retroalimentación."
        ];
        didacticSteps = stepNames.map((name, idx) => ({
            name: name,
            desc: stepDescs[idx],
            content: idx === 0 ? template.session[0] : (idx === 3 ? template.session[2] : (template.session[1] || "Actividad de indagación y exploración."))
        }));
    } else {
        // Default Personal Social and other general area didactics
        const stepNames = [
            "Inicio: Motivación, Saberes Previos, Problematización y Propósito",
            "Desarrollo: Procesos Socioemocionales (Vivenciación y Diálogo Reflexivo)",
            "Desarrollo: Procesos Socioemocionales (Transferencia a otras situaciones)",
            "Cierre: Metacognición, Evaluación y Retroalimentación"
        ];
        const stepDescs = [
            "Presentación de un caso o dilema socioemocional, rescate de ideas previas y propósito del taller.",
            "Dramatización, juego de roles o asamblea para reflexionar sobre la convivencia o su identidad.",
            "Acuerdos grupales para aplicar las normas o emociones aprendidas en su vida diaria.",
            "Preguntas metacognitivas, evaluación del cumplimiento de acuerdos y retroalimentación formativa."
        ];
        didacticSteps = stepNames.map((name, idx) => ({
            name: name,
            desc: stepDescs[idx],
            content: idx === 0 ? template.session[0] : (idx === 3 ? template.session[2] : (template.session[1] || "Fase didáctica general de aula."))
        }));
    }

    // Convert Free Play lists to formatted wizard content
    const freePlayMoments = state.freePlay.moments.map((moment, idx) => ({
        name: moment.name,
        desc: moment.desc,
        content: template.play[idx] || moment.content
    }));

    // Formulate creative session title
    const sessionTitle = template.situation.includes(":")
        ? template.situation.split(":")[0].trim()
        : "Sesión de Aprendizaje";

    // Map concrete suggested materials based on areaKey
    const materialsMap = {
        personal_social: [
            "Espejo de seguridad de cuerpo entero",
            "Tarjetas ilustrativas de gestos y emociones",
            "Plastilina de colores no tóxica",
            "Papelógrafos y témperas lavables"
        ],
        psicomotriz: [
            "Colchonetas de espuma y rampas suaves",
            "Cintas rítmicas de tela de colores",
            "Tizas gruesas para dibujar circuitos en el piso",
            "Reproductor de sonido para música relajante"
        ],
        comunicacion: [
            "Sobre sorpresa gigante de color pastel",
            "Cuento gigante ilustrado con texturas",
            "Títeres de dedo (animales del cuento)",
            "Hojas de papel A4 y crayones gruesos"
        ],
        matematica: [
            "Tapitas plásticas de botellas (varios colores y tamaños)",
            "Bandejas plásticas organizadoras de clasificación",
            "Platos de colores primarios para agrupación",
            "Goma escolar y siluetas para pegar"
        ],
        ciencia_tecnologia: [
            "Tina plástica grande con agua limpia",
            "Elementos naturales (corchos, plumas, llaves, hojas secas)",
            "Tarjetas magnéticas de 'Flota' y 'Se hunde'",
            "Lupas plásticas para exploración directa"
        ]
    };
    const sessionMaterials = materialsMap[areaKey] || ["Material educativo estructurado de aula"];

    return {
        title: sessionTitle,
        situation: template.situation,
        routines: template.routines,
        freePlay: freePlayMoments,
        didacticSteps: didacticSteps,
        materials: sessionMaterials
    };
}
