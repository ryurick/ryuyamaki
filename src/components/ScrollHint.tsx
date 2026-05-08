"use client";

export function ScrollHint() {
  const handleClick = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({
      top: window.innerHeight * 1.25,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll down"
      className="scroll-hint-fade group mt-2 flex flex-col items-center gap-3 cursor-pointer focus:outline-none sm:mt-4"
    >
      <span
        className="text-[10px] font-light tracking-[0.45em] text-neutral-500 transition-colors group-hover:text-neutral-800"
        style={{ paddingLeft: "0.45em" }}
      >
        SCROLL
      </span>
      <span className="relative block h-12 w-px overflow-hidden bg-neutral-400/60">
        <span className="scroll-hint-dot absolute left-1/2 top-0 block h-2 w-px bg-neutral-600" />
      </span>
    </button>
  );
}
