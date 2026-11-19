import Button from "../components/ui/Button";
import CycleDiagram from "../components/ui/CycleDiagram";
import ServiceCard from "../components/ui/ServiceCard";
import Accordion from "../components/ui/Accordion";
import HomeScrollHero from "../components/common/HomeScrollHero";

const services = [
  [
    "1",
    "learn",
    "学びを、ゲームのように。",
    "目標と進捗が見える教材で、毎日の前進を実感できる体験へ。",
  ],
  [
    "2",
    "team",
    "仲間と、前へ進む。",
    "毎週のチームで学習時間を重ね、ひとりでは届かない達成感へ。",
  ],
  [
    "3",
    "community",
    "教えることで、深くなる。",
    "質問と回答を通じて、知識と自信が循環するコミュニティへ。",
  ],
  [
    "4",
    "reward",
    "努力を、未来の価値に。",
    "日々の継続や貢献を可視化し、次の挑戦への力に変えていく。",
  ],
];

const faqs = [
  {
    question: "VALNEX は誰でも利用できますか？",
    answer:
      "国内の大学・大学院・短期大学・専門学校に在籍する学生が、無料でアカウントを作成して利用できます。",
  },
  {
    question: "チーム対抗戦は毎週必ず参加しますか？",
    answer:
      "参加は任意です。参加を選んだ学生を対象に、毎週月曜日に最大5名のチームを自動で編成します。",
  },
  {
    question: "ポイントはどのように使えますか？",
    answer:
      "現在は学習履歴や貢献度を表すポイントとして提供しています。学生への還元を含む利用方法を順次拡充しています。",
  },
];

export default function Home() {
  return (
    <>
      <HomeScrollHero />
      <section className="v2-manifesto">
        <div className="container">
          <p className="v2-kicker" data-reveal>
            WHY VALNEX
          </p>
          <div className="manifesto-grid">
            <h2 data-reveal>
              自由になった
              <br />
              その先で、<em>学びは止まる。</em>
            </h2>
            <div data-reveal>
              <p className="v2-large-copy">
                大学生には、選べる時間がある。だからこそ、学びを続けることは難しくなる。
              </p>
              <p>
                VALNEX
                は、勉強を個人の意志だけに委ねません。小さな達成、仲間の存在、誰かの役に立つ実感。そのすべてを、続けたくなる理由に変えていきます。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="v2-story">
        <div className="container story-layout">
          <div className="story-sticky">
            <p className="v2-kicker">A BETTER LOOP</p>
            <h2>
              学ぶ。
              <br />
              <span>つながる。</span>
              <br />
              また、進む。
            </h2>
            <div className="story-count">
              <b>01</b>
              <i />
              <span>04</span>
            </div>
          </div>
          <div className="story-steps">
            {[
              [
                "01",
                "小さな達成を、見つける。",
                "進捗が可視化されることで、今日の努力が明日の自信になる。学ぶことは、少しずつ楽しくなる。",
                "↗",
              ],
              [
                "02",
                "仲間の熱量に、触れる。",
                "チームで過ごす一週間が、自然な約束になる。ひとりの一時間が、みんなの力になる。",
                "◌",
              ],
              [
                "03",
                "知っていることを、渡す。",
                "誰かの「分からない」に答える。その経験が、自分自身の理解を深くしてくれる。",
                "◎",
              ],
              [
                "04",
                "努力を、次の価値へ。",
                "続けたこと、貢献したことを記録する。学び続けた先には、まだ見たことのない未来がある。",
                "✦",
              ],
            ].map(([number, title, text, icon]) => (
              <article data-reveal key={number}>
                <b>{number}</b>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span className="story-icon">{icon}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="v2-services">
        <div className="container">
          <div className="v2-section-head" data-reveal>
            <div>
              <p className="v2-kicker">THE EXPERIENCE</p>
              <h2>
                続けたくなる理由を、
                <br />
                ひとつの体験に。
              </h2>
            </div>
            <a href="#/service" className="v2-arrow-link">
              すべての機能を見る <span>↗</span>
            </a>
          </div>
          <div className="v2-service-grid">
            {services.map(([index, icon, title, text], i) => (
              <div
                data-reveal
                key={icon}
                style={{ "--reveal-delay": `${i * 90}ms` }}
              >
                <ServiceCard
                  index={index}
                  icon={icon}
                  title={title}
                  text={text}
                  accent={i === 3}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="v2-student-stage">
        <div className="container stage-grid">
          <div className="stage-copy" data-reveal>
            <p className="v2-kicker">FOR STUDENTS</p>
            <h2>
              努力が、
              <br />
              <span>ちゃんと残る。</span>
            </h2>
            <p>
              どれだけ学んだか。誰かの役に立てたか。チームに何を返せたか。努力の軌跡が見えるから、次の一歩を自分で選べる。
            </p>
            <a href="#/service" className="v2-arrow-link">
              学生のための VALNEX <span>↗</span>
            </a>
          </div>
          <div className="stage-visual" data-reveal>
            <div className="stage-number">
              07<span>DAYS</span>
            </div>
            <div className="stage-path">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="stage-award">
              CONSISTENCY
              <br />
              <b>AWARD</b>
            </div>
          </div>
        </div>
      </section>
      <section className="v2-proof">
        <div className="container">
          <div data-reveal>
            <p className="v2-kicker">BY THE NUMBERS</p>
            <h2>
              学びが続く場所には、
              <br />
              確かな手ごたえがある。
            </h2>
          </div>
          <div className="proof-grid" data-reveal>
            <article>
              <b>
                <i data-count="32000">32,000</i>
                <small>　+</small>
              </b>
              <span>登録学生数</span>
            </article>
            <article>
              <b>
                <i data-count="87">87</i>
                <small>　%</small>
              </b>
              <span>週次学習継続率</span>
            </article>
            <article>
              <b>
                <i data-count="4.7">4.7</i>
                <small>　/　5</small>
              </b>
              <span>利用満足度</span>
            </article>
            <article>
              <b>
                <i data-count="18">18</i>
                <small>　校</small>
              </b>
              <span>連携・導入大学</span>
            </article>
          </div>
          <p className="proof-caption">
            2026年4月時点のVALNEX登録データおよび利用者アンケートに基づく自社調査。
          </p>
        </div>
      </section>
      <section className="v2-voices">
        <div className="container">
          <div className="voice-intro" data-reveal>
            <p className="v2-kicker">STUDENT VOICES</p>
            <h2>
              「頑張る」が、
              <br />
              <span>少し身近になった。</span>
            </h2>
          </div>
          <div className="voice-list">
            <article data-reveal>
              <div className="voice-avatar avatar-a">M</div>
              <blockquote>
                「誰かが頑張っているのが見えると、自然に机に向かえる。チーム戦が一番のきっかけです。」
              </blockquote>
              <p>
                <b>水野 玲奈</b>
                <span>経済学部 3年</span>
              </p>
            </article>
            <article data-reveal>
              <div className="voice-avatar avatar-b">S</div>
              <blockquote>
                「質問に答えたら『助かりました』と返ってきて。勉強が自分だけのものじゃなくなりました。」
              </blockquote>
              <p>
                <b>佐伯 陽斗</b>
                <span>情報学部 2年</span>
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="v2-partner-bridge">
        <div className="container bridge-grid">
          <div data-reveal>
            <p className="v2-kicker">FOR PARTNERS</p>
            <h2>
              学生の挑戦に、
              <br />
              企業の意志を。
            </h2>
          </div>
          <div data-reveal>
            <p>
              学びたい学生と、次世代を応援したい企業。両者の想いが出会うことで、キャンパスには新しい循環が生まれます。
            </p>
            <a href="#/partners" className="v2-arrow-link">
              賛助企業制度について <span>↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="v2-loop">
        <div className="container loop-v2-grid">
          <div data-reveal>
            <p className="v2-kicker">VALUE LOOP</p>
            <h2>
              応援がめぐり、
              <br />
              <span>未来を動かす。</span>
            </h2>
            <p>
              賛助企業の支援を、学生の挑戦を後押しする力に。成長した学生と企業の新しい接点が、さらに社会の価値を広げていく。VALNEX
              は、その循環を構想しています。
            </p>
            <small>
              ポイント還元を含む制度の詳細は、現在検討・準備中です。
            </small>
          </div>
          <div data-reveal>
            <CycleDiagram />
          </div>
        </div>
      </section>
      <section className="v2-plan">
        <div className="container plan-grid">
          <div data-reveal>
            <p className="v2-kicker">START FREE</p>
            <h2>
              最初の一歩は、
              <br />
              いつでも無料から。
            </h2>
            <p>
              VALNEX
              の基本機能は、すべての学生に無料で開放しています。自分のペースで、今日から始められます。
            </p>
            <Button href="#/contact" className="button-signal">
              無料で始める
            </Button>
          </div>
          <div className="plan-card" data-reveal>
            <span>STUDENT PLAN</span>
            <h3>
              ¥0 <small>/ 月</small>
            </h3>
            <ul>
              <li>学習教材と進捗記録</li>
              <li>週間チーム対抗戦</li>
              <li>質問・回答コミュニティ</li>
              <li>活動ポイントの獲得</li>
            </ul>
            <a href="#/contact">
              アカウントを作成する <b>↗</b>
            </a>
          </div>
        </div>
      </section>
      <section className="v2-faq">
        <div className="container faq-grid">
          <div data-reveal>
            <p className="v2-kicker">FAQ</p>
            <h2>
              はじめる前の
              <br />
              よくある質問。
            </h2>
            <p>解決しない場合は、お問い合わせフォームからご連絡ください。</p>
          </div>
          <div data-reveal>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
      <section className="v2-closing">
        <div className="container" data-reveal>
          <p className="v2-kicker">START THE NEXT</p>
          <h2>
            学びの次を、
            <br />
            <span>一緒につくろう。</span>
          </h2>
          <div>
            <Button href="#/contact" className="button-signal">
              お問い合わせ
            </Button>
            <a href="#/partners" className="v2-arrow-link">
              賛助企業の方へ <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
