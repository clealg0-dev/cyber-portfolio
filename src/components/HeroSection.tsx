import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ModalPortal from "@/components/ModalPortal";
import AboutMeWriter from "@/components/AboutMeWriter";
import Typewriter from "@/components/Typewriter";  
import Lottie from "lottie-react";
import waveAnimation from "@/assets/lottie/wave-hand.json";
import pointClickAnimation from "@/assets/lottie/point-click.json";
import waveGif from "../assets/gifs/man-raising-hand.gif";
import nerdGif from "../assets/gifs/grinning-face-with-sweat.gif";
import lightBulbGif from "../assets/gifs/light-bulb.gif";
import briefcaseGif from "../assets/gifs/briefcase.gif";
import rocketGif from "../assets/gifs/rocket.gif";
import bullseyeGif from "../assets/gifs/bullseye.gif";
import handshakeGif from "../assets/gifs/handshake.gif";
import muscleGif from "../assets/gifs/muscle.gif";
import winkGif from "../assets/gifs/wink.gif";
import faceScreamingInFearGif from "../assets/gifs/face-screaming.gif";


const emojiMap: Record<string, JSX.Element> = {
  "🙋🏻": (
    <span className="inline-block align-middle w-[1em] h-[1em]">
      <img
        src={waveGif}
        alt="wave"
        className="w-full h-full object-contain"
      />
    </span>
  ),
  "😅": (
    <span className="inline-block align-middle w-[1em] h-[1em]">
      <img
        src={nerdGif}
        alt="nerd"
        className="w-full h-full object-contain"
      />
    </span>
  ),
  "💡": (
    <span className="inline-block align-middle w-[1em] h-[1em]">
      <img
        src={lightBulbGif}
        alt="lightbulb"
        className="w-full h-full object-contain"
      />
    </span>
  ),
  "💼": (
    <span className="inline-block align-middle w-[1em] h-[1em]">
      <img
        src={briefcaseGif}
        alt="briefcase"
        className="w-full h-full object-contain"
      />
    </span>
  ),
  "🚀": (
    <span className="inline-block align-middle w-[1em] h-[1em]">
      <img
        src={rocketGif}
        alt="rocket"
        className="w-full h-full object-contain"
      />
    </span>
  ),
  "🎯": (
    <span className="inline-block align-middle w-[1em] h-[1em]">
      <img
        src={bullseyeGif}
        alt="bullseye"
        className="w-full h-full object-contain"
      />
    </span>
  ),
  "🤝": (
    <span className="inline-block align-middle w-[1em] h-[1em]">
      <img
        src={handshakeGif}
        alt="handshake"
        className="w-full h-full object-contain"
      />
    </span>
  ),
  "💪": (
    <span className="inline-block align-middle w-[1em] h-[1em]">
      <img
        src={muscleGif}
        alt="muscle"
        className="w-full h-full object-contain"
      />
    </span>
  ),
  "😉": (
    <span className="inline-block align-middle w-[1em] h-[1em]">
      <img
        src={winkGif} 
        alt="wink"
        className="w-full h-full object-contain"
      />
    </span>
  ),
  "😱": (
    <span className="inline-block align-middle w-[1em] h-[1em]">
      <img
        src={faceScreamingInFearGif}
        alt="face-screaming-in-fear"
        className="w-full h-full object-contain"
      />
    </span>
  )
};


const PointClick = () => (
  <Lottie
    animationData={pointClickAnimation}
    loop
    className="w-6 h-6 inline-block"
  />
);


const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [showAbout, setShowAbout] = useState(false);
  const [clickedOnce, setClickedOnce] = useState(false);
  
  const handleClick = () => {
    setShowAbout(!showAbout);
    if (!clickedOnce) setClickedOnce(true); 
  };

  // Block scroll
  useEffect(() => {
    if (showAbout) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [showAbout]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-animation absolute top-20 left-20 w-8 h-8 text-primary text-2xl">🔒</div>
        <div className="floating-animation absolute top-40 right-32 w-8 h-8 text-accent text-2xl" style={{ animationDelay: "1s" }}>🛡️</div>
        <div className="floating-animation absolute bottom-40 left-40 w-8 h-8 text-primary text-2xl" style={{ animationDelay: "2s" }}>🔐</div>
        <div className="floating-animation absolute bottom-20 right-20 w-8 h-8 text-accent text-2xl" style={{ animationDelay: "3s" }}>⚡</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 flex items-center justify-center gap-4">
            <Lottie 
              animationData={waveAnimation} 
              loop 
              className="w-28 h-28 inline-block wave-hand" 
            />
            <span className="text-hero-gradient text-hero-glow text-hero-pulse">
              Hola, soy <br /> Cristian Leal Guerra
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl mb-6 text-muted-foreground">
            <Typewriter
              strings={[
                "🐍 Backend Developer en Python",
                "🛡️ Apasionado por la Ciberseguridad",
                "🤖 Explorador de la IA & LLMs"
              ]}
              typingSpeed={60}
              deletingSpeed={35}
              pauseAfterTyping={1400}
              pauseAfterDeleting={600}
              loop
              className="inline-block"
            />
          </h2>

          {/* About Me */}
          {showAbout && (
            <ModalPortal>
              <div className="aboutme-backdrop">
                <div
                  className="aboutme-content animate-fadeInModal flex flex-col"
                >
                  <div className="flex items-center justify-between p-4 border-b border-primary/40 flex-shrink-0">
                    <h3 className="text-xl font-bold text-primary">👨🏻‍💻 Sobre mí</h3>
                    <button
                      onClick={handleClick}
                      className="text-muted-foreground hover:text-primary text-2xl leading-none"
                    >
                      ✖
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 custom-scrollbar prose prose-invert max-w-none">
                    <AboutMeWriter
                      text={`
            🙋🏻 ¿Quién soy?
            Soy desarrollador backend con experiencia en Python, y cada vez más enganchado al mundo de la ciberseguridad y la inteligencia artificial.  
            Siempre digo que si quieres conocer hasta dónde llega mi intriga por todo ello solo tienes que ver cómo tengo el disco duro de puro apuntes en Obsidian 😅

            💡 Cómo me defino
            Bromas aparte, me considero una persona curiosa, proactiva y disciplinada, con una fuerte motivación por aprender de forma constante.  
            Fuera del trabajo, el deporte y el gimnasio me ayudan a desconectar y mantener el equilibrio.  
            Efectivamente, levantar hierros me despeja la mente después de una buena jornada de trabajo 💪

            💼 Mi experiencia laboral
            Actualmente trabajo como Backend Developer en [[NTT_DATA_LINK]], desarrollando integraciones con modelos LLM mediante [[TECNOLOGY_LINK]] como Python, FastAPI, LangChain y PostgreSQL.  
            Anteriormente, participé en el diseño y desarrollo de soluciones para gestión energética y virtualizaciones de consumo, así como en la creación de APIs RESTful y microservicios backend, siempre con un enfoque en la seguridad del código.  
            En este punto fue cuando comenzó mi interés por la ciberseguridad y las buenas prácticas, pues empezaba a tener miedo de las vulnerabilidades de inyecciones SQL, sanitización de datos, XSS, etc.

            🚀 Mi camino
            Como se suele decir, "nunca es tarde si la dicha es buena", y aunque mi trayectoria comenzó en el desarrollo backend, hoy mi enfoque se expande hacia la ciberseguridad.  
            He completado un Máster en Ciberseguridad en entornos IT ([[CECETI_LINK]], 2025), en uno de los pocos [[EXCELENCE_LINK]] en España, y sigo ampliando mis conocimientos con cursos prácticos en Pentesting y Hacking Ético... ya sabes, el Red Team siempre es mucho más apasionante 😉  
            A esto hay que sumarle mi creciente interés por la IA, una tecnología que está transformando tanto el mundo que nos rodea como mi propio enfoque profesional. Obviamente, por mi trabajo debo mantenerme a la vanguardia y, aunque considero que en el ámbito del Pentesting le queda mucho recorrido por delante, no podemos bajar la guardia.

            🎯 Mi objetivo
            Integrar mis conocimientos en backend e inteligencia artificial con mi formación en seguridad informática para aportar un valor diferencial a los equipos con los que colabore.  
            Quiero construir soluciones que sean eficientes, seguras y preparadas para los retos del futuro... que no son pocos.

            🤝 Conectemos
            Si compartes interés por la ciberseguridad, el Pentesting, el backend o la IA aplicada, el trabajo, el gimnasio o simplemente quieres saludar, estaré encantado de charlar, intercambiar ideas o colaborar.
            Si deseas, puedes visualizar mi [[CV]] o contactarme a través de [[CONNECT_CV_LINK]].
                      `}
                      speed={0.9}
                      slowSpeed={320}
                      emojiMap={emojiMap}
                      gifClassName="inline-block w-8 h-8 align-middle"
                      customTokens={{
                        "[[NTT_DATA_LINK]]": (
                          <span
                            className="text-accent hover:text-primary underline cursor-pointer"
                            onClick={() => {
                              const section = document.getElementById("experience");
                              if (section) section.scrollIntoView({ behavior: "smooth" });
                              handleClick(); 
                            }}
                          >
                            NTT DATA
                          </span>
                        ),
                        "[[CECETI_LINK]]": (
                          <span
                            className="text-accent hover:text-primary underline cursor-pointer"
                            onClick={() => {
                              const section = document.getElementById("education");
                              if (section) section.scrollIntoView({ behavior: "smooth" });
                              handleClick(); 
                            }}
                          >
                            CECETI
                          </span>
                        ),
                        "[[TECNOLOGY_LINK]]": (
                          <span
                            className="text-accent hover:text-primary underline cursor-pointer"
                            onClick={() => {
                              const section = document.getElementById("skills");
                              if (section) section.scrollIntoView({ behavior: "smooth" });
                              handleClick(); 
                            }}
                          >
                            Tecnologías
                          </span>
                        ),
                        "[[EXCELENCE_LINK]]": (
                          <a
                            href="https://informatica.iesvalledeljerteplasencia.es/" // <-- aquí tu URL
                            target="_blank" // abre en una nueva pestaña
                            rel="noopener noreferrer" // seguridad recomendada
                            className="text-accent hover:text-primary underline cursor-pointer"
                          >
                            centros de excelencia en ciberseguridad
                          </a>
                        ),
                        "[[CV]]": (
                          <span
                            className="text-accent hover:text-primary underline cursor-pointer"
                            onClick={() => {
                              const section = document.getElementById("cv");
                              if (section) section.scrollIntoView({ behavior: "smooth" });
                              handleClick(); 
                            }}
                          >
                            CV
                          </span>
                        ),
                        "[[CONNECT_CV_LINK]]": (
                          <a
                            href="https://www.linkedin.com/in/cristian-leal-guerra/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-accent hover:text-primary underline cursor-pointer"
                          >
                            LinkedIn
                          </a>
                        )
                      }}
                    />
                  </div>
                </div>
              </div>
            </ModalPortal>
          )}

          {/* Show/Hide AboutMe Button */}
          <div className="flex justify-center mb-6 relative">
            <Button
              size="lg"
              onClick={handleClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground pulse-glow relative inline-flex items-center"
            >
              {showAbout ? "Cerrar" : "Conocerme más"}
              {!clickedOnce && (
                <span className="absolute right-2 top-1/2 -translate-y-1/2 animate-pulse">
                  <PointClick />
                </span>
              )}
            </Button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("experience")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/40 pulse-glow flex items-center gap-2"
            >
              🚀 Ver Experiencia
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open("https://www.linkedin.com/in/cristian-leal-guerra/", "_blank")}
              className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 cyber-glow flex items-center gap-2"
            >
              🤝 LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const cvSection = document.getElementById("cv");
                if (cvSection) {
                  cvSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border-green-500 text-green-400 hover:bg-green-600 hover:text-white hover:border-green-600 flex items-center gap-2"
            >
              💼 Ir a CV
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;