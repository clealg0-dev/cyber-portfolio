import { createPortal } from "react-dom";
import AboutMeWriter from "./AboutMeWriter"; 

type Props = {
  showAbout: boolean;
  handleClick: () => void;
};

function AboutModal({ showAbout, handleClick }: Props) {
  if (!showAbout) return null;

  return createPortal(
    <div className="aboutme-backdrop">
      <div className="aboutme-content animate-fadeInModal">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-primary/40">
          <h3 className="text-xl font-bold text-primary">👨🏻‍💻 Sobre mí</h3>
          <button
            onClick={handleClick}
            className="text-muted-foreground hover:text-primary text-2xl leading-none"
          >
            ✖
          </button>
        </div>

        {/* Contenido */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar prose prose-invert max-w-none">
          <AboutMeWriter
            text="About me content here..."
            speed={1}
            slowSpeed={320}
            emojiMap={{}}
          />
        </div>
      </div>
    </div>,
    document.body // 🔑 aquí el truco: el modal se monta en <body>, por delante de todo
  );
}

export default AboutModal;
