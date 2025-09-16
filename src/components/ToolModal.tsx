import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ExternalLink } from "lucide-react";


interface ToolData {
  name: string;
  description: string;
  applications: string;
  logoUrl: string;
  category: string[];
  officialUrl: string;
  funFact?: string; 
}


interface ToolModalProps {
  tool: ToolData;
  isOpen: boolean;
  onClose: () => void;
}


const ToolModal = ({ tool, isOpen, onClose }: ToolModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content mx-4">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Logo sizes */}
              {(() => {
                let logoSizeClass = "w-16 h-16"; 
                if (["FastAPI", "LangChain", "Volatility", "Wazuh"].includes(tool.name)) {
                  logoSizeClass = "w-20 h-20"; 
                }
                return (
                  <img
                    src={tool.logoUrl}
                    alt={`${tool.name} logo`}
                    className={`${logoSizeClass} object-contain`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                );
              })()}

              <div>
                <h3 className="text-2xl font-bold text-primary">{tool.name}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {tool.category.map((cat, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-semibold text-accent mb-2">¿Qué es?</h4>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </div>

            <div>
              <h4 className="font-semibold text-accent mb-2">Usos y aplicaciones</h4>
              <p className="text-sm text-muted-foreground">{tool.applications}</p>
            </div>

            {tool.funFact && (
              <div>
                <h4 className="font-semibold text-accent mb-2">Dato curioso</h4>
                <p className="text-sm text-muted-foreground">{tool.funFact}</p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              onClick={() => window.open(tool.officialUrl, "_blank")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Documentación Oficial
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="border-border text-foreground hover:bg-muted"
            >
              Cerrar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};


export default ToolModal;
