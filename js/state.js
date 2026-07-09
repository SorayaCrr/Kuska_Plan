// Centralized State Store for Kuska Plan
const state = {
    currentUser: null,
    activeView: "planificador", // "planificador", "curriculo", "alumnos", "rubricas", "configuracion"
    activeCurriculumTab: "personal_social",
    
    // Planning wizard step
    currentStep: 1, // 1: Situación, 2: Jornada Diaria, 3: Ficha Oficial
    selectedAge: "4_anios", // Default classroom age
    significantSituation: "",
    activeScheduleTab: "routines", // "routines", "play", "session"
    
    // Class institutional config
    config: {
        ieName: "",
        aulaName: "",
        aulaAge: "4_anios",
        teacherTitle: "",
        schoolYear: ""
    },

    // Routines checklists
    routines: {
        recibimiento: ["Saludo afectuoso a la Miss", "Guardar mochila en su lugar", "Lavado de manos al ingresar"],
        higiene: ["Lavado de manos guiado con canción", "Uso adecuado de servicios higiénicos", "Uso de papel toalla"],
        alimentacion: ["Oración de agradecimiento por alimentos", "Uso de lonchera individual", "Limpieza del espacio de comer"],
        customRecibimiento: "",
        customHigiene: "",
        customAlimentacion: ""
    },

    // Free play in sectors (6 moments)
    freePlay: {
        currentMoment: 0,
        moments: [
            {
                name: "Planificación",
                desc: "Los niños sentados en asamblea deciden a qué sector les gustaría ir a jugar, cuántos irán y qué normas de cuidado recordaremos.",
                content: "Nos sentamos en asamblea en círculo. Cantamos la canción de los sectores. Los niños levantan la mano para elegir su sector preferido y colocamos su foto en el panel de planificación."
            },
            {
                name: "Organización",
                desc: "Los niños se distribuyen en grupos de 4 a 5 integrantes en los sectores elegidos y se organizan con quién jugar y qué jugarán.",
                content: "Los niños se desplazan al sector. Conversan brevemente sobre lo que van a simular. Se colocan gorros o accesorios sencillos del sector."
            },
            {
                name: "Ejecución",
                desc: "Los niños juegan libremente de manera autónoma. La docente asume un rol de observadora activa y mediadora sin intervening directamente a menos que sea necesario.",
                content: "Los niños interactúan de forma creativa. Representan roles cotidianos (papá, mamá, vendedor, doctor). Se monitorea que los juegos se desarrollen de manera armónica."
            },
            {
                name: "Orden",
                desc: "A través de una canción reguladora, los niños guardan los juguetes y ordenan los sectores para mantener el aula limpia.",
                content: "Cantamos 'A guardar cada cosa en su lugar'. Los niños ordenan los bloques, lavan platos de juguete y acomodan las muñecas ordenadamente en sus estantes."
            },
            {
                name: "Socialización",
                desc: "En asamblea de cierre, los niños comentan de forma voluntaria a qué jugaron, con quiénes y cómo se sintieron.",
                content: "Volvemos al círculo. Preguntamos: ¿A qué jugaron hoy? ¿Qué materiales usaron? ¿Hubo algún problema y cómo lo solucionaron?"
            },
            {
                name: "Representación",
                desc: "Los niños plasman lo vivido en el juego a través de dibujos, pintura, modelado con plastilina o dramatización libre.",
                content: "Entregamos hojas de papel bond y crayones. Los niños dibujan lo que más les gustó de su juego libre en los sectores. Algunos eligen modelar con plastilina."
            }
        ]
    },

    // Lesson planning state
    session: {
        title: "",
        materials: [],
        selectedArea: "",
        selectedCompetence: "",
        selectedCapacities: [],
        transversals: {
            comp13: { checked: false, capacities: [] },
            comp14: { checked: false, capacities: [] }
        },
        didacticSteps: [],
        activeDidacticStep: 0,
        isInclusionActive: false
    },

    // Evaluation
    evaluation: {
        neeTags: ["TDAH", "Hipersensibilidad", "Movilidad"],
        students: [],
        rubrics: {} // studentId -> capacityText -> grade ("Logrado", "Proceso", "Inicio")
    }
};
