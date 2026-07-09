// Inclusive Education suggestions & NEE Roster mappings
const INCLUSION_SUGGESTIONS = {
    "3_anios": {
        personal_social: [
            "Adaptación sensorial: Utilizar peluches y mantitas de apego para la esquina de calma.",
            "Visuales: Colocar fotos reales del niño sonriendo o triste en lugar de dibujos abstractos."
        ],
        psicomotriz: [
            "Apoyo físico directo: Acompañar de la mano en circuitos simples a paso lento.",
            "Material adaptado: Pelotas de espuma texturizadas o sonoras para niños con baja visión."
        ],
        comunicacion: [
            "Sistemas alternativos: Fomentar respuestas mediante señalar imágenes claras (pictogramas) o gestos simples.",
            "Libros gigantes con texturas táctiles y solapas móviles grandes."
        ],
        matematica: [
            "Colección segura: Usar tapas de botellas gigantes para evitar riesgos de atragantamiento."
        ],
        ciencia_tecnologia: [
            "Sensorial: Bandejas de experimentación con agua tibia, tierra y hojas secas."
        ]
    },
    "4_anios": {
        personal_social: [
            "Compañero monitor: Asignar un par tutor para modelar normas de juego.",
            "Historias sociales: Cuentos cortos ilustrados sobre cómo solucionar conflictos compartiendo."
        ],
        psicomotriz: [
            "Guías de piso: Dibujar huellas de pies de colores llamativos para marcar las rutas."
        ],
        comunicacion: [
            "Preguntas multinivel: Formular preguntas sencillas de tipo '¿quién?' y preguntas de causa-efecto.",
            "Orejeras acústicas en la esquina tranquila para amortiguar ruidos intensos."
        ],
        matematica: [
            "Colecciones naturales: Usar semillas grandes y piedras lisas pintadas para correspondencia."
        ],
        ciencia_tecnologia: [
            "Registro simple: Fichas de dibujo espontáneo o colocación de stickers para registrar hallazgos."
        ]
    },
    "5_anios": {
        personal_social: [
            "Encargos del día: Distribuir tareas del aula con soportes de pictogramas (repartidor de hojas).",
            "Objeto de habla: Uso de un 'micrófono parlante' para regular los turnos de asamblea."
        ],
        psicomotriz: [
            "Segmentación: Explicar las fases del circuito motriz una a una con modelado previo.",
            "Música reguladora: Ajustar el volumen o tempo de la música según el nivel de hiperactividad."
        ],
        comunicacion: [
            "Anticipación: Tarjetas de palabras sencillas pegadas al costado de los objetos en los sectores.",
            "Títeres de dedo para incentivar el habla en niños con mutismo selectivo."
        ],
        matematica: [
            "Dados grandes con puntos en relieve y texturas táctiles.",
            "Rectas numéricas del 1 al 10 pegadas en las mesas de trabajo individual."
        ],
        ciencia_tecnologia: [
            "Trabajo cooperativo: Formar parejas heterogéneas con roles definidos de experimentador y registrador."
        ]
    }
};

/**
 * Returns a list of inclusive pedagogical adaptations based on Selected parameters and Student NEE Profiles
 */
function getInclusionTips(age, area, studentRoster) {
    const ageKey = age || "4_anios";
    const areaKey = area || "personal_social";
    
    // Core database recommendations
    let tips = INCLUSION_SUGGESTIONS[ageKey] && INCLUSION_SUGGESTIONS[ageKey][areaKey]
        ? [...INCLUSION_SUGGESTIONS[ageKey][areaKey]]
        : ["Adecuaciones de ritmos en el juego libre."];
        
    // Dynamic scan of student roster NEE profiles
    const studentsWithNee = studentRoster.filter(s => s.nee && s.nee.length > 0);
    studentsWithNee.forEach(s => {
        s.nee.forEach(tag => {
            if (tag === "TDAH") {
                tips.unshift(`Para ${s.name} (TDAH): Ofrecer descansos activos cortos entre rutinas y usar tarjetas visuales con cronómetros de color.`);
            } else if (tag === "Hipersensibilidad") {
                tips.unshift(`Para ${s.name} (Hipersensibilidad): Ubicar su mesa lejos de ruidos molestos y proveer orejeras de amortiguación acústica.`);
            } else if (tag === "Movilidad") {
                tips.unshift(`Para ${s.name} (NEE Movilidad): Engrosar los mangos de pinceles/crayolas con espuma, asegurar rutas de paso despejadas y colocar antideslizantes en sus cuadernos.`);
            } else {
                tips.unshift(`Para ${s.name} (NEE ${tag}): Adaptar materiales didácticos concretos de forma individual y adecuar los tiempos de ejecución de las tareas.`);
            }
        });
    });

    return tips;
}
