import { useEffect,useState } from "react";
import graduationCapGif from "@/assets/gifs/graduation-cap.gif";
import pythonImg from "@/assets/images/python.gif";
import hack4uImg from "@/assets/images/Hack4u_logo.png";
import sheet1Background from "@/assets/images/sheet1_bk.png";
import sheet2Background from "@/assets/images/sheet2_bk.png";
import bigSchoolImg from "@/assets/images/Big_school_logo.png";

const EducationSection = () => {
  const [page, setPage] = useState(1);
  const [selectedPdf, setSelectedPdf] = useState(null);

  // block scroll when pdf is open
  useEffect(() => {
    if (selectedPdf) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedPdf]);


  const education = [
    {
      title: "Máster en Ciberseguridad en entornos de las tecnologías de la información",
      institution: "I.E.S. Valle del Jerte (Centro de excelencia)",
      institutionUrl: "https://iesvallejertepla.educarex.es/",
      date: "Oct 2024 - May 2025",
      certificate: "Certificado_CECETI.pdf",
      icon: "🎓",
    },
    {
      title: "Técnico Superior en Sistemas de telecomunicaciones e informáticos",
      institution: "I.E.S. Javier García Téllez",
      institutionUrl: "https://iesjgarciatellez.educarex.es/",
      date: "Sept 2022 - May 2024",
      certificate: "Resguardo_Sistemas_Telecomunicaciones_Informáticos.pdf",
      icon: "📡",
    },
  ];

  const extraCourses = [
    {
      name: "Universidad Python (+86hrs)",
      platform: "Udemy",
      url: "https://www.udemy.com/course/universidad-python-desde-cero-hasta-experto-django-flask-rest-web/",
      certificate: "Udemy_Universidad_Python.pdf",
      icon: pythonImg
    },
    {
      name: "Introducción al Hacking (+50hrs)",
      platform: "Hack4u",
      url: "https://hack4u.io/cursos/introduccion-al-hacking/",
      certificate: "Introduccion_Hacking_Cristian_Leal_Guerra.pdf",
      icon: hack4uImg
    },
    {
      name: "Introducción Linux y Bash (+15hrs)",
      platform: "Hack4u",
      url: "https://hack4u.io/cursos/introduccion-a-linux/",
      certificate: "Introduccion_Linux_Cristian_Leal_Guerra.pdf",
      icon: hack4uImg
    },
    {
      name: "Introducción workflows con IA (+6hrs)",
      platform: "Big School",
      url: "https://thebigschool.com/sp/ia-workflow-eg/",
      certificate: "Introduccion_Workflous_IA.pdf",
      icon: bigSchoolImg
    },
  ];

  const renderEducationBlocks = () =>
    education.map((edu, index) => (
      <div
        key={index}
        className={`
          relative z-10 
          bg-gray-900/80 backdrop-blur-xl 
          rounded-2xl p-4 mb-10
          shadow-[0_8px_30px_rgba(0,0,0,0.5)]
          border border-gray-700/60
          transform transition-all duration-700 ease-in-out
          hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,0,0,0.7)]
          opacity-0 translate-y-6
          animate-fade-in-up
        `}
        style={{
          rotate: `${index % 2 === 0 ? "-1.5deg" : "1.5deg"}`,
          width: "65%",
          animationDelay: `${index * 0.15}s`,
          animationFillMode: "forwards"
        }}
      >
        <div className="flex items-start gap-4">
          <div className="text-4xl">{edu.icon}</div>
          <div className="flex-1">
            <h3
              className="text-xl md:text-2xl font-bold text-white mb-2 px-2 rounded-md"
              style={{ textShadow: "0 0 6px rgba(255,255,255,0.4)" }}
            >
              {edu.title}
            </h3>
            <div className="text-lg mb-2">
              <a
                href={edu.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors duration-300 underline decoration-dotted"
              >
                {edu.institution}
              </a>
            </div>
            <div className="text-sm text-gray-300 mb-4">{edu.date}</div>
          </div>
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <button
            className="bg-white/30 hover:bg-white/50 border border-white/40 text-gray-900 hover:text-black
            px-4 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gray-700 flex flex-col items-center gap-1 min-w-[80px]"
            onClick={() => setSelectedPdf(`src/assets/files/${edu.certificate}`)}
          >
            <span className="text-2xl">📄</span>
            <span className="text-xs font-medium">Certificado</span>
          </button>
        </div>
      </div>
    ));

  const renderExtraCourseBlocks = () =>
    <div className="w-full h-full flex flex-col items-center gap-10 mt-18 transition-opacity duration-700">
      {extraCourses.map((course, index) => (
        <div
          key={index}
          className="cyber-card relative z-10 bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-4 transform transition-transform duration-500 hover:scale-105 border border-gray-200"
          style={{
            rotate: `${index % 2 === 0 ? "-1.5deg" : "1.5deg"}`,
            width: "50%",
            minWidth: "220px",
          }}
        >
          <div className="flex items-start gap-3">
            <img 
              src={course.icon} 
              alt={course.name} 
              className="w-10 h-10 object-contain" 
            />
            <div className="flex-1 flex flex-col">
              <h3
                className="text-lg font-bold text-primary mb-1"
                style={{ textShadow: "0 0 4px rgba(0,0,0,0.3)" }}
              >
                {course.platform} - {course.name}
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors duration-300 underline decoration-dotted text-sm"
                >
                  Ir al curso
                </a>
                {course.certificate && (
                  <button
                    className="ml-auto bg-primary/20 hover:bg-primary/40 border border-primary/30 text-primary hover:text-primary-foreground px-2 py-1 rounded-lg transition-all duration-300 text-xs"
                    onClick={() => setSelectedPdf(`src/assets/files/${course.certificate}`)}
                  >
                    📄 Ver Certificado
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>;

  const togglePage = () => {
    setPage(page === 1 ? 2 : 1);
  };

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="text-center mb-16 relative z-30 mt-12">
        <h2 className="flex items-center justify-center text-4xl md:text-5xl font-bold mb-4">
          <img
            src={graduationCapGif}
            alt="GraduationCap"
            className="w-16 h-16 mr-4 animate-pulse-slow"
          />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent 
                          font-extrabold text-shadow-md-soft animate-gradientMove-slow">
            Educación y Formaciones
          </span>
        </h2>
        <div className="mx-auto w-48 h-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-full animate-pulse-slow mt-2"></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto h-[800px] flex justify-center items-center">
        <div className="absolute w-[90%] h-full rounded-3xl shadow-inner transform -rotate-1 bg-white/10 z-0"></div>

        {/* Sheet 1 */}
        <div
          className={`absolute w-[90%] h-full rounded-3xl shadow-xl transition-all duration-1000 ease-in-out
            ${page === 1 
              ? "translate-x-0 rotate-1 opacity-100 z-20" 
              : "-translate-x-[60%] -rotate-3 opacity-0 z-10"
            }
          `}
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)), url(${sheet1Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="w-full h-full flex flex-col items-center mt-16 transition-opacity duration-700">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary relative mb-8
              bg-gradient-to-r from-primary/20 via-white/30 to-primary/20 
              px-6 py-3 rounded-2xl shadow-md border border-primary/40 
              backdrop-blur-sm tracking-wide"
              >
                📜 Títulos Oficiales
            </h2>
            {renderEducationBlocks()}
          </div>

          <button
            onClick={togglePage}
            className="absolute top-4 right-4 bg-primary/30 hover:bg-primary/50 text-white px-4 py-2 rounded-lg shadow-md transition-all z-30"
          >
            📖 Pasar hoja
          </button>
        </div>

        {/* Sheet 2 */}
        <div
          className={`absolute w-[90%] h-full rounded-3xl shadow-xl bg-cover bg-center transition-all ease-in-out
            ${page === 2 
              ? "translate-x-0 -rotate-1 opacity-100 z-20 duration-1000" 
              : "opacity-0 z-10 duration-300"
            }
          `}
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)), url(${sheet2Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="w-full h-full flex flex-col items-center mt-16 transition-opacity duration-700">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary relative mb-8
              bg-gradient-to-r from-accent/20 via-white/30 to-accent/20 
              px-6 py-3 rounded-2xl shadow-md border border-accent/40 
              backdrop-blur-sm tracking-wide"
              >
                📚 Formaciones extra curriculares
            </h2>
            {renderExtraCourseBlocks()}
          </div>

          <button
            onClick={togglePage}
            className="absolute top-4 right-4 bg-primary/30 hover:bg-primary/50 text-white px-4 py-2 rounded-lg shadow-md transition-all z-30"
          >
            📖 Hoja anterior
          </button>
        </div>
      </div>

      {selectedPdf && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] md:w-[70%] h-[80%] rounded-xl relative shadow-lg overflow-hidden">
            <button
              className="absolute top-4 right-4 text-white bg-red-500 px-4 py-2 rounded-lg z-50"
              onClick={() => setSelectedPdf(null)}
            >
              Cerrar
            </button>
            <iframe
              src={selectedPdf}
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}

      {/* custom animations */}
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

        .text-shadow-md-soft {
          text-shadow: 0 0 3px #0ff, 0 0 6px #0ff, 0 0 10px #0ff;
        }
      `}</style>
    </section>
  );
};

export default EducationSection;
