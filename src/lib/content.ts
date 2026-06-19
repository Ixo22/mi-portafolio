export type Lang = "es" | "en";

export const EMAIL = "aga.alberto.st@gmail.com";
export const LINKEDIN_URL = "https://linkedin.com/in/aalbeerto";
export const GITHUB_URL = "https://github.com/ixo22";
export const PHONE = "+34 646 26 13 09";

export function getContent(lang: Lang) {
  const L = <T,>(es: T, en: T): T => (lang === "es" ? es : en);

  return {
    nav: {
      about: L("Sobre mí", "About"),
      method: L("Cómo trabajo", "How I work"),
      experience: L("Experiencia", "Experience"),
      projects: L("Proyectos", "Projects"),
      contact: L("Contacto", "Contact"),
      cv: "CV",
    },

    hero: {
      badge: L("Backend Developer · Madrid, España", "Backend Developer · Madrid, Spain"),
      h1a: L("Construyo el backend que ", "I build the backend that "),
      h1accent: L("no se puede permitir", "can't afford"),
      h1b: L(" fallar.", " to fail."),
      intro: L(
        "Soy Alberto García. Diseño microservicios en Java y arquitecturas de datos para el sector seguros — donde un dato mal procesado cuesta dinero y rompe el compliance. Llevo más de un año haciéndolo en producción para una aseguradora global.",
        "I'm Alberto García. I design Java microservices and data architectures for the insurance sector — where a single mishandled record costs money and breaks compliance. I've been doing it in production for over a year at a global insurer."
      ),
      cta: L("Hablemos", "Let's talk"),
      scroll: L("Sigue leyendo", "Keep reading"),
    },

    about: {
      eyebrow: L("Sobre mí", "About"),
      caption: L("Alberto García · Madrid", "Alberto García · Madrid"),
      p1a: L(
        "No llegué a la programación por las modas, sino por lo que la buena ingeniería ",
        "I didn't get into programming for the hype, but for what good engineering "
      ),
      p1em: L("sostiene", "holds up"),
      p1b: L(
        ": sistemas que mueven datos sensibles de millones de pólizas y que tienen que seguir en pie cuando más se les necesita.",
        ": systems that move sensitive data across millions of policies and have to stay standing exactly when they're needed most."
      ),
      p2a: L("Mi terreno es el ", "My home turf is the "),
      p2accent: L("backend en Java", "Java backend"),
      p2b: L(
        ": microservicios, APIs REST robustas, flujos asíncronos entre servicios distribuidos y arquitecturas de datos pensadas para compliance normativo. He trabajado en MetLife y NFQ en proyectos reales del sector seguros, y en un proyecto internacional para KNAPP en Graz, Austria.",
        ": microservices, robust REST APIs, asynchronous flows between distributed services and data architectures built for regulatory compliance. I've worked at MetLife and NFQ on real insurance projects, and on an international project for KNAPP in Graz, Austria."
      ),
      p3: L(
        "Lo que me diferencia no es saber muchas tecnologías, sino entender por qué importan. Me obsesiona la calidad del dato, diseñar para el fallo y medir lo que despliego. Y aunque soy backend de raíz, estoy ampliando hacia full stack — este sitio es la prueba, no una promesa.",
        "What sets me apart isn't knowing many technologies, but understanding why they matter. I'm obsessed with data quality, designing for failure and measuring what I ship. And although I'm backend at the core, I'm expanding into full stack — this site is the proof, not the promise."
      ),
      signature: "— Alberto García Alcolado",
      facts: [
        [L("Rol actual", "Current role"), L("Developer TI", "IT Developer")],
        [L("Empresa", "Company"), "MetLife"],
        [L("Ubicación", "Location"), L("Madrid, ES", "Madrid, ES")],
        [L("Inglés", "English"), L("B2 · EOI", "B2 · Certified")],
        [L("Formación", "Education"), L("Ing. Informática", "Computer Engineering")],
        [L("Disponibilidad", "Availability"), L("Abierto", "Open")],
      ] as [string, string][],
    },

    method: {
      eyebrow: L("Cómo trabajo", "How I work"),
      heading: L("Cuatro cosas en las que no cedo.", "Four things I won't compromise on."),
      principles: [
        {
          n: "01",
          title: L("El dato es sagrado", "Data is sacred"),
          body: L(
            "En seguros, un registro duplicado o mal modelado no es un bug menor: rompe el reporting, falsea el riesgo y te lleva por delante en una auditoría. Diseñé una estrategia Golden Record precisamente para que eso no pase. Trazabilidad y calidad del dato antes que velocidad.",
            "In insurance, a duplicated or badly modelled record isn't a minor bug: it breaks reporting, distorts risk and takes you down in an audit. I designed a Golden Record strategy precisely so that doesn't happen. Traceability and data quality before speed."
          ),
        },
        {
          n: "02",
          title: L("Diseño para el fallo, no para el camino feliz", "I design for failure, not the happy path"),
          body: L(
            "Una API que solo funciona con datos perfectos no sirve en producción. Valido esquemas con dureza, contemplo los edge cases y pruebo los flujos asíncronos de extremo a extremo. Prefiero que el sistema falle de forma controlada a que falle por sorpresa a las 3 de la mañana.",
            "An API that only works with perfect data is useless in production. I validate schemas strictly, account for edge cases and test asynchronous flows end to end. I'd rather a system fail in a controlled way than fail by surprise at 3 a.m."
          ),
        },
        {
          n: "03",
          title: L("Si no se mide, no existe", "If it isn't measured, it doesn't exist"),
          body: L(
            "Monté monitorización con Elasticsearch y KPIs automatizados en Power BI sobre consultas optimizadas. Quiero ver cómo se comporta lo que despliego, detectar incidencias antes que el negocio y poder responder con datos, no con intuiciones.",
            "I set up monitoring with Elasticsearch and automated KPIs in Power BI over optimized queries. I want to see how what I ship behaves, catch incidents before the business does and respond with data, not hunches."
          ),
        },
        {
          n: "04",
          title: L("Aprendo en serio, no por moda", "I learn for real, not for trends"),
          body: L(
            "Soy backend de raíz, pero no me escondo detrás de la API. Este portfolio lo construí con Next.js y TypeScript desde cero para entender el stack completo. Cuando algo me hace falta para hacer mejor mi trabajo, lo aprendo a fondo.",
            "I'm backend at the core, but I don't hide behind the API. I built this portfolio with Next.js and TypeScript from scratch to understand the full stack. When I need something to do my job better, I learn it properly."
          ),
        },
      ],
    },

    experience: {
      eyebrow: L("Experiencia", "Experience"),
      now: L("Ahora", "Now"),
      items: [
        {
          company: "MetLife",
          role: L("Developer TI — IT App Development", "IT Developer — IT App Development"),
          period: L("Sep 2024 – Presente", "Sep 2024 – Present"),
          location: "Madrid",
          current: true,
          lead: L(
            "Aplicaciones corporativas críticas del sector seguros, en producción y bajo carga real.",
            "Business-critical insurance applications, in production and under real load."
          ),
          points: [
            L(
              "Reduje los tiempos de respuesta de aplicaciones críticas reescribiendo lógica de negocio en Java y optimizando el procesamiento de eventos asíncronos en arquitectura de microservicios.",
              "Cut response times on critical applications by rewriting business logic in Java and optimizing asynchronous event processing in a microservices architecture."
            ),
            L(
              "Diseñé y desplegué APIs REST con validación estricta de esquemas y gestión de edge cases, reduciendo los fallos de integración entre servicios.",
              "Designed and deployed REST APIs with strict schema validation and edge-case handling, reducing integration failures between services."
            ),
            L(
              "Garanticé la consistencia del intercambio asíncrono entre servicios distribuidos con pruebas E2E, incluyendo flujos con comportamiento equivalente a brokers de mensajería.",
              "Ensured consistency of asynchronous exchange between distributed services with E2E tests, including flows behaving like message brokers."
            ),
            L(
              "Definí KPIs automatizados en Power BI sobre SQL Server y monté monitorización con Elasticsearch, reduciendo el tiempo de detección de incidencias.",
              "Defined automated KPIs in Power BI over SQL Server and set up monitoring with Elasticsearch, reducing incident detection time."
            ),
          ],
          stack: ["Java", "Microservicios", "REST", "SQL Server", "Azure DevOps", "Elasticsearch"],
          sub: L(
            "Empecé en prácticas (Sep 2024) y pasé a Developer TI en Feb 2026.",
            "Started as an intern (Sep 2024) and moved to IT Developer in Feb 2026."
          ),
        },
        {
          company: "NFQ Advisory",
          role: L("Associate — Datos & Cumplimiento Normativo", "Associate — Data & Regulatory Compliance"),
          period: L("Oct 2025 – Feb 2026", "Oct 2025 – Feb 2026"),
          location: "Madrid",
          current: false,
          lead: L(
            "Proyecto de datos y compliance para el sector seguros.",
            "A data and compliance project for the insurance sector."
          ),
          points: [
            L(
              "Diseñé una estrategia Golden Record para unificar grandes volúmenes de datos críticos, reduciendo duplicidades y mejorando la calidad del dato para gestión de riesgos y reporting.",
              "Designed a Golden Record strategy to unify large volumes of critical data, reducing duplicates and improving data quality for risk management and reporting."
            ),
            L(
              "Optimicé pipelines ETL en SQL Server con scripts avanzados en Python, recortando los tiempos de carga en procesos batch críticos del módulo de Siniestros.",
              "Optimized ETL pipelines in SQL Server with advanced Python scripts, cutting load times on critical batch processes in the Claims module."
            ),
            L(
              "Modelé arquitecturas de datos orientadas a cumplimiento normativo, preparadas para volúmenes propios de Big Data financiero.",
              "Modelled data architectures geared towards regulatory compliance, ready for financial Big Data volumes."
            ),
          ],
          stack: ["Python", "SQL Server", "ETL", "Golden Record", "Big Data"],
          sub: null as string | null,
        },
        {
          company: "KNAPP Ibérica",
          role: L("Software Commissioning Engineer", "Software Commissioning Engineer"),
          period: L("Ago 2025 – Sep 2025", "Aug 2025 – Sep 2025"),
          location: L("Graz, Austria", "Graz, Austria"),
          current: false,
          lead: L(
            "Automatización de sistemas en un proyecto internacional de alta exigencia.",
            "Systems automation on a demanding international project."
          ),
          points: [
            L(
              "Desarrollé scripts de automatización en Python y Java para la sincronización lógica de sistemas en tiempo real.",
              "Developed automation scripts in Python and Java for real-time logical synchronization of systems."
            ),
            L(
              "Optimicé consultas SQL complejas y administré procesos en servidor Linux para garantizar la trazabilidad de los datos de almacenamiento.",
              "Optimized complex SQL queries and managed server-side processes on Linux to guarantee traceability of warehouse data."
            ),
          ],
          stack: ["Python", "Java", "SQL", "Linux"],
          sub: null as string | null,
        },
      ],
    },

    projects: {
      eyebrow: L("Proyectos", "Projects"),
      more: L(
        "Más proyectos personales y experimentos en GitHub",
        "More personal projects and experiments on GitHub"
      ),
      viewProject: L("Ver proyecto", "View project"),
      viewCode: L("Ver código", "View code"),
      viewCase: L("Caso de estudio", "Case study"),
      items: [
        {
          name: "F1nalLap",
          period: "2025",
          tag: L("Trabajo de Fin de Grado", "Final Degree Project"),
          description: L(
            "Motor de simulación probabilística de estrategias de carrera de F1. Arquitectura modular con servicios desacoplados, consumo de APIs REST externas con tipado estricto y procesamiento de grandes volúmenes de datos históricos para generar predicciones en tiempo real.",
            "A probabilistic simulation engine for F1 race strategies. Modular architecture with decoupled services, strictly-typed consumption of external REST APIs and processing of large volumes of historical data to generate real-time predictions."
          ),
          technologies: [
            "TypeScript",
            "REST APIs",
            L("Arquitectura modular", "Modular architecture"),
          ],
          github: "https://github.com/Ixo22/F1nalLap",
          demo: "https://f1nallap.netlify.app/",
          caseStudy: "/proyectos/f1nallap",
        },
        {
          name: "Plan Tracker",
          period: "2026",
          tag: L("Proyecto personal", "Personal project"),
          description: L(
            "Aplicación colaborativa de planificación en grupo. Bandeja compartida donde cualquier miembro propone planes; el admin los organiza por prioridad en tres niveles (N1 diario, N2 escapada, N3 ocasión especial). Notificaciones por email cuando se acerca la fecha, categorías personalizables y página de demo pública.",
            "Collaborative group planning app. A shared inbox where any member suggests plans; the admin organises them by priority across three tiers (N1 daily, N2 weekend getaway, N3 special occasion). Email notifications as dates approach, customisable categories and a public demo page."
          ),
          technologies: [
            "TypeScript",
            "Next.js",
            "Prisma · PostgreSQL",
            "NextAuth",
            "Tailwind CSS",
          ],
          github: "https://github.com/Ixo22/plan-tracker",
          demo: "https://plangrid.vercel.app/demo",
          caseStudy: "/proyectos/plan-tracker",
        },
        {
          name: "Dynamic Language",
          period: "2026",
          tag: L("Proyecto personal", "Personal project"),
          description: L(
            "Aplicación web para aprender japonés dirigida a hispanohablantes. Genera frases y diálogos adaptados al nivel del usuario mediante IA (Claude), implementa el algoritmo de repetición espaciada SM-2 sincronizado con Supabase, visualiza trazos de kanji animados y convierte la entrada en romaji a kana en tiempo real sin necesidad de teclado japonés.",
            "Web app for learning Japanese aimed at Spanish speakers. Generates AI-powered phrases and dialogues adapted to the user's level (Claude), implements the SM-2 spaced repetition algorithm synced with Supabase, renders animated kanji stroke order and converts romaji input to kana in real time without a Japanese keyboard."
          ),
          technologies: [
            "TypeScript",
            "Next.js",
            "Supabase",
            "Anthropic Claude",
            "Tailwind CSS",
          ],
          github: "https://github.com/Ixo22/dynamic-language",
          demo: "https://dynamic-language.vercel.app",
          caseStudy: "/proyectos/dynamic-language",
        },
      ],
    },

    skills: {
      eyebrow: L("Stack", "Stack"),
      groups: [
        { group: L("Lenguajes", "Languages"), items: ["Java", "Python", "TypeScript", "SQL"] },
        {
          group: L("Arquitectura", "Architecture"),
          items: [
            "Microservicios",
            "REST APIs",
            L("Sistemas distribuidos", "Distributed systems"),
            L("Mensajería asíncrona", "Async messaging"),
          ],
        },
        { group: L("Datos", "Data"), items: ["SQL Server", "MySQL", "MongoDB", "ETL", "Power BI", "Elasticsearch"] },
        { group: "DevOps", items: ["Azure DevOps", "Git", "Docker", "Linux"] },
        { group: L("Aprendiendo", "Learning"), items: ["Next.js", "React", "Tailwind CSS"] },
      ],
    },

    contact: {
      eyebrow: L("Contacto", "Contact"),
      heading: L(
        "¿Buscas a alguien que se tome en serio el backend?",
        "Looking for someone who takes the backend seriously?"
      ),
      intro: L(
        "Estoy abierto a roles backend, arquitecturas distribuidas y proyectos donde la calidad del dato y la fiabilidad importen de verdad. Si crees que puedo aportar, escríbeme — respondo a todo.",
        "I'm open to backend roles, distributed architectures and projects where data quality and reliability genuinely matter. If you think I can help, drop me a line — I reply to everything."
      ),
      linkedinBtn: L("Conecta en LinkedIn", "Connect on LinkedIn"),
      labels: {
        email: L("Email", "Email"),
        phone: L("Teléfono", "Phone"),
        location: L("Ubicación", "Location"),
        locationValue: L("Madrid, España", "Madrid, Spain"),
      },
    },

    form: {
      title: L("Envíame un mensaje", "Send me a message"),
      name: L("Nombre", "Name"),
      namePlaceholder: L("Tu nombre", "Your name"),
      email: L("Email", "Email"),
      emailPlaceholder: L("tu@email.com", "you@email.com"),
      message: L("Mensaje", "Message"),
      messagePlaceholder: L(
        "Cuéntame en qué estás pensando…",
        "Tell me what you have in mind…"
      ),
      submit: L("Enviar mensaje", "Send message"),
      sending: L("Enviando…", "Sending…"),
      success: L(
        "¡Mensaje enviado! Te responderé lo antes posible.",
        "Message sent! I'll get back to you as soon as I can."
      ),
      error: L(
        "Algo ha fallado. Escríbeme directamente a " + EMAIL,
        "Something went wrong. Email me directly at " + EMAIL
      ),
      errConfig: L(
        "El servicio de envío no está configurado. Escríbeme a " + EMAIL,
        "The mail service isn't configured. Email me at " + EMAIL
      ),
      errSend: L(
        "No se pudo enviar el mensaje. Escríbeme a " + EMAIL,
        "The message couldn't be sent. Email me at " + EMAIL
      ),
      errName: L(
        "Indica tu nombre — p. ej. «María López».",
        "Enter your name — e.g. “Mary Smith”."
      ),
      errEmail: L(
        "Email no válido — p. ej. «nombre@empresa.com».",
        "Invalid email — e.g. “name@company.com”."
      ),
      errMessage: L(
        "Cuéntame un poco más (mínimo 10 caracteres).",
        "Tell me a bit more (at least 10 characters)."
      ),
    },

    caseStudy: {
      back: L("Volver al inicio", "Back to home"),
      kicker: L("Caso de estudio", "Case study"),
      title: "F1nalLap",
      subtitle: L(
        "Motor de simulación probabilística de estrategias de carrera de F1.",
        "A probabilistic simulation engine for F1 race strategies."
      ),
      meta: {
        role: { label: L("Rol", "Role"), value: L("Desarrollo completo (TFG)", "Sole developer (Final Project)") },
        year: { label: L("Año", "Year"), value: "2025" },
        stack: { label: "Stack", value: "TypeScript · REST APIs" },
      },
      repoLabel: L("Ver código", "View code"),
      demoLabel: L("Ver demo", "Live demo"),
      sections: {
        overview: {
          heading: L("Resumen", "Overview"),
          body: L(
            [
              "F1nalLap es mi Trabajo de Fin de Grado: una aplicación que ofrece a los aficionados de la Fórmula 1 información en tiempo real y simulaciones de estrategia de carrera. Bajo la superficie es un motor de simulación probabilística que consume datos históricos y en vivo desde APIs REST externas y los procesa con una arquitectura modular en TypeScript.",
              "Quise tratarlo como un sistema de verdad, no como un proyecto de clase: tipado estricto, servicios desacoplados y separación clara entre la obtención de datos, la lógica de simulación y la presentación.",
            ],
            [
              "F1nalLap is my Final Degree Project: an app that gives Formula 1 fans real-time information and race-strategy simulations. Under the hood it's a probabilistic simulation engine that consumes historical and live data from external REST APIs and processes it through a modular TypeScript architecture.",
              "I treated it as a real system, not a class assignment: strict typing, decoupled services and a clear separation between data fetching, simulation logic and presentation.",
            ]
          ),
        },
        problem: {
          heading: L("El reto", "The challenge"),
          body: L(
            [
              "Los datos de Fórmula 1 viven repartidos en varias APIs externas, con formatos distintos, huecos y latencias que no controlo. El reto no era \"pintar datos\": era construir un sistema que siguiera dando una respuesta coherente aunque la fuente fallara, llegara incompleta o cambiara de forma.",
              "Y por encima, generar una simulación de estrategia que fuera creíble a partir de grandes volúmenes de datos históricos, sin que la app se volviera lenta o inconsistente.",
            ],
            [
              "Formula 1 data lives across several external APIs, with different formats, gaps and latencies I don't control. The challenge wasn't \"rendering data\": it was building a system that kept giving a coherent answer even when a source failed, arrived incomplete or changed shape.",
              "On top of that, generating a believable strategy simulation from large volumes of historical data, without the app becoming slow or inconsistent.",
            ]
          ),
        },
        architecture: {
          heading: L("Arquitectura y decisiones", "Architecture & decisions"),
          intro: L(
            "Estructuré el proyecto en módulos desacoplados para aislar cada responsabilidad:",
            "I structured the project into decoupled modules to isolate each responsibility:"
          ),
          points: L(
            [
              "Capa de acceso a datos que encapsula cada API externa detrás de una interfaz tipada, para que el resto del sistema no dependa de su formato concreto.",
              "Tipado estricto de extremo a extremo en TypeScript: los datos externos se validan y normalizan antes de entrar en la lógica de negocio.",
              "Motor de simulación independiente de la fuente de datos y de la UI, lo que permite probarlo de forma aislada.",
              "Procesamiento de datos históricos separado del flujo en tiempo real para no penalizar la respuesta del usuario.",
            ],
            [
              "A data-access layer that wraps each external API behind a typed interface, so the rest of the system doesn't depend on its concrete format.",
              "End-to-end strict typing in TypeScript: external data is validated and normalized before entering the business logic.",
              "A simulation engine independent of the data source and the UI, which makes it testable in isolation.",
              "Historical-data processing separated from the real-time flow so it doesn't penalize the user's response time.",
            ]
          ),
        },
        challenges: {
          heading: L("Dificultades y aprendizajes", "Difficulties & lessons"),
          intro: L(
            "Estas son las partes que de verdad me hicieron crecer como desarrollador:",
            "These are the parts that genuinely made me grow as a developer:"
          ),
          items: L(
            [
              {
                title: "Datos externos poco fiables",
                body: "Las APIs no siempre devolvían lo esperado: campos ausentes, formatos cambiantes y caídas puntuales. Aprendí a no confiar nunca en la forma del dato externo y a normalizar y validar todo en la frontera del sistema.",
              },
              {
                title: "Mantener la coherencia en tiempo real",
                body: "Coordinar datos en vivo con el procesamiento histórico sin bloqueos ni estados inconsistentes me obligó a pensar con cuidado el flujo asíncrono y el manejo de errores.",
              },
              {
                title: "Domar la complejidad con tipos",
                body: "A medida que crecía, el tipado estricto pasó de ser una exigencia a ser mi red de seguridad: refactorizar dejó de dar miedo.",
              },
            ],
            [
              {
                title: "Unreliable external data",
                body: "The APIs didn't always return what I expected: missing fields, shifting formats and occasional outages. I learned never to trust the shape of external data and to normalize and validate everything at the system boundary.",
              },
              {
                title: "Keeping real-time coherence",
                body: "Coordinating live data with historical processing without blocking or inconsistent state forced me to think carefully about async flow and error handling.",
              },
              {
                title: "Taming complexity with types",
                body: "As it grew, strict typing went from a requirement to my safety net: refactoring stopped being scary.",
              },
            ]
          ),
          note: L(
            "Iré ampliando esta sección con los problemas concretos que fui resolviendo durante el desarrollo.",
            "I'll keep expanding this section with the specific problems I solved during development."
          ),
        },
        outcome: {
          heading: L("Resultado", "Outcome"),
          body: L(
            "F1nalLap terminó siendo un sistema desplegado y funcional que defendí como Trabajo de Fin de Grado. Más allá de la nota, me dejó algo más valioso: la convicción de que la calidad del dato y diseñar pensando en el fallo no son lujos, sino la base de cualquier cosa que merezca la pena construir.",
            "F1nalLap ended up as a deployed, working system that I defended as my Final Degree Project. Beyond the grade, it left me something more valuable: the conviction that data quality and designing for failure aren't luxuries, but the foundation of anything worth building."
          ),
        },
      },
    },

    planTrackerCaseStudy: {
      back: L("Volver al inicio", "Back to home"),
      kicker: L("Caso de estudio", "Case study"),
      title: "Plan Tracker",
      subtitle: L(
        "Aplicación colaborativa full stack para planificar y programar actividades en grupo.",
        "Full-stack collaborative app to plan and schedule group activities."
      ),
      meta: {
        role: { label: L("Rol", "Role"), value: L("Desarrollo completo", "Sole developer") },
        year: { label: L("Año", "Year"), value: "2026" },
        stack: { label: "Stack", value: "Next.js · Prisma · PostgreSQL" },
      },
      repoLabel: L("Ver código", "View code"),
      demoLabel: L("Ver demo", "Live demo"),
      sections: {
        overview: {
          heading: L("Resumen", "Overview"),
          body: L(
            [
              "Plan Tracker es una aplicación colaborativa de planificación en grupo. Cualquier miembro puede proponer planes a través de una bandeja compartida; el admin los organiza por prioridad en tres niveles: N1 para planes del día a día, N2 para escapadas de fin de semana y N3 para ocasiones especiales. El sistema lleva el control de cuánto tiempo ha pasado desde el último plan ejecutado en cada nivel y envía notificaciones por email cuando se acerca la fecha.",
              "Decidí construirlo desde cero con un stack moderno para tener control total sobre la lógica de negocio y consolidar el ciclo completo de desarrollo full stack: diseño de base de datos, autenticación, API REST, notificaciones transaccionales, UI reactiva y despliegue en producción.",
            ],
            [
              "Plan Tracker is a collaborative group planning app. Any member can suggest plans through a shared inbox; the admin organises them by priority across three tiers: N1 for daily activities, N2 for weekend getaways and N3 for special occasions. The system tracks how long it has been since the last plan was completed at each level and sends email notifications as the next date approaches.",
              "I built it from scratch with a modern stack to have full control over the business logic and to consolidate the complete full-stack development cycle: database design, authentication, REST API, transactional notifications, reactive UI and production deployment.",
            ]
          ),
        },
        problem: {
          heading: L("El reto", "The challenge"),
          body: L(
            [
              "El reto no era solo guardar una lista de planes. Era garantizar que los tres niveles de prioridad se respetaran a lo largo del tiempo sin que nadie tuviera que recordarlo: que las ocasiones especiales (N3) no se posterguen indefinidamente, que las escapadas (N2) tengan su hueco y que los planes del día a día (N1) no acaparen toda la atención.",
              "Encima, la aplicación tenía que ser multiusuario con roles diferenciados (admin y miembro), permitir que cualquiera proponga planes, enviar notificaciones por email de forma automática cuando se acerca la fecha y exponer una página de demo pública sin necesidad de registro.",
            ],
            [
              "The challenge wasn't just storing a list of plans. It was making sure the three priority tiers were respected over time without anyone having to remember it: that special occasions (N3) don't get postponed indefinitely, that getaways (N2) get their slot and that daily plans (N1) don't take all the focus.",
              "On top of that, the app needed to be multi-user with distinct roles (admin and member), let anyone suggest plans, send email notifications automatically as dates approach, and expose a public demo page without requiring registration.",
            ]
          ),
        },
        architecture: {
          heading: L("Arquitectura y decisiones", "Architecture & decisions"),
          intro: L(
            "La aplicación se estructura en tres capas bien diferenciadas:",
            "The application is structured around three clearly separated layers:"
          ),
          points: L(
            [
              "API REST con rutas de Next.js App Router separadas para planes, sugerencias y tracking. Cada ruta valida la sesión y el rol antes de devolver o modificar datos.",
              "Modelo de datos en PostgreSQL con Prisma ORM: usuarios con roles (ADMIN/MEMBER), planes con categorías personalizables y un modelo de Tracking independiente por nivel que registra la última ejecución y calcula el próximo vencimiento.",
              "Autenticación con NextAuth 4 y sesiones persistentes. La redirección al login, al dashboard o al formulario de nuevo plan se resuelve en el servidor según el rol.",
              "Notificaciones transaccionales con Resend: emails automáticos cuando se acerca la fecha del siguiente plan en cada nivel.",
              "UI dividida en componentes de responsabilidad única: PlanForm, PlanInbox con filtros y ordenación múltiple, LevelCounters con contadores de días por nivel y página de demo pública sin registro.",
            ],
            [
              "REST API with separate Next.js App Router routes for plans, suggestions and tracking. Each route validates the session and role before returning or modifying data.",
              "PostgreSQL data model with Prisma ORM: users with roles (ADMIN/MEMBER), plans with customisable categories, and an independent Tracking model per level that records the last execution and calculates the next due date.",
              "Authentication with NextAuth 4 and persistent sessions. Redirect to login, dashboard or new-plan form is resolved server-side based on role.",
              "Transactional notifications with Resend: automatic emails when the next plan date approaches for each level.",
              "UI split into single-responsibility components: PlanForm, PlanInbox with multi-column filtering and sorting, LevelCounters with per-level day counters and a public demo page requiring no registration.",
            ]
          ),
        },
        challenges: {
          heading: L("Dificultades y aprendizajes", "Difficulties & lessons"),
          intro: L(
            "Estos fueron los puntos donde más tuve que pensar:",
            "These were the points that required the most thought:"
          ),
          items: L(
            [
              {
                title: "Lógica de scheduling por niveles",
                body: "El modelo de Tracking no es un simple contador: almacena cuándo se ejecutó por última vez un plan de cada nivel y calcula los días restantes en función de un intervalo. Conseguir que esta lógica fuera coherente entre la base de datos y la UI, sin lecturas inconsistentes ni actualizaciones fantasma, fue el nudo técnico central del proyecto.",
              },
              {
                title: "Autenticación con roles sin librerías de autorización",
                body: "NextAuth gestiona la sesión pero la lógica de permisos (quién puede crear, editar o eliminar) la implementé explícitamente en cada ruta API. Garantizar que un miembro no ejecutara operaciones de admin, y que los errores fueran claros sin filtrar información, fue más delicado de lo que parece.",
              },
              {
                title: "Estado local coherente con la base de datos",
                body: "La bandeja de entrada tiene filtros, orden y asignación de niveles que modifican la lista localmente sin recargar la página. Mantener sincronía entre el estado React y lo que hay en base de datos, especialmente tras mutaciones concurrentes, me obligó a diseñar las actualizaciones con cuidado.",
              },
            ],
            [
              {
                title: "Per-level scheduling logic",
                body: "The Tracking model isn't a simple counter: it stores when a plan was last executed for each level and calculates the remaining days against a configured interval. Making this logic consistent between the database and the UI — without stale reads or ghost updates — was the central technical knot of the project.",
              },
              {
                title: "Role-based auth without an authorisation library",
                body: "NextAuth handles the session, but I implemented the permissions logic (who can create, edit or delete) explicitly in every API route. Making sure a member couldn't run admin operations, and that errors were informative without leaking information, was more delicate than it looks.",
              },
              {
                title: "Local state in sync with the database",
                body: "The inbox has filters, sorting and level assignment that update the list locally without reloading. Keeping the React state in sync with the database — especially after concurrent mutations — forced me to design updates carefully.",
              },
            ]
          ),
          note: L(
            "Iré ampliando esta sección según el proyecto evolucione.",
            "I'll keep expanding this section as the project evolves."
          ),
        },
        outcome: {
          heading: L("Resultado", "Outcome"),
          body: L(
            "Plan Tracker está en producción y en uso real. El resultado más valioso no fue el código sino comprobar que un modelo de datos bien diseñado puede resolver un problema de coordinación que antes dependía de la memoria o la improvisación. Este proyecto me consolidó en el desarrollo full stack y me reafirmó en algo que ya sabía del backend de empresa: los sistemas que importan de verdad son los que siguen funcionando cuando los datos son imperfectos y los usuarios no hacen lo que esperas.",
            "Plan Tracker is in production and in real use. The most valuable result wasn't the code but proving that a well-designed data model can solve a coordination problem that previously relied on memory or improvisation. This project consolidated my full-stack skills and reinforced something I already knew from enterprise backend work: the systems that really matter are the ones that keep working when data is imperfect and users don't do what you expect."
          ),
        },
      },
    },

    dynamicLanguageCaseStudy: {
      back: L("Volver al inicio", "Back to home"),
      kicker: L("Caso de estudio", "Case study"),
      title: "Dynamic Language",
      subtitle: L(
        "Aplicación web para aprender japonés con IA, repetición espaciada y entrada de texto en kana sin teclado japonés.",
        "Web app for learning Japanese with AI-generated content, spaced repetition and kana input without a Japanese keyboard."
      ),
      meta: {
        role: { label: L("Rol", "Role"), value: L("Desarrollo completo", "Sole developer") },
        year: { label: L("Año", "Year"), value: "2026" },
        stack: { label: "Stack", value: "Next.js · Supabase · Claude" },
      },
      repoLabel: L("Ver código", "View code"),
      demoLabel: L("Ver demo", "Live demo"),
      sections: {
        overview: {
          heading: L("Resumen", "Overview"),
          body: L(
            [
              "Dynamic Language es una aplicación web para aprender japonés pensada específicamente para hispanohablantes. Ofrece frases y diálogos generados por IA adaptados al nivel del usuario, un módulo de flashcards con el algoritmo de repetición espaciada SM-2 sincronizado con Supabase, visualización animada del orden de trazos de los kanji y conversión en tiempo real de entrada en romaji a hiragana o katakana sin necesidad de configurar un teclado japonés.",
              "Decidí construirlo porque quería integrar una API de IA en un producto real y ver hasta dónde llegaba la experiencia de aprendizaje que podía ofrecer el navegador sin depender de apps nativas. El resultado es una herramienta que uso como campo de pruebas para técnicas de adquisición de lenguas y para seguir explorando la integración de modelos de lenguaje en flujos de usuario concretos.",
            ],
            [
              "Dynamic Language is a web app for learning Japanese, designed specifically for Spanish speakers. It provides AI-generated phrases and dialogues adapted to the user's level, an SM-2 spaced repetition flashcard module synced to Supabase, animated kanji stroke-order visualisation, and real-time romaji-to-kana conversion without requiring a Japanese keyboard.",
              "I built it because I wanted to integrate an AI API into a real product and see how far a browser-based learning experience could go without native apps. The result is a tool I use as a testbed for language acquisition techniques and to keep exploring how language models fit into concrete user flows.",
            ]
          ),
        },
        problem: {
          heading: L("El reto", "The challenge"),
          body: L(
            [
              "El japonés plantea tres obstáculos simultáneos que las apps genéricas no resuelven bien para hispanohablantes: tres sistemas de escritura distintos (hiragana, katakana y kanji), una pronunciación sin cognados con el español y la necesidad de un método de entrada especial (IME) para escribir en japonés desde un teclado occidental.",
              "Quería que un usuario pudiera abrir la app, leer una frase en japonés con su pronunciación, escucharla, practicar escribiéndola en romaji y repasar las más difíciles días después, todo sin instalar nada ni cambiar la configuración de su sistema. Además, el contenido tenía que adaptarse al nivel del usuario en lugar de ser estático, lo que descartaba un catálogo manual.",
            ],
            [
              "Japanese presents three simultaneous obstacles that generic apps don't solve well for Spanish speakers: three distinct writing systems (hiragana, katakana and kanji), pronunciation with no cognates to Spanish, and the need for a special input method (IME) to type Japanese on a Western keyboard.",
              "I wanted a user to open the app, read a Japanese phrase with its pronunciation, hear it, practise writing it in romaji and review the hardest ones days later — all without installing anything or changing system settings. On top of that, content had to adapt to the user's level rather than being static, which ruled out a manual catalogue.",
            ]
          ),
        },
        architecture: {
          heading: L("Arquitectura y decisiones", "Architecture & decisions"),
          intro: L(
            "La aplicación combina cuatro piezas independientes que se integran en el cliente:",
            "The app combines four independent pieces that integrate on the client side:"
          ),
          points: L(
            [
              "Generación de contenido con Claude: rutas de API en Next.js App Router llaman a la API de Anthropic con prompts estructurados para obtener frases o diálogos en JSON. El prompt incluye el nivel del usuario y el contexto situacional (supermercado, restaurante, transporte…) para garantizar relevancia y variedad.",
              "Repetición espaciada con SM-2: cada flashcard almacena en Supabase su factor de facilidad, intervalo y próxima fecha de repaso. El algoritmo recalcula estos valores en el cliente tras cada respuesta y persiste el nuevo estado de forma asíncrona, sin bloquear la interacción.",
              "Conversión de romaji a kana con wanakana: el campo de práctica intercepta la entrada del usuario y la convierte en tiempo real a hiragana o katakana según la secuencia tecleada, sin modificar el cursor ni requerir ningún IME del sistema operativo.",
              "Audio y trazos en el navegador: la pronunciación se reproduce con la Web Speech API y los trazos de kanji se animan en canvas a partir de los datos de KanjiVG, sin peticiones adicionales al servidor una vez cargados.",
            ],
            [
              "Content generation with Claude: Next.js App Router API routes call the Anthropic API with structured prompts to get phrases or dialogues as JSON. The prompt includes the user's level and situational context (supermarket, restaurant, transport…) to ensure relevance and variety.",
              "Spaced repetition with SM-2: each flashcard stores its ease factor, interval and next review date in Supabase. The algorithm recalculates these values client-side after each answer and persists the new state asynchronously without blocking interaction.",
              "Romaji-to-kana conversion with wanakana: the practice input field intercepts the user's keystrokes and converts them in real time to hiragana or katakana based on the typed sequence, without shifting the cursor or requiring any OS-level IME.",
              "Audio and stroke order in the browser: pronunciation is played through the Web Speech API and kanji strokes are animated on canvas from KanjiVG data, with no additional server requests once loaded.",
            ]
          ),
        },
        challenges: {
          heading: L("Dificultades y aprendizajes", "Difficulties & lessons"),
          intro: L(
            "Estos fueron los puntos donde más tuve que pensar:",
            "These were the points that required the most thought:"
          ),
          items: L(
            [
              {
                title: "Salida estructurada fiable desde Claude",
                body: "Conseguir que la API devolviera siempre JSON válido con el esquema exacto que esperaba fue el primer escollo. Resolverlo implicó diseñar prompts con ejemplos explícitos del formato, validar la respuesta en la ruta API y reintentar con un mensaje de corrección cuando el modelo se desviaba, en lugar de propagar el error al cliente.",
              },
              {
                title: "SM-2 sin lecturas inconsistentes",
                body: "El algoritmo actualiza múltiples campos a la vez (factor de facilidad, intervalo, fecha) y la UI tiene que reflejar el nuevo estado inmediatamente. Gestionar el optimistic update en el cliente mientras la escritura en Supabase es asíncrona, sin que el usuario vea datos obsoletos si recarga, fue más delicado de lo esperado.",
              },
              {
                title: "Conversión de romaji con wanakana",
                body: "La librería convierte secuencias de caracteres mientras el usuario escribe, lo que genera comportamientos inesperados en combinaciones como 'tsu', 'chi' o 'n' antes de vocal. Entender el modelo de estado interno de wanakana y testearlo con edge cases fue necesario para que la experiencia de escritura se sintiera natural.",
              },
            ],
            [
              {
                title: "Reliable structured output from Claude",
                body: "Getting the API to always return valid JSON with the exact schema I expected was the first hurdle. Solving it meant designing prompts with explicit format examples, validating the response in the API route and retrying with a correction message when the model deviated — rather than propagating the error to the client.",
              },
              {
                title: "SM-2 without stale reads",
                body: "The algorithm updates multiple fields at once (ease factor, interval, date) and the UI has to reflect the new state immediately. Managing the optimistic update on the client while the Supabase write is asynchronous — without the user seeing stale data on a reload — was trickier than expected.",
              },
              {
                title: "Romaji conversion edge cases with wanakana",
                body: "The library converts character sequences as the user types, which produces unexpected behaviour for combinations like 'tsu', 'chi' or 'n' before a vowel. Understanding wanakana's internal state model and testing it against edge cases was necessary to make the typing experience feel natural.",
              },
            ]
          ),
          note: L(
            "Iré ampliando esta sección según el proyecto evolucione.",
            "I'll keep expanding this section as the project evolves."
          ),
        },
        outcome: {
          heading: L("Resultado", "Outcome"),
          body: L(
            "Dynamic Language está desplegado y en uso activo. Lo que más me llevé del proyecto fue la claridad de que integrar un LLM no es solo llamar a una API: el trabajo real está en el diseño del prompt, la validación del contrato de datos y decidir dónde vive la lógica de negocio cuando el modelo es una pieza más de la cadena. También me quedé con que la Web Speech API y las APIs de canvas del navegador dan para mucho más de lo que parece a primera vista.",
            "Dynamic Language is deployed and in active use. The biggest takeaway was realising that integrating an LLM isn't just calling an API: the real work is in prompt design, data contract validation and deciding where business logic lives when the model is just one piece of the pipeline. I also came away with a much greater appreciation for how far the browser's Web Speech API and canvas APIs can take you."
          ),
        },
      },
    },

    footer: L(
      "Construido a mano con Next.js & Tailwind",
      "Built by hand with Next.js & Tailwind"
    ),
  };
}

export type Content = ReturnType<typeof getContent>;
