# Kuska Plan - Planificación Interactiva para Educación Inicial

**Kuska Plan** es una plataforma web interactiva diseñada exclusivamente para docentes de Educación Inicial (Ciclo II - de 3 a 5 años). El objetivo principal de la plataforma es simplificar y potenciar la planificación curricular diaria, integrando de forma directa el Currículo Nacional y permitiendo la adaptación pedagógica para estudiantes con Necesidades Educativas Especiales (NEE) mediante Inteligencia Artificial.

---

## 🚀 Características Principales

1. **Planificador Diario Guiado:**
   - Asistente interactivo paso a paso para estructurar la jornada escolar (Rutinas, Juego Libre en Sectores, Desarrollo de Sesiones de Aprendizaje).
   
2. **Explorador del Currículo Nacional:**
   - Consulta rápida y búsqueda inteligente de las áreas curriculares (Personal Social, Psicomotricidad, Comunicación, Castellano como Segunda Lengua, Descubrimiento del Mundo, Ciencia y Tecnología, Matemática).
   - Acceso instantáneo a competencias, capacidades y desempeños oficiales por edades (3, 4 y 5 años).

3. **Asistente de Inteligencia Artificial (Groq Llama-3.3):**
   - Generación instantánea de dinámicas de juego libre adaptadas a la situación del aula.
   - Creación de propuestas didácticas completas para sesiones de aprendizaje (Inicio, Desarrollo, Cierre).
   - Adaptaciones curriculares automáticas y personalizadas basadas en las NEE (Necesidades Educativas Especiales) de cada estudiante.
   - Generación de informes descriptivos de logros e indicadores individuales para el aula.

4. **Gestión de Alumnos y NEE:**
   - Registro de estudiantes del aula.
   - Asignación de tags/etiquetas de Necesidades Educativas Especiales (TDAH, Hipersensibilidad, Discapacidad Motriz, etc.) para personalizar las recomendaciones.

5. **Control de Logros (Rúbricas):**
   - Cuadro interactivo de evaluación para calificar el nivel de logro de cada estudiante por capacidad (Logrado [A/AD], Proceso [B], Inicio [C]).
   - Estadísticas y métricas de desempeño del aula en tiempo real.

6. **Historial de Planificaciones ("Mis Planificaciones"):**
   - Almacenamiento seguro en la nube e historial interactivo.
   - Permite volver a visualizar, editar o eliminar planificaciones guardadas con un solo clic.

7. **Exportación e Impresión Profesional:**
   - Generación de fichas pedagógicas en formato oficial imprimible (A4).
   - Opciones para copiar el contenido al portapapeles o exportar a PDF de forma limpia.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:**
  - **HTML5:** Estructura semántica completa.
  - **CSS3 (Vanilla):** Diseño responsivo de alta gama (soporte para tema claro y tema oscuro/versión nocturna).
  - **JavaScript (Vanilla):** Lógica del lado del cliente modular y reactiva.
  - **Lucide Icons:** Iconografía moderna de alta fidelidad.

- **Servicios e Integraciones:**
  - **Supabase (PostgreSQL, Auth & Database):** Persistencia de perfiles, estudiantes, rúbricas de evaluación y fichas de planificación de forma remota, sincronizados por usuario.
  - **Groq API (Llama-3.3-70b):** Motor de inteligencia artificial ultrarrápido para asistencia pedagógica.

---

## 📂 Estructura del Proyecto

```bash
PlanerGo/
├── css/
│   ├── auth.css          # Estilos de la pantalla de login/registro
│   ├── dashboard.css     # Estilos generales del workspace principal
│   ├── main.css          # Variables globales y estilos base
│   ├── print.css         # Reglas de impresión para formato A4 limpio
│   ├── sidebar.css       # Diseño y comportamiento del menú lateral
│   └── variables.css     # Paleta de colores (Menta, Lavanda) y tokens de diseño
├── js/
│   ├── app.js            # Lógica principal, enrutamiento y eventos DOM
│   ├── curriculum.js     # Base de datos local del Currículo Nacional de Inicial
│   ├── inclusion.js      # Base de conocimiento y recomendaciones para NEE
│   ├── state.js          # Almacén de estado centralizado de la app
│   └── templates.js      # Plantillas de renderizado de documentos e IA
├── img/                  # Recursos gráficos y banners
├── supabase_schema.sql   # Script SQL de creación de tablas y políticas RLS
├── index.html            # Punto de acceso principal y estructura de la app
└── README.md             # Documentación del proyecto (Este archivo)
```

---

## 🗄️ Base de Datos (Supabase Schema)

El proyecto cuenta con 4 tablas principales en Supabase sincronizadas bajo políticas de seguridad **RLS (Row Level Security)** asociadas al `user_id` del docente:

1. **`profiles`**: Almacena los ajustes institucionales del docente (Nombre del colegio, aula, edad asignada, año escolar).
2. **`students`**: Lista de estudiantes registrados por el docente, incluyendo su arreglo de Necesidades Educativas Especiales (`nee`).
3. **`rubrics`**: Calificaciones y rúbricas individuales por estudiante y capacidad.
4. **`plans`**: Historial de fichas de planificación diaria guardadas, estructuradas en formato JSONB para conservar rutas, juego libre y secuencias didácticas completas.

*Nota: Para inicializar la base de datos, ejecuta las sentencias del archivo [`supabase_schema.sql`](file:///c:/Users/Dell/Downloads/Kuska_Plan/PlanerGo/supabase_schema.sql) en el SQL Editor de tu proyecto de Supabase.*

---

## ⚙️ Configuración y Despliegue

### Requisitos y Alojamiento Estático
Al ser una aplicación web de cliente puro (HTML/CSS/JS estático), **Kuska Plan** no requiere un servidor backend dinámico, base de datos local ni procesos de compilación o dependencias pesadas de Node.js. 

Esto permite que pueda ser desplegada de forma instantánea y gratuita en cualquier plataforma de alojamiento estático en la nube, tales como:
- **GitHub Pages**
- **Vercel**
- **Netlify**
- **Cloudflare Pages**

Solo basta subir el repositorio y la página estará lista para su uso en producción.

### Configuración de Claves y Lógica Interna
La conexión a los servicios de terceros se maneja de forma centralizada en los archivos JavaScript del proyecto:
- **Supabase (Base de Datos y Autenticación):** El cliente se autoconfigura editando las constantes globales `SUPABASE_URL` y `SUPABASE_ANON_KEY` ubicadas al inicio del archivo [`js/app.js`](file:///c:/Users/Dell/Downloads/Kuska_Plan/PlanerGo/js/app.js).
- **Groq API Key (Inteligencia Artificial):** La clave global de la Inteligencia Artificial de Groq se encuentra integrada y ofuscada en la lógica interna de [`js/app.js`](file:///c:/Users/Dell/Downloads/Kuska_Plan/PlanerGo/js/app.js). Esto permite habilitar el uso inmediato de la IA para todas las docentes de manera transparente y sin necesidad de configuraciones individuales.

---

## 🎨 Personalización y Temas
La interfaz cuenta con opciones para alternar el acento cromático entre **Verde Menta** y **Lavanda**, además de soporte nativo para **Versión Nocturna (Tema Oscuro)** de alto contraste para disminuir la fatiga visual durante planificaciones nocturnas.
