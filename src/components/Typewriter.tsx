import React, { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;     
  pauseAfterTyping?: number;  
  pauseAfterDeleting?: number; 
  loop?: boolean;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  strings,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseAfterTyping = 1500,
  pauseAfterDeleting = 500,
  loop = true,
  className = ""
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!mountedRef.current) return;
    const i = loopNum % strings.length;
    const fullText = strings[i] ?? "";

    // Decide cuánto esperar antes de la siguiente acción
    let nextDelay = isDeleting ? deletingSpeed : typingSpeed;
    if (!isDeleting && text === fullText) nextDelay = pauseAfterTyping;
    if (isDeleting && text === "") nextDelay = pauseAfterDeleting;

    const id = window.setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        if (text.length < fullText.length) {
          setText(fullText.substring(0, text.length + 1));
        } else {
          // terminado de escribir → empezar a borrar (tras esperar el pauseAbove)
          setIsDeleting(true);
        }
      } else {
        // Borrando
        if (text.length > 0) {
          setText(fullText.substring(0, text.length - 1));
        } else {
          // terminado de borrar → siguiente texto
          setIsDeleting(false);
          setLoopNum((n) => n + 1);
          // Si no queremos loop y ya hemos mostrado todos, podemos detenernos
          if (!loop && loopNum + 1 >= strings.length) {
            // no hacer nada: se quedará vacío
          }
        }
      }
    }, nextDelay);

    return () => clearTimeout(id);
  }, [
    text,
    isDeleting,
    loopNum,
    strings,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyping,
    pauseAfterDeleting,
    loop,
  ]);

  return (
    <span className={className} aria-hidden={false}>
      {text}
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </span>
  );
};

export default Typewriter;
