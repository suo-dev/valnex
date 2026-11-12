import Button from "../components/ui/Button";
import { useEffect, useRef } from "react";
import topPageBackground from "../assets/topPageBackground.jpg";

const features = [
  {
    n: "01",
    tag: "LEARN",
    title: "楽しさが、習慣になる。",
    text: "教材を進めるほど、進捗と達成が見えてくる。自分に合ったペースで、今日の「できた」を積み重ねられる学習体験です。",
    type: "learn",
  },
  {
    n: "02",
    tag: "TEAM BATTLE",
    title: "ひとりの時間が、チームの力になる。",
    text: "週ごとに5人でチームをつくり、学習時間を合計して競い合う仕組み。仲間の頑張りが、自分の次の一歩を後押しします。",
    type: "team",
  },
  {
    n: "03",
    tag: "Q&A COMMUNITY",
    title: "教えることも、学びになる。",
    text: "分からないを気軽に投げかけ、知っていることを誰かに返す。役立つ回答や良いコミュニケーションが見える、学生同士の学び合いの場です。",
    type: "qa",
  },
  {
    n: "04",
    tag: "POINTS & REWARDS",
    title: "努力が、次の挑戦を生む。",
    text: "学習の継続、チームへの貢献、質問への回答などをポイントとして記録。獲得したポイントは、サービス内の特典や次の学習機会に活用できます。",
    type: "points",
  },
];

function Mockup({ type }) {
  if (type === "learn")
    return (
      <div className="feature-ui learn-ui">
        <small>今日の学習ミッション</small>
        <strong>マーケティング基礎</strong>
        <div className="progress">
          <i />
        </div>
        <div className="check-row">
          <b>✓</b>
          <span>市場分析を理解する</span>
        </div>
        <div className="check-row">
          <b>✓</b>
          <span>ケースを読んでみる</span>
        </div>
        <div className="streak">
          7 days streak <span>✦</span>
        </div>
      </div>
    );
  if (type === "team")
    return (
      <div className="feature-ui team-ui">
        <div className="rank-row">
          <span>YOUR TEAM</span>
          <strong># 03</strong>
          <small>128 teams</small>
        </div>
        <div className="team-bars">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="team-hours">
          <b>18h 24m</b>
          <span>今週の合計</span>
        </div>
      </div>
    );
  if (type === "qa")
    return (
      <div className="feature-ui qa-ui">
        <div className="question-mark">?</div>
        <strong>統計のこの式、どう考える？</strong>
        <p>分散を求めるときの考え方を教えてください。</p>
        <div>
          <span>役に立った 24</span>
          <b>回答を見る →</b>
        </div>
      </div>
    );
  return (
    <div className="feature-ui points-ui">
      <small>YOUR POINTS</small>
      <strong>
        2,480 <i>pt</i>
      </strong>
      <div className="point-history">
        <span>
          質問に回答 <b>+120</b>
        </span>
        <span>
          チーム勝利 <b>+300</b>
        </span>
        <span>
          7日連続学習 <b>+80</b>
        </span>
      </div>
    </div>
  );
}

export default function Service() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const update = () => {
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
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <section className="page-hero service-hero" ref={heroRef}>
        <div className="service-hero-sticky">
          <div
            className="service-hero-background"
            style={{ backgroundImage: `url(${topPageBackground})` }}
          />
          <div className="service-hero-content container">
            <p className="eyebrow">SERVICE</p>
            <h1>
              <span data-sequence="0">学ぶことを</span>
              <br />
              <em data-sequence="1">もっと新しく</em>
            </h1>
            <p data-sequence="2">
              ひとりで続ける難しさを、楽しさとつながりに変える。32,000人の学生が利用する、VALNEX
              の4つの学習体験を紹介します。
            </p>
            <span className="status-pill" data-sequence="2">
              学生プランは無料でご利用いただけます
            </span>
          </div>
        </div>
      </section>
      <section className="features-wrap">
        {features.map((feature, index) => (
          <section
            className={`feature-section ${index % 2 ? "feature-reverse" : ""}`}
            key={feature.n}
          >
            <div className="container feature-grid">
              <div className="feature-copy">
                <p className="feature-number">
                  {feature.n} / {feature.tag}
                </p>
                <h2>{feature.title}</h2>
                <p>{feature.text}</p>
                {feature.type === "points" && (
                  <small className="future-note">
                    ポイントの交換先や新しい特典は、学生の声をもとに順次拡充しています。
                  </small>
                )}
              </div>
              <Mockup type={feature.type} />
            </div>
          </section>
        ))}
      </section>
      <section className="service-footer-cta">
        <div className="container">
          <p className="eyebrow light">START FREE</p>
          <h2>学び続ける、新しい日常へ。</h2>
          <Button href="#/contact" className="button-white">
            無料で始める
          </Button>
        </div>
      </section>
    </>
  );
}
