import { useState } from "react";
import "./Accordion.css";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`accordion__item${isOpen ? " accordion__item--open" : ""}`}
          >
            <h3 className="accordion__heading">
              <button
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${index}`}
                id={`accordion-btn-${index}`}
                onClick={() => handleToggle(index)}
              >
                <span>{item.title}</span>
                <span className="accordion__icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            {isOpen && (
              <div
                id={`accordion-panel-${index}`}
                role="region"
                aria-labelledby={`accordion-btn-${index}`}
                className="accordion__panel"
              >
                <p>{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
