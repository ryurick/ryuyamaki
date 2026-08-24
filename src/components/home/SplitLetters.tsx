type SplitLettersProps = {
  text: string;
  baseDelay?: number;
  stepMs?: number;
};

export function SplitLetters({
  text,
  baseDelay = 150,
  stepMs = 55,
}: SplitLettersProps) {
  return (
    <span aria-label={text} role="text" className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      {text.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className="split-letter"
          style={{ animationDelay: `${baseDelay + i * stepMs}ms` }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}
