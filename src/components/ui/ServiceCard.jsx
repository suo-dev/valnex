const icons = { learn: "　", team: "　", community: "　", reward: "　" };
const imageDimensions = {
  1: [1800, 1200],
  2: [1200, 896],
  3: [777, 408],
  4: [1800, 1029],
};
export default function ServiceCard({
  index,
  icon,
  title,
  text,
  accent = false,
}) {
  const [imageWidth, imageHeight] = imageDimensions[index] ?? [1200, 800];

  return (
    <article className={`service-card ${accent ? "service-card-accent" : ""}`}>
      <div className="service-card-head">
        <span>0{index}</span>
        <b>{icons[icon]}</b>
      </div>
      <img
        src={`${import.meta.env.BASE_URL}assets/optimized/experience/0${index}.webp`}
        alt={`${title}の画像`}
        loading="lazy"
        decoding="async"
        width={imageWidth}
        height={imageHeight}
      />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#/service">
        詳しく見る <span>→</span>
      </a>
    </article>
  );
}
