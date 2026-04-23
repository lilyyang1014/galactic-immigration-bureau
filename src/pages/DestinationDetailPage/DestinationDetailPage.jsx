import "./DestinationDetailPage.css";
import { destinations } from "../../data/destinations";
import Accordion from "../../components/Accordion/Accordion";

export default function DestinationDetailPage({ id }) {
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <main id="main-content" className="detail-page__not-found">
        <h1>Destination not found</h1>
        <a href="#/destinations">Back to all destinations</a>
      </main>
    );
  }

  const dangerLabels = {
    low: "Low Risk",
    medium: "Medium Risk",
    high: "High Risk",
  };

  return (
    <main id="main-content" className="detail-page">
      <div className="detail-page__hero">
        <img
          src={destination.image}
          alt={`Surface landscape of ${destination.name}`}
          className="detail-page__hero-image"
        />
        <div className="detail-page__hero-overlay">
          <div className="detail-page__hero-inner">
            <a href="#/destinations" className="detail-page__back">
              {"← All destinations"}
            </a>
            <p className="detail-page__system">{destination.system}</p>
            <h1 className="detail-page__title">{destination.name}</h1>
            <span
              className={`detail-page__badge detail-page__badge--${destination.dangerLevel}`}
            >
              {dangerLabels[destination.dangerLevel]}
            </span>
          </div>
        </div>
      </div>

      <div className="detail-page__body">
        <div className="detail-page__main">
          <p className="detail-page__description">{destination.description}</p>

          <div className="detail-page__stats">
            <div className="detail-page__stat">
              <span className="detail-page__stat-label">Climate</span>
              <span className="detail-page__stat-value">
                {destination.climate}
              </span>
            </div>
            <div className="detail-page__stat">
              <span className="detail-page__stat-label">Gravity</span>
              <span className="detail-page__stat-value">
                {destination.gravity}
              </span>
            </div>
            <div className="detail-page__stat">
              <span className="detail-page__stat-label">Population</span>
              <span className="detail-page__stat-value">
                {destination.population}
              </span>
            </div>
            <div className="detail-page__stat">
              <span className="detail-page__stat-label">System</span>
              <span className="detail-page__stat-value">
                {destination.system}
              </span>
            </div>
          </div>

          <section
            className="detail-page__details"
            aria-label="Destination details"
          >
            <h2 className="detail-page__section-title">Destination details</h2>
            <Accordion items={destination.details} />
          </section>
        </div>

        <aside className="detail-page__sidebar">
          <div className="detail-page__apply-card">
            <h2 className="detail-page__apply-title">
              Interested in {destination.name}?
            </h2>
            <p className="detail-page__apply-text">
              Start your immigration application. The process takes about 20
              minutes and our team reviews submissions within 30 standard Earth
              days.
            </p>

            <a
              href={`#/apply?destination=${destination.id}`}
              className="detail-page__apply-btn"
            >
              Apply for this destination
            </a>
          </div>

          <div className="detail-page__info-card">
            <h2 className="detail-page__info-title">Before you apply</h2>
            <ul className="detail-page__checklist">
              <li className="detail-page__checklist-item">
                <span className="detail-page__check" aria-hidden="true">
                  {"✓"}
                </span>
                Valid Earth identification
              </li>
              <li className="detail-page__checklist-item">
                <span className="detail-page__check" aria-hidden="true">
                  {"✓"}
                </span>
                Medical clearance certificate
              </li>
              <li className="detail-page__checklist-item">
                <span className="detail-page__check" aria-hidden="true">
                  {"✓"}
                </span>
                Proof of financial solvency
              </li>
              <li className="detail-page__checklist-item">
                <span className="detail-page__check" aria-hidden="true">
                  {"✓"}
                </span>
                Emergency contact information
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
