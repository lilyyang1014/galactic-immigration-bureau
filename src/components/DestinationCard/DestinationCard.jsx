import "./DestinationCard.css";

const dangerLabels = {
  low: "Low Risk",
  medium: "Medium Risk",
  high: "High Risk",
};

export default function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <a
        href={`#/destinations/${destination.id}`}
        className="destination-card__link"
      >
        <div className="destination-card__image-wrap">
          <img
            src={destination.image}
            alt={`Surface of ${destination.name}`}
            className="destination-card__image"
          />
          <span
            className={`destination-card__badge destination-card__badge--${destination.dangerLevel}`}
          >
            {dangerLabels[destination.dangerLevel]}
          </span>
        </div>
        <div className="destination-card__body">
          <h3 className="destination-card__name">{destination.name}</h3>
          <p className="destination-card__system">{destination.system}</p>
          <p className="destination-card__description">
            {destination.description}
          </p>
          <ul className="destination-card__stats">
            <li className="destination-card__stat">
              <span className="destination-card__stat-label">Climate</span>
              <span className="destination-card__stat-value">
                {destination.climate}
              </span>
            </li>
            <li className="destination-card__stat">
              <span className="destination-card__stat-label">Gravity</span>
              <span className="destination-card__stat-value">
                {destination.gravity}
              </span>
            </li>
            <li className="destination-card__stat">
              <span className="destination-card__stat-label">Population</span>
              <span className="destination-card__stat-value">
                {destination.population}
              </span>
            </li>
          </ul>
        </div>
      </a>
    </article>
  );
}
