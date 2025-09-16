import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import pdfGif from "@/assets/gifs/pdf.gif";
import cvBlur from "@/assets/images/cv_blur.png";


const CVSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Email: ${formData.email}\n\n${formData.message}`);
    const mailtoLink = `mailto:clealguera@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Correo preparado",
      description: "Se abrirá tu cliente de correo para enviar el mensaje.",
    });
  };

  return (
    <section id="cv" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="flex items-center justify-center text-4xl md:text-5xl font-bold mb-4">
            <img
              src={pdfGif}
              alt="PDF GIF"
              className="w-16 h-16 mr-4 animate-pulse-slow"
            />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent
                            font-extrabold text-shadow-md-soft animate-gradientMove-slow">
              CV Completo
            </span>
          </h2>
          <div className="mx-auto w-48 h-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-full animate-pulse-slow mt-2"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {!showForm ? (
            <div className="cyber-card text-center relative overflow-hidden">
              {/* CV Preview */}
              <div className="bg-muted/20 rounded-lg p-4 mb-6 relative">
                <div className="relative">
                  <img 
                    src={cvBlur} 
                    alt="CV Preview - Cristian Leal Guerra"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <div className="bg-background/90 backdrop-blur-sm p-3 rounded text-sm text-muted-foreground inline-block">
                      Si desea continuar viendo pulse aquí
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => setShowForm(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground pulse-glow"
                size="lg"
              >
                Continuar
              </Button>
            </div>
          ) : (
            <div className="cyber-card p-6">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                Solicitud para CV Completo
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-input border-border text-foreground"
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                  >
                    Enviar
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="border-border text-foreground hover:bg-muted"
                  >
                    Volver
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Custom animations */}
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.02); }
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
      </div>
    </section>
  );
};

export default CVSection;