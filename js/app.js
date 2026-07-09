// Main Application Logic & UI Bindings for Kuska Plan
// Configuración de Supabase (opcional - si se completan, el sistema se conecta a la base de datos de producción)
const SUPABASE_URL = "https://bsrnpneeuqhytzufwmpd.supabase.co"; 
const SUPABASE_ANON_KEY = "sb_publishable_wyfJ1cjUJTHjiaHpf9vXKg_HPd1OjiT";

// Configuración de Groq (si colocas aquí tu API Key de Groq, se activará de forma predeterminada para el aula)
const DEFAULT_GROQ_API_KEY = "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";

let supabaseClient = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY && typeof window.supabase !== "undefined") {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

let $ = {};

function initDOMCache() {
    $ = {
        // App screens
        authScreen: document.getElementById("auth-screen"),
        dashboardScreen: document.getElementById("dashboard-screen"),

        // Auth UI
        loginForm: document.getElementById("login-form"),
        teacherEmail: document.getElementById("teacher-email"),
        teacherPassword: document.getElementById("teacher-password"),
        togglePasswordBtn: document.getElementById("toggle-password"),
        loginFormWrapper: document.getElementById("login-form-wrapper"),
        registerFormWrapper: document.getElementById("register-form-wrapper"),
        linkShowRegister: document.getElementById("link-show-register"),
        linkShowLogin: document.getElementById("link-show-login"),
        registerForm: document.getElementById("register-form"),
        regTeacherName: document.getElementById("reg-teacher-name"),
        regTeacherEmail: document.getElementById("reg-teacher-email"),
        regTeacherPassword: document.getElementById("reg-teacher-password"),
        regIeName: document.getElementById("reg-ie-name"),
        regAulaName: document.getElementById("reg-aula-name"),
        regSchoolYear: document.getElementById("reg-school-year"),
        regAulaAge: document.getElementById("reg-aula-age"),

        // Sidebar Menu Links
        menuPlanificador: document.getElementById("menu-planificador"),
        menuCurriculo: document.getElementById("menu-curriculo"),
        menuAlumnos: document.getElementById("menu-alumnos"),
        menuRubricas: document.getElementById("menu-rubricas"),
        menuConfiguracion: document.getElementById("menu-configuracion"),
        menuHistorial: document.getElementById("menu-historial"),
        sidebarUserName: document.getElementById("sidebar-username"),
        sidebarAvatar: document.querySelector(".sidebar-profile .profile-avatar"),
        logoutBtn: document.getElementById("sidebar-logout"),

        // Views Panels
        panelPlanificador: document.getElementById("panel-planificador"),
        panelCurriculo: document.getElementById("panel-curriculo"),
        panelAlumnos: document.getElementById("panel-alumnos"),
        panelRubricas: document.getElementById("panel-rubricas"),
        panelConfiguracion: document.getElementById("panel-configuracion"),
        panelHistorial: document.getElementById("panel-historial"),
        btnSaveHistory: document.getElementById("btn-save-history"),
        btnClearHistory: document.getElementById("btn-clear-history"),
        btnSavePlanShortcut: document.getElementById("btn-save-plan-shortcut"),

        // Planner Wizard UI
        stepIndicators: document.querySelectorAll(".step-indicator"),
        stepContents: document.querySelectorAll(".step-content"),

        // Step A Age cards
        ageCards: document.querySelectorAll(".age-card"),
        ageBtnNext: document.getElementById("age-btn-next"),

        // Step B Situation
        situationTextarea: document.getElementById("situation-textarea"),
        suggestionItems: document.querySelectorAll(".suggestion-item"),
        situationBtnBack: document.getElementById("situation-btn-back"),
        situationBtnNext: document.getElementById("situation-btn-next"),

        // Tab Nav
        tabBtns: document.querySelectorAll(".tab-nav-btn"),
        tabPanels: document.querySelectorAll(".tab-panel"),

        // Tab 1: Routines
        routinesContainer: document.getElementById("routines-container"),

        // Tab 2: Free Play
        momentSteps: document.getElementById("moment-steps"),
        momentContentContainer: document.getElementById("moment-content-container"),
        momentBtnPrev: document.getElementById("moment-btn-prev"),
        momentBtnNext: document.getElementById("moment-btn-next"),

        // Tab 3: Session
        areaSelect: document.getElementById("area-select"),
        competenceSelect: document.getElementById("competence-select"),
        capacitiesContainer: document.getElementById("capacities-container"),
        transversalsContainer: document.getElementById("transversals-container"),
        didacticStepsNav: document.getElementById("didactic-steps-nav"),
        didacticStepsContent: document.getElementById("didactic-steps-content"),
        btnKuskaIa: document.getElementById("btn-kuska-ia"),

        // Step C button back
        stepCBtnBack: document.getElementById("step-c-btn-back"),
        stepCBtnNext: document.getElementById("step-c-btn-next"),
        stepDBtnBack: document.getElementById("step-d-btn-back"),
        btnStep4Copy: document.getElementById("btn-step4-copy"),
        btnStep4Print: document.getElementById("btn-step4-print"),
        step4DocumentContainer: document.getElementById("step4-document-container"),

        // Inclusion
        inclusionSwitch: document.getElementById("inclusion-switch"),
        inclusionDrawer: document.getElementById("inclusion-drawer"),
        inclusionRecList: document.getElementById("inclusion-rec-list"),

        // Evaluation Table & Stats
        evaluationTableHead: document.getElementById("evaluation-table-head"),
        evaluationTableBody: document.getElementById("evaluation-table-body"),
        btnAddStudent: document.getElementById("btn-add-student"),
        statLogrado: document.getElementById("stat-logrado"),
        statProceso: document.getElementById("stat-proceso"),
        statInicio: document.getElementById("stat-inicio"),

        // Currículo View Explorer
        curriculumSearchInput: document.getElementById("curriculum-search-input"),
        curriculumExplorerContainer: document.getElementById("curriculum-explorer-container"),

        // Mis Alumnos View Manager
        rosterAddBtn: document.getElementById("roster-add-btn"),
        rosterContainer: document.getElementById("roster-container"),
        globalNeeTagsContainer: document.getElementById("global-nee-tags-container"),
        newNeeTagInput: document.getElementById("new-nee-tag-input"),
        btnAddNeeTag: document.getElementById("btn-add-nee-tag"),

        // Configuración View
        configForm: document.getElementById("config-form"),
        configIeName: document.getElementById("config-ie-name"),
        configAulaName: document.getElementById("config-aula-name"),
        configTeacherTitle: document.getElementById("config-teacher-title"),
        configGroqKey: document.getElementById("config-groq-key"),
        btnGenerateAiReport: document.getElementById("btn-generate-ai-report"),
        configTeacherEmail: document.getElementById("config-teacher-email"),
        configTeacherPassword: document.getElementById("config-teacher-password"),
        configSchoolYear: document.getElementById("config-school-year"),
        configAulaAge: document.getElementById("config-aula-age"),
        configAvatarLarge: document.getElementById("config-avatar-large"),
        configProfileName: document.getElementById("config-profile-name"),
        configProfileEmail: document.getElementById("config-profile-email"),
        configProfileIe: document.getElementById("config-profile-ie"),
        configProfileAge: document.getElementById("config-profile-age"),
        configStatStudents: document.getElementById("config-stat-students"),
        configStatNee: document.getElementById("config-stat-nee"),
        btnModeLight: document.getElementById("btn-mode-light"),
        btnModeDark: document.getElementById("btn-mode-dark"),

        // Export Modal & Toast
        btnExportPlan: document.getElementById("btn-export-plan"),
        modalOverlay: document.getElementById("modal-overlay"),
        modalClose: document.getElementById("modal-close"),
        modalBody: document.getElementById("modal-body"),
        btnDownloadPdf: document.getElementById("btn-download-pdf"),
        btnCopyToClipboard: document.getElementById("btn-copy-clipboard"),
        toast: document.getElementById("toast"),
        toastText: document.getElementById("toast-text")
    };
}

// Start Application Boot
window.addEventListener("DOMContentLoaded", () => {
    initDOMCache();
    state.savedPlans = JSON.parse(localStorage.getItem("kuska_saved_plans")) || [];
    bindEvents();
    renderAuth();
});

// Bind Event Handlers
function bindEvents() {
    // Auth events
    $.togglePasswordBtn.addEventListener("click", togglePasswordVisibility);
    $.loginForm.addEventListener("submit", handleLogin);
    $.logoutBtn.addEventListener("click", handleLogout);

    // Auth view switching
    $.linkShowRegister.addEventListener("click", (e) => {
        e.preventDefault();
        $.loginFormWrapper.style.display = "none";
        $.registerFormWrapper.style.display = "block";
    });
    $.linkShowLogin.addEventListener("click", (e) => {
        e.preventDefault();
        $.registerFormWrapper.style.display = "none";
        $.loginFormWrapper.style.display = "block";
    });
    $.registerForm.addEventListener("submit", handleRegister);

    // Sidebar View Selector
    $.menuPlanificador.addEventListener("click", () => switchView("planificador"));
    $.menuCurriculo.addEventListener("click", () => switchView("curriculo"));
    $.menuAlumnos.addEventListener("click", () => switchView("alumnos"));
    $.menuRubricas.addEventListener("click", () => switchView("rubricas"));
    $.menuConfiguracion.addEventListener("click", () => switchView("configuracion"));
    $.menuHistorial.addEventListener("click", () => switchView("historial"));

    // Step indicators clicks
    $.stepIndicators.forEach((ind, index) => {
        ind.addEventListener("click", () => {
            if (state.selectedAge || index === 0) {
                goToStep(index + 1);
            }
        });
    });

    // Step A card selections (null-safe checking since step A is removed from wizard)
    if ($.ageCards) {
        $.ageCards.forEach(card => {
            card.addEventListener("click", () => {
                const age = card.getAttribute("data-age");
                selectAge(age);
            });
        });
    }
    if ($.ageBtnNext) {
        $.ageBtnNext.addEventListener("click", () => {
            if (state.selectedAge) {
                goToStep(2);
            } else {
                showToast("Por favor, selecciona una edad para planificar.", "warning");
            }
        });
    }

    // Step B Situation
    $.situationTextarea.addEventListener("input", (e) => {
        state.significantSituation = e.target.value;
    });

    $.situationBtnBack.addEventListener("click", () => goToStep(1));
    $.situationBtnNext.addEventListener("click", () => {
        if (state.significantSituation.trim() === "") {
            showToast("Por favor, describe brevemente la situación significativa.", "warning");
        } else {
            goToStep(2);
        }
    });

    // Tab switcher
    $.tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            switchScheduleTab(tabId);
        });
    });

    // Free Play Wizard Moment controls
    $.momentBtnPrev.addEventListener("click", prevFreePlayMoment);
    $.momentBtnNext.addEventListener("click", nextFreePlayMoment);

    // Dynamic Curriculum selectors
    $.areaSelect.addEventListener("change", handleAreaChange);
    $.competenceSelect.addEventListener("change", handleCompetenceChange);

    // Back and Next navigation for Step C & D
    if ($.stepCBtnBack) {
        $.stepCBtnBack.addEventListener("click", () => {
            if (state.activeScheduleTab === "session") {
                switchScheduleTab("play");
            } else if (state.activeScheduleTab === "play") {
                switchScheduleTab("routines");
            } else {
                goToStep(1); // Go back to Step 1: Situación
            }
        });
    }
    if ($.stepCBtnNext) {
        $.stepCBtnNext.addEventListener("click", () => {
            if (state.activeScheduleTab === "routines") {
                switchScheduleTab("play");
            } else if (state.activeScheduleTab === "play") {
                switchScheduleTab("session");
            } else {
                if (!state.session.selectedArea || !state.session.selectedCompetence) {
                    showToast("Selecciona el Área y Competencia en el Módulo de Sesión.", "warning");
                    return;
                }
                goToStep(3); // Transition to Step 3: Ficha Oficial
                renderStep4Document();
            }
        });
    }
    if ($.stepDBtnBack) $.stepDBtnBack.addEventListener("click", () => goToStep(2)); // Go back to Step 2: Jornada

    // Inclusion toggle
    $.inclusionSwitch.addEventListener("change", handleInclusionToggle);

    // AI Session generator button
    $.btnKuskaIa.addEventListener("click", generateLessonWithKuskaIa);
    if ($.btnGenerateAiReport) $.btnGenerateAiReport.addEventListener("click", generateEvaluationReportWithGroq);

    // Add Student
    if ($.btnAddStudent) $.btnAddStudent.addEventListener("click", addStudentFromRubric);
    if ($.rosterAddBtn) $.rosterAddBtn.addEventListener("click", addStudentFromRoster);
    if ($.btnAddNeeTag) $.btnAddNeeTag.addEventListener("click", addCustomNeeTag);

    // Curriculum search
    $.curriculumSearchInput.addEventListener("input", handleCurriculumSearch);

    // Config form save
    $.configForm.addEventListener("submit", handleConfigSave);

    // Theme selector options listener
    const themeButtons = document.querySelectorAll(".theme-opt-btn");
    themeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const theme = btn.getAttribute("data-theme");

            // Remove active classes
            themeButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Apply theme class to body
            document.body.classList.remove("theme-mint", "theme-lavender");
            document.body.classList.add(`theme-${theme}`);

            showToast(`Paleta cambiada a ${btn.querySelector('span:last-child').textContent}`, "success");
        });
    });

    // Screen Mode Toggles
    $.btnModeLight.addEventListener("click", () => {
        $.btnModeLight.classList.add("active");
        $.btnModeDark.classList.remove("active");
        document.body.classList.remove("theme-dark");
        showToast("Fondo claro activado", "success");
    });

    $.btnModeDark.addEventListener("click", () => {
        $.btnModeDark.classList.add("active");
        $.btnModeLight.classList.remove("active");
        document.body.classList.add("theme-dark");
        showToast("Versión nocturna activada", "success");
    });

    // Export plan (with null-safe checking since button-export-plan is removed from footer)
    if ($.btnExportPlan) $.btnExportPlan.addEventListener("click", openExportModal);
    if ($.modalClose) $.modalClose.addEventListener("click", closeExportModal);
    if ($.modalOverlay) {
        $.modalOverlay.addEventListener("click", (e) => {
            if (e.target === $.modalOverlay) closeExportModal();
        });
    }

    // Simulated downloads
    if ($.btnDownloadPdf) $.btnDownloadPdf.addEventListener("click", () => {
        simulatePdfDownload();
        saveActivePlanToHistory(true); // autosave silently on PDF export
    });
    if ($.btnCopyToClipboard) $.btnCopyToClipboard.addEventListener("click", () => {
        copyPlanToClipboard();
        saveActivePlanToHistory(true); // autosave silently on copy
    });
    if ($.btnSaveHistory) $.btnSaveHistory.addEventListener("click", () => saveActivePlanToHistory(false));
    if ($.btnClearHistory) $.btnClearHistory.addEventListener("click", clearPlansHistory);
    if ($.btnSavePlanShortcut) $.btnSavePlanShortcut.addEventListener("click", () => saveActivePlanToHistory(false));

    // Step 4 direct downloads
    if ($.btnStep4Print) $.btnStep4Print.addEventListener("click", simulatePdfDownload);
    if ($.btnStep4Copy) $.btnStep4Copy.addEventListener("click", copyPlanToClipboard);
}

// Router Logic: Switch Dashboard Views
function switchView(viewKey) {
    state.activeView = viewKey;

    // Sidebar active status
    const menuItems = [
        { key: "planificador", el: $.menuPlanificador },
        { key: "curriculo", el: $.menuCurriculo },
        { key: "alumnos", el: $.menuAlumnos },
        { key: "rubricas", el: $.menuRubricas },
        { key: "configuracion", el: $.menuConfiguracion },
        { key: "historial", el: $.menuHistorial }
    ];

    menuItems.forEach(item => {
        item.el.classList.remove("active");
        if (item.key === viewKey) {
            item.el.classList.add("active");
        }
    });

    // View panels switching
    const panels = [
        { key: "planificador", el: $.panelPlanificador },
        { key: "curriculo", el: $.panelCurriculo },
        { key: "alumnos", el: $.panelAlumnos },
        { key: "rubricas", el: $.panelRubricas },
        { key: "configuracion", el: $.panelConfiguracion },
        { key: "historial", el: $.panelHistorial }
    ];

    panels.forEach(p => {
        p.el.classList.remove("active");
        if (p.key === viewKey) {
            p.el.classList.add("active");
        }
    });

    // Handle view specific rendering
    if (viewKey === "curriculo") {
        renderCurriculumTabs();
        renderCurriculumExplorer();
    } else if (viewKey === "alumnos") {
        renderRosterManager();
    } else if (viewKey === "rubricas") {
        updateEvaluationTable();
        updateEvaluationStats();
    } else if (viewKey === "configuracion") {
        renderConfigForm();
    } else if (viewKey === "historial") {
        renderPlansHistory();
    }
}

// Auth Logic
function togglePasswordVisibility() {
    const type = $.teacherPassword.getAttribute("type") === "password" ? "text" : "password";
    $.teacherPassword.setAttribute("type", type);
    const eyeIcon = $.togglePasswordBtn.querySelector("i");
    if (type === "text") {
        eyeIcon.setAttribute("data-lucide", "eye-off");
    } else {
        eyeIcon.setAttribute("data-lucide", "eye");
    }
    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

// Local database helpers for multi-user simulation
function getStoredUsers() {
    return JSON.parse(localStorage.getItem("kuska_users")) || [];
}

function saveStoredUsers(users) {
    localStorage.setItem("kuska_users", JSON.stringify(users));
}

function findUserByEmail(email) {
    const users = getStoredUsers();
    return users.find(u => u.email.toLowerCase() === email.toLowerCase());
}

function saveUserData(email, data) {
    const users = getStoredUsers();
    const idx = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    if (idx !== -1) {
        users[idx] = { ...users[idx], ...data };
        saveStoredUsers(users);
    }
}

async function saveCurrentUserSession() {
    if (!state.currentUser) return;

    // Local storage fallback
    saveUserData(state.currentUser.email, {
        config: state.config,
        students: state.evaluation.students,
        rubrics: state.evaluation.rubrics,
        savedPlans: state.savedPlans
    });

    // Supabase sync
    if (supabaseClient) {
        try {
            const { data: { user } } = await supabaseClient.auth.getUser();
            if (!user) return;
            const userId = user.id;

            // 1. Sync Profile
            await supabaseClient.from('profiles').upsert({
                id: userId,
                email: state.currentUser.email,
                ie_name: state.config.ieName,
                aula_name: state.config.aulaName,
                aula_age: state.config.aulaAge,
                teacher_title: state.config.teacherTitle,
                school_year: state.config.schoolYear
            });
            
            // Sync Groq Key to User Metadata
            await supabaseClient.auth.updateUser({
                data: {
                    groq_api_key: state.config.groqApiKey || ""
                }
            });

            // 2. Sync Students (Delete first, then insert to preserve list state)
            await supabaseClient.from('students').delete().eq('user_id', userId);
            if (state.evaluation.students.length > 0) {
                const studentsData = state.evaluation.students.map(s => ({
                    id: s.id,
                    user_id: userId,
                    name: s.name,
                    nee: s.nee
                }));
                await supabaseClient.from('students').insert(studentsData);
            }

            // 3. Sync Rubrics (Delete first, then insert)
            await supabaseClient.from('rubrics').delete().eq('user_id', userId);
            const rubricsData = [];
            for (const studentId in state.evaluation.rubrics) {
                const studentGrades = state.evaluation.rubrics[studentId];
                for (const capacity in studentGrades) {
                    rubricsData.push({
                        user_id: userId,
                        student_id: parseInt(studentId),
                        capacity: capacity,
                        grade: studentGrades[capacity]
                    });
                }
            }
            if (rubricsData.length > 0) {
                await supabaseClient.from('rubrics').insert(rubricsData);
            }

            // 4. Sync Plans (Delete first, then insert)
            await supabaseClient.from('plans').delete().eq('user_id', userId);
            if (state.savedPlans.length > 0) {
                const plansData = state.savedPlans.map(p => ({
                    id: p.id,
                    user_id: userId,
                    title: p.title || '',
                    age: p.age,
                    area: p.area,
                    competence: p.competence,
                    capacities: p.capacities,
                    situation: p.situation,
                    free_play: p.freePlay,
                    routines: p.routines,
                    routines_checked: p.routinesChecked,
                    didactic_steps: p.didacticSteps,
                    transversals: p.transversals
                }));
                await supabaseClient.from('plans').insert(plansData);
            }
        } catch (err) {
            console.error("Error syncing to Supabase:", err);
        }
    }
}

async function handleLogin(e) {
    e.preventDefault();
    const email = $.teacherEmail.value.trim();
    const password = $.teacherPassword.value.trim();
    if (!email || !password) {
        showToast("Por favor ingresa correo y contraseña.", "warning");
        return;
    }

    // Supabase auth
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });
            if (error) {
                showToast("Error de acceso: " + error.message, "error");
                return;
            }

            const userId = data.user.id;
            const userName = data.user.user_metadata?.name || email.split('@')[0];

            // Load from Supabase tables
            const { data: profile } = await supabaseClient.from('profiles').select('*').eq('id', userId).single();
            const { data: students } = await supabaseClient.from('students').select('*').eq('user_id', userId);
            const { data: rubrics } = await supabaseClient.from('rubrics').select('*').eq('user_id', userId);
            const { data: plans } = await supabaseClient.from('plans').select('*').eq('user_id', userId);

            state.currentUser = {
                email: email,
                name: profile?.teacher_title || userName,
                password: password
            };

            state.config = {
                ieName: profile?.ie_name || "",
                aulaName: profile?.aula_name || "",
                aulaAge: profile?.aula_age || "4_anios",
                teacherTitle: profile?.teacher_title || userName,
                schoolYear: profile?.school_year || "",
                groqApiKey: data.user.user_metadata?.groq_api_key || ""
            };

            state.evaluation.students = (students || []).map(s => ({
                id: s.id,
                name: s.name,
                nee: s.nee || []
            }));

            state.evaluation.rubrics = {};
            (rubrics || []).forEach(r => {
                if (!state.evaluation.rubrics[r.student_id]) {
                    state.evaluation.rubrics[r.student_id] = {};
                }
                state.evaluation.rubrics[r.student_id][r.capacity] = r.grade;
            });

            state.savedPlans = (plans || []).map(p => ({
                id: p.id,
                title: p.title || '',
                age: p.age,
                area: p.area,
                competence: p.competence,
                capacities: p.capacities,
                situation: p.situation,
                freePlay: p.free_play,
                routines: p.routines,
                routinesChecked: p.routines_checked,
                didacticSteps: p.didactic_steps,
                transversals: p.transversals
            }));

            state.selectedAge = state.config.aulaAge;
            updateInclusionDrawer();
            renderSituationSuggestions();
            renderDashboard();
            showToast(`¡Bienvenida de nuevo a Supabase, ${state.currentUser.name}!`, "success");
            return;
        } catch (err) {
            showToast("Error de comunicación con Supabase: " + err.message, "error");
            return;
        }
    }

    // Local storage fallback
    const user = findUserByEmail(email);
    if (!user) {
        showToast("Este correo no está registrado. Regístrate primero.", "error");
        return;
    }

    if (user.password !== password) {
        showToast("Contraseña incorrecta.", "error");
        return;
    }

    state.currentUser = {
        email: user.email,
        name: user.name,
        password: user.password
    };
    state.config = user.config || { ieName: "", aulaName: "", aulaAge: "4_anios", teacherTitle: user.name, schoolYear: "", groqApiKey: "" };
    state.evaluation.students = user.students || [];
    state.evaluation.rubrics = user.rubrics || {};
    state.savedPlans = user.savedPlans || [];
    state.selectedAge = state.config.aulaAge;

    updateInclusionDrawer();
    renderSituationSuggestions();
    renderDashboard();
    showToast(`¡Bienvenida de nuevo, ${state.currentUser.name}!`, "success");
}

async function handleRegister(e) {
    e.preventDefault();
    const name = $.regTeacherName.value.trim();
    const email = $.regTeacherEmail.value.trim();
    const password = $.regTeacherPassword.value.trim();
    const ieName = $.regIeName.value.trim();
    const aulaName = $.regAulaName.value.trim();
    const aulaAge = $.regAulaAge ? $.regAulaAge.value : "4_anios";
    const schoolYear = $.regSchoolYear.value.trim();

    if (!name || !email || !password) {
        showToast("Nombre, Correo y Contraseña son obligatorios.", "warning");
        return;
    }

    if (password.length < 8) {
        showToast("La contraseña debe tener al menos 8 caracteres.", "error");
        return;
    }

    // Supabase auth register
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        name: name
                    }
                }
            });
            if (error) {
                showToast("Error de registro: " + error.message, "error");
                return;
            }

            // Insert profile details
            const { error: profileError } = await supabaseClient.from('profiles').update({
                ie_name: ieName,
                aula_name: aulaName,
                aula_age: aulaAge,
                teacher_title: name,
                school_year: schoolYear
            }).eq('id', data.user.id);

            if (profileError) {
                console.error("Error creating Supabase user profile table entry:", profileError);
            }

            state.currentUser = {
                name: name,
                email: email,
                password: password
            };
            state.selectedAge = aulaAge;
            state.config = {
                ieName: ieName,
                aulaName: aulaName,
                aulaAge: aulaAge,
                teacherTitle: name,
                schoolYear: schoolYear,
                groqApiKey: ""
            };
            state.evaluation.students = [];
            state.evaluation.rubrics = {};
            state.savedPlans = [];

            updateInclusionDrawer();
            renderSituationSuggestions();
            renderDashboard();
            showToast(`¡Perfil creado con éxito en Supabase! Bienvenida, ${name}`, "success");
            return;
        } catch (err) {
            showToast("Error al conectar con Supabase: " + err.message, "error");
            return;
        }
    }

    // Local storage register
    const existing = findUserByEmail(email);
    if (existing) {
        showToast("El correo electrónico ya está registrado.", "error");
        return;
    }

    const newUser = {
        name: name,
        email: email,
        password: password,
        config: {
            ieName: ieName,
            aulaName: aulaName,
            aulaAge: aulaAge,
            teacherTitle: name,
            schoolYear: schoolYear,
            groqApiKey: ""
        },
        students: [],
        rubrics: {},
        savedPlans: []
    };

    const users = getStoredUsers();
    users.push(newUser);
    saveStoredUsers(users);

    state.currentUser = {
        name: name,
        email: email,
        password: password
    };
    state.selectedAge = aulaAge;
    state.config = newUser.config;
    state.evaluation.students = [];
    state.evaluation.rubrics = {};
    state.savedPlans = [];

    updateInclusionDrawer();
    renderSituationSuggestions();
    renderDashboard();
    showToast(`¡Perfil creado con éxito! Bienvenida, ${name}`, "success");
}

async function handleLogout() {
    if (supabaseClient) {
        await supabaseClient.auth.signOut();
    }

    state.currentUser = null;
    state.selectedAge = null;
    state.significantSituation = "";
    state.session.selectedArea = "";
    state.session.selectedCompetence = "";
    state.session.selectedCapacities = [];
    state.session.isInclusionActive = false;
    state.savedPlans = [];
    state.evaluation.students = [];
    state.evaluation.rubrics = {};
    $.inclusionSwitch.checked = false;
    $.inclusionDrawer.style.display = "none";
    $.situationTextarea.value = "";

    $.ageCards.forEach(c => c.classList.remove("active"));
    renderAuth();
}

function renderAuth() {
    $.authScreen.style.display = "flex";
    $.dashboardScreen.style.display = "none";

    // Show login form, hide register form by default
    $.loginFormWrapper.style.display = "block";
    $.registerFormWrapper.style.display = "none";

    // Reset login values
    $.teacherEmail.value = "";
    $.teacherPassword.value = "";

    // Reset registration values
    $.regTeacherName.value = "";
    $.regTeacherEmail.value = "";
    $.regTeacherPassword.value = "";
    $.regIeName.value = "";
    $.regAulaName.value = "";
    $.regSchoolYear.value = "";

    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

function renderDashboard() {
    $.authScreen.style.display = "none";
    $.dashboardScreen.style.display = "grid";
    $.sidebarUserName.textContent = state.currentUser.name;

    if ($.sidebarAvatar) {
        $.sidebarAvatar.textContent = state.currentUser.name.charAt(0).toUpperCase() || "M";
    }

    state.selectedAge = state.config.aulaAge || "4_anios";
    updateInclusionDrawer();

    switchView("planificador");
    goToStep(1);
    switchScheduleTab("routines");

    setupRoutinesUI();
    setupFreePlayWizard();
    setupCurriculumSelectors();
    setupTransversalsUI();

    updateEvaluationTable();
    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

// Step Navigation
function goToStep(stepNum) {
    state.currentStep = stepNum;

    $.stepIndicators.forEach((ind, index) => {
        const stepIndex = index + 1;
        ind.classList.remove("active", "completed");

        if (stepIndex === state.currentStep) {
            ind.classList.add("active");
        } else if (stepIndex < state.currentStep) {
            ind.classList.add("completed");
        }
    });

    $.stepContents.forEach((content, index) => {
        const stepIndex = index + 1;
        content.classList.remove("active");
        if (stepIndex === state.currentStep) {
            content.classList.add("active");
        }
    });

    if (stepNum === 1) {
        renderSituationSuggestions();
    }
    if (stepNum === 2) {
        switchScheduleTab(state.activeScheduleTab || "routines");
    }
}

// Select Age
function selectAge(ageKey) {
    state.selectedAge = ageKey;
    $.ageCards.forEach(card => {
        card.classList.remove("active");
        if (card.getAttribute("data-age") === ageKey) {
            card.classList.add("active");
        }
    });

    // Auto-update inclusion suggestions when age changes
    updateInclusionDrawer();
    showToast(`Edad seleccionada: ${ageKey === "3_anios" ? "3 años" : ageKey === "4_anios" ? "4 años" : "5 años"}`, "success");
}

// Switch Schedule tabs
function switchScheduleTab(tabId) {
    state.activeScheduleTab = tabId;

    $.tabBtns.forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-tab") === tabId) {
            btn.classList.add("active");
        }
    });

    $.tabPanels.forEach(panel => {
        panel.classList.remove("active");
        if (panel.id === `tab-${tabId}`) {
            panel.classList.add("active");
        }
    });

    // Dynamic bottom navigation buttons text
    if ($.stepCBtnNext) {
        if (tabId === "routines") {
            $.stepCBtnNext.innerHTML = `<span>Siguiente: Juego Libre</span> <i data-lucide="arrow-right" class="icon-sm"></i>`;
        } else if (tabId === "play") {
            $.stepCBtnNext.innerHTML = `<span>Siguiente: Sesión</span> <i data-lucide="arrow-right" class="icon-sm"></i>`;
        } else {
            $.stepCBtnNext.innerHTML = `<span>Ver Ficha Oficial</span> <i data-lucide="file-text" class="icon-sm"></i>`;
        }
    }

    if ($.stepCBtnBack) {
        if (tabId === "routines") {
            $.stepCBtnBack.innerHTML = `<i data-lucide="arrow-left" class="icon-sm"></i> <span>Atrás</span>`;
        } else if (tabId === "play") {
            $.stepCBtnBack.innerHTML = `<i data-lucide="arrow-left" class="icon-sm"></i> <span>Anterior: Rutinas</span>`;
        } else {
            $.stepCBtnBack.innerHTML = `<i data-lucide="arrow-left" class="icon-sm"></i> <span>Anterior: Juego Libre</span>`;
        }
    }

    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

// Tab 1: Routines Layout Initialization
// Tab 1: Routines Layout Initialization
function setupRoutinesUI() {
    $.routinesContainer.innerHTML = "";

    const categories = [
        { key: "recibimiento", title: "Rutinas de Recibimiento", icon: "sun" },
        { key: "higiene", title: "Rutinas de Higiene", icon: "droplet" },
        { key: "alimentacion", title: "Rutinas de Alimentación", icon: "apple" }
    ];

    if (!state.routinesChecked) {
        state.routinesChecked = {
            recibimiento: {},
            higiene: {},
            alimentacion: {}
        };
    }

    categories.forEach(cat => {
        const card = document.createElement("div");
        card.className = "routine-card";

        let headerColorClass = cat.key;

        card.innerHTML = `
            <h4 class="routine-card-title ${headerColorClass}">
                <i data-lucide="${cat.icon}" class="icon-sm"></i>
                <span>${cat.title}</span>
            </h4>
            <div class="routine-list" id="routine-list-${cat.key}"></div>
        `;

        $.routinesContainer.appendChild(card);
        const listDiv = card.querySelector(`#routine-list-${cat.key}`);

        state.routines[cat.key].forEach((item, index) => {
            const label = document.createElement("label");
            label.className = "routine-checkbox-item";
            label.style = "display: flex; align-items: center; justify-content: space-between; width: 100%; cursor: pointer; padding: 0.35rem 0.6rem; border-radius: var(--radius-sm); transition: var(--transition);";

            const isChecked = state.routinesChecked[cat.key][item] !== false;

            label.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.6rem; flex: 1;">
                    <input type="checkbox" ${isChecked ? 'checked' : ''} data-category="${cat.key}" data-index="${index}">
                    <span style="font-size: 0.82rem; color: var(--text-main); font-weight: 500;">${item}</span>
                </div>
                <button type="button" class="btn-delete-routine" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 0.2rem; display: flex; align-items: center; opacity: 0.6; transition: opacity 0.2s;" title="Eliminar rutina">
                    <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                </button>
            `;

            listDiv.appendChild(label);

            const chk = label.querySelector("input[type='checkbox']");
            chk.addEventListener("change", (e) => {
                state.routinesChecked[cat.key][item] = e.target.checked;
            });

            const delBtn = label.querySelector(".btn-delete-routine");
            delBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                state.routines[cat.key] = state.routines[cat.key].filter((_, idx) => idx !== index);
                setupRoutinesUI();
            });
        });

        const addBlock = document.createElement("div");
        addBlock.className = "routine-add-block";
        addBlock.style = "display: flex; gap: 0.5rem; margin-top: 1rem; padding: 0 0.5rem;";
        addBlock.innerHTML = `
            <input type="text" class="routine-custom-input" placeholder="Nueva rutina..." style="flex: 1; margin: 0; padding: 0.5rem; font-size: 0.8rem; border-radius: var(--radius-md); border: 1.5px solid var(--border-color); background-color: var(--bg-app); color: var(--text-main);">
            <button type="button" class="btn btn-secondary btn-add-routine-submit" style="padding: 0.5rem 0.8rem; width: auto; display: flex; align-items: center; justify-content: center; font-weight: bold; border-radius: var(--radius-md); border: 1.5px solid var(--border-color); background-color: var(--white); cursor: pointer;" title="Agregar rutina">
                <i data-lucide="plus" style="width: 16px; height: 16px; color: var(--primary);"></i>
            </button>
        `;

        const addInput = addBlock.querySelector(".routine-custom-input");
        const addBtn = addBlock.querySelector(".btn-add-routine-submit");

        const submitRoutine = () => {
            const val = addInput.value.trim();
            if (val) {
                state.routines[cat.key].push(val);
                state.routinesChecked[cat.key][val] = true;
                setupRoutinesUI();
            }
        };

        addBtn.addEventListener("click", submitRoutine);
        addInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                submitRoutine();
            }
        });

        card.appendChild(addBlock);
    });

    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

// Tab 2: Free Play Sectors Setup
function setupFreePlayWizard() {
    renderFreePlayMoment();
}

function getThematicContext(situationText) {
    const text = (situationText || "").toLowerCase();
    if (text.includes("animales") || text.includes("fauna")) {
        return {
            topic: "los animales de la comunidad",
            toy: "animales de juguete, maquetas de granjas o veterinaria",
            drawing: "los animales que investigaron en el sector de ciencias",
            song: "El baile de los animales"
        };
    } else if (text.includes("gota") || text.includes("agua")) {
        return {
            topic: "el ciclo del agua y el cuidado ambiental",
            toy: "goteros, embudos, recipientes con agua y barquitos",
            drawing: "el viaje de la gota de agua en los sectores",
            song: "El agua es vida"
        };
    } else if (text.includes("tiendita") || text.includes("tienda")) {
        return {
            topic: "la compra y venta en nuestra tiendita",
            toy: "cajas registradoras de juguete, monedas de papel y productos del aula",
            drawing: "la tiendita y las compras de hoy",
            song: "A comprar en la tiendita"
        };
    } else if (text.includes("emociones") || text.includes("cuerpo")) {
        return {
            topic: "nuestras emociones y expresiones del cuerpo",
            toy: "espejos, títeres de emociones y tarjetas de gestos",
            drawing: "cómo nos sentimos hoy en los rincones",
            song: "Si estás feliz"
        };
    } else {
        return {
            topic: "el tema y juego del día",
            toy: "juguetes de construcción, hogar y materiales del rincón",
            drawing: "lo que construimos y simulan en los sectores",
            song: "El tren de los sectores"
        };
    }
}

const FREE_PLAY_SUGGESTIONS = [
    // Moment 1: Planificación
    [
        "Nos sentamos en círculo, cantamos la canción '{song}'. Cada niño elige su sector preferido levantando su foto y colocándola en el panel para jugar sobre {topic}.",
        "Un títere de mano nos visita en asamblea y nos propone ideas sobre {topic} para jugar hoy en los sectores. Los niños expresan su rincón elegido.",
        "Presentamos una caja con objetos especiales relacionados con {topic} (como {toy}). El niño que saca un objeto decide a qué rincón irá."
    ],
    // Moment 2: Organización
    [
        "Los niños se distribuyen en grupos en el rincón elegido. Conversan sobre qué roles asumirán relacionados con {topic} y se colocan distintivos sencillos.",
        "Se organizan en parejas y eligen los materiales de {topic} (como {toy}) para coordinar qué jugarán y qué normas de cuidado recordarán.",
        "Se agrupan en el sector y conversan sobre qué juego construirán hoy relacionado con {topic}, asignando responsabilidades cooperativas."
    ],
    // Moment 3: Ejecución
    [
        "Los niños juegan libremente asumiendo roles de {topic} en el rincón de Hogar, Ciencias o Construcción. La docente observa y registra interacciones.",
        "Manipulan bloques y maderas para crear escenarios sobre {topic} (granjas, ríos, tiendas). La docente media turnos de uso de {toy}.",
        "Juego de roles activo utilizando {toy}. La docente participa sutilmente en el juego respondiendo a las ideas de los niños sobre {topic}."
    ],
    // Moment 4: Orden
    [
        "Cantamos la canción 'A guardar cada cosa en su lugar'. Los niños ordenan los materiales de {topic} (como {toy}) en sus respectivas cajas.",
        "Jugamos a ser 'superhéroes del orden de {topic}'. Cada grupo organiza su sector para dejarlo impecable.",
        "Colocamos un reloj de arena de 5 minutos. Los niños ordenan {toy} de manera colaborativa antes de que caiga la arena."
    ],
    // Moment 5: Socialización
    [
        "Volvemos al círculo de asamblea. Los niños toman el 'micrófono parlante' y comentan de forma voluntaria a qué jugaron sobre {topic}.",
        "En círculo, cada grupo hace una mímica del juego de {topic} que representaron hoy en los sectores y los demás adivinan.",
        "Preguntamos: ¿Qué fue lo que más les gustó de jugar sobre {topic}? ¿Cómo solucionaron problemas de compartir {toy}?"
    ],
    // Moment 6: Representación
    [
        "Entregamos hojas de papel y crayones. Los niños dibujan {drawing} y socializan sus dibujos.",
        "Los niños modelan con plastilina o masa casera {drawing} o el personaje principal de su juego.",
        "En un papelógrafo compartido por rincón, plasman de forma gráfica {drawing} utilizando stickers o recortes."
    ]
];

function autoPopulateFreePlayMoments() {
    const context = getThematicContext(state.significantSituation);
    state.freePlay.moments.forEach((moment, idx) => {
        const defaultTexts = [
            "Nos sentamos en asamblea en círculo",
            "Los niños se desplazan al sector",
            "Los niños interactúan de forma creativa",
            "Cantamos 'A guardar",
            "Volvemos al círculo",
            "Entregamos hojas de papel"
        ];
        const isDefault = defaultTexts.some(def => moment.content.startsWith(def)) || !moment.content.trim();

        if (isDefault) {
            const rawSug = FREE_PLAY_SUGGESTIONS[idx][0];
            const populated = rawSug
                .replace(/{song}/g, context.song)
                .replace(/{topic}/g, context.topic)
                .replace(/{toy}/g, context.toy)
                .replace(/{drawing}/g, context.drawing);
            moment.content = populated;
        }
    });
}

function renderFreePlayMoment() {
    const curIndex = state.freePlay.currentMoment;
    autoPopulateFreePlayMoments();
    const moment = state.freePlay.moments[curIndex];

    // Resolve thematic replacements based on Paso B Situation
    const context = getThematicContext(state.significantSituation);
    const suggestions = (FREE_PLAY_SUGGESTIONS[curIndex] || []).map(s => {
        return s.replace(/{song}/g, context.song)
            .replace(/{topic}/g, context.topic)
            .replace(/{toy}/g, context.toy)
            .replace(/{drawing}/g, context.drawing);
    });

    $.momentSteps.innerHTML = "";
    state.freePlay.moments.forEach((m, idx) => {
        const stepDiv = document.createElement("div");
        stepDiv.className = `moment-step ${idx === curIndex ? 'active' : ''} ${idx < curIndex ? 'completed' : ''}`;
        stepDiv.addEventListener("click", () => {
            state.freePlay.currentMoment = idx;
            renderFreePlayMoment();
        });

        stepDiv.innerHTML = `
            <div class="moment-dot">${idx + 1}</div>
            <span class="moment-label">${m.name}</span>
        `;
        $.momentSteps.appendChild(stepDiv);
    });

    const line = document.createElement("div");
    line.className = "moments-line";
    $.momentSteps.appendChild(line);

    $.momentBtnPrev.disabled = curIndex === 0;
    if (curIndex === 5) {
        $.momentBtnNext.innerHTML = `<span>Finalizar Secuencia</span> <i data-lucide="check" class="icon-sm"></i>`;
    } else {
        $.momentBtnNext.innerHTML = `<span>Siguiente Momento</span> <i data-lucide="arrow-right" class="icon-sm"></i>`;
    }

    $.momentContentContainer.innerHTML = `
        <div class="moment-header">
            <span class="moment-badge">Momento ${curIndex + 1} de 6</span>
            <h3 class="moment-title">${moment.name}</h3>
        </div>
        <p class="moment-description">${moment.desc}</p>
        
        <div class="moment-grid-layout">
            <div class="moment-editor-left">
                <div class="moment-input-group" style="margin: 0;">
                    <label class="form-label" style="font-weight: 700;">Estrategias y Actividades del Docente</label>
                    <textarea class="moment-textarea" placeholder="Describe cómo guiarás este momento..." style="min-height: 290px; padding: 1.2rem; font-size: 1.05rem; line-height: 1.6; font-weight: 500; border-radius: var(--radius-md); border: 1.5px solid var(--border-color); box-shadow: var(--shadow-soft);">${moment.content}</textarea>
                </div>
            </div>
            
            <div class="moment-suggestions-right" style="border-left: 2.5px solid var(--border-color); padding-left: 1.5rem; display: flex; flex-direction: column;">
                <h5 style="font-size: 0.88rem; font-weight: 800; color: var(--primary); margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.4rem; margin-top: 0;">
                    <i data-lucide="sparkles" class="icon-sm"></i>
                    <span>Estrategias sugeridas:</span>
                </h5>
                <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                    ${suggestions.map((s, sIdx) => `
                        <div class="moment-suggestion-item" data-value="${s.replace(/"/g, '&quot;')}" style="background-color: var(--white); border: 1.5px solid var(--border-color); padding: 1rem 1.25rem; border-radius: var(--radius-md); transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1); cursor: pointer; font-size: 0.95rem; font-weight: 600; color: var(--text-main); line-height: 1.5; box-shadow: var(--shadow-soft); display: flex; align-items: start; gap: 0.6rem;">
                            <span style="color: var(--primary); font-size: 1.1rem; line-height: 1; flex-shrink: 0; margin-top: 0.1rem;">✨</span>
                            <div style="flex: 1;">
                                <span style="display: block; font-size: 0.76rem; font-weight: 800; color: var(--primary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.2rem;">Opción ${sIdx + 1}</span>
                                <span>${s}</span>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
    `;

    const textarea = $.momentContentContainer.querySelector(".moment-textarea");
    textarea.addEventListener("input", (e) => {
        state.freePlay.moments[curIndex].content = e.target.value;
    });

    const suggestionItems = $.momentContentContainer.querySelectorAll(".moment-suggestion-item");
    suggestionItems.forEach(item => {
        item.style.transition = "all 0.2s ease";

        item.addEventListener("click", () => {
            const val = item.getAttribute("data-value");
            textarea.value = val;
            state.freePlay.moments[curIndex].content = val;
            showToast("Estrategia sugerida aplicada.", "success");
        });

        item.addEventListener("mouseenter", () => {
            item.style.borderColor = "var(--primary)";
            item.style.backgroundColor = "var(--primary-light)";
            item.style.transform = "translateX(4px)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.borderColor = "var(--border-color)";
            item.style.backgroundColor = "var(--white)";
            item.style.transform = "none";
        });
    });

    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

function prevFreePlayMoment() {
    if (state.freePlay.currentMoment > 0) {
        state.freePlay.currentMoment--;
        renderFreePlayMoment();
    }
}

function nextFreePlayMoment() {
    if (state.freePlay.currentMoment < 5) {
        state.freePlay.currentMoment++;
        renderFreePlayMoment();
    } else {
        showToast("¡Secuencia de Juego Libre en Sectores guardada!", "success");
        switchScheduleTab("session");
    }
}

// Tab 3: Curriculum Relational Selectors & Session Development
// Tab 3: Curriculum Relational Selectors & Session Development
function setupCurriculumSelectors() {
    $.areaSelect.innerHTML = `<option value="">-- Selecciona el Área Curricular --</option>`;
    for (const key in CURRICULUM_DATA) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = CURRICULUM_DATA[key].name;
        $.areaSelect.appendChild(option);
    }
}

function handleAreaChange() {
    const areaKey = $.areaSelect.value;
    state.session.selectedArea = areaKey;
    state.session.selectedCompetence = "";
    state.session.selectedCapacities = [];

    const compContainer = document.getElementById("competencies-checkbox-container");
    if (compContainer) {
        compContainer.innerHTML = "";
    }
    $.capacitiesContainer.innerHTML = `<p class="text-muted" style="font-size:0.8rem; margin: 0;">Selecciona una o más competencias para listar las capacidades.</p>`;

    if (areaKey && CURRICULUM_DATA[areaKey]) {
        const competencies = CURRICULUM_DATA[areaKey].competencies;
        for (const compKey in competencies) {
            const label = document.createElement("label");
            label.className = "competence-checkbox-item";
            label.style = "display: flex; align-items: flex-start; gap: 0.5rem; cursor: pointer; font-size: 0.8rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.4rem; padding: 0.2rem; transition: var(--transition);";
            label.innerHTML = `
                <input type="checkbox" value="${compKey}" style="margin-top: 0.15rem; width: 15px; height: 15px; accent-color: var(--primary);">
                <span>${competencies[compKey].name}</span>
            `;
            if (compContainer) compContainer.appendChild(label);

            const checkbox = label.querySelector("input");
            checkbox.addEventListener("change", () => {
                handleCompetenciesToggle();
            });
        }
        setupDidacticFlow();
    } else {
        if (compContainer) compContainer.innerHTML = `<p class="text-muted" style="font-size:0.8rem; margin:0;">Selecciona un área curricular primero.</p>`;
        clearDidacticFlow();
    }

    updateInclusionDrawer();
    updateEvaluationTable();
}

function handleCompetenciesToggle() {
    const areaKey = state.session.selectedArea;
    const compContainer = document.getElementById("competencies-checkbox-container");
    if (!compContainer) return;
    const checkedCheckboxes = compContainer.querySelectorAll("input:checked");

    const selectedCompKeys = Array.from(checkedCheckboxes).map(cb => cb.value);
    state.session.selectedCompetence = selectedCompKeys.join(",");
    state.session.selectedCapacities = [];

    $.capacitiesContainer.innerHTML = "";

    if (areaKey && selectedCompKeys.length > 0) {
        const labelText = document.createElement("span");
        labelText.className = "capacities-label";
        labelText.textContent = "Capacidades:";
        labelText.style = "font-weight: 700; font-size: 0.85rem; color: var(--text-main); margin-bottom: 0.5rem; display: block;";
        $.capacitiesContainer.appendChild(labelText);

        const scrollDiv = document.createElement("div");
        scrollDiv.className = "capacities-container";
        scrollDiv.style = "display: flex; flex-direction: column; gap: 0.5rem; flex: 1; overflow-y: auto; background-color: var(--bg-app); padding: 0.8rem; border-radius: var(--radius-md); border: 1.5px solid var(--border-color);";

        selectedCompKeys.forEach(compKey => {
            const compObj = CURRICULUM_DATA[areaKey].competencies[compKey];
            if (compObj) {
                compObj.capacities.forEach((cap) => {
                    const itemLabel = document.createElement("label");
                    itemLabel.className = "capacity-checkbox-item checked";
                    itemLabel.style = "display: flex; align-items: flex-start; gap: 0.5rem; cursor: pointer; font-size: 0.78rem; font-weight: 500; color: var(--text-main); background: var(--white); border: 1px solid var(--border-color); padding: 0.5rem 0.8rem; border-radius: var(--radius-sm); transition: var(--transition);";
                    itemLabel.innerHTML = `
                        <input type="checkbox" checked data-capacity="${cap}" style="margin-top: 0.1rem; width: 14px; height: 14px; accent-color: var(--primary);">
                        <span class="capacity-text">${cap}</span>
                    `;

                    state.session.selectedCapacities.push(cap);

                    const checkbox = itemLabel.querySelector("input");
                    checkbox.addEventListener("change", (e) => {
                        if (e.target.checked) {
                            state.session.selectedCapacities.push(cap);
                            itemLabel.classList.add("checked");
                        } else {
                            state.session.selectedCapacities = state.session.selectedCapacities.filter(c => c !== cap);
                            itemLabel.classList.remove("checked");
                        }
                        updateEvaluationTable();
                        updateEvaluationStats();
                    });

                    scrollDiv.appendChild(itemLabel);
                });
            }
        });

        $.capacitiesContainer.appendChild(scrollDiv);
        triggerInstantPlanGeneration();
    } else {
        $.capacitiesContainer.innerHTML = `<p class="text-muted" style="font-size:0.8rem; margin:0;">Selecciona competencias para listar capacidades.</p>`;
        clearDidacticFlow();
    }

    updateEvaluationTable();
}

function handleCompetenceChange() {
    handleCompetenciesToggle();
}

/**
 * AUTOMATION: Compiles and populates context, routines, sectors, and sessions instantly.
 */
function triggerInstantPlanGeneration() {
    const age = state.selectedAge || "4_anios";
    const area = state.session.selectedArea;
    const comp = state.session.selectedCompetence;

    if (!age || !area || !comp) return;

    const primaryComp = comp.split(",")[0];
    const plan = getAutomaticPlan(age, area, primaryComp);

    // Sync title and materials to state
    state.session.title = plan.title;
    state.session.materials = plan.materials;

    // 1. Context & Significant Situation auto-fill
    state.significantSituation = plan.situation;
    $.situationTextarea.value = plan.situation;

    // 2. Free play moments auto-fill
    state.freePlay.moments = plan.freePlay;
    renderFreePlayMoment();

    // 3. Didactic Steps auto-fill
    state.session.didacticSteps = plan.didacticSteps;
    state.session.activeDidacticStep = 0;
    renderDidacticSteps();

    // 4. Update evaluations lists with random grades for mockup realism
    state.evaluation.students.forEach(st => {
        state.session.selectedCapacities.forEach(cap => {
            getStudentGrade(st.id, cap); // forces creation
        });
    });

    // Sync routines values
    state.routines.recibimiento = plan.routines.recibimiento;
    state.routines.higiene = plan.routines.higiene;
    state.routines.alimentacion = plan.routines.alimentacion;
    setupRoutinesUI();

    updateEvaluationTable();
    updateEvaluationStats();
    updateInclusionDrawer();

    showToast("¡Planificación curricular autocompletada por Kuska IA!", "success");
}

// Setup Transversals
function setupTransversalsUI() {
    $.transversalsContainer.innerHTML = "";

    for (const key in TRANSVERSAL_COMPETENCIES) {
        const comp = TRANSVERSAL_COMPETENCIES[key];
        const panel = document.createElement("div");
        panel.className = "transversal-item";

        panel.innerHTML = `
            <label class="transversal-header-item">
                <input type="checkbox" id="trans-check-${key}">
                <span>${comp.name}</span>
            </label>
            <div class="transversal-capacities-list" id="trans-caps-${key}" style="display:none;"></div>
        `;

        $.transversalsContainer.appendChild(panel);

        const mainCheckbox = panel.querySelector(`#trans-check-${key}`);
        const capsList = panel.querySelector(`#trans-caps-${key}`);

        comp.capacities.forEach((cap, index) => {
            const capLabel = document.createElement("label");
            capLabel.className = "transversal-cap-label";
            capLabel.innerHTML = `
                <input type="checkbox" data-trans-cap="${cap}">
                <span>${cap}</span>
            `;

            capLabel.querySelector("input").addEventListener("change", (e) => {
                if (e.target.checked) {
                    state.session.transversals[key].capacities.push(cap);
                } else {
                    state.session.transversals[key].capacities = state.session.transversals[key].capacities.filter(c => c !== cap);
                }
            });

            capsList.appendChild(capLabel);
        });

        mainCheckbox.addEventListener("change", (e) => {
            state.session.transversals[key].checked = e.target.checked;
            if (e.target.checked) {
                capsList.style.display = "grid";
            } else {
                capsList.style.display = "none";
                state.session.transversals[key].capacities = [];
                capsList.querySelectorAll("input").forEach(c => c.checked = false);
            }
        });
    }
}

// Fallback manual didactics setup
function setupDidacticFlow() {
    const area = state.session.selectedArea;
    const competence = state.session.selectedCompetence;
    let steps = [];

    if (area === "psicomotriz") {
        steps = [
            { name: "Asamblea de Inicio", desc: "Acuerdos, delimitación del espacio y calentamiento inicial.", content: "" },
            { name: "Expresividad Motriz", desc: "Movimiento autónomo, saltos, desplazamientos.", content: "" },
            { name: "Relajación", desc: "Momento para desacelerar las pulsaciones.", content: "" },
            { name: "Expresividad Plástico-Gráfica", desc: "Dibujo, pintura o modelado.", content: "" },
            { name: "Cierre", desc: "Diálogo final.", content: "" }
        ];
    } else if (area === "comunicacion" && (competence === "lee_textos" || competence === "escribe_textos")) {
        steps = [
            { name: "Antes de la lectura/escritura", desc: "Formulación de hipótesis basándose en imágenes.", content: "" },
            { name: "Durante la lectura/escritura", desc: "Lectura directa / Escritura no convencional.", content: "" },
            { name: "Después de la lectura/escritura", desc: "Verificación de hipótesis y verbalización.", content: "" }
        ];
    } else if (area === "matematica") {
        steps = [
            { name: "Familiarización con la situación", desc: "Comprensión del reto o problema.", content: "" },
            { name: "Vivenciación y manipulación", desc: "Uso de material concreto.", content: "" },
            { name: "Representación gráfica/simbólica", desc: "Dibujo espontáneo.", content: "" },
            { name: "Formalización y reflexión verbal", desc: "Conclusiones verbalizadas.", content: "" }
        ];
    } else if (area === "ciencia_tecnologia") {
        steps = [
            { name: "Planteamiento del problema", desc: "Pregunta investigable.", content: "" },
            { name: "Planteamiento de hipótesis", desc: "Saberes previos y respuestas.", content: "" },
            { name: "Plan de acción", desc: "Propuesta de actividades para experimentar.", content: "" },
            { name: "Recojo de datos", desc: "Registro sensorial.", content: "" },
            { name: "Comunicación de hallazgos", desc: "Explicación final.", content: "" }
        ];
    } else {
        steps = [
            { name: "Inicio (Saberes Previos)", desc: "Motivación y saberes previos.", content: "" },
            { name: "Desarrollo (Gestión didáctica)", desc: "Construcción del aprendizaje.", content: "" },
            { name: "Cierre (Metacognición)", desc: "Recapitulación.", content: "" }
        ];
    }

    state.session.didacticSteps = steps;
    state.session.activeDidacticStep = 0;
    renderDidacticSteps();
}

function clearDidacticFlow() {
    state.session.didacticSteps = [];
    state.session.activeDidacticStep = 0;
    $.didacticStepsNav.innerHTML = "";
    $.didacticStepsContent.innerHTML = `<p class="text-muted" style="font-size:0.9rem; text-align:center;">Selecciona un área y competencia para listar las fases didácticas.</p>`;
}

function renderDidacticSteps() {
    if (state.session.didacticSteps.length === 0) {
        clearDidacticFlow();
        return;
    }

    // Hide the horizontal steps navigation
    $.didacticStepsNav.style.display = "none";

    let html = `
        <div class="didactic-vertical-timeline" style="position: relative; display: flex; flex-direction: column; gap: 1.5rem; padding-left: 1.5rem; border-left: 2px dashed var(--border-color); margin-top: 1rem;">
    `;

    state.session.didacticSteps.forEach((step, idx) => {
        let dotColor = "var(--primary)";
        let phaseLabel = "DESARROLLO";
        if (step.name.toLowerCase().includes("inicio")) {
            dotColor = "#3b82f6"; // Blue
            phaseLabel = "INICIO (Procesos Pedagógicos)";
        } else if (step.name.toLowerCase().includes("cierre")) {
            dotColor = "#e74c3c"; // Red
            phaseLabel = "CIERRE (Evaluación y Metacognición)";
        } else {
            dotColor = "#27ae60"; // Green
            phaseLabel = `DESARROLLO (Proceso Didáctico ${idx})`;
        }

        html += `
            <div class="didactic-timeline-item" style="position: relative; background-color: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; box-shadow: var(--shadow-soft); transition: all 0.2s ease;">
                <div style="position: absolute; left: -31px; top: 22px; width: 14px; height: 14px; border-radius: 50%; background-color: ${dotColor}; border: 3px solid var(--white); box-shadow: 0 0 0 2px ${dotColor};"></div>
                
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div>
                        <span style="font-size: 0.7rem; font-weight: 800; color: ${dotColor}; text-transform: uppercase; letter-spacing: 0.5px; background-color: var(--bg-app); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid var(--border-color); margin-right: 0.5rem;">
                            ${phaseLabel}
                        </span>
                        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin: 0.4rem 0 0 0; display: inline-block;">
                            ${step.name}
                        </h4>
                    </div>
                </div>
                
                <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0 0 0.8rem 0; line-height: 1.4;">
                    ${step.desc}
                </p>
                
                <div class="form-group" style="margin: 0;">
                    <textarea class="didactic-textarea" data-step-index="${idx}" placeholder="Describe la estrategia o actividad aquí..." style="width: 100%; min-height: 250px; border: 1.5px solid var(--border-color); border-radius: var(--radius-md); padding: 1.2rem; font-size: 1rem; line-height: 1.6; font-weight: 500; font-family: var(--font-sans); color: var(--text-main); background-color: var(--white); resize: vertical; transition: var(--transition); box-shadow: var(--shadow-soft);">${step.content}</textarea>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    $.didacticStepsContent.innerHTML = html;

    const textareas = $.didacticStepsContent.querySelectorAll(".didactic-textarea");
    textareas.forEach(textarea => {
        textarea.addEventListener("input", (e) => {
            const idx = parseInt(e.target.getAttribute("data-step-index"));
            state.session.didacticSteps[idx].content = e.target.value;
        });

        textarea.addEventListener("focus", () => {
            textarea.style.borderColor = "var(--primary)";
            textarea.style.backgroundColor = "var(--white)";
            textarea.style.boxShadow = "var(--shadow-glow)";
        });

        textarea.addEventListener("blur", () => {
            textarea.style.borderColor = "var(--border-color)";
            textarea.style.backgroundColor = "var(--white)";
            textarea.style.boxShadow = "none";
        });
    });

    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}



async function generateLessonWithKuskaIa() {
    const area = state.session.selectedArea;
    const comp = state.session.selectedCompetence;
    
    if (!area) {
        showToast("Selecciona un Área Curricular primero.", "warning");
        return;
    }
    if (state.significantSituation.trim() === "") {
        showToast("Ingresa la Situación Significativa primero.", "warning");
        return;
    }

    $.btnKuskaIa.classList.add("loading");
    const label = $.btnKuskaIa.querySelector("span");
    const originalText = label.textContent;
    label.textContent = "Llama-3.3 pensando...";

    try {
        const systemPrompt = `Eres Kuska IA, una asistente de educación inicial. Genera una secuencia didáctica en español para niños de ${state.selectedAge.replace('_', ' ')} para el área ${area} y competencia ${comp}.
Debes responder ÚNICAMENTE con un objeto JSON que contenga las siguientes tres propiedades:
1. "inicio": Qué hace la docente y los estudiantes al inicio de la clase (motivación, saberes previos).
2. "desarrollo": La actividad principal (manipulación, procesos didácticos del área).
3. "cierre": Conversación reflexiva final (metacognición).
No incluyas markdown, saludos ni explicaciones, devuelve solo el JSON puro.`;

        const userPrompt = `Situación Significativa: ${state.significantSituation}
Capacidades seleccionadas: ${state.session.selectedCapacities.join(", ")}`;

        const responseText = await callGroqAPI(systemPrompt, userPrompt);
        
        const jsonStart = responseText.indexOf('{');
        const jsonEnd = responseText.lastIndexOf('}') + 1;
        if (jsonStart === -1 || jsonEnd === -1) {
            throw new Error("Formato inválido.");
        }
        const parsed = JSON.parse(responseText.substring(jsonStart, jsonEnd));
        
        state.session.didacticSteps = [
            { name: "Inicio (Procesos Pedagógicos)", desc: "Motivación, recuperación de saberes previos y conflicto cognitivo.", content: parsed.inicio || "" },
            { name: "Desarrollo (Procesos Didácticos)", desc: "Vivenciación, manipulación, representación y formalización.", content: parsed.desarrollo || "" },
            { name: "Cierre (Metacognición)", desc: "Recapitulación y evaluación formativa.", content: parsed.cierre || "" }
        ];

        renderDidacticSteps();
        showToast("¡Texto generado con la IA de Groq!", "success");
    } catch (err) {
        if (err.message === "API_KEY_MISSING") {
            showToast("Por favor, ingresa tu Groq API Key en la pestaña Configuración.", "warning");
        } else {
            console.error(err);
            showToast("Error de conexión. Usando plantilla local...", "error");
            // Local Fallback
            const aiData = AI_GENERATOR_DATABASE[area] || AI_GENERATOR_DATABASE["personal_social"];
            state.session.didacticSteps.forEach((step, idx) => {
                const templateText = aiData.steps[idx] || aiData.steps[aiData.steps.length - 1];
                const cleanSituation = state.significantSituation.split(':')[0] || "nuestro proyecto";
                step.content = "✦ [LOCAL AI FALLBACK]: " + templateText.replace("la situación significativa del aula", `el proyecto '${cleanSituation}'`);
            });
            renderDidacticSteps();
        }
    } finally {
        $.btnKuskaIa.classList.remove("loading");
        label.textContent = originalText;
    }
}

// Inclusion UI Control
function handleInclusionToggle(e) {
    state.session.isInclusionActive = e.target.checked;
    if (state.session.isInclusionActive) {
        $.inclusionDrawer.style.display = "block";
        updateInclusionDrawer();
        showToast("Habilitadas sugerencias de adaptación inclusiva.", "success");
    } else {
        $.inclusionDrawer.style.display = "none";
    }
}

function updateInclusionDrawer() {
    if (!$.inclusionRecList) return;
    $.inclusionRecList.innerHTML = "";

    const age = state.selectedAge || "4_anios";
    const area = state.session.selectedArea || "personal_social";

    // Invoke inclusion generator
    const tips = getInclusionTips(age, area, state.evaluation.students);

    tips.forEach(rec => {
        const li = document.createElement("li");
        li.className = "inclusion-rec-item";
        li.textContent = rec;
        $.inclusionRecList.appendChild(li);
    });
}

// Evaluation Table
function updateEvaluationTable() {
    const capacities = state.session.selectedCapacities;

    if (capacities.length === 0) {
        $.evaluationTableHead.innerHTML = `
            <tr>
                <th style="width: 250px;">Nombre del Estudiante</th>
                <th>Criterio de Evaluación / Capacidad</th>
            </tr>
        `;
        $.evaluationTableBody.innerHTML = `
            <tr>
                <td colspan="2" style="text-align: center; padding: 3.5rem 1.5rem;">
                    <div style="max-width: 480px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <div style="background-color: var(--bg-app); padding: 1rem; border-radius: 50%; width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.2rem;">
                            <i data-lucide="award" class="icon-lg" style="width: 32px; height: 32px; color: var(--primary);"></i>
                        </div>
                        <h4 style="font-weight: 700; margin-bottom: 0.5rem; color: var(--text-main); font-size: 1.15rem;">Tu Registro de Logros está Vacío</h4>
                        <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 1.8rem; line-height: 1.6; max-width: 400px; text-align: center;">
                            Esta sección es tu Lista de Cotejo digital. Para activarla, selecciona capacidades en el Planificador, o carga una demostración interactiva ahora mismo.
                        </p>
                        <div style="display: flex; gap: 1rem; justify-content: center;">
                            <button type="button" class="btn btn-secondary" id="btn-load-demo-rubric" style="width: auto; padding: 0.6rem 1.2rem; font-size: 0.85rem; display: flex; align-items: center; gap: 0.4rem;">
                                <i data-lucide="sparkles" class="icon-xs"></i>
                                <span>Cargar Rúbrica de Ejemplo</span>
                            </button>
                            <button type="button" class="btn btn-primary" id="btn-go-to-planner" style="width: auto; padding: 0.6rem 1.2rem; font-size: 0.85rem; display: flex; align-items: center; gap: 0.4rem;">
                                <i data-lucide="arrow-right" class="icon-xs"></i>
                                <span>Ir al Planificador</span>
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        `;

        // Bind click events on the loaded empty state buttons
        const btnDemo = document.getElementById("btn-load-demo-rubric");
        const btnPlanner = document.getElementById("btn-go-to-planner");
        if (btnDemo) btnDemo.addEventListener("click", loadDemoRubric);
        if (btnPlanner) btnPlanner.addEventListener("click", () => switchView("planificador"));

        if (typeof lucide !== "undefined") { lucide.createIcons(); }
        return;
    }

    let headerHtml = `
        <tr>
            <th style="width: 250px;">Nombre del Estudiante</th>
    `;
    capacities.forEach(cap => {
        const formulatedCriteria = CRITERIA_FORMULATOR[cap] || `Evalúa la capacidad de: ${cap}`;
        headerHtml += `<th>Criterio: <span style="font-weight: 500; font-size:0.72rem; display:block; color:var(--primary); margin-top:2px; text-transform:none;">${formulatedCriteria}</span></th>`;
    });
    headerHtml += `
            <th style="width: 80px; text-align: center;">Acciones</th>
        </tr>
    `;
    $.evaluationTableHead.innerHTML = headerHtml;

    $.evaluationTableBody.innerHTML = "";
    state.evaluation.students.forEach(student => {
        const row = document.createElement("tr");
        let colsHtml = `
            <td>
                <input type="text" class="student-name-input" value="${student.name}" data-student-id="${student.id}">
            </td>
        `;

        capacities.forEach(cap => {
            const currentGrade = getStudentGrade(student.id, cap);
            colsHtml += `
                <td>
                    <select class="criteria-select ${currentGrade.toLowerCase()}" data-student-id="${student.id}" data-capacity="${cap}">
                        <option value="Logrado" ${currentGrade === 'Logrado' ? 'selected' : ''}>A - Logrado</option>
                        <option value="Proceso" ${currentGrade === 'Proceso' ? 'selected' : ''}>B - Proceso</option>
                        <option value="Inicio" ${currentGrade === 'Inicio' ? 'selected' : ''}>C - Inicio</option>
                    </select>
                </td>
            `;
        });

        colsHtml += `
            <td style="text-align: center;">
                <button type="button" class="btn-remove-student" data-student-id="${student.id}">
                    <i data-lucide="trash" class="icon-sm"></i>
                </button>
            </td>
        `;

        row.innerHTML = colsHtml;
        $.evaluationTableBody.appendChild(row);

        const nameInput = row.querySelector(".student-name-input");
        nameInput.addEventListener("input", (e) => {
            student.name = e.target.value;
            const rosterStud = state.evaluation.students.find(s => s.id === student.id);
            if (rosterStud) rosterStud.name = e.target.value;
        });

        const selects = row.querySelectorAll(".criteria-select");
        selects.forEach(select => {
            select.addEventListener("change", (e) => {
                const sId = e.target.getAttribute("data-student-id");
                const capText = e.target.getAttribute("data-capacity");
                const newGrade = e.target.value;
                setStudentGrade(sId, capText, newGrade);
                e.target.className = `criteria-select ${newGrade.toLowerCase()}`;
                updateEvaluationStats();
            });
        });

        const removeBtn = row.querySelector(".btn-remove-student");
        removeBtn.addEventListener("click", () => {
            removeStudent(student.id);
        });
    });

    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

function loadDemoRubric() {
    // Populate state with a mock active session (Matemática - Resuelve problemas de cantidad)
    state.session.selectedArea = "matematica";
    state.session.selectedCompetence = "Resuelve problemas de cantidad";
    state.session.selectedCapacities = [
        "Traduce cantidades a expresiones numéricas",
        "Comunica su comprensión sobre los números y las operaciones"
    ];
    state.session.title = "Agrupando Tapitas de Colores";
    state.session.materials = [
        "Tapitas plásticas de colores",
        "Bandejas plásticas de clasificación",
        "Platos primarios para agrupación"
    ];
    state.significantSituation = "Los niños del aula de 5 años exploran cómo agrupar objetos cotidianos de su entorno.";

    // Auto-fill student grades
    state.evaluation.students.forEach(st => {
        state.session.selectedCapacities.forEach((cap, index) => {
            const grades = ["Logrado", "Proceso", "Inicio"];
            const mockGrade = grades[(st.id + index) % 3];
            setStudentGrade(st.id, cap, mockGrade);
        });
    });

    // Re-render views
    updateEvaluationTable();
    updateEvaluationStats();
    showToast("Rúbrica de demostración cargada con éxito. ¡Prueba a cambiar las notas!", "success");
}

function updateEvaluationStats() {
    if (!$.statLogrado) return;
    const capacities = state.session.selectedCapacities;
    if (capacities.length === 0) {
        $.statLogrado.textContent = "0%";
        $.statProceso.textContent = "0%";
        $.statInicio.textContent = "0%";
        return;
    }

    let totalGrades = 0;
    let logradoCount = 0;
    let procesoCount = 0;
    let inicioCount = 0;

    state.evaluation.students.forEach(st => {
        capacities.forEach(cap => {
            const grade = getStudentGrade(st.id, cap);
            totalGrades++;
            if (grade === "Logrado") logradoCount++;
            else if (grade === "Proceso") procesoCount++;
            else if (grade === "Inicio") inicioCount++;
        });
    });

    if (totalGrades > 0) {
        $.statLogrado.textContent = Math.round((logradoCount / totalGrades) * 100) + "%";
        $.statProceso.textContent = Math.round((procesoCount / totalGrades) * 100) + "%";
        $.statInicio.textContent = Math.round((inicioCount / totalGrades) * 100) + "%";
    } else {
        $.statLogrado.textContent = "0%";
        $.statProceso.textContent = "0%";
        $.statInicio.textContent = "0%";
    }
}

function getStudentGrade(studentId, capacity) {
    if (!state.evaluation.rubrics[studentId]) {
        state.evaluation.rubrics[studentId] = {};
    }
    if (!state.evaluation.rubrics[studentId][capacity]) {
        const defaults = ["Logrado", "Proceso", "Logrado", "Inicio"];
        const index = Math.floor((studentId + capacity.length) % defaults.length);
        state.evaluation.rubrics[studentId][capacity] = defaults[index];
    }
    return state.evaluation.rubrics[studentId][capacity];
}

function setStudentGrade(studentId, capacity, grade) {
    if (!state.evaluation.rubrics[studentId]) {
        state.evaluation.rubrics[studentId] = {};
    }
    state.evaluation.rubrics[studentId][capacity] = grade;
    saveCurrentUserSession();
}

function addStudentFromRubric() {
    const nextId = state.evaluation.students.length > 0
        ? Math.max(...state.evaluation.students.map(s => s.id)) + 1
        : 1;
    const newStudent = {
        id: nextId,
        name: `Nuevo Estudiante ${nextId}`,
        nee: []
    };
    state.evaluation.students.push(newStudent);
    saveCurrentUserSession();
    updateEvaluationTable();
    updateEvaluationStats();
    showToast("Estudiante agregado a la lista.", "success");
}

function removeStudent(studentId) {
    state.evaluation.students = state.evaluation.students.filter(s => s.id !== studentId);
    if (state.evaluation.rubrics[studentId]) {
        delete state.evaluation.rubrics[studentId];
    }
    saveCurrentUserSession();
    updateEvaluationTable();
    updateEvaluationStats();
    showToast("Estudiante removido.", "warning");
}

// --- VIEW PANEL 2: CURRÍCULO EXPLORER RENDER ---
function renderCurriculumTabs() {
    const container = document.getElementById("curriculum-area-tabs");
    if (!container) return;
    container.innerHTML = "";

    const tabIcons = {
        personal_social: "users",
        psicomotriz: "activity",
        comunicacion: "message-square",
        matematica: "hash",
        ciencia_tecnologia: "database"
    };

    Object.keys(CURRICULUM_DATA).forEach(key => {
        const area = CURRICULUM_DATA[key];
        const isActive = state.activeCurriculumTab === key;
        const iconName = tabIcons[key] || "book";

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = isActive ? 'active-tab' : '';

        btn.innerHTML = `
            <i data-lucide="${iconName}" class="icon-xs" style="width: 14px; height: 14px;"></i>
            <span>${area.name}</span>
        `;

        btn.addEventListener("click", () => {
            $.curriculumSearchInput.value = "";
            state.activeCurriculumTab = key;
            renderCurriculumTabs();
            renderCurriculumExplorer();
        });

        container.appendChild(btn);
    });

    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

function renderCurriculumExplorer() {
    const query = $.curriculumSearchInput.value.toLowerCase().trim();
    $.curriculumExplorerContainer.innerHTML = "";

    let hasResults = false;
    let firstCompKey = null;

    // Toggle area tabs visibility: hide if searching globally, show if not
    const tabsContainer = document.getElementById("curriculum-area-tabs");
    if (tabsContainer) {
        tabsContainer.style.display = query ? "none" : "flex";
    }

    for (const areaKey in CURRICULUM_DATA) {
        // If not searching, only process the active tab area
        if (!query && state.activeCurriculumTab !== areaKey) {
            continue;
        }

        const area = CURRICULUM_DATA[areaKey];
        const matchingCompetencies = {};
        let matchesAreaName = area.name.toLowerCase().includes(query);

        for (const compKey in area.competencies) {
            const comp = area.competencies[compKey];
            const matchesCompName = comp.name.toLowerCase().includes(query);
            const matchingCaps = comp.capacities.filter(cap => cap.toLowerCase().includes(query));

            if (matchesAreaName || matchesCompName || matchingCaps.length > 0) {
                matchingCompetencies[compKey] = {
                    name: comp.name,
                    capacities: query ? (matchingCaps.length > 0 ? matchingCaps : comp.capacities) : comp.capacities
                };
                if (!firstCompKey) {
                    firstCompKey = compKey;
                }
            }
        }

        if (Object.keys(matchingCompetencies).length > 0) {
            hasResults = true;
            const areaCard = document.createElement("div");
            areaCard.className = "curriculum-area-card";
            areaCard.style.padding = "1.5rem";
            areaCard.style.marginBottom = "1.5rem";

            let compsHtml = "";
            for (const compKey in matchingCompetencies) {
                const comp = matchingCompetencies[compKey];
                compsHtml += `
                    <div class="curriculum-comp-item" data-comp-key="${compKey}" style="cursor: pointer; margin-bottom: 0.8rem; background-color: var(--bg-app); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); transition: all 0.2s ease;">
                        <div class="curriculum-comp-title" style="font-size: 0.92rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; line-height: 1.4;">${comp.name}</div>
                        <ul class="curriculum-caps-list" style="margin: 0; padding: 0; list-style: none;">
                            ${comp.capacities.map(cap => `<li class="curriculum-cap-item" style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.3rem; padding-left: 0.8rem; position: relative;">• ${cap}</li>`).join("")}
                        </ul>
                    </div>
                `;
            }

            areaCard.innerHTML = `
                <h3 class="curriculum-area-title" style="font-size: 1.15rem; font-weight: 800; color: var(--lavender-dark); margin-bottom: 1rem; border-bottom: 2px solid var(--primary-light); padding-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="book" class="icon-sm"></i>
                    <span>${area.name}</span>
                </h3>
                <div>${compsHtml}</div>
            `;
            $.curriculumExplorerContainer.appendChild(areaCard);

            // Bind click listeners on the newly added competencies
            areaCard.querySelectorAll(".curriculum-comp-item").forEach(item => {
                item.addEventListener("click", () => {
                    const compKey = item.getAttribute("data-comp-key");
                    selectCurriculumCompetence(compKey);
                });
            });
        }
    }

    if (!hasResults) {
        $.curriculumExplorerContainer.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
                <i data-lucide="alert-circle" class="icon-lg" style="margin-bottom:1rem; opacity:0.5;"></i>
                <p>No se encontraron competencias o capacidades con esa búsqueda.</p>
            </div>
        `;
        // Clear right ideator if no search results
        const container = document.getElementById("curriculum-ideator-panel");
        if (container) {
            container.innerHTML = `
                <div class="ideator-empty-state">
                    <div style="background-color: var(--primary-light); padding: 1.2rem; border-radius: 50%; width: 72px; height: 72px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: var(--primary);">
                        <i data-lucide="alert-circle" style="width: 36px; height: 36px;"></i>
                    </div>
                    <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--lavender-dark); margin-bottom: 0.8rem;">Sin Recomendaciones</h3>
                    <p class="text-muted" style="font-size: 0.9rem; line-height: 1.6; text-align: center; max-width: 280px; margin-bottom: 0;">
                        No hay ideas disponibles para tu criterio de búsqueda actual.
                    </p>
                </div>
            `;
        }
    } else {
        // AUTOMATION: Auto-select the first match and load recommendations immediately
        if (firstCompKey) {
            selectCurriculumCompetence(firstCompKey);
        }
    }

    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

function selectCurriculumCompetence(compKey) {
    const idea = CURRICULUM_IDEAS[compKey];
    if (!idea) return;

    // Set active class visually to the clicked item
    const items = document.querySelectorAll(".curriculum-comp-item");
    items.forEach(el => el.classList.remove("active-ideator"));

    const activeEl = document.querySelector(`[data-comp-key="${compKey}"]`);
    if (activeEl) activeEl.classList.add("active-ideator");

    renderCurriculumIdeas(compKey, idea, false);
}

function renderCurriculumIdeas(compKey, idea, isAdapted = false) {
    const container = document.getElementById("curriculum-ideator-panel");
    if (!container) return;

    const imageUrl = CURRICULUM_IMAGES[compKey] || "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&auto=format&fit=crop";

    container.innerHTML = `
        <!-- Image Banner -->
        <div style="width: 100%; height: 160px; overflow: hidden; border-radius: var(--radius-md); margin-bottom: 1.2rem; position: relative; box-shadow: var(--shadow-soft); background-color: var(--bg-app);">
            <img src="${imageUrl}" alt="Ilustración de la Actividad" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; document.getElementById('image-fallback-banner').style.display='flex';">
            <div id="image-fallback-banner" style="display: none; width: 100%; height: 100%; background: linear-gradient(135deg, var(--primary), var(--lavender-dark)); align-items: center; justify-content: center; flex-direction: column;">
                <i data-lucide="sparkles" style="width: 32px; height: 32px; color: rgba(255,255,255,0.8); margin-bottom: 0.4rem;"></i>
                <span style="color: white; font-weight: 700; font-size: 0.9rem; letter-spacing: 0.5px;">Kuska Didáctico</span>
            </div>
            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.7)); padding: 0.8rem 1rem; pointer-events: none;">
                <span style="color: white; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Ilustración de la Actividad</span>
            </div>
        </div>

        <div class="ideator-header" style="border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; gap: 1rem; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 200px;">
                    <span style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--primary); letter-spacing: 1px; display: block; margin-bottom: 0.2rem;">
                        Asistente Didáctico de Aula ${isAdapted ? '• Adaptado con IA' : ''}
                    </span>
                    <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--lavender-dark); margin: 0; line-height: 1.3;">"${idea.title}"</h2>
                </div>
                <button type="button" class="btn btn-secondary" id="btn-regenerate-idea" style="width: auto; padding: 0.4rem 0.8rem; font-size: 0.78rem; display: flex; align-items: center; gap: 0.3rem;">
                    <i data-lucide="sparkles" class="icon-xs" style="color: var(--primary);"></i>
                    <span>Generar Otra Idea (IA)</span>
                </button>
            </div>
            
            <!-- Dynamic Thematic Adaptation input -->
            <div class="theme-generator-wrapper" style="display: flex; gap: 0.5rem; margin-top: 1rem; background-color: var(--bg-app); padding: 0.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                <input type="text" id="curriculum-theme-input" class="form-input" placeholder="Escribe un tema (ej: Dinosaurios, El Agua, Granja...)" style="font-size: 0.78rem; padding: 0.4rem 0.6rem; border-radius: 4px; flex: 1; border: 1px solid var(--border-color);">
                <button type="button" class="btn btn-primary" id="btn-generate-theme-ideas" style="width: auto; padding: 0.4rem 0.8rem; font-size: 0.78rem; display: flex; align-items: center; gap: 0.25rem;">
                    <i data-lucide="shuffle" class="icon-xs" style="width: 12px; height: 12px;"></i>
                    <span>Adaptar</span>
                </button>
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.92rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
                <i data-lucide="play-circle" class="icon-xs" style="color: var(--primary);"></i>
                <span>Dinámica o Juego Sugerido:</span>
            </h4>
            <p style="font-size: 0.85rem; line-height: 1.6; color: var(--text-muted); background-color: var(--bg-app); padding: 1rem; border-radius: var(--radius-md); border-left: 4px solid var(--primary); margin: 0;">
                ${idea.game}
            </p>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.92rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
                <i data-lucide="help-circle" class="icon-xs" style="color: #3b82f6;"></i>
                <span>Preguntas Clave para el Aula:</span>
            </h4>
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.85rem; line-height: 1.5; color: var(--text-muted); list-style-type: disc;">
                ${idea.questions.map(q => `<li style="margin-bottom: 0.4rem;">${q}</li>`).join("")}
            </ul>
        </div>
        
        <div>
            <h4 style="font-size: 0.92rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.4rem;">
                <i data-lucide="toy-brick" class="icon-xs" style="color: #27ae60;"></i>
                <span>Materiales Recomendados:</span>
            </h4>
            <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                ${idea.materials.map(m => `
                    <span style="background-color: var(--bg-app); color: var(--text-main); font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.55rem; border-radius: 9999px; border: 1px solid var(--border-color);">
                        ${m}
                    </span>
                `).join("")}
            </div>
        </div>
    `;

    // Bind event listeners inside dynamic content
    const btnRegen = document.getElementById("btn-regenerate-idea");
    if (btnRegen) {
        btnRegen.addEventListener("click", () => triggerIaGeneration(compKey));
    }

    const btnAdapt = document.getElementById("btn-generate-theme-ideas");
    const inputTheme = document.getElementById("curriculum-theme-input");
    if (btnAdapt && inputTheme) {
        btnAdapt.addEventListener("click", () => {
            const theme = inputTheme.value;
            generateThematicIdea(compKey, theme);
        });
        // Also support Enter key press
        inputTheme.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                generateThematicIdea(compKey, inputTheme.value);
            }
        });
    }

    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

async function generateThematicIdea(compKey, theme) {
    const defaultIdea = CURRICULUM_IDEAS[compKey];
    if (!defaultIdea) return;

    const cleanedTheme = theme.trim();
    if (!cleanedTheme) {
        renderCurriculumIdeas(compKey, defaultIdea, false);
        return;
    }

    const container = document.getElementById("curriculum-ideator-panel");
    if (container) {
        container.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; min-height: 350px; text-align: center;">
                <div class="spinner" style="width: 48px; height: 48px; border: 4px solid var(--primary-light); border-top: 4px solid var(--primary); border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 1.5rem;"></div>
                <h4 style="font-weight: 700; color: var(--lavender-dark); margin-bottom: 0.5rem;">Adaptando al tema "${cleanedTheme}"...</h4>
                <p class="text-muted" style="font-size: 0.82rem; max-width: 260px;">Groq Llama-3.3 adaptando dinámicas al tema...</p>
            </div>
        `;
    }

    try {
        const systemPrompt = `Eres Kuska IA. Adapta la propuesta didáctica de educación inicial provista para incorporarla al tema de interés indicado por el usuario.
Debes responder ÚNICAMENTE con un objeto JSON válido que contenga exactamente cuatro propiedades:
1. "title": Título motivador y divertido combinando el concepto y el tema (máximo 8 palabras).
2. "game": Descripción lúdica del juego o actividad adaptada al tema (entre 60 y 100 palabras).
3. "questions": Arreglo de exactamente tres preguntas de indagación reflexiva adaptadas al tema.
4. "materials": Arreglo de exactamente cuatro materiales acordes al tema.

No devuelvas ninguna otra frase, saludo ni formato markdown, devuelve solo el JSON puro.`;

        const userPrompt = `Propuesta Original: ${JSON.stringify(defaultIdea)}
Tema de adaptación: ${cleanedTheme}`;

        const responseText = await callGroqAPI(systemPrompt, userPrompt);
        
        const jsonStart = responseText.indexOf('{');
        const jsonEnd = responseText.lastIndexOf('}') + 1;
        if (jsonStart === -1 || jsonEnd === -1) {
            throw new Error("Formato inválido.");
        }
        const parsed = JSON.parse(responseText.substring(jsonStart, jsonEnd));
        
        renderCurriculumIdeas(compKey, parsed, true);
        const inputTheme = document.getElementById("curriculum-theme-input");
        if (inputTheme) inputTheme.value = cleanedTheme;
        showToast(`Idea adaptada con éxito al tema "${cleanedTheme}" con Llama 3`, "success");
    } catch (err) {
        if (err.message === "API_KEY_MISSING") {
            showToast("Por favor, ingresa tu Groq API Key en la pestaña Configuración.", "warning");
        } else {
            console.error(err);
            showToast("Error de conexión. Usando adaptación básica local...", "error");
        }
        // Fallback
        const thematicIdea = {
            title: `${defaultIdea.title} de ${cleanedTheme}`,
            game: `Adaptado al tema "${cleanedTheme}": ${defaultIdea.game.replace(/tapitas|objetos|cuentos|cuentitos|dibujos|dibujo|juguetes|juguete|bloques/gi, cleanedTheme.toLowerCase())}`,
            questions: defaultIdea.questions.map(q => q.replace(/objetos|juguetes|cuentos|tapitas|bloques/gi, cleanedTheme.toLowerCase())),
            materials: [
                ...defaultIdea.materials.slice(0, 2),
                `Recursos y juguetes temáticos sobre ${cleanedTheme}`,
                `Ilustraciones y láminas de ${cleanedTheme}`
            ]
        };
        renderCurriculumIdeas(compKey, thematicIdea, true);
        const inputTheme = document.getElementById("curriculum-theme-input");
        if (inputTheme) inputTheme.value = cleanedTheme;
    }
}

async function triggerIaGeneration(compKey) {
    const container = document.getElementById("curriculum-ideator-panel");
    if (!container) return;

    container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; min-height: 350px; text-align: center;">
            <div class="spinner" style="width: 48px; height: 48px; border: 4px solid var(--primary-light); border-top: 4px solid var(--primary); border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 1.5rem;"></div>
            <h4 style="font-weight: 700; color: var(--lavender-dark); margin-bottom: 0.5rem;">Groq Llama-3.3 planificando...</h4>
            <p class="text-muted" style="font-size: 0.82rem; max-width: 260px;">Diseñando dinámicas lúdicas, preguntas reflexivas y recursos recomendados...</p>
        </div>
    `;

    if (!document.getElementById("spinner-keyframe-style")) {
        const style = document.createElement("style");
        style.id = "spinner-keyframe-style";
        style.textContent = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
        document.head.appendChild(style);
    }

    try {
        const systemPrompt = `Eres Kuska IA, una asistente de educación inicial. Crea una propuesta didáctica original e interactiva para niños de 3 a 5 años basada en la competencia indicada.
Debes responder ÚNICAMENTE con un objeto JSON válido que contenga exactamente cuatro propiedades:
1. "title": Título divertido y motivador (máximo 8 palabras).
2. "game": Descripción lúdica detallada del juego principal (entre 60 y 100 palabras).
3. "questions": Arreglo de exactamente tres preguntas de indagación reflexiva.
4. "materials": Arreglo de exactamente cuatro materiales recomendados.

No incluyas explicaciones adicionales, devuelve solo el JSON puro.`;

        const userPrompt = `Competencia Curricular: ${compKey}`;
        const responseText = await callGroqAPI(systemPrompt, userPrompt);
        
        const jsonStart = responseText.indexOf('{');
        const jsonEnd = responseText.lastIndexOf('}') + 1;
        if (jsonStart === -1 || jsonEnd === -1) {
            throw new Error("Formato inválido.");
        }
        const parsed = JSON.parse(responseText.substring(jsonStart, jsonEnd));
        
        renderCurriculumIdeas(compKey, parsed, false);
        showToast("¡Nueva propuesta didáctica generada en tiempo real por Groq!", "success");
    } catch (err) {
        if (err.message === "API_KEY_MISSING") {
            showToast("Por favor, ingresa tu Groq API Key en la pestaña Configuración.", "warning");
        } else {
            console.error(err);
            showToast("Error de conexión. Cargando propuesta predeterminada...", "error");
        }
        // Fallback
        const areaMapping = {
            construye_identidad: "personal_social",
            convive_participa: "personal_social",
            identidad_religiosa: "personal_social",
            desenvuelve_motricidad: "psicomotriz",
            comunica_oralmente: "comunicacion",
            lee_textos: "comunicacion",
            escribe_textos: "comunicacion",
            crea_proyectos: "comunicacion",
            comunica_castellano: "comunicacion",
            resuelve_cantidad: "matematica",
            resuelve_forma: "matematica",
            indaga_metodos: "ciencia_tecnologia"
        };
        const areaKey = areaMapping[compKey] || "comunicacion";
        const templates = PEDAGOGICAL_TEMPLATES[areaKey] || PEDAGOGICAL_TEMPLATES.comunicacion;
        const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
        renderCurriculumIdeas(compKey, randomTemplate, false);
    }
}

function handleCurriculumSearch() {
    renderCurriculumExplorer();
}

// --- VIEW PANEL 3: ROSTER/ALUMNOS MANAGER RENDER ---
function renderRosterManager() {
    $.rosterContainer.innerHTML = "";

    // 1. Render global NEE tag bank
    if ($.globalNeeTagsContainer) {
        $.globalNeeTagsContainer.innerHTML = "";
        const globalTags = state.evaluation.neeTags || ["TDAH", "Hipersensibilidad", "Movilidad"];

        globalTags.forEach(tag => {
            const pill = document.createElement("span");
            pill.className = "nee-pill active";
            pill.style.display = "inline-flex";
            pill.style.alignItems = "center";
            pill.style.gap = "0.4rem";
            pill.style.padding = "0.4rem 0.8rem";
            pill.style.fontSize = "0.8rem";
            pill.style.fontWeight = "600";

            pill.innerHTML = `
                <span>${tag}</span>
                <i data-lucide="x" style="width: 12px; height: 12px; stroke-width: 3px; cursor: pointer; color: rgba(255,255,255,0.8);" data-tag="${tag}"></i>
            `;

            $.globalNeeTagsContainer.appendChild(pill);

            // Bind delete globally action on the close icon
            pill.querySelector("i").addEventListener("click", (e) => {
                e.stopPropagation();
                const tagToDelete = e.target.closest("i").getAttribute("data-tag");
                removeNeeTagGlobally(tagToDelete);
            });
        });
    }

    // 2. Render student cards
    state.evaluation.students.forEach(st => {
        const card = document.createElement("div");
        card.className = "student-card";

        const tags = state.evaluation.neeTags || ["TDAH", "Hipersensibilidad", "Movilidad"];
        let pillsHtml = "";

        tags.forEach(tag => {
            const isActive = st.nee.includes(tag);
            pillsHtml += `
                <span class="nee-pill ${isActive ? 'active' : ''}" data-student-id="${st.id}" data-tag="${tag}">
                    ${tag}
                </span>
            `;
        });

        card.innerHTML = `
            <button class="student-card-delete" data-student-id="${st.id}">
                <i data-lucide="x" class="icon-sm"></i>
            </button>
            <div class="student-card-header">
                <div class="student-card-avatar">${st.name ? st.name.charAt(0) : '?'}</div>
                <input type="text" class="student-card-name-input" value="${st.name}" data-student-id="${st.id}">
            </div>
            <div class="student-nee-tags">
                <span class="form-label" style="font-size:0.75rem; margin-bottom:0.25rem;">Etiquetas NEE:</span>
                <div class="nee-pills-row">
                    ${pillsHtml}
                </div>
            </div>
        `;

        $.rosterContainer.appendChild(card);

        // Bind delete action
        card.querySelector(".student-card-delete").addEventListener("click", () => {
            removeStudent(st.id);
            renderRosterManager();
        });

        // Bind name edit change action
        const nameInput = card.querySelector(".student-card-name-input");
        nameInput.addEventListener("change", (e) => {
            const newName = e.target.value.trim();
            if (newName) {
                st.name = newName;
                card.querySelector(".student-card-avatar").textContent = newName.charAt(0);
                showToast("Nombre de estudiante actualizado.", "success");
                updateEvaluationTable();
            } else {
                e.target.value = st.name; // revert
            }
        });

        card.querySelectorAll(".nee-pill").forEach(pill => {
            pill.addEventListener("click", () => {
                const sId = parseInt(pill.getAttribute("data-student-id"));
                const tag = pill.getAttribute("data-tag");

                const studentObj = state.evaluation.students.find(s => s.id === sId);
                if (studentObj) {
                    if (studentObj.nee.includes(tag)) {
                        studentObj.nee = studentObj.nee.filter(t => t !== tag);
                    } else {
                        studentObj.nee.push(tag);
                    }
                    renderRosterManager();
                    updateInclusionDrawer();
                    showToast("Etiquetas inclusivas actualizadas.", "success");
                }
            });
        });
    });

    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

function addStudentFromRoster() {
    const nextId = state.evaluation.students.length > 0
        ? Math.max(...state.evaluation.students.map(s => s.id)) + 1
        : 1;

    state.evaluation.students.push({
        id: nextId,
        name: `Estudiante Nuevo ${nextId}`,
        nee: []
    });
    saveCurrentUserSession();
    renderRosterManager();
    showToast("Estudiante agregado al aula.", "success");
}

function addCustomNeeTag() {
    if (!$.newNeeTagInput) return;
    const newTag = $.newNeeTagInput.value.trim();
    if (!newTag) {
        showToast("Escribe una etiqueta antes de añadir.", "warning");
        return;
    }

    if (!state.evaluation.neeTags) {
        state.evaluation.neeTags = ["TDAH", "Hipersensibilidad", "Movilidad"];
    }

    // Check if tag already exists (case-insensitive checking)
    const exists = state.evaluation.neeTags.some(t => t.toLowerCase() === newTag.toLowerCase());
    if (exists) {
        showToast("Esta condición ya existe.", "warning");
        return;
    }

    state.evaluation.neeTags.push(newTag);
    $.newNeeTagInput.value = "";

    renderRosterManager();
    showToast(`Condición '${newTag}' añadida al aula.`, "success");
}

function removeNeeTagGlobally(tag) {
    if (!state.evaluation.neeTags) return;

    // Remove from central list
    state.evaluation.neeTags = state.evaluation.neeTags.filter(t => t !== tag);

    // Filter out of all students' profiles
    state.evaluation.students.forEach(st => {
        if (st.nee) {
            st.nee = st.nee.filter(t => t !== tag);
        }
    });

    renderRosterManager();
    updateInclusionDrawer();
    showToast(`Condición '${tag}' eliminada globalmente.`, "success");
}

// --- VIEW PANEL 5: CONFIGURACIÓN FORMS ---
function renderConfigForm() {
    $.configIeName.value = state.config.ieName || "";
    $.configAulaName.value = state.config.aulaName || "";
    $.configTeacherTitle.value = state.config.teacherTitle || "";
    $.configSchoolYear.value = state.config.schoolYear || "";
    $.configGroqKey.value = state.config.groqApiKey || "";
    if ($.configAulaAge) {
        $.configAulaAge.value = state.config.aulaAge || "4_anios";
    }

    // Add profile loaders
    if (state.currentUser) {
        $.configTeacherEmail.value = state.currentUser.email || "";
        $.configTeacherPassword.value = state.currentUser.password || "";
    } else {
        $.configTeacherEmail.value = "";
        $.configTeacherPassword.value = "";
    }

    // Load preview card contents
    updateConfigPreviewCard();

    // Attach real-time input listeners to update preview card dynamically as user types
    const inputs = [$.configIeName, $.configTeacherTitle, $.configTeacherEmail];
    inputs.forEach(inp => {
        inp.removeEventListener("input", updateConfigPreviewCard);
        inp.addEventListener("input", updateConfigPreviewCard);
    });
    if ($.configAulaAge) {
        $.configAulaAge.removeEventListener("change", updateConfigPreviewCard);
        $.configAulaAge.addEventListener("change", updateConfigPreviewCard);
    }
}

function updateConfigPreviewCard() {
    if (!$.configProfileName) return;

    const teacherName = $.configTeacherTitle.value.trim() || (state.currentUser ? state.currentUser.name : "Miss Gabriela");
    const ieName = $.configIeName.value.trim() || state.config.ieName || "Colegio No Especificado";
    const email = $.configTeacherEmail.value.trim() || (state.currentUser ? state.currentUser.email : "miss.gabriela@colegio.edu.pe");

    $.configProfileName.textContent = teacherName;
    $.configProfileEmail.textContent = email;
    $.configProfileIe.textContent = ieName;

    // Set classroom age summary label
    if ($.configProfileAge) {
        const ageVal = $.configAulaAge ? $.configAulaAge.value : (state.config.aulaAge || "4_anios");
        const ageText = ageVal === "3_anios" ? "3 Años" : ageVal === "4_anios" ? "4 Años" : "5 Años";
        $.configProfileAge.textContent = ageText;
    }

    // Generate avatar initials
    $.configAvatarLarge.textContent = teacherName.charAt(0).toUpperCase() || "M";

    // Set statistics
    $.configStatStudents.textContent = state.evaluation.students.length;
    $.configStatNee.textContent = state.evaluation.students.filter(s => s.nee && s.nee.length > 0).length;
}

function handleConfigSave(e) {
    e.preventDefault();
    state.config.ieName = $.configIeName.value.trim();
    state.config.aulaName = $.configAulaName.value.trim();
    state.config.teacherTitle = $.configTeacherTitle.value.trim();
    state.config.schoolYear = $.configSchoolYear.value.trim();
    state.config.groqApiKey = $.configGroqKey.value.trim();
    if ($.configAulaAge) {
        state.config.aulaAge = $.configAulaAge.value;
        state.selectedAge = state.config.aulaAge;
        updateInclusionDrawer();
        renderSituationSuggestions();
    }

    if (state.currentUser) {
        state.currentUser.name = state.config.teacherTitle;
        state.currentUser.email = $.configTeacherEmail.value.trim();
        if ($.configTeacherPassword.value.trim()) {
            state.currentUser.password = $.configTeacherPassword.value.trim();
        }
        $.sidebarUserName.textContent = state.currentUser.name;
        if ($.sidebarAvatar) {
            $.sidebarAvatar.textContent = state.currentUser.name.charAt(0).toUpperCase() || "M";
        }
    }

    saveCurrentUserSession();
    showToast("Perfil y datos del aula guardados correctamente.", "success");
    switchView("planificador");
}

// Document Modal generator
function openExportModal() {
    if (!state.selectedAge) {
        showToast("Configura la Edad del Aula en el panel de Configuración primero.", "warning");
        switchView("configuracion");
        return;
    }
    if (state.significantSituation.trim() === "") {
        showToast("Redacta la Situación Significativa en el Paso A.", "warning");
        switchView("planificador");
        goToStep(1); // Situación is Step 1
        return;
    }
    if (!state.session.selectedArea || !state.session.selectedCompetence) {
        showToast("Selecciona Área y Competencia en el Módulo de Sesión.", "warning");
        switchView("planificador");
        switchScheduleTab("session");
        goToStep(2); // Jornada is Step 2
        return;
    }

    const docHtml = generateFormattedDocument();
    $.modalBody.innerHTML = docHtml;
    $.modalOverlay.classList.add("open");
    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

function closeExportModal() {
    $.modalOverlay.classList.remove("open");
}

function generateFormattedDocument() {
    const ageText = state.selectedAge === "3_anios" ? "3 años" : state.selectedAge === "4_anios" ? "4 años" : "5 años";
    const areaName = CURRICULUM_DATA[state.session.selectedArea]?.name || "No especificada";
    const areaObj = CURRICULUM_DATA[state.session.selectedArea];
    const compKeys = (state.session.selectedCompetence || "").split(",");
    const compNames = compKeys.map(k => areaObj?.competencies[k]?.name || k).filter(Boolean);
    const competenceName = compNames.length > 0 ? "• " + compNames.join("<br>• ") : "No especificada";
    const capacities = state.session.selectedCapacities;

    let transversalsHtml = "";
    for (const key in state.session.transversals) {
        const trans = state.session.transversals[key];
        if (trans.checked) {
            const compObj = TRANSVERSAL_COMPETENCIES[key];
            transversalsHtml += `
                <p><strong>Competencia Transversal:</strong> ${compObj.name}</p>
                <ul>
                    ${trans.capacities.map(c => `<li>${c}</li>`).join("") || "<li>Todas las capacidades aplicadas de forma transversal</li>"}
                </ul>
            `;
        }
    }
    if (transversalsHtml === "") {
        transversalsHtml = "<p>Ninguna competencia transversal explícita seleccionada.</p>";
    }

    let routinesHtml = "";
    const categories = [
        { key: "recibimiento", name: "Recibimiento" },
        { key: "higiene", name: "Higiene y Aseo" },
        { key: "alimentacion", name: "Alimentación" }
    ];
    if (!state.routinesChecked) {
        state.routinesChecked = { recibimiento: {}, higiene: {}, alimentacion: {} };
    }
    categories.forEach(cat => {
        const checkedItems = state.routines[cat.key].filter(r => state.routinesChecked[cat.key][r] !== false);
        if (checkedItems.length > 0) {
            routinesHtml += `
                <p><strong>${cat.name}:</strong></p>
                <ul>
                    ${checkedItems.map(r => `<li>${r}</li>`).join("")}
                </ul>
            `;
        } else {
            routinesHtml += `
                <p><strong>${cat.name}:</strong> Ninguna rutina activa.</p>
            `;
        }
    });

    let playMomentsHtml = `<table class="doc-table">
        <thead>
            <tr>
                <th style="width: 150px;">Momento</th>
                <th>Estrategia y Actividades Pedagógicas</th>
            </tr>
        </thead>
        <tbody>
    `;
    state.freePlay.moments.forEach(m => {
        playMomentsHtml += `
            <tr>
                <td><strong>${m.name}</strong></td>
                <td>${m.content || "Sin descripción redactada."}</td>
            </tr>
        `;
    });
    playMomentsHtml += `</tbody></table>`;

    let sessionStepsHtml = `<table class="doc-table">
        <thead>
            <tr>
                <th style="width: 180px;">Secuencia Didáctica</th>
                <th>Estrategias Metodológicas (Detalle)</th>
            </tr>
        </thead>
        <tbody>
    `;
    state.session.didacticSteps.forEach(step => {
        sessionStepsHtml += `
            <tr>
                <td><strong>${step.name}</strong><br><small style="color:#666;">${step.desc}</small></td>
                <td>${step.content || "Sin descripción redactada."}</td>
            </tr>
        `;
    });
    sessionStepsHtml += `</tbody></table>`;

    let inclusionHtml = "";
    if (state.session.isInclusionActive) {
        const tips = getInclusionTips(state.selectedAge, state.session.selectedArea, state.evaluation.students);
        inclusionHtml += `
            <div style="background-color:#FFF5F5; border-left:4px solid #B35C6D; padding:1rem; border-radius:4px; margin-bottom:1.5rem;">
                <h5 style="color:#B35C6D; font-weight:bold; margin-bottom:0.5rem; font-size:0.95rem;">ADAPTACIONES INCLUSIVAS NEE APLICADAS EN AULA:</h5>
                <ul style="margin-left:1.2rem; font-size:0.85rem; line-height:1.4;">
                    ${tips.map(r => `<li>${r}</li>`).join("")}
                </ul>
            </div>
        `;
    }

    let rubricHtml = "";
    if (capacities.length > 0) {
        rubricHtml += `<div class="table-responsive-wrapper"><table class="doc-table">
            <thead>
                <tr>
                    <th>Estudiante</th>
                    ${capacities.map(c => `<th>${c}</th>`).join("")}
                </tr>
            </thead>
            <tbody>
        `;
        state.evaluation.students.forEach(st => {
            rubricHtml += `
                <tr>
                    <td><strong>${st.name}</strong></td>
                    ${capacities.map(c => {
                const grade = getStudentGrade(st.id, c);
                return `
                            <td>
                                <select class="criteria-select ${grade.toLowerCase()}" data-student-id="${st.id}" data-capacity="${c}">
                                    <option value="Logrado" ${grade === 'Logrado' ? 'selected' : ''}>A - Logrado</option>
                                    <option value="Proceso" ${grade === 'Proceso' ? 'selected' : ''}>B - Proceso</option>
                                    <option value="Inicio" ${grade === 'Inicio' ? 'selected' : ''}>C - En Inicio</option>
                                </select>
                                <span class="print-grade-text" style="font-weight:bold; color: ${grade === 'Logrado' ? '#27AE60' : grade === 'Proceso' ? '#2980B9' : '#C0392B'}">${grade}</span>
                            </td>
                        `;
            }).join("")}
                </tr>
            `;
        });
        rubricHtml += `</tbody></table></div>`;
    } else {
        rubricHtml = "<p>Ninguna rúbrica / lista de cotejo configurada (Requiere capacidades seleccionadas).</p>";
    }

    return `
        <div class="preview-document">
            <div class="doc-header">
                <span class="doc-logo-sub">Ministerio de Educación de la República del Perú</span>
                <h2 class="doc-title">Planificación Curricular Diaria</h2>
                <h4 style="font-weight:600; color:#555;">Plataforma Kuska Plan - Inicial Ciclo II</h4>
            </div>
            
            <div class="doc-metadata-grid">
                <div class="doc-meta-item"><strong>Institución Educativa:</strong> ${state.config.ieName}</div>
                <div class="doc-meta-item"><strong>Aula / Sección:</strong> ${state.config.aulaName}</div>
                <div class="doc-meta-item"><strong>Docente:</strong> ${state.config.teacherTitle}</div>
                <div class="doc-meta-item"><strong>Aula / Edad:</strong> ${ageText}</div>
                <div class="doc-meta-item"><strong>Fecha de Ejecución:</strong> ${new Date().toLocaleDateString('es-PE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div class="doc-meta-item"><strong>Año Escolar:</strong> ${state.config.schoolYear}</div>
            </div>

            <!-- Creative Session Title Banner -->
            <div class="session-title-banner" style="text-align: center; margin: 2rem 0; padding: 1rem; border-top: 2px solid var(--primary); border-bottom: 2px solid var(--primary);">
                <h1 style="font-size: 1.6rem; font-weight: 800; color: var(--primary); margin: 0 0 0.2rem 0; line-height:1.3;">"${state.session.title || 'Actividad del Día'}"</h1>
                <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Actividad Pedagógica Planificada</span>
            </div>
            
            <div class="doc-section-title">I. Situación Significativa de Aprendizaje</div>
            <p style="background-color:#F8FAFC; padding:1.2rem; border-radius:4px; border:1px solid #E2E8F0; font-style:italic;">
                "${state.significantSituation}"
            </p>

            ${inclusionHtml}

            <div class="doc-section-title">II. Propósitos de Aprendizaje Oficiales (MINEDU)</div>
            <table class="doc-table">
                <thead>
                    <tr>
                        <th style="width: 250px;">Área y Competencia</th>
                        <th>Capacidades Seleccionadas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>Área:</strong> ${areaName}<br>
                            <strong>Competencia:</strong> ${competenceName}
                        </td>
                        <td>
                            <ul style="margin-left: 1.2rem;">
                                ${capacities.map(c => `<li>${c}</li>`).join("") || "<li>Ninguna capacidad seleccionada explícitamente.</li>"}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <h4 style="font-size:1.05rem; font-weight:700; color:#1A365D; margin-top:1.5rem; margin-bottom:0.5rem;">Competencias Transversales</h4>
            ${transversalsHtml}

            <div class="doc-section-title">III. Recursos y Materiales Educativos Sugeridos</div>
            <ul style="margin-left: 1.5rem; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem;">
                ${(state.session.materials || []).map(m => `<li>${m}</li>`).join("") || "<li>Materiales ordinarios del aula de inicial.</li>"}
            </ul>

            <div class="doc-section-title">IV. Estructura de la Jornada Diaria</div>
            <h4 style="font-size:1.05rem; font-weight:700; color:#1A365D; margin-top:1rem; margin-bottom:0.5rem;">1. Rutinas Diarias de Cuidado</h4>
            ${routinesHtml}

            <h4 style="font-size:1.05rem; font-weight:700; color:#1A365D; margin-top:2rem; margin-bottom:0.5rem;">2. Juego Libre en los Sectores (6 Momentos)</h4>
            ${playMomentsHtml}

            <div class="doc-section-title" style="page-break-before: always;">V. Desarrollo de la Sesión de Aprendizaje (Procesos Didácticos)</div>
            ${sessionStepsHtml}

            <div class="doc-section-title" style="page-break-before: always;">VI. Evaluación Formativa (Lista de Cotejo de Aula)</div>
            ${rubricHtml}
            
            <div style="margin-top:4rem; display:flex; justify-content:space-between; font-size:0.85rem; page-break-inside: avoid;">
                <div style="border-top:1px solid #aaa; width:220px; text-align:center; padding-top:0.5rem;">
                    Firma de la Docente<br><strong>${state.config.teacherTitle}</strong>
                </div>
                <div style="border-top:1px solid #aaa; width:220px; text-align:center; padding-top:0.5rem;">
                    Sello Dirección Inicial
                </div>
            </div>
        </div>
    `;
}

function updatePrintOrientation(isLandscape) {
    let printStyle = document.getElementById("dynamic-print-style");
    if (!printStyle) {
        printStyle = document.createElement("style");
        printStyle.id = "dynamic-print-style";
        document.head.appendChild(printStyle);
    }

    if (isLandscape) {
        printStyle.innerHTML = `
            @media print {
                @page {
                    size: A4 landscape;
                    margin: 1cm;
                }
                .a4-sheet {
                    max-width: none !important;
                    min-height: 0 !important;
                }
            }
            .a4-sheet {
                max-width: 1250px;
                min-height: 21cm;
            }
        `;
    } else {
        printStyle.innerHTML = `
            @media print {
                @page {
                    size: A4 portrait;
                    margin: 1.5cm;
                }
                .a4-sheet {
                    max-width: none !important;
                    min-height: 0 !important;
                }
            }
            .a4-sheet {
                max-width: 850px;
                min-height: 29.7cm;
            }
        `;
    }
}

function renderStep4Document() {
    if (!$.step4DocumentContainer) return;
    const docHtml = generateFormattedDocument();
    $.step4DocumentContainer.innerHTML = docHtml;

    // Auto-determine orientation based on capabilities count
    const capacities = state.session.selectedCapacities || [];
    const isLandscape = capacities.length > 4;
    updatePrintOrientation(isLandscape);

    // Bind change listener on criteria selects to make them interactive inline
    const criteriaSelects = $.step4DocumentContainer.querySelectorAll(".criteria-select");
    criteriaSelects.forEach(select => {
        select.addEventListener("change", (e) => {
            const sId = parseInt(select.getAttribute("data-student-id"));
            const capText = select.getAttribute("data-capacity");
            const newGrade = e.target.value;
            setStudentGrade(sId, capText, newGrade);
            select.className = `criteria-select ${newGrade.toLowerCase()}`;

            // Sync status badge / text element next to it
            const spanText = select.nextElementSibling;
            if (spanText && spanText.classList.contains("print-grade-text")) {
                spanText.textContent = newGrade;
                spanText.style.color = newGrade === 'Logrado' ? '#27AE60' : newGrade === 'Proceso' ? '#2980B9' : '#C0392B';
            }

            // Sync formatting stats
            updateEvaluationStats();
        });
    });

    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

// Print simulations
function simulatePdfDownload() {
    showToast("Preparando impresión A4...", "success");
    setTimeout(() => {
        window.print();
    }, 1000);
}

// Copy to Clipboard
function copyPlanToClipboard() {
    const textPlan = `
PLANIFICACIÓN CURRICULAR DIARIA - KUSKA PLAN
Colegio: ${state.config.ieName}
Aula: ${state.config.aulaName}
Docente: ${state.config.teacherTitle}
Edad: ${state.selectedAge === "3_anios" ? "3 años" : state.selectedAge === "4_anios" ? "4 años" : "5 años"}
Situación Significativa: "${state.significantSituation}"
Área: ${CURRICULUM_DATA[state.session.selectedArea]?.name}
Competencia: ${CURRICULUM_DATA[state.session.selectedArea]?.competencies[state.session.selectedCompetence]?.name}
Capacidades: ${state.session.selectedCapacities.join(", ")}
    `;

    navigator.clipboard.writeText(textPlan.trim()).then(() => {
        showToast("¡Planificación copiada al portapapeles!", "success");
    }).catch(err => {
        showToast("No se pudo copiar automáticamente.", "warning");
    });
}

// Toast
function showToast(message, type = "success") {
    $.toastText.textContent = message;

    if (type === "success") {
        $.toast.style.backgroundColor = "#2D6A4F";
    } else if (type === "warning") {
        $.toast.style.backgroundColor = "#D08A00";
    } else {
        $.toast.style.backgroundColor = "#C0392B";
    }

    $.toast.classList.add("show");

    setTimeout(() => {
        $.toast.classList.remove("show");
    }, 3500);
}

// --- PLANS HISTORY MANAGER DATABASE CONTROLLERS ---
function saveActivePlanToHistory(silent = false) {
    if (!state.session.selectedArea || !state.session.selectedCompetence) {
        if (!silent) showToast("Planificación incompleta. Selecciona Área y Competencia.", "warning");
        return;
    }

    if (!state.savedPlans) {
        state.savedPlans = [];
    }

    const existingIndex = state.savedPlans.findIndex(p => p.situation === state.significantSituation && p.area === state.session.selectedArea);

    const planObj = {
        id: existingIndex >= 0 ? state.savedPlans[existingIndex].id : "plan_" + Date.now(),
        timestamp: new Date().toLocaleString(),
        title: state.session.title || "Planificación Diaria",
        age: state.selectedAge,
        area: state.session.selectedArea,
        competence: state.session.selectedCompetence,
        capacities: [...state.session.selectedCapacities],
        situation: state.significantSituation,
        freePlay: JSON.parse(JSON.stringify(state.freePlay.moments)),
        routines: JSON.parse(JSON.stringify(state.routines)),
        routinesChecked: JSON.parse(JSON.stringify(state.routinesChecked || { recibimiento: {}, higiene: {}, alimentacion: {} })),
        didacticSteps: JSON.parse(JSON.stringify(state.session.didacticSteps)),
        transversals: JSON.parse(JSON.stringify(state.session.transversals || {}))
    };

    if (existingIndex >= 0) {
        state.savedPlans[existingIndex] = planObj;
    } else {
        state.savedPlans.push(planObj);
    }

    saveCurrentUserSession();

    if (!silent) {
        showToast("¡Planificación guardada en tu historial!", "success");
    }
}

function loadSavedPlan(plan) {
    state.selectedAge = plan.age;
    state.session.selectedArea = plan.area;
    state.session.selectedCompetence = plan.competence;
    state.session.selectedCapacities = plan.capacities;
    state.significantSituation = plan.situation;
    state.freePlay.moments = plan.freePlay;
    state.routines = plan.routines;
    state.routinesChecked = plan.routinesChecked;
    state.session.didacticSteps = plan.didacticSteps;
    state.session.transversals = plan.transversals;

    // Sync UI components
    $.situationTextarea.value = plan.situation;
    $.areaSelect.value = plan.area;
    handleAreaChange();

    // Check corresponding competence checkboxes
    const compKeys = (plan.competence || "").split(",");
    compKeys.forEach(k => {
        const cb = document.querySelector(`#competencies-checkbox-container input[value='${k}']`);
        if (cb) cb.checked = true;
    });
    handleCompetenciesToggle(); // updates capacities lists

    // Check capacities checkboxes
    plan.capacities.forEach(c => {
        const cb = document.querySelector(`#capacities-container input[data-capacity="${c}"]`);
        if (cb) {
            cb.checked = true;
            cb.closest(".capacity-checkbox-item").classList.add("checked");
        }
    });

    // Update active Step age highlights
    $.ageCards.forEach(c => {
        const cardAge = c.getAttribute("data-age");
        if (cardAge === plan.age) {
            c.classList.add("active");
        } else {
            c.classList.remove("active");
        }
    });

    renderFreePlayMoment();
    renderDidacticSteps();

    // Open the export modal directly
    openExportModal();
    showToast("Planificación cargada con éxito.", "success");
}

function renderPlansHistory() {
    const container = document.getElementById("history-grid-container");
    if (!container) return;
    container.innerHTML = "";

    if (!state.savedPlans || state.savedPlans.length === 0) {
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.style.padding = "4rem 2rem";
        container.style.gridColumn = "1 / -1";

        container.innerHTML = `
            <div style="background-color: var(--primary-light); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                <i data-lucide="archive-x" class="color-primary" style="width: 40px; height: 40px;"></i>
            </div>
            <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.5rem; text-align: center;">Historial Vacío</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); text-align: center; max-width: 450px; margin-bottom: 2rem; line-height: 1.5;">
                Aún no has guardado ninguna planificación. Comienza a diseñar tus sesiones de clase y guárdalas para tener un registro y control de todas tus fichas pedagógicas.
            </p>
            <button type="button" class="btn btn-primary" id="btn-history-start-planning" style="width: auto; padding-left: 2rem; padding-right: 2rem;">
                <i data-lucide="plus-circle" class="icon-sm"></i>
                <span>Crear Nueva Planificación</span>
            </button>
        `;

        const startBtn = document.getElementById("btn-history-start-planning");
        if (startBtn) {
            startBtn.addEventListener("click", () => {
                switchView("planificador");
            });
        }

        if (typeof lucide !== "undefined") { lucide.createIcons(); }
        return;
    }

    container.style.display = "grid";

    state.savedPlans.forEach(plan => {
        const areaName = CURRICULUM_DATA[plan.area]?.name || "Área General";
        const ageText = plan.age === "3_anios" ? "3 Años" : plan.age === "4_anios" ? "4 Años" : "5 Años";

        const card = document.createElement("div");
        card.className = "history-card";

        card.innerHTML = `
            <div class="history-card-header">
                <span class="history-card-badge">${ageText}</span>
                <span class="history-card-date">${plan.timestamp.split(" ")[0]}</span>
            </div>
            <h3 class="history-card-title">${plan.title}</h3>
            
            <div class="history-card-meta">
                <div class="history-card-meta-item">
                    <strong>Área:</strong> <span>${areaName}</span>
                </div>
                <div class="history-card-meta-item">
                    <strong>Situación:</strong> <span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden; max-width: 250px;">${plan.situation}</span>
                </div>
            </div>
            
            <p class="history-card-body">
                ${plan.situation}
            </p>
            
            <div class="history-card-actions">
                <button type="button" class="btn btn-primary btn-history-open" style="font-size: 0.8rem; padding: 0.5rem 1rem; width: auto; flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.4rem;">
                    <i data-lucide="file-text" class="icon-xs"></i>
                    <span>Ver Ficha</span>
                </button>
                <button type="button" class="btn btn-secondary btn-history-delete" style="font-size: 0.8rem; padding: 0.5rem 1rem; width: auto; background-color: #fee2e2; border-color: #fca5a5; color: #b91c1c; display: flex; align-items: center; justify-content: center;">
                    <i data-lucide="trash-2" class="icon-xs"></i>
                </button>
            </div>
        `;

        card.querySelector(".btn-history-open").addEventListener("click", () => {
            loadSavedPlan(plan);
        });

        card.querySelector(".btn-history-delete").addEventListener("click", () => {
            if (confirm("¿Estás seguro de que deseas eliminar esta planificación de tu historial?")) {
                deleteSavedPlan(plan.id);
            }
        });

        container.appendChild(card);
    });

    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

function deleteSavedPlan(planId) {
    state.savedPlans = state.savedPlans.filter(p => p.id !== planId);
    saveCurrentUserSession();
    showToast("Planificación eliminada del historial.", "success");
    renderPlansHistory();
}

function clearPlansHistory() {
    if (confirm("¿Estás seguro de que deseas vaciar por completo todo tu historial de planificaciones? Esta acción es irreversible.")) {
        state.savedPlans = [];
        saveCurrentUserSession();
        showToast("Todo el historial ha sido vaciado.", "success");
        renderPlansHistory();
    }
}

// --- DYNAMIC CURRICULUM SUGGESTIONS DATABASE ---
const AULA_SITUATION_SUGGESTIONS = {
    "3_anios": [
        {
            icon: "🎨",
            tag: "Exploración Sensorial",
            title: "Explorando texturas y colores con mis manitos",
            desc: "Estimulación táctil mediante pintura dactilar, masas de colores o arcilla. Presiona para ver otras variaciones de este tema.",
            values: [
                "Explorando texturas y colores con mis manitos: Los niños de 3 años exploran libremente utilizando témperas con sus manos, esponjas de texturas y arena húmeda en bandejas sensoriales. Esta actividad potencia su coordinación visomotriz y les permite expresar sensaciones corporales y artísticas de forma espontánea.",
                "El mundo de las masas y la plastilina casera: Los niños elaboran y manipulan masas hechas con harina, agua y colorante vegetal, moldeando formas libres. Promueve la discriminación de texturas húmedas/secas, blandas/duras y fomenta la fuerza dactilar y motricidad fina.",
                "Huellas de la naturaleza en arcilla: Recolectamos hojas secas, ramitas y flores del jardín escolar. Los niños presionan estos elementos sobre pedazos de arcilla fresca para crear impresiones de la naturaleza, integrando el tacto y el aprecio por el medio ambiente."
            ]
        },
        {
            icon: "🧸",
            tag: "Identidad y Cuidado",
            title: "Jugando a la casita y cuidando a mis muñecos",
            desc: "Juego simbólico enfocado en la afectividad y la representación del hogar. Presiona para ver otras variaciones de este tema.",
            values: [
                "Jugando a la casita y cuidando a mis muñecos: Proyecto enfocado en representar roles de cuidado y afecto dentro del hogar. Los niños visten, alimentan y arrullan a muñecos de tela, imitando acciones cotidianas que observan en sus padres. Se fomenta el desarrollo socioemocional y la identidad inicial.",
                "Mi reflejo en el espejo y mi ropita: Sesión interactiva frente a espejos grandes de seguridad donde los niños identifican sus rasgos físicos (ojos, cabello) y juegan a colocarse y sacarse prendas sencillas (sombreros, chalecos), reforzando su autonomía e identidad personal.",
                "Pequeños cocineros en acción: Simulación de preparación de ensalada de frutas utilizando frutas de plástico y platos de juguete. Los niños practican lavar, repartir y compartir alimentos con sus amigos del aula, fomentando la convivencia y primeros hábitos de orden."
            ]
        },
        {
            icon: "🏃‍♂️",
            tag: "Psicomotricidad",
            title: "Paso a paso juego, salto y reconozco mi cuerpo",
            desc: "Circuitos motores interactivos para afianzar equilibrio y orientación. Presiona para ver otras variaciones de este tema.",
            values: [
                "Paso a paso juego, salto y reconozco mi cuerpo: Circuito psicomotriz diseñado para niños de 3 años. A través de colchonetas, túneles de tela y rampas suaves, los niños coordinan sus primeros saltos bipodales y experimentan el equilibrio, afianzando la percepción de su cuerpo en el espacio.",
                "El baile de los globos y las cintas de colores: Los niños sostienen cintas de colores y bailan al ritmo de música suave, intentando mantener un globo en el aire sin que caiga al suelo empleando sus manos y cabeza. Promueve la coordinación ojo-mano y el equilibrio dinámico.",
                "Cruzar el río de piedras imaginario: Colocamos aros y huellas de cartón en el suelo. Los niños avanzan pisando únicamente dentro de los aros para 'no mojarse los pies', estimulando el equilibrio estático, control postural y nociones de dirección (adelante, atrás)."
            ]
        },
        {
            icon: "🍃",
            tag: "Indagación Inicial",
            title: "Sonidos curiosos y olores de nuestro jardín",
            desc: "Exploración directa de elementos del entorno natural escolar. Presiona para ver otras variaciones de este tema.",
            values: [
                "Sonidos curiosos y olores de nuestro jardín: Salida guiada al patio de juegos para explorar el entorno natural. Los niños recolectan hojas secas, huelen plantas aromáticas y discriminan sonidos del ambiente (canto de aves, viento, bocinas distantes), registrando sensaciones simples.",
                "Los secretos del viento y las hojas que caen: Salimos al patio en un día con viento y jugamos a atrapar hojas secas que vuelan. Experimentamos soplando molinillos de papel y plumas, aprendiendo nociones iniciales de causa y efecto sobre la fuerza del aire en el entorno.",
                "Descubriendo texturas en la corteza de los árboles: Los niños tocan con los ojos vendados troncos de árboles, pasto y piedras del jardín, describiendo si lo sienten áspero, suave, frío o templado, desarrollando la observación científica sensorial."
            ]
        }
    ],
    "4_anios": [
        {
            icon: "🐾",
            tag: "Ciencia e Indagación",
            title: "Investigamos sobre los animales de mi comunidad",
            desc: "Investigación activa de insectos, mascotas o huellas del entorno. Presiona para ver otras variaciones de este tema.",
            values: [
                "Investigamos sobre los animales de nuestra comunidad: Los niños de 4 años muestran interés por los seres vivos de su entorno. Realizaremos observaciones directas de insectos, comparaciones de huellas de mascotas y registro gráfico de sus descubrimientos en el cuaderno de campo.",
                "El mundo misterioso de los insectos del jardín: Armados con lupas plásticas, los niños recorren el huerto escolar para buscar caracoles, hormigas y mariquitas. Anotan en dibujos dónde viven, qué comen y cómo se trasladan estos pequeños bichitos.",
                "Las mascotas que viven en nuestras casas: Compartimos fotos e historias de perros, gatos y loros. Los niños investigan y clasifican a los animales de acuerdo a su cubierta (plumas, pelos o escamas) y elaboran un álbum grupal de compromisos de cuidado animal."
            ]
        },
        {
            icon: "🏪",
            tag: "Matemática Vivencial",
            title: "Creamos nuestra tiendita del aula para jugar",
            desc: "Agrupación de productos reciclados y simulación de compra/venta. Presiona para ver otras variaciones de este tema.",
            values: [
                "Creamos nuestra tiendita del aula: Juego simbólico matemático donde recolectamos empaques reciclados de alimentos, los agrupamos según su criterio, establecemos precios sencillos de simulación y ejercitamos nociones de cantidad y clasificación concreta.",
                "El mercado de frutas de nuestra clase: Clasificamos frutas de juguete y verduras por colores y tamaños. Los niños usan monedas de cartón para simular transacciones simples de compra y venta, utilizando cuantificadores como 'muchos', 'pocos' y 'uno'.",
                "Clasificamos y ordenamos los juguetes en cajas: Aprendemos nociones matemáticas de correspondencia de uno a uno ordenando bloques por tamaño y legos por color, etiquetando los estantes del aula con dibujos sencillos para mantener la organización."
            ]
        },
        {
            icon: "💧",
            tag: "Cuidado Ambiental",
            title: "El maravilloso viaje de la gotita de agua",
            desc: "Sensibilización ambiental mediante experimentos sencillos y lavado. Presiona para ver otras variaciones de este tema.",
            values: [
                "El viaje de la gota de agua: Enfoque de conservación del medio ambiente. Aprendemos sobre la importancia del agua para las plantas y animales, practicamos el uso responsable del grifo durante la higiene diaria y diseñamos carteles recordatorios de ahorro.",
                "El ciclo de la lluvia en un frasco de vidrio: Experimento sencillo donde calentamos agua en un frasco cerrado para observar la condensación en la tapa ('lluvia artificial'). Ayuda a los niños de 4 años a comprender intuitivamente de dónde viene el agua y cómo cuidar la lluvia.",
                "Sembrando plantitas y cuidando de la tierra: Los niños siembran pequeñas plantas de jardín y se comprometen a regarlas por turnos usando envases reciclados con pequeños orificios. Reflexionan sobre el cuidado de las plantas como seres vivos importantes."
            ]
        },
        {
            icon: "🎭",
            tag: "Socioemocional",
            title: "El gran teatro de mis emociones cotidianas",
            desc: "Identificación y resolución de conflictos mediante títeres y drama. Presiona para ver otras variaciones de este tema.",
            values: [
                "El teatro de las emociones: Representación dramática utilizando máscaras y títeres caseros para identificar la alegría, el enfado, el miedo y la tristeza en situaciones cotidianas, dialogando sobre cómo resolver conflictos con empatía.",
                "El cofre de la calma y la respiración: Creamos botellas de la calma con brillantina y agua, y aprendemos técnicas de respiración profunda imitando el inflado de un globo, dándole a los niños de 4 años herramientas para autorregular su enojo.",
                "El mural de los abrazos y el compañerismo: Los niños pintan un mural con sus manos estampadas y conversan sobre las acciones que demuestran cariño, respeto y ayuda mutua en el aula escolar, reforzando valores y vínculos interpersonales."
            ]
        }
    ],
    "5_anios": [
        {
            icon: "🧪",
            tag: "Método Científico",
            title: "El misterio de las plantas y el poder de las semillas",
            desc: "Planteamiento de hipótesis y registro cuantitativo del tallo. Presiona para ver otras variaciones de este tema.",
            values: [
                "El misterio de las plantas y sus semillas: Experimentos científicos grupales en el aula de 5 años. Germinaremos frijoles bajo condiciones controladas (luz vs. oscuridad), formulamos hipótesis lógicas sobre qué necesitan para vivir, registrando el crecimiento en centímetros y comparando los resultados.",
                "El arcoíris en vasos de agua y la capilaridad: Experimento con agua teñida de colores primarios y papel absorbente para ver cómo el agua 'viaja' y crea colores secundarios. Fomenta el planteamiento de hipótesis, la observación sistemática y registro científico.",
                "Investigamos qué objetos flotan y cuáles se hunden: Colocamos agua en una tina grande y probamos con llaves, corchos, monedas y juguetes plásticos. Los niños registran sus predicciones antes del experimento en tablas comparativas sencillas."
            ]
        },
        {
            icon: "📚",
            tag: "Lectoescritura Emergente",
            title: "Diseñamos la biblioteca y el periódico de nuestra clase",
            desc: "Inmersión en textos funcionales y rotulación interactiva del salón. Presiona para ver otras variaciones de este tema.",
            values: [
                "Creamos nuestra biblioteca y periódico del aula: Inmersión lingüística interactiva. Los niños de 5 años rotulan los libros del aula por géneros, escriben cuentos colectivos mediante dictado a la maestra, dibujan e intentan escribir de forma espontánea pequeñas noticias del colegio.",
                "El libro viajero de las familias del aula: Cada fin de semana un niño se lleva un cuaderno a casa para plasmar con ayuda de sus padres una historia o anécdota familiar mediante dibujos y textos propios, leyéndolo y exponiéndolo luego ante sus compañeros.",
                "Elaboramos carteles informativos sobre hábitos saludables: Los niños investigan sobre alimentos nutritivos, dibujan y realizan escrituras espontáneas de recetas simples para armar carteles gigantes expuestos en los pasillos de la escuela."
            ]
        },
        {
            icon: "📐",
            tag: "Pensamiento Geométrico",
            title: "Constructoras del aula: Diseñamos castillos y puentes",
            desc: "Desafíos tridimensionales, estimación con pasos y planos de dibujo. Presiona para ver otras variaciones de este tema.",
            values: [
                "Constructoras del aula: Retos de diseño y construcción espacial. Los niños de 5 años dibujan planos tridimensionales sencillos antes de edificar con bloques de madera y cajas, comparando pesos en balanzas artesanales y estimando longitudes en pasos.",
                "El mapa del tesoro escondido en el aula: Los niños diseñan y leen mapas esquemáticos del salón utilizando referentes espaciales (arriba, abajo, detrás, al lado de) para orientarse y encontrar un cofre de stickers oculto por la maestra.",
                "Figuras geométricas en construcciones arquitectónicas: Identificamos círculos, cuadrados, triángulos y rectángulos en fotos de casas peruanas tradicionales. Los niños recrean estas formas usando palitos de chupete y plastilina en modelos 2D y 3D."
            ]
        },
        {
            icon: "🌍",
            tag: "Ecología y Ciudadanía",
            title: "Guardianes de la Tierra: Reciclamos y transformamos",
            desc: "Campaña ambiental grupal de segregación y juguetes reciclados. Presiona para ver otras variaciones de este tema.",
            values: [
                "Los guardianes del reciclaje y ecología escolar: Proyecto de ciudadanía ambiental activa. Aprendemos a segregar residuos en contenedores diferenciados en clase, creamos abono casero con hojas secas del jardín y diseñamos juguetes funcionales con material de reciclaje.",
                "Cuidamos las áreas verdes de nuestra escuela: Campaña grupal para adoptar un pequeño espacio de jardín escolar. Los niños siembran, remueven tierra con palas plásticas, eliminan malezas y decoran letreros exigiendo el respeto a las plantas.",
                "El juguete favorito reciclado por nosotros: Los niños traen botellas de plástico, cartón de huevos y tapas para construir carros de juguete, aviones y títeres ecológicos, presentando su creación reciclada en una feria interna del aula."
            ]
        }
    ]
};

function renderSituationSuggestions() {
    const container = document.getElementById("situation-suggestions-container");
    if (!container) return;
    container.innerHTML = "";

    // Render dynamic motivational quote to fill left panel empty space
    const quoteEl = document.getElementById("dynamic-motivational-quote");
    if (quoteEl) {
        const MOTIVATIONAL_QUOTES = [
            "\"Planificar con amor es construir el puente para que cada niño descubra el mundo a su propio ritmo.\"",
            "\"El juego libre es el trabajo más serio de la infancia. ¡Gracias por guiar sus pasos hoy!\"",
            "\"En cada dibujo, juego y sonrisa hay un aprendizaje mágico ocurriendo en tu aula.\"",
            "\"Tu paciencia y ternura transforman vidas. ¡Que tengas una maravillosa sesión de aprendizaje!\"",
            "\"La primera infancia es la etapa de los pequeños grandes descubrimientos. ¡A planificar con el corazón!\"",
            "\"Enseñar en inicial es dejar una huella en el corazón de los niños para siempre.\""
        ];
        const randomQuote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
        quoteEl.textContent = randomQuote;
    }

    const ageKey = state.selectedAge || "4_anios";
    const suggestions = AULA_SITUATION_SUGGESTIONS[ageKey] || AULA_SITUATION_SUGGESTIONS["4_anios"];

    suggestions.forEach(item => {
        const itemEl = document.createElement("div");
        itemEl.className = "suggestion-card-premium";
        itemEl.dataset.clickIndex = "0";
        itemEl.style.cssText = `
            background-color: var(--white);
            border: 1.5px solid var(--border-color);
            border-radius: var(--radius-md);
            padding: 1rem 1.2rem;
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
            display: flex;
            gap: 0.8rem;
            align-items: start;
            box-shadow: var(--shadow-soft);
        `;

        itemEl.innerHTML = `
            <div style="background-color: var(--primary-light); width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0; border: 1px solid var(--border-color);">
                ${item.icon}
            </div>
            <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                    <span style="font-size: 0.85rem; font-weight: 800; color: var(--primary); text-transform: uppercase; letter-spacing: 0.5px;">${item.tag}</span>
                    <div style="color: var(--text-muted); display: flex; align-items: center;">
                        <i data-lucide="refresh-cw" class="icon-xxs" style="animation: spinSlow 12s linear infinite;"></i>
                    </div>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin: 0 0 0.4rem 0; line-height: 1.35;">${item.title}</h4>
                <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.5; margin: 0;">${item.desc}</p>
            </div>
        `;

        itemEl.addEventListener("click", () => {
            const clickIndex = parseInt(itemEl.dataset.clickIndex);
            const totalVariants = item.values.length;
            const activeValue = item.values[clickIndex % totalVariants];

            $.situationTextarea.value = activeValue;
            state.significantSituation = activeValue;

            // Advance variant index
            const nextIndex = clickIndex + 1;
            itemEl.dataset.clickIndex = nextIndex.toString();

            // Automation: auto-select area and competence based on activeValue content
            let targetArea = "";
            let targetComp = "";
            const text = activeValue.toLowerCase();

            if (text.includes("animales") || text.includes("fauna") || text.includes("insectos")) {
                targetArea = "ciencia_tecnologia";
                targetComp = "indaga_metodos";
            } else if (text.includes("gota") || text.includes("agua") || text.includes("lluvia")) {
                targetArea = "ciencia_tecnologia";
                targetComp = "indaga_metodos";
            } else if (text.includes("tiendita") || text.includes("tienda") || text.includes("mercado")) {
                targetArea = "matematica";
                targetComp = "resuelve_cantidad";
            } else if (text.includes("emociones") || text.includes("calma") || text.includes("teatro de las emociones")) {
                targetArea = "personal_social";
                targetComp = "construye_identidad";
            } else if (text.includes("plantas") || text.includes("semillas") || text.includes("germinación") || text.includes("germinaremos") || text.includes("flotan") || text.includes("arcoíris")) {
                targetArea = "ciencia_tecnologia";
                targetComp = "indaga_metodos";
            } else if (text.includes("biblioteca") || text.includes("periódico") || text.includes("cuentos") || text.includes("escrituras") || text.includes("libro") || text.includes("carteles")) {
                targetArea = "comunicacion";
                targetComp = "lee_textos"; // Default to reading/writing
            } else if (text.includes("constructoras") || text.includes("castillos") || text.includes("mapa") || text.includes("geométricas") || text.includes("planos")) {
                targetArea = "matematica";
                targetComp = "resuelve_forma";
            } else if (text.includes("reciclaje") || text.includes("reciclamos") || text.includes("áreas verdes") || text.includes("juguete favorito reciclado")) {
                targetArea = "personal_social";
                targetComp = "convive_participa";
            } else if (text.includes("texturas") || text.includes("manitos") || text.includes("masas") || text.includes("arcilla")) {
                targetArea = "comunicacion";
                targetComp = "crea_lenguajes";
            } else if (text.includes("casita") || text.includes("muñecos") || text.includes("reflejo") || text.includes("cocineros")) {
                targetArea = "personal_social";
                targetComp = "construye_identidad";
            } else if (text.includes("paso a paso") || text.includes("salto") || text.includes("baile") || text.includes("río de piedras")) {
                targetArea = "psicomotriz";
                targetComp = "desenvuelve_motricidad";
            } else if (text.includes("sonidos") || text.includes("olores") || text.includes("viento") || text.includes("corteza")) {
                targetArea = "ciencia_tecnologia";
                targetComp = "indaga_metodos";
            }

            if (targetArea && targetComp) {
                $.areaSelect.value = targetArea;
                handleAreaChange();

                const cb = document.querySelector(`#competencies-checkbox-container input[value='${targetComp}']`);
                if (cb) {
                    cb.checked = true;
                }
                handleCompetenciesToggle();

                showToast(`Kuska IA: Planificación sugerida y curricular automatizada (Idea ${(clickIndex % totalVariants) + 1})`, "success");
            } else {
                showToast(`Sugerencia aplicada (Idea ${(clickIndex % totalVariants) + 1}).`, "success");
            }
        });

        container.appendChild(itemEl);
    });

    // Add hover styles dynamically
    const cards = container.querySelectorAll(".suggestion-card-premium");
    cards.forEach(c => {
        c.addEventListener("mouseenter", () => {
            c.style.transform = "translateY(-2px)";
            c.style.borderColor = "var(--primary)";
            c.style.boxShadow = "var(--shadow-hover)";
        });
        c.addEventListener("mouseleave", () => {
            c.style.transform = "translateY(0)";
            c.style.borderColor = "var(--border-color)";
            c.style.boxShadow = "var(--shadow-soft)";
        });
    });

    if (typeof lucide !== "undefined") { lucide.createIcons(); }
}

// --- GROQ API INTEGRATION DRIVER ---
async function callGroqAPI(systemPrompt, userPrompt) {
    const apiKey = DEFAULT_GROQ_API_KEY || state.config.groqApiKey || "";
    if (!apiKey) {
        throw new Error("API_KEY_MISSING");
    }
    
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt }
            ],
            temperature: 0.6
        })
    });
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP ${response.status}`);
    }
    
    const data = await response.json();
    return data.choices[0].message.content.trim();
}

async function generateEvaluationReportWithGroq() {
    const students = state.evaluation.students;
    const capacities = state.session.selectedCapacities || [];
    
    if (!students || students.length === 0) {
        showToast("Añade alumnos al aula primero en el módulo de Alumnos.", "warning");
        return;
    }
    if (capacities.length === 0) {
        showToast("Selecciona un Área y Competencia en el Planificador para activar criterios.", "warning");
        return;
    }

    const btn = $.btnGenerateAiReport;
    const originalHtml = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<div class="spinner" style="width:16px; height:16px; border:2px solid rgba(255,255,255,0.3); border-top:2px solid white; border-radius:50%; animation:spin 1s linear infinite; display:inline-block; margin-right:0.4rem;"></div><span>Generando Informe...</span>`;

    let rosterText = "";
    students.forEach(st => {
        rosterText += `Estudiante: ${st.name}\n`;
        if (st.nee && st.nee.length > 0) {
            rosterText += `Condiciones de Inclusión (NEE): ${st.nee.join(", ")}\n`;
        }
        capacities.forEach(cap => {
            const grade = getStudentGrade(st.id, cap);
            rosterText += `- Capacidad [${cap}]: Calificación actual = ${grade}\n`;
        });
        rosterText += "\n";
    });

    try {
        const systemPrompt = `Eres Kuska IA, una asistente pedagógica y psicopedagógica experta en educación inicial en Perú.
Analiza la lista de cotejo del aula provista y genera un informe de logros detallado, profesional y enriquecido en formato HTML limpio.
IMPORTANTE: Devuelve únicamente código HTML limpio que use divs, h3, h4, tables y listas estructuradas con estilos CSS integrados sencillos. No incluyas etiquetas <html>, <head>, <body> ni bloques de scripts. Comienza directamente con el contenido del informe.
El informe debe contener:
1. Diagnóstico del Nivel de Logro del Aula (Porcentajes de alumnos en Logrado, Proceso e Inicio).
2. Fortalezas observadas en el grupo.
3. Dificultades comunes y aspectos a reforzar.
4. Recomendaciones pedagógicas específicas de inclusión y adaptaciones curriculares individuales para los niños con condiciones NEE o en nivel 'Inicio'.
5. Firma pedagógica final de Kuska IA.`;

        const userPrompt = `Datos del aula:
Docente: ${state.config.teacherTitle || "Docente Kuska"}
Aula: ${state.config.aulaName || "Aula Inicial"} - Edad: ${state.selectedAge.replace('_', ' ')}
Colegio: ${state.config.ieName || "Colegio Kuska"}

Registros de calificaciones de la lista de cotejo:
${rosterText}`;

        const reportHtml = await callGroqAPI(systemPrompt, userPrompt);
        
        $.modalBody.innerHTML = `
            <div style="padding: 1.5rem; color: var(--text-main); font-family: inherit;">
                <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--lavender-dark); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.8rem;">
                    <i data-lucide="sparkles" style="color: var(--primary);"></i>
                    <span>Informe de Evaluación Formativa con IA</span>
                </h2>
                <div class="ai-report-content" style="line-height: 1.6; font-size: 0.92rem; text-align: left; display: block;">
                    ${reportHtml}
                </div>
            </div>
        `;
        
        $.modalOverlay.style.display = "flex";
        if (typeof lucide !== "undefined") { lucide.createIcons(); }
        showToast("¡Informe de logros generado con éxito!", "success");
    } catch (err) {
        if (err.message === "API_KEY_MISSING") {
            showToast("Por favor, ingresa tu Groq API Key en la pestaña Configuración.", "warning");
        } else {
            console.error(err);
            showToast("Error de comunicación con la IA de Groq.", "error");
        }
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalHtml;
    }
}
