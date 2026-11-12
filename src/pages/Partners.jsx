import Button from "../components/ui/Button";
import CycleDiagram from "../components/ui/CycleDiagram";

const benefits = [
  [
    "01",
    "学生の学びを後押しする",
    "次世代の人材が自ら学び、挑戦する環境づくりに参画できます。",
  ],
  [
    "02",
    "学生との新しい接点をつくる",
    "サービス内での企業紹介や、採用・インターンシップ情報の掲載を構想しています。",
  ],
  [
    "03",
    "企業の姿勢を伝える",
    "教育・学生支援に取り組む企業として、中長期の信頼と共感を育てます。",
  ],
];

export default function Partners() {
  return (
    <>
      <section className="page-hero partners-hero">
        <div className="container">
          <p className="eyebrow">PARTNERS</p>
          <h1>
            学生の可能性を、
            <br />
            <em>ともにひらく。</em>
          </h1>
          <p>
            VALNEX
            の賛助企業制度は、学生の学びを応援したい企業の皆さまと、新しい成長の循環をつくるパートナーシップです。
          </p>
          <Button href="#/contact">賛助企業について相談する</Button>
        </div>
      </section>
      <section className="section container partner-intro">
        <div>
          <p className="eyebrow">PARTNERSHIP</p>
          <h2>
            企業の応援が、
            <br />
            学生の「続けたい」になる。
          </h2>
        </div>
        <p className="lead">
          賛助企業からの支援は、学生の学びを広げるコンテンツやコミュニティ運営、ポイント特典の充実に活用しています。学生の成長と企業との自然な接点が、お互いの新しい価値につながります。
        </p>
      </section>
      <section className="loop-panel">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOW IT WORKS</p>
              <h2>支援が生む、価値の循環。</h2>
            </div>
            <span className="status-pill">パートナー企業 28社</span>
          </div>
          <CycleDiagram />
          <p className="panel-note">
            賛助企業からの支援は、学生向け学習コンテンツ、コミュニティイベント、ポイント特典の原資として活用しています。新しい取り組みも、パートナー企業とともに拡充中です。
          </p>
        </div>
      </section>
      <section className="section container">
        <p className="eyebrow">PARTNER BENEFITS</p>
        <h2>
          参加する企業に、
          <br />
          できること。
        </h2>
        <div className="benefit-cards">
          {benefits.map(([n, title, text]) => (
            <article key={n}>
              <span>{n}</span>
              <img src={`${import.meta.env.BASE_URL}assets/partner_benefits/${n}.png`} alt={`${title}の画像`} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="partner-contact">
        <div className="container">
          <p className="eyebrow light">LET'S BUILD IT TOGETHER</p>
          <h2>
            次世代の学びを支える
            <br />
            パートナーを募集しています。
          </h2>
          <p>制度へのご質問や、協働のご相談をお待ちしています。</p>
          <Button href="#/contact" className="button-white">
            お問い合わせ
          </Button>
        </div>
      </section>
    </>
  );
}
