import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">Galactic Immigration Bureau</p>
        <p className="footer__copy">
          Established 2187. All transit rights reserved across settled systems.
        </p>
        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#/about">About</a>
          <a href="#/destinations">Destinations</a>
          <a href="#/apply">Apply</a>
        </nav>
      </div>
    </footer>
  );
}
