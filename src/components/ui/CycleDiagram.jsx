const steps = [
  ["01", "賛助企業", "学生の学びを支援"],
  ["02", "ポイント還元", "支援を学生へ届ける"],
  ["03", "学生の挑戦", "学び・教え・つながる"],
  ["04", "新しい価値", "成長と企業の接点が生まれる"],
];
export default function CycleDiagram() {
  return (
    <div
      className="cycle-diagram"
      aria-label="賛助企業の支援から学生の成長と企業との接点につながる循環"
    >
      <div className="cycle-center">
        <strong>
          VALUE
          <br />
          LOOP
        </strong>
        <span>学びの循環</span>
      </div>
      {steps.map(([number, title, text]) => (
        <div className={`cycle-step cycle-step-${number}`} key={number}>
          <span>{number}</span>
          <strong>{title}</strong>
          <small>{text}</small>
        </div>
      ))}
    </div>
  );
}
