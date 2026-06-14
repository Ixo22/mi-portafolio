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
          github: null as string | null,
          demo: "https://f1nallap.netlify.app/",
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

    footer: L(
      "Construido a mano con Next.js & Tailwind",
      "Built by hand with Next.js & Tailwind"
    ),
  };
}

export type Content = ReturnType<typeof getContent>;
