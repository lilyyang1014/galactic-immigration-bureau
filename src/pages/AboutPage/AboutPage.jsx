import "./AboutPage.css";

export default function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <div className="about-page__header">
        <h1 className="about-page__title">About the Bureau</h1>
        <p className="about-page__subtitle">
          Established in 2187 to manage humanity's expansion across the settled
          systems.
        </p>
      </div>

      <div className="about-page__body">
        <section className="about-page__section" aria-label="Our mission">
          <h2 className="about-page__section-title">Our mission</h2>
          <div className="about-page__prose">
            <p>
              The Galactic Immigration Bureau exists to ensure that humanity's
              expansion beyond Earth is orderly, safe, and equitable. We process
              applications, maintain destination registries, and coordinate with
              local colonial governments to place settlers where they are most
              needed and most likely to thrive.
            </p>
            <p>
              Since our founding, we have processed over 14 million applications
              and successfully placed settlers on eight approved destinations.
              Each destination in our registry has been independently verified
              for habitability, governance stability, and long-term viability.
            </p>
          </div>
        </section>

        <section className="about-page__section" aria-label="Bureau history">
          <h2 className="about-page__section-title">History</h2>
          <div className="about-page__timeline">
            <div className="about-page__timeline-item">
              <span className="about-page__timeline-year">2187</span>
              <div className="about-page__timeline-content">
                <h3 className="about-page__timeline-title">
                  Bureau established
                </h3>
                <p className="about-page__timeline-text">
                  The GIB is founded by the United Earth Council following the
                  successful colonization of Nova Terra. Its mandate:
                  standardize and manage all off-world immigration.
                </p>
              </div>
            </div>
            <div className="about-page__timeline-item">
              <span className="about-page__timeline-year">2201</span>
              <div className="about-page__timeline-content">
                <h3 className="about-page__timeline-title">
                  First million settlers placed
                </h3>
                <p className="about-page__timeline-text">
                  The Bureau reaches a milestone of one million successful
                  placements across three destinations. Processing times are
                  reduced from 180 days to 30 days through new review protocols.
                </p>
              </div>
            </div>
            <div className="about-page__timeline-item">
              <span className="about-page__timeline-year">2218</span>
              <div className="about-page__timeline-content">
                <h3 className="about-page__timeline-title">
                  Outer systems expansion
                </h3>
                <p className="about-page__timeline-text">
                  The registry expands to include destinations beyond the
                  initial habitable zone, including Void Outpost and the Helios
                  Platform orbital habitat. Frontier settlement protocols are
                  introduced.
                </p>
              </div>
            </div>
            <div className="about-page__timeline-item">
              <span className="about-page__timeline-year">2251</span>
              <div className="about-page__timeline-content">
                <h3 className="about-page__timeline-title">
                  Digital application system launches
                </h3>
                <p className="about-page__timeline-text">
                  The Bureau launches its unified digital application platform,
                  replacing the previous paper-based system. Application
                  processing times drop to an average of 22 standard Earth days.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page__section" aria-label="Bureau values">
          <h2 className="about-page__section-title">What we stand for</h2>
          <div className="about-page__values">
            <div className="about-page__value-card">
              <h3 className="about-page__value-title">Safety first</h3>
              <p className="about-page__value-text">
                Every destination in our registry meets strict habitability and
                safety standards. We do not approve destinations we would not
                send our own staff to.
              </p>
            </div>
            <div className="about-page__value-card">
              <h3 className="about-page__value-title">Transparent process</h3>
              <p className="about-page__value-text">
                Application decisions come with clear reasoning. If your
                application is declined, you will know why and what steps you
                can take to reapply.
              </p>
            </div>
            <div className="about-page__value-card">
              <h3 className="about-page__value-title">Equal access</h3>
              <p className="about-page__value-text">
                Settlement opportunities should not be reserved for the wealthy.
                The Bureau operates financial assistance programs for qualified
                applicants who cannot meet solvency requirements independently.
              </p>
            </div>
          </div>
        </section>

        <section
          className="about-page__contact"
          aria-label="Contact information"
        >
          <h2 className="about-page__section-title">Contact the Bureau</h2>
          <div className="about-page__contact-grid">
            <div className="about-page__contact-item">
              <span className="about-page__contact-label">
                General inquiries
              </span>
              <span className="about-page__contact-value">
                inquiries@gib.earth.gov
              </span>
            </div>
            <div className="about-page__contact-item">
              <span className="about-page__contact-label">
                Application support
              </span>
              <span className="about-page__contact-value">
                applications@gib.earth.gov
              </span>
            </div>
            <div className="about-page__contact-item">
              <span className="about-page__contact-label">Headquarters</span>
              <span className="about-page__contact-value">Geneva, Earth</span>
            </div>
            <div className="about-page__contact-item">
              <span className="about-page__contact-label">Operating hours</span>
              <span className="about-page__contact-value">
                24 hours, all Earth time zones
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
