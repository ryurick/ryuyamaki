type MarqueeProps = {
  words: readonly string[];
  className?: string;
};

function Row({ words, hidden = false }: { words: readonly string[]; hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="flex items-center whitespace-nowrap">
          <span className={i % 2 === 1 ? "marquee-outline" : ""}>{word}</span>
          <span aria-hidden className="mx-[0.6em] text-[0.5em] text-[#0F6E66]">
            ●
          </span>
        </span>
      ))}
    </div>
  );
}

export function Marquee({ words, className = "" }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track">
        <Row words={words} />
        <Row words={words} hidden />
      </div>
    </div>
  );
}
