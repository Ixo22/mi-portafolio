import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { Mail, Phone, MapPin, ArrowUpRight, ArrowDown } from "lucide-react";

const EMAIL = "aga.alberto.st@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/in/aalbeerto";
const GITHUB_URL = "https://github.com/ixo22";
const PHONE = "+34 646 26 13 09";

const PRINCIPLES = [
  {
    n: "01",
    title: "El dato es sagrado",
    body: "En seguros, un registro duplicado o mal modelado no es un bug menor: rompe el reporting, falsea el riesgo y te lleva por delante en una auditoría. Diseñé una estrategia Golden Record precisamente para que eso no pase. Trazabilidad y calidad del dato antes que velocidad.",
  },
  {
    n: "02",
    title: "Diseño para el fallo, no para el camino feliz",
    body: "Una API que solo funciona con datos perfectos no sirve en producción. Valido esquemas con dureza, contemplo los edge cases y pruebo los flujos asíncronos de extremo a extremo. Prefiero que el sistema falle de forma controlada a que falle por sorpresa a las 3 de la mañana.",
  },
  {
    n: "03",
    title: "Si no se mide, no existe",
    body: "Monté monitorización con Elasticsearch y KPIs automatizados en Power BI sobre consultas optimizadas. Quiero ver cómo se comporta lo que despliego, detectar incidencias antes que el negocio y poder responder con datos, no con intuiciones.",
  },
  {
    n: "04",
    title: "Aprendo en serio, no por moda",
    body: "Soy backend de raíz, pero no me escondo detrás de la API. Este portfolio lo construí con Next.js y TypeScript desde cero para entender el stack completo. Cuando algo me hace falta para hacer mejor mi trabajo, lo aprendo a fondo.",
  },
];

const EXPERIENCE = [
  {
    company: "MetLife",
    role: "Developer TI — IT App Development",
    period: "Sep 2024 – Presente",
    location: "Madrid",
    current: true,
    lead: "Aplicaciones corporativas críticas del sector seguros, en producción y bajo carga real.",
    points: [
      "Reduje los tiempos de respuesta de aplicaciones críticas reescribiendo lógica de negocio en Java y optimizando el procesamiento de eventos asíncronos en arquitectura de microservicios.",
      "Diseñé y desplegué APIs REST con validación estricta de esquemas y gestión de edge cases, reduciendo los fallos de integración entre servicios.",
      "Garanticé la consistencia del intercambio asíncrono entre servicios distribuidos con pruebas E2E, incluyendo flujos con comportamiento equivalente a brokers de mensajería.",
      "Definí KPIs automatizados en Power BI sobre SQL Server y monté monitorización con Elasticsearch, reduciendo el tiempo de detección de incidencias.",
    ],
    stack: ["Java", "Microservicios", "REST", "SQL Server", "Azure DevOps", "Elasticsearch"],
    sub: "Empecé en prácticas (Sep 2024) y pasé a Developer TI en Feb 2026.",
  },
  {
    company: "NFQ Advisory",
    role: "Associate — Datos & Cumplimiento Normativo",
    period: "Oct 2025 – Feb 2026",
    location: "Madrid",
    current: false,
    lead: "Proyecto de datos y compliance para el sector seguros.",
    points: [
      "Diseñé una estrategia Golden Record para unificar grandes volúmenes de datos críticos, reduciendo duplicidades y mejorando la calidad del dato para gestión de riesgos y reporting.",
      "Optimicé pipelines ETL en SQL Server con scripts avanzados en Python, recortando los tiempos de carga en procesos batch críticos del módulo de Siniestros.",
      "Modelé arquitecturas de datos orientadas a cumplimiento normativo, preparadas para volúmenes propios de Big Data financiero.",
    ],
    stack: ["Python", "SQL Server", "ETL", "Golden Record", "Big Data"],
    sub: null,
  },
  {
    company: "KNAPP Ibérica",
    role: "Software Commissioning Engineer",
    period: "Ago 2025 – Sep 2025",
    location: "Graz, Austria",
    current: false,
    lead: "Automatización de sistemas en un proyecto internacional de alta exigencia.",
    points: [
      "Desarrollé scripts de automatización en Python y Java para la sincronización lógica de sistemas en tiempo real.",
      "Optimicé consultas SQL complejas y administré procesos en servidor Linux para garantizar la trazabilidad de los datos de almacenamiento.",
    ],
    stack: ["Python", "Java", "SQL", "Linux"],
    sub: null,
  },
];

const PROJECTS = [
  {
    name: "F1nalLap",
    period: "2025",
    tag: "Trabajo de Fin de Grado",
    description:
      "Motor de simulación probabilística de estrategias de carrera de F1. Arquitectura modular con servicios desacoplados, consumo de APIs REST externas con tipado estricto y procesamiento de grandes volúmenes de datos históricos para generar predicciones en tiempo real.",
    technologies: ["TypeScript", "REST APIs", "Arquitectura modular"],
    github: null as string | null,
  },
];

const SKILLS = [
  { group: "Lenguajes", items: ["Java", "Python", "TypeScript", "SQL"] },
  {
    group: "Arquitectura",
    items: ["Microservicios", "REST APIs", "Sistemas distribuidos", "Mensajería asíncrona"],
  },
  { group: "Datos", items: ["SQL Server", "MySQL", "MongoDB", "ETL", "Power BI", "Elasticsearch"] },
  { group: "DevOps", items: ["Azure DevOps", "Git", "Docker", "Linux"] },
  { group: "Aprendiendo", items: ["Next.js", "React", "Tailwind CSS"] },
];

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-accent font-mono text-xs tracking-[0.25em] uppercase">
        {children}
      </span>
      <span className="flex-1 rule" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative z-10 font-sans">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6">
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <header
          id="inicio"
          className="min-h-screen flex flex-col justify-center py-28"
        >
          <Reveal>
            <p className="font-mono text-sm text-accent mb-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" />
              Backend Developer · Madrid, España
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-serif text-[2.6rem] leading-[1.08] sm:text-6xl md:text-[4.2rem] text-[#f3f0ea] tracking-[-0.02em] mb-8">
              Construyo el backend que{" "}
              <span className="italic text-accent">no se puede permitir</span>{" "}
              fallar.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-10">
              Soy Alberto García. Diseño microservicios en Java y arquitecturas de
              datos para el sector seguros — donde un dato mal procesado cuesta
              dinero y rompe el compliance. Llevo más de un año haciéndolo en
              producción para una aseguradora global.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 bg-[#e8e4dd] text-[#0c0b0a] px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
              >
                Hablemos
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <div className="flex items-center gap-5 text-muted">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-[#e8e4dd] transition-colors"
                >
                  <GitHubIcon size={20} />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#e8e4dd] transition-colors"
                >
                  <LinkedInIcon size={20} />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Email"
                  className="hover:text-[#e8e4dd] transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <a
              href="#sobre-mi"
              className="mt-24 inline-flex items-center gap-2 text-faint hover:text-muted text-xs font-mono uppercase tracking-widest transition-colors"
            >
              <ArrowDown size={14} className="animate-bounce" />
              Sigue leyendo
            </a>
          </Reveal>
        </header>

        {/* ─── SOBRE MÍ ─────────────────────────────────────────── */}
        <section id="sobre-mi" className="py-24 scroll-mt-20">
          <Eyebrow>Sobre mí</Eyebrow>

          <div className="grid md:grid-cols-3 gap-12">
            <Reveal className="md:col-span-2 space-y-5 text-[#cfc9bf] text-lg leading-[1.75]">
              <figure className="float-right ml-6 mb-3 w-40 sm:w-48">
                <div className="border border-line p-1.5">
                  <img
                    src="/profile.jpg"
                    alt="Alberto García Alcolado"
                    width={192}
                    height={240}
                    className="w-full aspect-[4/5] object-cover object-top"
                  />
                </div>
                <figcaption className="text-faint text-xs font-mono mt-2.5 text-center">
                  Alberto García · Madrid
                </figcaption>
              </figure>
              <p>
                No llegué a la programación por las modas, sino por lo que la
                buena ingeniería <em className="text-[#e8e4dd] not-italic font-medium">sostiene</em>:
                sistemas que mueven datos sensibles de millones de pólizas y que
                tienen que seguir en pie cuando más se les necesita.
              </p>
              <p>
                Mi terreno es el <span className="text-accent">backend en Java</span>:
                microservicios, APIs REST robustas, flujos asíncronos entre
                servicios distribuidos y arquitecturas de datos pensadas para
                compliance normativo. He trabajado en MetLife y NFQ en proyectos
                reales del sector seguros, y en un proyecto internacional para
                KNAPP en Graz, Austria.
              </p>
              <p>
                Lo que me diferencia no es saber muchas tecnologías, sino entender
                por qué importan. Me obsesiona la calidad del dato, diseñar para
                el fallo y medir lo que despliego. Y aunque soy backend de raíz,
                estoy ampliando hacia full stack — este sitio es la prueba, no una
                promesa.
              </p>
              <p className="font-serif text-xl text-[#e8e4dd] italic pt-2">
                — Alberto García Alcolado
              </p>
            </Reveal>

            <Reveal delay={150} className="space-y-px text-sm font-mono">
              {[
                ["Rol actual", "Developer TI"],
                ["Empresa", "MetLife"],
                ["Ubicación", "Madrid, ES"],
                ["Inglés", "B2 · EOI"],
                ["Formación", "Ing. Informática"],
                ["Disponibilidad", "Abierto"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-4 py-3 border-b border-line"
                >
                  <span className="text-faint">{k}</span>
                  <span className="text-[#e8e4dd] text-right">{v}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ─── CÓMO TRABAJO ─────────────────────────────────────── */}
        <section id="metodo" className="py-24 scroll-mt-20">
          <Eyebrow>Cómo trabajo</Eyebrow>
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-[#f3f0ea] tracking-[-0.02em] mb-14 max-w-2xl">
              Cuatro cosas en las que no transijo.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={(i % 2) * 120}>
                <div className="group">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-sm text-accent">{p.n}</span>
                    <h3 className="font-serif text-xl text-[#f3f0ea]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-muted leading-relaxed pl-9">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── EXPERIENCIA ──────────────────────────────────────── */}
        <section id="experiencia" className="py-24 scroll-mt-20">
          <Eyebrow>Experiencia</Eyebrow>

          <div className="space-y-px">
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 80}>
                <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-line">
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-serif text-2xl text-[#f3f0ea]">
                        {exp.company}
                      </h3>
                      {exp.current && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-accent border border-accent/40 px-1.5 py-0.5">
                          Ahora
                        </span>
                      )}
                    </div>
                    <p className="text-[#cfc9bf] text-sm mt-1.5">{exp.role}</p>
                    <p className="text-faint text-xs font-mono mt-2">
                      {exp.period}
                    </p>
                    <p className="text-faint text-xs font-mono flex items-center gap-1 mt-1">
                      <MapPin size={11} /> {exp.location}
                    </p>
                  </div>

                  <div className="md:col-span-8">
                    <p className="text-[#e8e4dd] mb-4 leading-relaxed">
                      {exp.lead}
                    </p>
                    <ul className="space-y-3 mb-5">
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          className="text-muted text-[15px] leading-relaxed flex gap-3"
                        >
                          <span className="text-accent mt-2 flex-shrink-0 w-3 h-px bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {exp.sub && (
                      <p className="text-faint text-sm italic mb-4">{exp.sub}</p>
                    )}
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-faint"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── PROYECTOS ────────────────────────────────────────── */}
        <section id="proyectos" className="py-24 scroll-mt-20">
          <Eyebrow>Proyectos</Eyebrow>

          <div className="space-y-px">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.name} delay={i * 80}>
                <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-line">
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl text-[#f3f0ea]">
                      {project.name}
                    </h3>
                    <p className="text-accent text-xs font-mono mt-2">
                      {project.tag}
                    </p>
                    <p className="text-faint text-xs font-mono mt-1">
                      {project.period}
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-[#cfc9bf] leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-between">
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono text-faint"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#e8e4dd] link-underline inline-flex items-center gap-1.5"
                        >
                          <GitHubIcon size={15} /> Ver código
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-8 border-t border-b border-line text-muted hover:text-[#e8e4dd] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <GitHubIcon size={18} />
                  <span className="text-sm">
                    Más proyectos personales y experimentos en GitHub
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </Reveal>
          </div>
        </section>

        {/* ─── HABILIDADES ──────────────────────────────────────── */}
        <section className="py-24">
          <Eyebrow>Stack</Eyebrow>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
            {SKILLS.map((s, i) => (
              <Reveal key={s.group} delay={(i % 3) * 80}>
                <h3 className="text-faint font-mono text-xs uppercase tracking-wider mb-3">
                  {s.group}
                </h3>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="text-[#cfc9bf] text-[15px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── CONTACTO ─────────────────────────────────────────── */}
        <section id="contacto" className="py-28 scroll-mt-20">
          <Eyebrow>Contacto</Eyebrow>
          <Reveal>
            <h2 className="font-serif text-4xl md:text-6xl text-[#f3f0ea] tracking-[-0.02em] leading-[1.05] mb-8 max-w-3xl">
              ¿Buscas a alguien que se tome en serio el backend?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mb-12">
              Estoy abierto a roles backend, arquitecturas distribuidas y
              proyectos donde la calidad del dato y la fiabilidad importen de
              verdad. Si crees que puedo aportar, escríbeme — respondo a todo.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5 mb-16">
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 bg-[#e8e4dd] text-[#0c0b0a] px-7 py-3.5 text-sm font-medium hover:bg-accent transition-colors"
              >
                <Mail size={16} />
                Escríbeme un email
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8e4dd] link-underline inline-flex items-center gap-2 text-sm"
              >
                <LinkedInIcon size={16} /> Conecta en LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="grid sm:grid-cols-3 gap-px">
              {[
                { icon: <Mail size={15} />, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: <Phone size={15} />, label: "Teléfono", value: PHONE, href: `tel:${PHONE}` },
                { icon: <MapPin size={15} />, label: "Ubicación", value: "Madrid, España", href: null },
              ].map((c) => {
                const inner = (
                  <>
                    <span className="flex items-center gap-2 text-faint text-xs font-mono uppercase tracking-wider mb-2">
                      {c.icon} {c.label}
                    </span>
                    <span className="text-[#e8e4dd] text-sm block truncate">
                      {c.value}
                    </span>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="py-5 border-t border-line hover:border-accent transition-colors"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className="py-5 border-t border-line">
                    {inner}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </section>
      </div>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-line">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-faint text-xs font-mono">
          <span>© {new Date().getFullYear()} Alberto García Alcolado</span>
          <span>Construido a mano con Next.js &amp; Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
