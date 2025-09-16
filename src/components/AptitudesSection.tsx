import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import rocketGif from "@/assets/gifs/rocket.gif";
import winkGif from "@/assets/gifs/wink.gif";
import bkImage from "@/assets/images/Background_aptitudes.png";


interface AptitudeData {
  name: string;
  description: string | JSX.Element;
  impact: string | JSX.Element;
  example?: string | JSX.Element;
  emoji: string;
}


const AptitudesSection = () => {
  const [selectedAptitude, setSelectedAptitude] = useState<AptitudeData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (aptitude: AptitudeData) => {
    setSelectedAptitude(aptitude);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAptitude(null);
  };

  const aptitudesData: AptitudeData[] = [
    {
      name: "Gestión del tiempo",
      description: (
        <>
          Capacidad para <strong>organizar tareas</strong>, <strong>priorizar actividades</strong> y <strong>cumplir plazos</strong> de manera eficiente.
        </>
      ),
      impact: (
        <>
          <strong>Optimiza recursos</strong>, <strong>maximiza</strong> la <strong>productividad</strong> y asegura la entrega <strong>puntual</strong> de proyectos.
        </>
      ),
      example: (
        <>
          Hay un truco que me encanta aplicar: la <strong><em>regla de los 2 minutos</em></strong>.  
          Esta consiste en que, si una tarea puede hacerse en <strong>menos</strong> de 2 minutos, se hace <strong>inmediatamente</strong>. Esto ayuda a evitar la <em>procrastinación</em> y a mantener un <strong>flujo de trabajo constante</strong>.  
          Es por ello que mi método para organizar mi tiempo es mediante <strong>listas de tareas</strong>, ordenadas por <strong>prioridad</strong> y <strong>tiempo estimado</strong>.
        </>
      ),
      emoji: "⏰",
    },
    {
      name: "Adaptabilidad",
      description: (
        <>
          Capacidad para <strong>ajustarse rápidamente</strong> a cambios y nuevas situaciones, manteniendo un desempeño óptimo.
        </>
      ),
      impact: (
        <>
          Incrementa la <strong>resiliencia</strong> individual y del equipo, facilitando la <strong>gestión de cambios</strong> y <strong>aprovechando oportunidades</strong> imprevistas.
        </>
      ),
      example: (
        <>
          El ejemplo más ilustrativo es este <strong>portafolio</strong>. En un mundo en <strong>constante evolución</strong>, y con tecnologías como la inteligencia artificial, he conseguido desarrollar en <strong>pocas horas</strong> una solución como esta, pese a tener conocimientos limitados de Frontend. ¡A que es <strong><em>alucinante</em></strong>{" "}
          <img src={winkGif} alt="GIF de adaptabilidad" className="inline w-4 h-4" />!
        </>
      ),
      emoji: "🌱",
    },
    {
      name: "Trabajo en equipo",
      description: (
        <>
          Habilidad para <strong>colaborar de manera efectiva</strong> con el equipo, potenciando las
          fortalezas de cada miembro para alcanzar objetivos compartidos.
        </>
      ),
      impact: (
        <>
          Fomenta la <strong>cohesión</strong> del equipo, mejora la <strong>eficacia</strong> y genera un ambiente de trabajo positivo y motivador.
        </>
      ),
      example: (
        <>
          Todos los equipos en los que he trabajado han sido reducidos, de aproximadamente 5-6 miembros. En estos casos, el trabajo en equipo resulta fundamental para lograr una <strong>coordinación efectiva</strong> y llevar a cabo las tareas con éxito, potenciando el producto final mediante las <strong>habilidades más destacadas</strong> de cada integrante.
        </>
      ),
      emoji: "🤝",
    },
    {
      name: "Aprendizaje continuo",
      description: (
        <>
          Disposición constante a <strong>adquirir nuevas habilidades</strong> y <strong>conocimientos</strong> para mantenerse <strong>actualizado</strong> y <strong>competitivo</strong>.
        </>
      ),
      impact: (
        <>
          Impulsa la <strong>innovación</strong>, fortalece la <strong>adaptabilidad</strong> y garantiza que el equipo <strong>evolucione</strong> con el sector.
        </>
      ),
      example: (
        <>
          <em>“El conocimiento debe mejorarse, cuestionarse y ampliarse constantemente, o desaparece.”</em> — Peter Drucker.  
          Más hoy en día, con la rápida evolución de tecnologías como la <strong>IA</strong>, es fundamental mantenerse actualizado y <strong>aprender</strong> nuevas tecnologías.
        </>
      ),
      emoji: "📚",
    },
    {
      name: "Comunicación efectiva",
      description: (
        <>
          Habilidad para <strong>transmitir ideas con claridad</strong>, escuchar activamente y adaptar el mensaje según el público.
        </>
      ),
      impact: (
        <>
          <strong>Minimiza malentendidos</strong>, agiliza la <strong>toma de decisiones</strong> y <strong>fortalece</strong> las <strong>relaciones laborales</strong>.
        </>
      ),
      example: (
        <>
          Algo aprendido durante mi carrera es que el <strong>contexto</strong> es <strong>fundamental</strong>. Al transmitir un mensaje, es clave explicar la idea de <strong>forma clara y concisa</strong>, <strong>sintetizando</strong> los detalles técnicos <strong>innecesarios</strong> y <strong>situando</strong> correctamente al <strong>receptor</strong>.
        </>
      ),
      emoji: "💬",
    },
    {
      name: "Resolución de problemas",
      description: (
        <>
          Capacidad para <strong>identificar, analizar y solucionar</strong> problemas complejos de manera <strong>rápida y efectiva</strong>.
        </>
      ),
      impact: (
        <>
          <strong>Reduce riesgos</strong>, <strong>evita retrasos</strong> y asegura la <strong>continuidad</strong> de operaciones críticas.
        </>
      ),
      example: (
        <>
          He tenido la fortuna de desempeñar mi trabajo siempre con <strong>libertad creativa</strong>, lo cual es fundamental para adquirir y desarrollar la habilidad de <strong>analizar y abordar</strong> problemas de manera efectiva.
        </>
      ),
      emoji: "🛠️",
    },
    {
      name: "Toma de decisiones",
      description: (
        <>
          Capacidad para <strong>evaluar opciones</strong> y <strong>elegir</strong> la mejor alternativa incluso <em>bajo presión</em> o <em>incertidumbre</em>.
        </>
      ),
      impact: (
        <>
          Reduce <strong>errores</strong>, evita <strong>retrasos</strong> y fortalece la <strong>confianza</strong> en la gestión de proyectos y equipos.
        </>
      ),
      example: (
        <>
          Un aprendizaje adquirido con el tiempo ha sido el hecho de que <strong>analizar</strong> y <strong>razonar</strong> las diferentes casuísticas siempre es valioso.  
          Sin embargo, surge un problema cuando amenaza la <strong>parálisis por análisis</strong>.  
          La primera decisión <em>rara</em> vez suele ser perfecta, por lo que <strong>tomar acción</strong> y tener la capacidad de ajustar después suele ser más efectivo que esperar la decisión ideal.  
          Reconocer <strong><em>cuándo reflexionar</em></strong> y <strong><em>cuándo tomar acción</em></strong> es una habilidad infravalorada.
        </>
      ),
      emoji: "🎯",
    },
    {
      name: "Pensamiento crítico",
      description: (
        <>
          Habilidad para <strong>evaluar información objetivamente</strong>, <strong>cuestionar</strong> supuestos y <strong>tomar decisiones</strong> fundamentadas.
        </>
      ),
      impact: (
        <>
          Permite detectar <strong>oportunidades de mejora</strong>, <strong>prevenir errores</strong> y tomar <strong>decisiones estratégicas</strong> más sólidas.
        </>
      ),
      example: (
        <>
          Algo que caracteriza mi forma de trabajar es <strong>analizar y comprender</strong> todas las aristas posibles antes de actuar en situaciones complejas o que requieran un tiempo considerable para resolverse.
        </>
      ),
      emoji: "🧠",
    },
    {
      name: "Capacidad para trabajar en entornos distribuidos",
      description: (
        <>
          Habilidad para <strong>colaborar eficazmente</strong> en equipos remotos o híbridos, manteniendo la <strong>productividad</strong> y la <strong>cohesión</strong>.
        </>
      ),
      impact: (
        <>
          Facilita la <strong>coordinación</strong>, <strong>comunicación y eficiencia</strong>, independientemente de la <strong>ubicación</strong> de los miembros del equipo.
        </>
      ),
      example: (
        <>
          Actualmente he trabajado durante más tiempo de forma <strong>remota</strong> que presencial. De hecho, el puesto actual ha sido completamente remoto, una muestra de que mi <strong>adaptación</strong> a <strong>cualquier entorno</strong> de trabajo es rápida y efectiva.
        </>
      ),
      emoji: "🌍",
    }
  ];

  return (
    <section id="aptitudes" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="flex items-center justify-center text-4xl md:text-5xl font-bold mb-4">
            <img
              src={rocketGif}
              alt="Rocket GIF"
              className="w-16 h-16 mr-4 animate-pulse-slow"
            />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent
                            font-extrabold text-shadow-md-soft animate-gradientMove-slow">
              Aptitudes
            </span>
          </h2>
          <div className="mx-auto w-48 h-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-full animate-pulse-slow mt-2"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {aptitudesData.map((aptitude, index) => (
              <div
                key={index}
                className="cyber-card text-center group cursor-pointer opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                onClick={() => openModal(aptitude)}
              >
                <div className="text-2xl mb-2">{aptitude.emoji}</div>
                <p className="text-foreground font-medium">{aptitude.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedAptitude && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span>{selectedAptitude.emoji}</span>
                  {selectedAptitude.name}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeModal}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-accent mb-2">Descripción</h4>
                  <p className="text-sm text-muted-foreground">{selectedAptitude.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Impacto</h4>
                  <p className="text-sm text-muted-foreground">{selectedAptitude.impact}</p>
                </div>
                {selectedAptitude.example && (
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Mi experiencia</h4>
                    <p className="text-sm text-muted-foreground">{selectedAptitude.example}</p>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={closeModal}
                  className="border-border text-foreground hover:bg-muted"
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* custom animaciones */}
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

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s forwards; }
      `}</style>
    </section>
  );
};

export default AptitudesSection;
