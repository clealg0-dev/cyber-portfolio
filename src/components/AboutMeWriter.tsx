import React, { useEffect, useState } from "react";


interface AboutMeWriterProps {
  text?: string;
  children?: React.ReactNode;
  speed?: number; // ms por carácter normal
  slowSpeed?: number; // ms entre los puntos de "..."
  emojiMap?: Record<string, string | React.ReactNode>; // emoji -> rutaGif o JSX
  gifClassName?: string;
  customTokens?: Record<string, React.ReactNode>; // token -> JSX
}


type InnerToken =
  | { type: "text"; value: string }
  | { type: "emoji"; value: React.ReactNode }
  | { type: "ellipsis"; value: string }
  | { type: "custom"; value: React.ReactNode };

type BlockType = "title" | "paragraph";
type Block = { type: BlockType; raw: string; tokens: InnerToken[] };
type DisplayBlock = { type: BlockType; nodes: Array<string | React.ReactNode>; key: number };


const AboutMeWriter: React.FC<AboutMeWriterProps> = ({
  text,
  children,
  speed = 50,
  slowSpeed = 300,
  emojiMap = {},
  gifClassName = "",
  customTokens = {},
}) => {
  const [displayedBlocks, setDisplayedBlocks] = useState<DisplayBlock[]>([]);

  // Si no hay texto para animar, renderizamos children directamente
  if (!text) {
    return <div className="text-lg md:text-xl text-muted-foreground leading-relaxed">{children}</div>;
  }

  useEffect(() => {
    let mounted = true;

    const emojiKeys = Object.keys(emojiMap).sort((a, b) => b.length - a.length);
    const customKeys = Object.keys(customTokens).sort((a, b) => b.length - a.length);

    // Segmenter para graphemes (mejor manejo de emojis multi-codepoint)
    const segmenter: any =
      typeof Intl !== "undefined" && (Intl as any).Segmenter
        ? new (Intl as any).Segmenter(undefined, { granularity: "grapheme" })
        : null;

    // regex para detectar si un grapheme es emoji (compat con ambientes sin \p{})
    let emojiFirstRegex: RegExp | null = null;
    try {
      emojiFirstRegex = new RegExp("\\p{Extended_Pictographic}", "u");
    } catch (e) {
      emojiFirstRegex = null;
    }

    const graphemesOf = (s: string) => {
      if (!segmenter) return Array.from(s);
      const it = segmenter.segment(s)[Symbol.iterator]();
      const out: string[] = [];
      let r = it.next();
      while (!r.done) {
        out.push(r.value.segment);
        r = it.next();
      }
      return out;
    };

    const tokenizeLine = (line: string): InnerToken[] => {
      const tokens: InnerToken[] = [];
      let i = 0;

      while (i < line.length) {
        // 1) custom tokens (ej. [[NTT_DATA_LINK]])
        let matchedCustom = false;
        for (const key of customKeys) {
          if (line.slice(i, i + key.length) === key) {
            tokens.push({ type: "custom", value: customTokens[key] });
            i += key.length;
            matchedCustom = true;
            break;
          }
        }
        if (matchedCustom) continue;

        // 2) ellipsis '...'
        if (line.slice(i, i + 3) === "...") {
          tokens.push({ type: "ellipsis", value: "..." });
          i += 3;
          continue;
        }

        // 3) emojis según emojiMap (match por substring)
        let matchedEmoji = false;
        for (const key of emojiKeys) {
          if (line.slice(i, i + key.length) === key) {
            const val = emojiMap[key];
            const node =
              typeof val === "string" ? (
                <span aria-hidden className="inline-emoji" key={`emoji-${i}`}>
                  <img src={val} alt={key} className={`emoji-img ${gifClassName}`} />
                </span>
              ) : (
                (val as React.ReactNode)
              );
            tokens.push({ type: "emoji", value: node });
            i += key.length;
            matchedEmoji = true;
            break;
          }
        }
        if (matchedEmoji) continue;

        // 4) texto normal (por grapheme)
        let nextChar = line[i];
        if (segmenter) {
          const segIter = segmenter.segment(line.slice(i))[Symbol.iterator]();
          const res = segIter.next();
          if (!res.done) nextChar = res.value.segment;
        } else {
          const arr = Array.from(line.slice(i));
          nextChar = arr[0];
        }

        const last = tokens[tokens.length - 1];
        if (last && last.type === "text") {
          last.value = last.value + nextChar;
        } else {
          tokens.push({ type: "text", value: nextChar });
        }
        i += nextChar.length;
      }

      return tokens;
    };

    const lines = text.split(/\r?\n/);
    const blocks: Block[] = lines.map((ln) => {
      const trimmed = ln.trim();
      if (trimmed.length === 0) return { type: "paragraph", raw: "", tokens: [] };

      const firstG = graphemesOf(trimmed)[0] ?? "";
      const isEmojiStart = emojiFirstRegex ? emojiFirstRegex.test(firstG) : false;
      const blockType: BlockType = isEmojiStart ? "title" : "paragraph";
      const tokens = tokenizeLine(ln);
      return { type: blockType, raw: ln, tokens };
    });

    (async () => {
      if (!mounted) return;
      setDisplayedBlocks([]);
      let keyCounter = 0;

      for (let bIndex = 0; bIndex < blocks.length && mounted; bIndex++) {
        const block = blocks[bIndex];
        const myKey = keyCounter++;
        setDisplayedBlocks((prev) => [...prev, { type: block.type, nodes: [], key: myKey }]);

        if (block.tokens.length === 0) {
          await new Promise((r) => setTimeout(r, speed));
          continue;
        }

        for (const token of block.tokens) {
          if (!mounted) break;

          if (token.type === "text") {
            const chars = graphemesOf(token.value);
            for (let j = 0; j < chars.length && mounted; j++) {
              await new Promise((r) => setTimeout(r, speed));
              const toAdd = chars[j];
              setDisplayedBlocks((prev) =>
                prev.map((blk) => (blk.key === myKey ? { ...blk, nodes: [...blk.nodes, toAdd] } : blk))
              );
            }
          } else if (token.type === "ellipsis") {
            for (let k = 0; k < 3 && mounted; k++) {
              await new Promise((r) => setTimeout(r, slowSpeed));
              setDisplayedBlocks((prev) =>
                prev.map((blk) => (blk.key === myKey ? { ...blk, nodes: [...blk.nodes, "."] } : blk))
              );
            }
          } else if (token.type === "emoji" || token.type === "custom") {
            // insertamos el nodo JSX completo de golpe
            setDisplayedBlocks((prev) =>
              prev.map((blk) => (blk.key === myKey ? { ...blk, nodes: [...blk.nodes, token.value] } : blk))
            );
            await new Promise((r) => setTimeout(r, speed));
          }
        }

        // pequeña pausa entre líneas
        await new Promise((r) => setTimeout(r, speed * 3));
      }
    })();

    return () => {
      mounted = false;
      setDisplayedBlocks([]);
    };
  }, [text, speed, slowSpeed, emojiMap, gifClassName, customTokens]);

  return (
    <div className="text-lg md:text-xl text-muted-foreground leading-relaxed">
      {displayedBlocks.map((blk, blkIdx) => {
        const isLastBlock = blkIdx === displayedBlocks.length - 1;

        if (blk.type === "title") {
          if (blk.nodes.length === 0) return <div key={blk.key} className="h-2" />;
          return (
            <h3 key={blk.key} className="special-title text-2xl md:text-3xl font-extrabold text-primary tracking-wide mb-3">
              {blk.nodes.map((n, i) => (
                <React.Fragment key={i}>{n}</React.Fragment>
              ))}
              {isLastBlock && <span className="aboutme-cursor ml-1" aria-hidden>|</span>}
            </h3>
          );
        }

        if (blk.nodes.length === 0) return <div key={blk.key} className="h-3" />;

        return (
          <p key={blk.key} className="mb-4">
            {blk.nodes.map((n, i) => (
              <React.Fragment key={i}>{n}</React.Fragment>
            ))}
            {isLastBlock && <span className="aboutme-cursor ml-1" aria-hidden>|</span>}
          </p>
        );
      })}
    </div>
  );
};

export default AboutMeWriter;
