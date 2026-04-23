import "./HomePage.css";
import { destinations } from "../../data/destinations";
import Carousel from "../../components/Carousel/Carousel";
import DestinationCard from "../../components/DestinationCard/DestinationCard";

const featuredIds = ["nova-terra", "aqua-prime", "helios-platform"];
const featured = destinations.filter((d) => featuredIds.includes(d.id));
const highlights = destinations.filter((d) =>
  ["crimson-sands", "elara-jungle", "void-outpost"].includes(d.id),
);

export default function HomePage() {
  return (
    <main id="main-content" className="home">
      <section className="home__hero">
        <div className="home__hero-inner">
          <p className="home__hero-eyebrow">Galactic Immigration Bureau</p>
          <h1 className="home__hero-title">Your new world is out there.</h1>
          <p className="home__hero-subtitle">
            Browse verified destinations across the settled systems. Submit your
            application, get cleared, and start the journey that generations
            before you only dreamed about.
          </p>
          <div className="home__hero-actions">
            <a href="#/destinations" className="home__btn home__btn--primary">
              Browse destinations
            </a>
            <a href="#/apply" className="home__btn home__btn--secondary">
              Start your application
            </a>
          </div>
        </div>
      </section>

      <section className="home__stats" aria-label="Bureau statistics">
        <div className="home__stats-inner">
          <div className="home__stat">
            <span className="home__stat-number">847K</span>
            <span className="home__stat-label">
              Applications processed this year
            </span>
          </div>
          <div className="home__stat">
            <span className="home__stat-number">8</span>
            <span className="home__stat-label">Approved destinations</span>
          </div>
          <div className="home__stat">
            <span className="home__stat-number">2187</span>
            <span className="home__stat-label">
              Year the Bureau was established
            </span>
          </div>
          <div className="home__stat">
            <span className="home__stat-number">14.2M</span>
            <span className="home__stat-label">
              Settlers placed across all systems
            </span>
          </div>
        </div>
      </section>

      <section className="home__section home__section--carousel">
        <div className="home__section-inner">
          <div className="home__section-header">
            <h2 className="home__section-title">Featured destinations</h2>

            <a
              href="#/destinations"
              className="home__section-link"
              aria-label="View all destinations"
            >
              View all →
            </a>
          </div>
          <Carousel items={featured} />
        </div>
      </section>

      <section className="home__section">
        <div className="home__section-inner">
          <div className="home__section-header">
            <h2 className="home__section-title">More to explore</h2>

            <a
              href="#/destinations"
              className="home__section-link"
              aria-label="View full destinations catalog"
            >
              Full catalog →
            </a>
          </div>
          <div className="home__cards">
            {highlights.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        </div>
      </section>

      <section className="home__cta-banner">
        <div className="home__cta-banner-inner">
          <h2 className="home__cta-banner-title">
            Ready to leave Earth behind?
          </h2>
          <p className="home__cta-banner-text">
            The application process takes about 20 minutes. Our team reviews
            submissions within 30 standard Earth days.
          </p>

          <a
            href="#/apply"
            className="home__btn home__btn--primary"
            aria-label="Apply now for immigration"
          >
            Apply now
          </a>
        </div>
      </section>
    </main>
  );
}
