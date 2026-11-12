const icons = { learn: "　", team: "　", community: "　", reward: "　" };
export default function ServiceCard({
  index,
  icon,
  title,
  text,
  accent = false,
}) {
  return (
    <article className={`service-card ${accent ? "service-card-accent" : ""}`}>
      <div className="service-card-head">
        <span>0{index}</span>
        <b>{icons[icon]}</b>
      </div>
      <img src={`/assets/experience/0${index}.png`} alt="${title}の画像" />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#/service">
        詳しく見る <span>→</span>
      </a>
    </article>
  );
}
