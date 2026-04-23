import { useState } from "react";
import "./Carousel.css";

export default function Carousel({ items }) {
  const [current, setCurrent] = useState(0);

  function goPrev() {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }

  function goNext() {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }

  const item = items[current];

  return (
    <div
      className="carousel"
      aria-roledescription="carousel"
      aria-label="Featured destinations"
    >
      <div className="carousel__track">
        <div
          className="carousel__slide"
          aria-roledescription="slide"
          aria-label={`${current + 1} of ${items.length}: ${item.name}`}
        >
          <img
            src={item.image}
            alt={`Surface of ${item.name}`}
            className="carousel__image"
          />
          <div className="carousel__overlay">
            <p className="carousel__system">{item.system}</p>
            <h3 className="carousel__name">{item.name}</h3>
            <p className="carousel__description">{item.description}</p>
            <a href={`#/destinations/${item.id}`} className="carousel__cta">
              View destination
            </a>
          </div>
        </div>
      </div>

      <div className="carousel__controls">
        <button
          className="carousel__btn"
          onClick={goPrev}
          aria-label="Previous destination"
        >
          ←
        </button>

        <div
          className="carousel__dots"
          role="tablist"
          aria-label="Select destination"
        >
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Destination ${i + 1}: ${items[i].name}`}
              className={`carousel__dot${i === current ? " carousel__dot--active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

        <button
          className="carousel__btn"
          onClick={goNext}
          aria-label="Next destination"
        >
          →
        </button>
      </div>
    </div>
  );
}
