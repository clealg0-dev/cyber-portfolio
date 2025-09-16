import { useState } from "react";
import ToolModal from "./ToolModal";
import toolsGif from "@/assets/gifs/tools.gif";
import wazuhLogo from "@/assets/images/wazuh_logo.png";


interface ToolData {
  name: string;
  description: string;
  applications: string;
  logoUrl: string;
  category: string[];
  officialUrl: string;
}


const SkillsSection = () => {
  const [selectedTool, setSelectedTool] = useState<ToolData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (tool: ToolData) => {
    setSelectedTool(tool);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTool(null);
  };

  const skillCategories = [
    {
      name: "Desarrollo",
      icon: "⚡",
      skills: ["Python", "FastAPI", "Git", "GitHub", "LangChain", "Pandas", "PostgreSQL", "MySQL", "Docker", "VSCode"]
    },
    {
      name: "Ciberseguridad",
      icon: "🛡️",
      skills: ["Kali Linux", "Nmap", "Metasploit", "Wireshark", "Burp Suite", "Autopsy", "Volatility", "Suricata", "Wazuh", "Kibana"]
    }
  ];

  const toolsData: Record<string, ToolData & { funFact: string }> = {
    "Python": {
      name: "Python",
      description: "Lenguaje de programación versátil y fácil de aprender, utilizado en desarrollo de software, automatización de tareas y análisis de datos.",
      applications: "Desarrollo de APIs, aplicaciones web, microservicios, scripts de automatización, inteligencia artificial, machine learning, análisis de malware, pentesting automatizado.",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/256px-Python-logo-notext.svg.png",
      category: ["Lenguaje", "Backend", "Análisis"],
      officialUrl: "https://www.python.org/",
      funFact: "Aplicaciones populares como YouTube e Instagram están hechas en Python."
    },
    "FastAPI": {
      name: "FastAPI",
      description: "Framework web moderno y rápido para construir APIs con Python basado en estándares como OpenAPI.",
      applications: "Desarrollo de APIs RESTful, microservicios, documentación automática, integración con bases de datos.",
      logoUrl: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
      category: ["Framework", "API", "Backend"],
      officialUrl: "https://fastapi.tiangolo.com/",
      funFact: "FastAPI permite generar documentación interactiva automática usando Swagger sin configuración adicional."
    },
    "Git": {
      name: "Git",
      description: "Sistema de control de versiones distribuido para el seguimiento de cambios en el código fuente.",
      applications: "Gestión de código, colaboración en equipo, seguimiento de vulnerabilidades, control de versiones de scripts.",
      logoUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      category: ["Control de Versiones", "Colaboración"],
      officialUrl: "https://git-scm.com/",
      funFact: "Aunque nació para gestionar el kernel de Linux, Git se utiliza hoy en día para control de versiones de documentos, libros, configuraciones de servidores y hasta arte digital."
    },
    "GitHub": {
      name: "GitHub",
      description: "Plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git.",
      applications: "Repositorios de código, colaboración, CI/CD, documentación de proyectos, almacenamiento de herramientas.",
      logoUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      category: ["Plataforma", "Colaboración", "DevOps"],
      officialUrl: "https://github.com/",
      funFact: "GitHub aloja más de 420 millones de repositorios de código en todo el mundo y 150 millones de usuarios registrados. Se estima que el 82,8% de los desarrolladores utilizan GitHub."
    },
    "LangChain": {
      name: "LangChain",
      description: "Framework para desarrollar aplicaciones potenciadas por modelos de lenguaje large (LLMs).",
      applications: "Integración de IA, chatbots, análisis de texto automatizado, procesamiento de documentos.",
      logoUrl: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_325487375e1e9456e856a78e811f5fc1/langchain.png",
      category: ["Framework", "IA", "LLM"],
      officialUrl: "https://langchain.com/",
      funFact: "Tras una ronda de financiamiento de 100 millones de dólares en 2025, LangChain alcanzó una valoración de 10 mil millones de dólares, marcando un aumento del 4900% respecto a su valoración de 200 millones de dólares en 2023."
    },
    "Pandas": {
      name: "Pandas",
      description: "Biblioteca de Python para manipulación y análisis de datos estructurados.",
      applications: "Análisis de logs, procesamiento de datasets de seguridad, generación de reportes, análisis forense.",
      logoUrl: "https://imgs.search.brave.com/83eNqJ6yBEeAoSesBEpsqbZMBDiUk-TwC2u-ErcbpA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYW5k/YXMucHlkYXRhLm9y/Zy9zdGF0aWMvaW1n/L3BhbmRhc19zZWNv/bmRhcnlfd2hpdGUu/c3Zn",
      category: ["Biblioteca", "Análisis de Datos"],
      officialUrl: "https://pandas.pydata.org/",
      funFact: "El nombre “Pandas” proviene de “Panel Data”, un término de econometría que representa datos tabulares multidimensionales."
    },
    "PostgreSQL": {
      name: "PostgreSQL",
      description: "Sistema de gestión de bases de datos relacional avanzado y de código abierto.",
      applications: "Almacenamiento de datos, logs de seguridad, gestión de usuarios, análisis de patrones de ataques.",
      logoUrl: "https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg",
      category: ["Base de Datos", "SQL"],
      officialUrl: "https://www.postgresql.org/",
      funFact: "Grandes plataformas como Instagram y Reddit utilizan PostgreSQL para manejar millones de registros diarios."
    },
    "MySQL": {
      name: "MySQL",
      description: "Sistema de gestión de bases de datos relacional de código abierto.",
      applications: "Almacenamiento de aplicaciones web, bases de datos de logs, gestión de inventarios de seguridad.",
      logoUrl: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
      category: ["Base de Datos", "SQL"],
      officialUrl: "https://www.mysql.com/",
      funFact: "MySQL es uno de los sistemas de bases de datos más populares para aplicaciones web, siendo usado en proyectos como Facebook, Twitter y WordPress."
    },
    "Docker": {
      name: "Docker",
      description: "Plataforma de contenedorización que permite empaquetar aplicaciones y sus dependencias.",
      applications: "Despliegue de aplicaciones, entornos de testing, sandbox para análisis de malware, microservicios.",
      logoUrl: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
      category: ["Contenedorización", "DevOps"],
      officialUrl: "https://www.docker.com/",
      funFact: "Grandes empresas como PayPal, Spotify y Netflix usan Docker para gestionar miles de contenedores diariamente en producción."
    },
    "VSCode": {
      name: "Visual Studio Code",
      description: "Editor de código fuente ligero pero potente que funciona en tu escritorio.",
      applications: "Desarrollo de código, debugging, análisis de scripts maliciosos, extensiones de seguridad.",
      logoUrl: "https://code.visualstudio.com/assets/images/code-stable.png",
      category: ["Editor", "IDE"],
      officialUrl: "https://code.visualstudio.com/",
      funFact: "Se estima que más del 70% de los desarrolladores activos usan VSCode como su editor principal y, siendo de código abierto, soporta más de 40 lenguajes de programación de forma nativa."
    },
    "Burp Suite": {
      name: "Burp Suite",
      description: "Plataforma integrada para realizar pruebas de seguridad de aplicaciones web.",
      applications: "Pentesting web, análisis de vulnerabilidades, interceptación de tráfico, fuzzing automatizado.",
      logoUrl: "https://www.north-networks.com/wp-content/uploads/2021/02/burpsuite.png",
      category: ["Pentesting", "Web Security"],
      officialUrl: "https://portswigger.net/burp",
      funFact: "Es considerada la herramienta principal para pruebas de seguridad de aplicaciones web, usada por más del 80% de los pentesters profesionales a nivel global."
    },
    "Nmap": {
      name: "Nmap",
      description: "Herramienta de código abierto para descubrimiento de redes y auditoría de seguridad.",
      applications: "Escaneo de puertos, descubrimiento de servicios, detección de vulnerabilidades, mapeo de redes.",
      logoUrl: "https://nmap.org/images/nmap-logo-256x256.png",
      category: ["Network Security", "Reconocimiento"],
      officialUrl: "https://nmap.org/",
      funFact: "Aparece en películas como The Matrix Reloaded, Live Free or Die Hard, Elysium y Dredd. En The Matrix Reloaded, Trinity usa Nmap para acceder a un sistema informático, lo que generó debates sobre su realismo en foros de Internet."
    },
    "Metasploit": {
      name: "Metasploit",
      description: "Framework de pentesting que proporciona información sobre vulnerabilidades de seguridad.",
      applications: "Explotación de vulnerabilidades, post-explotación, generación de payloads, red team exercises.",
      logoUrl: "https://tryhackme-images.s3.amazonaws.com/room-icons/66704dd0e54a1f39bff7b1a1-1735574248252",
      category: ["Pentesting", "Exploitation"],
      officialUrl: "https://www.metasploit.com/",
      funFact: "La versión Pro puede costar hasta $30,000 al año por usuario, lo que es suficiente para pagar varios sueldos de un pentester junior en muchas partes del mundo. Pese a ello, es una herramienta tan potente que pequeñas empresas logran auditorías efectivas usando solo la versión gratuita."
    },
    "Kibana": {
      name: "Kibana",
      description: "Plataforma de visualización de datos que forma parte del stack ELK, utilizada para explorar, analizar y visualizar grandes volúmenes de información en tiempo real.",
      applications: "Creación de dashboards interactivos, análisis de logs y métricas de seguridad, monitoreo de sistemas, detección de anomalías y generación de reportes visuales para SIEMs y operaciones IT.",
      logoUrl: "https://cdn.freebiesupply.com/logos/large/2x/elastic-kibana-logo-png-transparent.png",
      category: ["Visualización", "Analytics", "SIEM"],
      officialUrl: "https://www.elastic.co/kibana",
      funFact: "Kibana incluye una herramienta llamada Canvas, que permite crear cuadros de mando “pixel-perfect” altamente personalizables. Esta funcionalidad es especialmente útil para diseñar informes visuales detallados y presentaciones interactivas."
    },
    "Autopsy": {
      name: "Autopsy",
      description: "Plataforma digital forense de código abierto para investigar discos duros y smartphones.",
      applications: "Análisis forense digital, recuperación de datos, investigación de incidentes, análisis de artefactos.",
      logoUrl: "https://avatars.githubusercontent.com/u/866922?v=4",
      category: ["Forense Digital", "Investigación"],
      officialUrl: "https://www.autopsy.com/",
      funFact: "Autopsy se utiliza tanto en investigaciones criminales reales como en entrenamiento de análisis forense digital. Una de sus mayores potenciales es la capacidad para recuperar archivos eliminados"
    },
    "Volatility": {
      name: "Volatility",
      description: "Framework avanzado de análisis forense de memoria para extraer artefactos digitales.",
      applications: "Análisis de memoria RAM, investigación de malware, respuesta a incidentes, forensics.",
      logoUrl: "https://imgs.search.brave.com/MWyJpmbOX1UdefjT1ljL6_K9IjAlPpZhlj__gfW2kKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b2xh/dGlsaXR5Zm91bmRh/dGlvbi5vcmcvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMTIv/Vm9sYXRpbGl0eS1u/ZXdlc3QtcG5nLWNy/b3AucG5n",
      category: ["Forense Digital", "Memory Analysis"],
      officialUrl: "https://www.volatilityfoundation.org/",
      funFact: "Una herramienta de análisis forense de memoria ampliamente utilizada por fuerzas del orden, militares, académicos e investigadores comerciales en todo el mundo."
    },
    "Wireshark": {
      name: "Wireshark",
      description: "Analizador de protocolos de red más popular del mundo para solución de problemas de red.",
      applications: "Análisis de tráfico de red, detección de intrusiones, forense de red, troubleshooting.",
      logoUrl: "https://www.wireshark.org/assets/icons/wireshark-fin@2x.png",
      category: ["Network Analysis", "Protocol Analyzer"],
      officialUrl: "https://www.wireshark.org/",
      funFact: "Wireshark ofrece funcionalidades similares o incluso superiores a herramientas comerciales, pero sin costo alguno, existiendo competencia oscilando precios cercanos a los $2000 al año."
    },
    "Kali Linux": {
      name: "Kali Linux",
      description: "Distribución de Linux especializada en pentesting y auditorías de seguridad.",
      applications: "Pentesting, ethical hacking, análisis forense, investigación de seguridad, red team operations.",
      logoUrl: "https://www.kali.org/images/kali-logo.svg",
      category: ["OS", "Pentesting", "Security"],
      officialUrl: "https://www.kali.org/",
      funFact: "Kali Linux nació en 2013 como una reescritura completa de BackTrack, una distribución LiveCD popular entre los profesionales de la seguridad. Hoy en día, cuenta con más de 600 herramientas preinstaladas."
    },
    "Suricata": {
      name: "Suricata",
      description: "Sistema de detección y prevención de intrusos (IDS/IPS) de alto rendimiento, capaz de analizar tráfico de red en tiempo real.",
      applications: "Monitoreo de tráfico, detección de amenazas, análisis de protocolos, prevención de intrusiones, integración con SIEMs.",
      logoUrl: "https://suricata.io/wp-content/uploads/2023/09/Suricata_logo_600x600-1.png",
      category: ["IDS", "IPS", "Network Security"],
      officialUrl: "https://suricata.io/",
      funFact: "La elección de su nombre no es casualidad, las suricatas en la naturaleza son conocidas por vigilar constantemente su entorno para detectar depredadores y alertar a su colonia."
    },
    "Wazuh": {
      name: "Wazuh",
      description: "Plataforma de seguridad unificada que ofrece monitoreo, detección de intrusos, análisis de logs y cumplimiento normativo.",
      applications: "Gestión centralizada de seguridad, SIEM, monitoreo de integridad de archivos, detección de anomalías, cumplimiento con normativas como PCI DSS o GDPR.",
      logoUrl: wazuhLogo,
      category: ["SIEM", "Monitoring", "Endpoint Security"],
      officialUrl: "https://wazuh.com/",
      funFact: "Wazuh nació como un fork de OSSEC y hoy en día es una de las plataformas SIEM open-source más adoptadas en el mundo."
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Título de sección vistoso */}
        <div className="text-center mb-16">
          <h2 className="flex items-center justify-center text-4xl md:text-5xl font-bold mb-4">
            <img
              src={toolsGif}
              alt="Tools GIF"
              className="w-16 h-16 mr-4 animate-pulse-slow"
            />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent
                            font-extrabold text-shadow-md-soft animate-gradientMove-slow">
              Herramientas
            </span>
          </h2>
          {/* Línea decorativa más ancha y suave */}
          <div className="mx-auto w-48 h-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-full animate-pulse-slow mt-2"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="cyber-card p-6">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="text-4xl floating-animation"
                  style={{ animationDelay: `${categoryIndex * 0.5}s` }}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const toolData = toolsData[skill];
                  if (!toolData) return null;

                  return (
                    <div
                      key={skillIndex}
                      className="tool-card text-center opacity-0 animate-fadeIn"
                      style={{ animationDelay: `${skillIndex * 0.1}s`, animationFillMode: "forwards" }}
                      onClick={() => openModal(toolData)}
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="h-16 flex items-center justify-center">
                          <img
                            src={toolData.logoUrl}
                            alt={`${skill} logo`}
                            className={`object-contain ${
                              ['FastAPI', 'Volatility', 'LangChain'].includes(skill)
                                ? 'w-21 h-21'
                                : ['MySQL', 'Pandas', 'Kali Linux', 'Burp Suite', 'Wazuh'].includes(skill)
                                  ? 'w-20 h-20'
                                  : ['Nmap', 'Kali Linux', 'Autopsy', 'Metasploit'].includes(skill)
                                    ? 'w-16 h-16'
                                    : 'w-14 h-14'
                            }`}
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium text-foreground text-center">
                          {skill}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTool && (
        <ToolModal
          tool={selectedTool}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      {/* Animaciones personalizadas */}
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

export default SkillsSection;