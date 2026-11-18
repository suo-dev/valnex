import { useEffect, useRef } from "react";

export default function ScrollStoryHero({
  eyebrow,
  lines,
  description,
  background,
  className = "",
  children,
}) {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let frame = 0;

    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const rect = hero.getBoundingClientRect();
        const range = Math.max(hero.offsetHeight - window.innerHeight, 1);
        const progress = Math.min(Math.max(-rect.top / range, 0), 1);
        hero.style.setProperty("--hero-shift", `${progress * 12}%`);

        hero.querySelectorAll("[data-sequence]").forEach((item) => {
          const step = Number(item.dataset.sequence);
          const amount = reducedMotion
            ? 1
            : Math.min(Math.max((progress - step * 0.22) / 0.18, 0), 1);
          item.style.opacity = amount;
          item.style.transform = `translateY(${(1 - amount) * 30}px)`;
        });
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const finalSequence = lines.length;

  return (
    <section className={`page-hero scroll-story-hero ${className}`} ref={heroRef}>
      <div className="scroll-story-sticky">
        <div
          className="scroll-story-background"
          aria-hidden="true"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}assets/optimized/backgrounds/${background}.webp)`,
          }}
        />
        <div className="scroll-story-content container">
          <p className="eyebrow" data-sequence="0">
            {eyebrow}
          </p>
          <h1>
            {lines.map(({ text, accent }, index) => (
              <span
                className={accent ? "scroll-story-accent" : undefined}
                data-sequence={index}
                key={text}
              >
                {text}
              </span>
            ))}
          </h1>
          <div className="scroll-story-after" data-sequence={finalSequence}>
            {description && <p>{description}</p>}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
