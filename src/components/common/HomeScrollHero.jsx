import { useEffect, useRef } from "react";
import Button from "../ui/Button";

function revealProgress(progress, start, end) {
  const amount = Math.min(Math.max((progress - start) / (end - start), 0), 1);
  return amount * amount * (3 - 2 * amount);
}

export default function HomeScrollHero() {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let frame = 0;

    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const range = Math.max(stage.offsetHeight - window.innerHeight, 1);
        const progress = reducedMotion
          ? 1
          : Math.min(Math.max(-stage.getBoundingClientRect().top / range, 0), 1);

        stage.style.setProperty(
          "--home-catch-one",
          revealProgress(progress, 0.04, 0.2),
        );
        stage.style.setProperty(
          "--home-catch-two",
          revealProgress(progress, 0.3, 0.47),
        );
        stage.style.setProperty(
          "--home-details",
          revealProgress(progress, 0.59, 0.76),
        );
        stage.style.setProperty(
          "--home-background-shift",
          `${progress * 4}%`,
        );
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

  return (
    <section className="home-scroll-stage" ref={stageRef}>
      <div className="home-scroll-visual">
        <img
          className="home-scroll-background"
          src={`${import.meta.env.BASE_URL}assets/backgrounds/home_no_text.png`}
          alt=""
          aria-hidden="true"
          width="1672"
          height="941"
          decoding="async"
          fetchPriority="high"
        />
        <div className="home-scroll-overlay" aria-hidden="true" />
        <img
          className="home-scroll-catch home-scroll-catch-one"
          src={`${import.meta.env.BASE_URL}assets/text/home_catch_1.png`}
          alt="学ぶよろこびを"
          width="450"
          height="136"
          decoding="async"
        />
        <img
          className="home-scroll-catch home-scroll-catch-two"
          src={`${import.meta.env.BASE_URL}assets/text/home_catch_2.png`}
          alt="キャンパスに。"
          width="450"
          height="165"
          decoding="async"
        />
        <div className="home-scroll-details">
          <p>
            努力が続く仕組みを、もっと自由に。
            <br />
            VALNEX
            は大学生の「やってみたい」を、仲間とともに育てる学習プラットフォームです。
          </p>
          <div className="home-hero-actions">
            <Button href="#/service" className="button-signal">
              サービスを知る
            </Button>
            <a href="#/partners" className="v2-arrow-link">
              賛助企業の方へ <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
