import { useState, useEffect } from "react";
import briefCaseGif from "@/assets/gifs/briefcase.gif";
import incalexaLogo from "@/assets/images/bxmart_logo.png";
import nttLogo from "@/assets/images/ntt_logo.png";

const ExperienceSection = () => {
  const [activePopup, setActivePopup] = useState<number | null>(null);

  // Bloquear scroll al abrir popup
  useEffect(() => {
    if (activePopup !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activePopup]);

  const experiences = [
    {
      role: "Back-end Python Developer",
      company: "Grupo Incalexa, BXMART S.L.",
      companyUrl: "https://www.linkedin.com/company/bxmart-sl/posts/?feedView=all",
      date: "Abr 2024 – Oct 2024",
      icon: "🐍",
      logoUrl: incalexaLogo,
      detailsSummary: "Diseño de funcionalidades, APIs y soluciones backend en Python para herramientas de optimización y gestión energética, aplicando pandas y frameworks de análisis de datos en flujos ETL, con énfasis en seguridad, consultas SQL y colaboración con el equipo frontend.",
      detailsList: [
        { emoji: "⚡", text: "Desarrollo de funcionalidades para la gestión energética: virtualización de consumos y propuestas de mejora (placas solares, baterías, tarifas, etc.)." },
        { emoji: "🌐", text: "Implementación de APIs y microservicios para el análisis de consumo por dispositivo y cálculo de ahorros, utilizando pandas y frameworks de análisis de datos para el procesamiento y modelado de información." },
        { emoji: "⚙️", text: "Optimización de flujos de datos mediante ETL y manipulación de grandes volúmenes de información con pandas para obtener métricas de rendimiento energético." },
        { emoji: "🛡️", text: "Revisión de código con enfoque en ciberseguridad: sanitización de datos, mitigación de inyección SQL y XSS." },
        { emoji: "👥", text: "Colaboración con el equipo Front-end para integrar funcionalidades y aplicar buenas prácticas de seguridad." },
        { emoji: "💾", text: "Gestión de datos mediante bases de datos SQL: consultas y configuración de usuarios." },
      ],
    },
    {
      role: "Back-end Python Developer on AI & LLMs",
      company: "NTT DATA",
      companyUrl: "https://es.nttdata.com/",
      date: "May 2025 – Actualidad",
      icon: "🤖",
      logoUrl: nttLogo,
      detailsSummary: "Diseño e implementación de microservicios RESTful con FastAPI, integración de LLMs mediante LangChain y PGVector, y modelado de bases de datos en PostgreSQL para backend",
      detailsList: [
        { emoji: "🧠", text: "Desarrollo de casos de uso para una aplicación de inteligencia artificial basada en un modelo de lenguaje (LLM) utilizando Python." },
        { emoji: "🌐", text: "Diseño e implementación de microservicios y endpoints RESTful con FastAPI, garantizando escalabilidad y mantenibilidad." },
        { emoji: "📊", text: "Gestión de la lógica de negocio para procesar solicitudes del usuario e interactuar con el modelo." },
        { emoji: "🔗", text: "Integración eficiente del modelo LLM en los servicios backend con LangChain y PGVector, optimizando tiempos de respuesta y procesamiento con los parámetros del modelo." },
        { emoji: "👥", text: "Colaboración con otros equipos técnicos para el diseño funcional de aplicativos y casos de uso de la plataforma basada en LLM, alineados a las necesidades de los clientes." },
        { emoji: "💾", text: "Diseño y construcción de tablas en PostgreSQL para almacenar los datos necesarios para el modelo y sus resultados, para su procesamiento y envío." },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Title section */}
        <div className="text-center mb-16 relative">
          <h2 className="flex items-center justify-center text-4xl md:text-5xl font-bold mb-4">
            <img
              src={briefCaseGif}
              alt="BriefcaseGif"
              className="w-16 h-16 mr-4 animate-pulse-slow"
            />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent 
                            font-extrabold text-shadow-md-soft animate-gradientMove-slow">
              Experiencia Laboral
            </span>
          </h2>
          <div className="mx-auto w-48 h-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-full animate-pulse-slow mt-2"></div>
        </div>

        <div className="relative max-w-4xl mx-auto space-y-16">
          {/* Timeline */}
          <div className="absolute left-6 top-0 h-full w-1.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_20px_rgba(0,255,255,0.7)] rounded-full animate-pulse"></div>
          <div className="absolute left-3.5 top-0 h-full w-0.5 bg-gradient-to-b from-fuchsia-500 via-cyan-300 to-indigo-500 opacity-70 animate-[pulse_3s_infinite]"></div>
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 via-sky-500 to-violet-500 opacity-60 animate-[pulse_4s_infinite]"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`cyber-card group relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-4 p-6 rounded-xl 
                          bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg
                          opacity-0 animate-fadeIn md:pl-20`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-6 h-6 rounded-full bg-cyan-400 border-4 border-background shadow-[0_0_15px_rgba(0,255,255,0.8)] animate-ping"></div>
              <div className="absolute left-6 top-8 w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 shadow-[0_0_25px_rgba(255,0,255,0.8)]"></div>

              <div className="text-4xl flex-shrink-0 self-center">{exp.icon}</div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {exp.role}
                </h3>

                <div className="text-lg mb-2 pl-0 md:pl-0">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-accent hover:text-primary transition-colors duration-300
                              after:block after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:via-blue-400 after:to-purple-500 after:rounded after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {exp.company}
                  </a>
                </div>

                <div className="text-sm mb-4 text-muted-foreground">
                  {exp.date}
                </div>

                <p className="text-foreground leading-relaxed pl-0 md:pl-0">{exp.detailsSummary}</p>

                {/* Mobile button */}
                <button
                  onClick={() => setActivePopup(index)}
                  className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-700 via-blue-700 to-purple-800 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300 text-center md:hidden"
                >
                  Ver más
                </button>
              </div>

              {/* PC button */}
              <button
                onClick={() => setActivePopup(index)}
                className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-700 via-blue-700 to-purple-800 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300 hidden md:block"
              >
                Ver más
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP */}
      {activePopup !== null && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/60 transition-opacity duration-500">
          <div
            className="relative w-[90%] md:w-2/3 max-h-[80vh] bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-3xl shadow-[0_0_60px_rgba(0,255,255,0.6)] overflow-auto border border-cyan-400 p-8 opacity-0 animate-popupFadeIn"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">{experiences[activePopup].role}</h3>
            <ul className="list-none space-y-4 text-white">
              {experiences[activePopup].detailsList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setActivePopup(null)}
              className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-transform duration-300 font-bold"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Custom animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(0.85); }
        }
        .animate-pulse-slow { animation: pulse 4s infinite; }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove-slow {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s forwards; }

        @keyframes popupFadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-popupFadeIn { animation: popupFadeIn 0.5s forwards; }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
