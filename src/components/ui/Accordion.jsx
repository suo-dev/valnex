import { useState } from "react";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <article
          className={open === index ? "is-open" : ""}
          key={item.question}
        >
          <button
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? -1 : index)}
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.question}</strong>
            <i>+</i>
          </button>
          <div className="accordion-answer">
            <p>{item.answer}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
