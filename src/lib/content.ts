export type Lang = "es" | "en";

export const EMAIL = "aga.alberto.st@gmail.com";
export const LINKEDIN_URL = "https://linkedin.com/in/aalbeerto";
export const GITHUB_URL = "https://github.com/ixo22";
export const PHONE = "+34 646 26 13 09";

export type Metric = { value: number; prefix?: string; suffix?: string; label: string };

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
      h1a: L("Soy Alberto García, desarrollador backend en ", "I'm Alberto García, a backend developer working in "),
      h1accent: L("Java", "Java"),
      h1b: L(".", "."),
      intro: L(
        "Ingeniero informático con experiencia desde 2024 en el sector seguros con Java, SQL y APIs REST. Vengo del lado de las pruebas, así que escribo código pensando en cómo se va a romper. Por mi cuenta tengo en producción un backend en Spring Boot con PostgreSQL.",
        "Computer engineer working in the insurance sector since 2024 with Java, SQL and REST APIs. I come from the testing side, so I write code thinking about how it's going to break. On my own, I run a Spring Boot backend with PostgreSQL in production."
      ),
      cta: L("Hablemos", "Let's talk"),
      scroll: L("Sigue leyendo", "Keep reading"),
    },

    monitor: {
      locale: L("es-ES", "en-GB"),
      title: L("f1nallap-api · monitor en directo", "f1nallap-api · live monitor"),
      statusLabel: L("Estado", "Status"),
      latencyLabel: L("Latencia", "Latency"),
      uptimeLabel: L("Uptime", "Uptime"),
      checking: L("Comprobando…", "Checking…"),
      waking: L("Despertando…", "Waking up…"),
      up: "UP",
      down: "DOWN",
      wakingHint: L(
        "El servidor está en el plan gratuito de Render y se duerme sin tráfico. Tarda ~1 min en arrancar.",
        "The server runs on Render's free tier and sleeps without traffic. It takes ~1 min to boot."
      ),
      lastCheck: L("Último chequeo", "Last check"),
      every: L("cada 30 s", "every 30 s"),
    },

    about: {
      eyebrow: L("Sobre mí", "About"),
      caption: L("Alberto García · Madrid", "Alberto García · Madrid"),
      p1a: L(
        "Empecé en programación porque me interesaba ",
        "I got into programming because I wanted to "
      ),
      p1em: L("resolver problemas reales", "solve real problems"),
      p1b: L(
        ", no por seguir una moda. Desde 2024 trabajo en el sector seguros, donde un dato mal tratado no es un bug menor: rompe informes y acaba costando dinero.",
        ", not follow a trend. Since 2024 I've worked in the insurance sector, where a mishandled record isn't a minor bug: it breaks reports and ends up costing money."
      ),
      p2a: L("Mi terreno es el ", "My home turf is the "),
      p2accent: L("backend en Java", "Java backend"),
      p2b: L(
        ". En MetLife he modificado lógica de negocio en Java, pruebo APIs REST antes de cada pase a producción y monté desde cero la monitorización sintética de dos aplicaciones con Elastic y Playwright. En NFQ trabajé con SQL en un Golden Record de siniestros, y en KNAPP depuré en Java el software de un almacén automatizado en Graz, Austria, durante su puesta en marcha.",
        ". At MetLife I've modified business logic in Java, I test REST APIs before every production release, and I built synthetic monitoring for two applications from scratch with Elastic and Playwright. At NFQ I worked with SQL on a claims Golden Record, and at KNAPP I debugged, in Java, the control software of an automated warehouse in Graz, Austria, during its commissioning."
      ),
      p3: L(
        "Vengo del lado de las pruebas, y eso se nota en cómo programo: pienso primero en cómo se va a romper. Fuera del trabajo, F1nalLap es mi banco de pruebas: un backend en Spring Boot con PostgreSQL, tests contra una base de datos real y CI, desplegado en producción. Busco un puesto backend a tiempo completo.",
        "I come from the testing side, and it shows in how I code: I think first about how it's going to break. Outside work, F1nalLap is my testbed: a Spring Boot backend with PostgreSQL, tests against a real database and CI, deployed to production. I'm looking for a full-time backend role."
      ),
      signature: "— Alberto García Alcolado",
      facts: [
        [L("Rol actual", "Current role"), L("Desarrollador TI", "IT Developer")],
        [L("Empresa", "Company"), "MetLife"],
        [L("Ubicación", "Location"), L("Madrid, ES", "Madrid, ES")],
        [L("Inglés", "English"), L("B2 · EOI", "B2 · Certified")],
        [L("Formación", "Education"), L("Ing. Informática", "Computer Engineering")],
        [L("Disponibilidad", "Availability"), L("Abierto", "Open")],
      ] as [string, string][],
    },

    method: {
      eyebrow: L("Cómo trabajo", "How I work"),
      principles: [
        {
          n: "01",
          title: L("La calidad del dato, antes que nada", "Data quality, above all"),
          body: L(
            "En seguros, un registro duplicado o mal modelado no es un bug menor: rompe el reporting, falsea el riesgo y puede salir caro en una auditoría. Por eso participé en diseñar una estrategia Golden Record.",
            "In insurance, a duplicated or badly modelled record isn't a minor bug: it breaks reporting, distorts risk and can get expensive in an audit. That's why I helped design a Golden Record strategy."
          ),
        },
        {
          n: "02",
          title: L("Pienso en cómo se va a romper", "I think about how it will break"),
          body: L(
            "Vengo de las pruebas: antes de cada pase a producción valido contratos, campos, reglas de negocio y casos de error de las APIs. En mis proyectos, los tests van contra un PostgreSQL real con Testcontainers y las APIs externas se simulan con WireMock.",
            "I come from testing: before every production release I validate API contracts, fields, business rules and error cases. In my own projects, tests run against a real PostgreSQL with Testcontainers and external APIs are mocked with WireMock."
          ),
        },
        {
          n: "03",
          title: L("Mido lo que despliego", "I measure what I ship"),
          body: L(
            "Monté desde cero monitores de disponibilidad y monitores multistep en Playwright que reproducen el login de dos aplicaciones, con alertas en Elastic Observability. Ya han detectado caídas reales antes de que llegara el primer ticket.",
            "I built availability monitors and multistep Playwright monitors from scratch that replay the login of two applications, with alerts in Elastic Observability. They've already caught real outages before the first ticket came in."
          ),
        },
        {
          n: "04",
          title: L("Si me hace falta, lo aprendo a fondo", "If I need it, I learn it properly"),
          body: L(
            "Porté el simulador de estrategias de F1nalLap de TypeScript a Java y construí este portfolio con Next.js. En 2026 me he certificado con Anthropic y OpenAI en APIs de LLMs, MCP, RAG y sistemas agénticos.",
            "I ported F1nalLap's strategy simulator from TypeScript to Java and built this portfolio with Next.js. In 2026 I earned Anthropic and OpenAI certifications on LLM APIs, MCP, RAG and agentic systems."
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
          role: L(
            "Desarrollador de TI · APIs, observabilidad y Product Owner",
            "IT Developer · APIs, observability and Product Owner"
          ),
          period: L("Sep 2024 – Presente", "Sep 2024 – Present"),
          location: "Madrid",
          current: true,
          lead: L(
            "Aplicaciones corporativas del sector seguros: APIs REST, observabilidad y producto.",
            "Corporate insurance applications: REST APIs, observability and product."
          ),
          points: [
            L(
              "Monté desde cero la monitorización de dos aplicaciones web con Elastic Observability: monitores de disponibilidad y monitores multistep en Playwright que reproducen el login. Ya han detectado caídas reales.",
              "Built monitoring for two web applications from scratch with Elastic Observability: availability monitors and multistep Playwright monitors that replay the login. They've already caught real outages."
            ),
            L(
              "Pruebo y valido 3 APIs REST con Bruno (contratos, campos, reglas de negocio y casos de error) y la integración backend–frontend de extremo a extremo antes de cada pase a producción.",
              "I test and validate 3 REST APIs with Bruno (contracts, fields, business rules and error cases) and the end-to-end backend–frontend integration before every production release."
            ),
            L(
              "Referente técnico en la implantación de una nueva API: resuelvo dudas entre equipos y verifico que lo entregado cumple lo acordado.",
              "Technical point of contact for the rollout of a new API: I resolve questions between teams and verify that what's delivered matches what was agreed."
            ),
            L(
              "Product Owner de una aplicación que consume APIs REST: coordino al equipo, traslado requisitos del usuario final y priorizo el backlog en Azure DevOps (Scrum).",
              "Product Owner of an application that consumes REST APIs: I coordinate the team, translate end-user requirements and prioritize the backlog in Azure DevOps (Scrum)."
            ),
            L(
              "En prácticas (sep 2024 – jul 2025): modifiqué lógica de negocio en aplicaciones internas en Java 8/11 con Maven, automaticé con JavaScript una extracción de datos estimada en más de un día y la resolví en unas 2 horas, y monté dashboards en Power BI sobre SQL Server.",
              "As an intern (Sep 2024 – Jul 2025): modified business logic in internal Java 8/11 applications with Maven, automated with JavaScript a data extraction estimated at over a day and finished it in about 2 hours, and built Power BI dashboards on SQL Server."
            ),
          ],
          stack: ["Java", "APIs REST", "Bruno", "Playwright", "Elastic Observability", "SQL Server", "Azure DevOps"],
          metrics: [
            {
              value: 3,
              label: L("APIs REST que valido antes de cada pase a producción", "REST APIs I validate before every production release"),
            },
            {
              value: 2,
              label: L("aplicaciones con monitorización sintética en Playwright y Elastic", "applications with synthetic monitoring in Playwright and Elastic"),
            },
            {
              value: 2,
              prefix: "~",
              suffix: " h",
              label: L("para automatizar una extracción estimada en más de un día", "to automate a data extraction estimated at over a day"),
            },
          ] as Metric[],
          sub: L(
            "Empecé como desarrollador de aplicaciones Java en prácticas (sep 2024) y pasé a Desarrollador de TI en feb 2026.",
            "Started as a Java application developer intern (Sep 2024) and moved to IT Developer in Feb 2026."
          ),
        },
        {
          company: "NFQ Advisory",
          role: L("Associate · Ingeniería de datos (SQL)", "Associate · Data engineering (SQL)"),
          period: L("Oct 2025 – Feb 2026", "Oct 2025 – Feb 2026"),
          location: "Madrid",
          current: false,
          lead: L(
            "Proyecto de datos para una de las principales aseguradoras de España.",
            "A data project for one of Spain's leading insurers."
          ),
          points: [
            L(
              "Participé en la implantación de una estrategia de Golden Record para unificar varias tablas de siniestros en una única fuente fiable.",
              "Took part in implementing a Golden Record strategy to unify several claims tables into a single reliable source."
            ),
            L(
              "Consultas SQL complejas sobre SQL Server para localizar, extraer y transformar datos; colaboración en la arquitectura de datos y las reglas de negocio.",
              "Complex SQL queries on SQL Server to locate, extract and transform data; collaborated on the data architecture and business rules."
            ),
          ],
          stack: ["SQL Server", "SQL", "Golden Record"],
          sub: null as string | null,
        },
        {
          company: "KNAPP",
          role: L("Software Commissioning Engineer", "Software Commissioning Engineer"),
          period: L("Ago 2025 – Sep 2025", "Aug 2025 – Sep 2025"),
          location: L("Graz, Austria", "Graz, Austria"),
          current: false,
          lead: L(
            "Puesta en marcha in situ del software de control de un almacén automatizado.",
            "On-site commissioning of the control software for an automated warehouse."
          ),
          points: [
            L(
              "Debugging en Java de incidencias en procesos críticos durante la puesta en marcha en producción.",
              "Debugged issues in critical processes in Java during the production commissioning."
            ),
            L(
              "Consultas SQL escritas en el momento para localizar contenedores y elevadores en tiempo real; procesos y logs en Linux; ajuste de configuración en Java y Python; Git.",
              "Ad-hoc SQL queries to locate containers and lifts in real time; processes and logs on Linux; configuration tuning in Java and Python; Git."
            ),
          ],
          stack: ["Java", "SQL", "Linux", "Python", "Git"],
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
          period: L("2025 – Presente", "2025 – Present"),
          tag: L("TFG ampliado · Full stack", "Extended Final Degree Project · Full stack"),
          description: L(
            "App full stack de Fórmula 1 con backend propio en producción: API REST versionada en Spring Boot sobre PostgreSQL, ingesta programada desde Jolpica con reintentos y backoff, y un simulador de estrategias determinista portado de TypeScript a Java. Tests con Testcontainers y WireMock, y CI en GitHub Actions.",
            "A full-stack Formula 1 app with its own backend in production: a versioned Spring Boot REST API on PostgreSQL, scheduled ingestion from Jolpica with retries and backoff, and a deterministic strategy simulator ported from TypeScript to Java. Tests with Testcontainers and WireMock, and CI on GitHub Actions."
          ),
          metrics: [
            {
              value: 26,
              label: L("tests de backend (JUnit, Testcontainers, WireMock)", "backend tests (JUnit, Testcontainers, WireMock)"),
            },
            {
              value: 51,
              label: L("tests en el front Angular", "tests on the Angular front end"),
            },
          ] as Metric[],
          monitor: true,
          technologies: [
            "Java 21",
            "Spring Boot 4",
            "PostgreSQL",
            "Testcontainers",
            "Docker",
            "Angular 19",
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
            "App para organizar planes en pareja, con amigos o en grupo. Bandeja de entrada compartida donde cualquiera sugiere planes, tres niveles de prioridad con su propio contador de días y notificaciones por email para no perderos el siguiente.",
            "An app for organizing plans with a partner, friends or any group. A shared inbox where anyone can suggest plans, three priority levels each with its own day counter, and email notifications so you never miss the next one."
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
            "App para aprender japonés con input comprensible, repetición espaciada (SRS) y práctica activa. Genera frases con IA adaptadas al nivel del usuario, sincroniza el progreso con Supabase e incluye práctica de trazos de kanji y conversión de romaji a kana en tiempo real.",
            "An app for learning Japanese through comprehensible input, spaced repetition (SRS) and active practice. Generates level-adapted phrases with AI, syncs progress via Supabase, and includes kanji stroke-order practice and real-time romaji-to-kana conversion."
          ),
          technologies: [
            "TypeScript",
            "Next.js",
            "Supabase",
            "Anthropic Claude",
            "Tailwind CSS",
          ],
          github: "https://github.com/Ixo22/dynamic-language",
          demo: "https://dynamiclang.vercel.app/demo",
          caseStudy: "/proyectos/dynamic-language",
        },
      ],
    },

    skills: {
      eyebrow: L("Stack", "Stack"),
      groups: [
        {
          group: L("Lenguajes", "Languages"),
          items: ["Java (8/11/21)", "SQL", "TypeScript", "JavaScript", "Python"],
        },
        {
          group: L("Backend", "Backend"),
          items: ["Spring Boot", "Spring Data JPA", "APIs REST", "Maven", "Flyway"],
        },
        {
          group: L("Datos", "Data"),
          items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Elasticsearch"],
        },
        {
          group: L("Testing y observabilidad", "Testing & observability"),
          items: ["JUnit", "Testcontainers", "WireMock", "Playwright", "Bruno", "Elastic Observability"],
        },
        {
          group: L("DevOps y metodología", "DevOps & methodology"),
          items: ["Git", "GitHub Actions", "Docker", "Linux", "Azure DevOps", "Scrum"],
        },
        {
          group: L("Frontend e IA", "Frontend & AI"),
          items: ["Angular", "Next.js · React", "APIs de LLMs (Claude, OpenAI)", "RAG · MCP"],
        },
      ],
    },

    certs: {
      eyebrow: L("Formación y certificaciones", "Education & certifications"),
      items: [
        {
          title: L("Grado en Ingeniería Informática", "BSc in Computer Engineering"),
          org: L("Universidad de Burgos · 2020 – 2025", "University of Burgos · 2020 – 2025"),
          detail: L(
            "Incluye un curso Erasmus+ en Politechnika Gdańska (Polonia), 2022 – 2023.",
            "Includes an Erasmus+ year at Gdańsk University of Technology (Poland), 2022 – 2023."
          ),
        },
        {
          title: "Anthropic",
          org: "2026",
          detail: "Building with the Claude API · MCP: Introduction y Advanced Topics · Claude Code in Action · Claude Platform 101",
        },
        {
          title: "OpenAI",
          org: "2026",
          detail: "Design and Build Agentic Systems · Build with RAG · Evaluate AI Applications · Optimize AI App Performance · Codex",
        },
        {
          title: L("Experto en Analítica y Usabilidad Web", "Web Analytics & Usability Expert"),
          org: "Constanza Business & Protocol School",
          detail: null as string | null,
        },
      ],
    },

    contact: {
      eyebrow: L("Contacto", "Contact"),
      heading: L("Hablemos.", "Let's talk."),
      intro: L(
        "Busco un puesto backend a tiempo completo con Java y Spring Boot. Si tienes una vacante o un proyecto en el que encaje, escríbeme — respondo siempre.",
        "I'm looking for a full-time backend role with Java and Spring Boot. If you have an opening or a project where I'd fit, reach out — I always reply."
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
        "App full stack de Fórmula 1 con backend propio en Spring Boot y PostgreSQL, en producción.",
        "A full-stack Formula 1 app with its own Spring Boot and PostgreSQL backend, in production."
      ),
      meta: {
        role: { label: L("Rol", "Role"), value: L("Desarrollo completo (TFG ampliado)", "Sole developer (extended Final Project)") },
        year: { label: L("Año", "Year"), value: L("2025 – Presente", "2025 – Present") },
        stack: { label: "Stack", value: "Java 21 · Spring Boot 4 · PostgreSQL · Angular 19" },
      },
      repoLabel: L("Ver código", "View code"),
      demoLabel: L("Ver demo", "Live demo"),
      apiLabel: L("API (Swagger)", "API (Swagger)"),
      sections: {
        overview: {
          heading: L("Resumen", "Overview"),
          body: L(
            [
              "F1nalLap empezó como mi Trabajo de Fin de Grado: una app en Angular con clasificaciones, calendario, resultados, comparativas y un simulador de estrategias de carrera. En la primera versión, el front llamaba directamente a una API externa y toda la lógica vivía en TypeScript.",
              "Después del TFG lo amplié con un backend propio en Spring Boot y PostgreSQL, desplegado en Render. Ahora el front solo consume mi API REST versionada, y el simulador de estrategias vive en Java, cubierto por tests.",
            ],
            [
              "F1nalLap started as my Final Degree Project: an Angular app with standings, calendar, results, comparisons and a race-strategy simulator. In the first version the front end called an external API directly and all the logic lived in TypeScript.",
              "After the project I extended it with my own Spring Boot and PostgreSQL backend, deployed on Render. Now the front end only consumes my versioned REST API, and the strategy simulator lives in Java, covered by tests.",
            ]
          ),
        },
        problem: {
          heading: L("El reto", "The challenge"),
          body: L(
            [
              "Depender en cada visita de una API externa que no controlo significaba heredar sus límites de peticiones, sus caídas y sus cambios de formato. Además, la lógica de negocio importante —el simulador— estaba en el navegador, sin tests y difícil de evolucionar.",
              "El objetivo era mover los datos y la lógica a un backend propio: ingerir los datos una vez, guardarlos de forma consistente y servirlos con una API estable, sin perder ninguna funcionalidad del front.",
            ],
            [
              "Depending on an external API I don't control on every visit meant inheriting its rate limits, outages and format changes. On top of that, the important business logic —the simulator— ran in the browser, untested and hard to evolve.",
              "The goal was to move data and logic into my own backend: ingest the data once, store it consistently and serve it through a stable API, without losing any front-end functionality.",
            ]
          ),
        },
        architecture: {
          heading: L("Arquitectura y decisiones", "Architecture & decisions"),
          intro: L(
            "Las piezas principales del backend y por qué están así:",
            "The main backend pieces and why they're built this way:"
          ),
          points: L(
            [
              "API REST versionada de clasificaciones, resultados, circuitos y estrategias, con errores en formato ProblemDetail, documentación en Swagger y caché HTTP por temporada.",
              "Ingesta programada desde la API de Jolpica con paginación, control de ritmo y reintentos con backoff ante respuestas 429 y 5xx. Cada temporada se escribe en una sola transacción, de forma idempotente: repetir la ingesta no duplica datos.",
              "Simulador de estrategias portado de TypeScript a Java: combina stints legales de 2 y 3 paradas, modela la degradación por compuesto y fase, y es determinista con semilla, así que se puede testear.",
              "Esquema gestionado con Flyway y Docker Compose para levantar todo el entorno en local.",
              "26 tests de backend (JUnit, Testcontainers con un Postgres real y WireMock para la API externa) y 51 en el front, con CI en GitHub Actions para ambos y despliegue continuo en Render y Netlify.",
            ],
            [
              "A versioned REST API for standings, results, circuits and strategies, with ProblemDetail errors, Swagger documentation and per-season HTTP caching.",
              "Scheduled ingestion from the Jolpica API with pagination, rate control and retries with backoff on 429 and 5xx responses. Each season is written in a single transaction, idempotently: re-running the ingestion never duplicates data.",
              "A strategy simulator ported from TypeScript to Java: it combines legal 2- and 3-stop stints, models degradation by compound and phase, and is deterministic with a seed, so it's testable.",
              "Schema managed with Flyway, and Docker Compose to spin up the whole environment locally.",
              "26 backend tests (JUnit, Testcontainers with a real Postgres and WireMock for the external API) and 51 on the front end, with CI on GitHub Actions for both and continuous deployment to Render and Netlify.",
            ]
          ),
        },
        challenges: {
          heading: L("Dificultades y aprendizajes", "Difficulties & lessons"),
          intro: L(
            "Estas son las partes que más me hicieron pensar:",
            "These are the parts that made me think the most:"
          ),
          items: L(
            [
              {
                title: "Una fuente externa que no controlo",
                body: "La API de Jolpica limita las peticiones y a veces falla. Diseñar la ingesta con control de ritmo, reintentos con backoff y escritura idempotente por temporada me enseñó a tratar la red como algo que va a fallar, no como una excepción.",
              },
              {
                title: "Portar lógica sin romperla",
                body: "Pasar el simulador de TypeScript a Java sin cambiar su comportamiento exigía poder compararlos. Hacerlo determinista con semilla fue la clave: con la misma entrada, el mismo resultado, y eso se puede fijar en tests.",
              },
              {
                title: "Tests que se parecen a producción",
                body: "Con Testcontainers los tests de backend corren contra un PostgreSQL real, no contra una base de datos en memoria que esconda diferencias. Con WireMock simulo la API externa, incluidos sus errores.",
              },
            ],
            [
              {
                title: "An external source I don't control",
                body: "The Jolpica API rate-limits requests and sometimes fails. Designing ingestion with rate control, retries with backoff and idempotent per-season writes taught me to treat the network as something that will fail, not as an exception.",
              },
              {
                title: "Porting logic without breaking it",
                body: "Moving the simulator from TypeScript to Java without changing its behaviour required being able to compare them. Making it deterministic with a seed was the key: same input, same output, and that can be pinned down in tests.",
              },
              {
                title: "Tests that look like production",
                body: "With Testcontainers the backend tests run against a real PostgreSQL, not an in-memory database that hides differences. With WireMock I simulate the external API, errors included.",
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
            "F1nalLap está en producción: front en Netlify, API en Render con PostgreSQL y documentación pública en Swagger. Pasó de ser un proyecto de fin de grado a un backend que mantengo como cualquier sistema real, con tests contra una base de datos de verdad, CI y despliegue continuo.",
            "F1nalLap is in production: front end on Netlify, API on Render with PostgreSQL and public Swagger documentation. It went from a final degree project to a backend I maintain like any real system, with tests against a real database, CI and continuous deployment."
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
