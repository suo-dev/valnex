import { useEffect } from "react";

export default function ScrollExperience() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const updateProgress = () => {
      const maximum =
        document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        maximum > 0 ? window.scrollY / maximum : 0,
      );
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    if (reducedMotion)
      return () => window.removeEventListener("scroll", updateProgress);

    const elements = [...document.querySelectorAll("[data-reveal]")];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    const counters = [...document.querySelectorAll("[data-count]")];
    const counterObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target;
          const target = Number(element.dataset.count);
          const decimals = target % 1 ? 1 : 0;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / 1200, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            element.textContent = (target * eased).toLocaleString("ja-JP", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            });
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterObserver.unobserve(element);
        }),
      { threshold: 0.65 },
    );
    counters.forEach((element) => {
      element.textContent = "0";
      counterObserver.observe(element);
    });
    return () => {
      window.removeEventListener("scroll", updateProgress);
      observer.disconnect();
      counterObserver.disconnect();
    };
  });
  return null;
}
