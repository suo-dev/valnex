import Button from "../components/ui/Button";
import ScrollStoryHero from "../components/common/ScrollStoryHero";

export default function About() {
  return (
    <>
      <ScrollStoryHero
        eyebrow="ABOUT VALNEX"
        lines={[
          { text: "努力が報われる" },
          { text: "学びの景色を、" },
          { text: "あたりまえに。", accent: true },
        ]}
        description="VALNEX は Value × Next。学生の中にある努力を、次の価値へつなげるために生まれました。"
        background="about"
        className="about-hero"
      />
      <section className="section container story-grid">
        <div>
          <p className="eyebrow">WHY WE EXIST</p>
          <h2>
            大学生の学びに、
            <br />
            続ける理由を。
          </h2>
        </div>
        <div>
          <p className="lead">
            大学は、自分で未来を選べる場所です。けれど自由が増えるほど、学ぶことは後回しになりやすい。私たちは、その状況を学生の意志の弱さだとは考えません。
          </p>
          <p className="v2-large-copy">
            学びに向かう気持ちは、誰かとのつながりや、努力が認められる手ごたえから生まれます。<span className="accent">VALNEX</span>
              は、そのきっかけをデザインします。
          </p>
        </div>
      </section>
      <section className="mission-section">
        <div className="container mission-grid">
          <p className="mission-label">MISSION</p>
          <h2>
            学生の努力を、
            <br />
            新しい価値に変える。
          </h2>
          <p>
            学ぶことを自分の可能性だけで終わらせず、仲間や社会にもひらいていく。学生の小さな前進が、未来を動かす力になると信じています。
          </p>
        </div>
      </section>
      <section className="section container vision-section">
        <p className="eyebrow">VISION</p>
        <h2>
          「勉強しなきゃ」から、
          <br />
          「次は何を学ぼう」へ。
        </h2>
        <div className="vision-cards">
          <article>
            <span>01</span>
            <img src={`${import.meta.env.BASE_URL}assets/optimized/vision/01.webp`} alt="楽しいから続く" loading="lazy" decoding="async" width="781" height="418" />
            <h3>楽しいから続く</h3>
            <p>達成感が次の行動を呼ぶ、前向きな学習体験をつくります。</p>
          </article>
          <article>
            <span>02</span>
            <img src={`${import.meta.env.BASE_URL}assets/optimized/vision/02.webp`} alt="仲間がいるから進める" loading="lazy" decoding="async" width="952" height="511" />
            <h3>仲間がいるから進める</h3>
            <p>孤独になりがちな努力を、応援し合える挑戦に変えます。</p>
          </article>
          <article>
            <span>03</span>
            <img src={`${import.meta.env.BASE_URL}assets/optimized/vision/03.webp`} alt="価値になるから誇れる" loading="lazy" decoding="async" width="651" height="417" />
            <h3>価値になるから誇れる</h3>
            <p>学びと貢献を可視化し、社会との接点につなげます。</p>
          </article>
        </div>
      </section>
      <section className="about-cta">
        <div className="container">
          <p className="eyebrow light">OUR NEXT</p>
          <h2>
            学ぶよろこびを、
            <br />
            キャンパスの文化に。
          </h2>
          <Button href="#/contact" className="button-white">
            お問い合わせ
          </Button>
        </div>
      </section>
    </>
  );
}
