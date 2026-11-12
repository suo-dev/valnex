import Button from "../components/ui/Button";

export default function About() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="container">
          <p className="eyebrow">ABOUT VALNEX</p>
          <h1>
            努力が報われる
            <br />
            学びの景色を、
            <br />
            <em>あたりまえに。</em>
          </h1>
          <p>
            VALNEX は Value ×
            Next。学生の中にある努力を、次の価値へつなげるために生まれました。
          </p>
        </div>
      </section>
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
          <p className="body-copy">
            学びに向かう気持ちは、誰かとのつながりや、努力が認められる手ごたえから生まれます。VALNEX
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
            <img src="/valnex/public/assets/vision/01.png" alt="楽しいから続く" />
            <h3>楽しいから続く</h3>
            <p>達成感が次の行動を呼ぶ、前向きな学習体験をつくります。</p>
          </article>
          <article>
            <span>02</span>
            <img src="/valnex/public/assets/vision/02.png" alt="仲間がいるから進める" />
            <h3>仲間がいるから進める</h3>
            <p>孤独になりがちな努力を、応援し合える挑戦に変えます。</p>
          </article>
          <article>
            <span>03</span>
            <img src="/valnex/public/assets/vision/03.png" alt="価値になるから誇れる" />
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
