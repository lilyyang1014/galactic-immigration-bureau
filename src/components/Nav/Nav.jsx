import { useState } from "react";
import "./Nav.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Nav({ profile, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#/" className="nav__brand" onClick={closeMenu}>
          <span className="nav__brand-acronym">GIB</span>
          <span className="nav__brand-full">Galactic Immigration Bureau</span>
        </a>

        <button
          className="nav__hamburger"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="nav__hamburger-bar" aria-hidden="true"></span>
          <span className="nav__hamburger-bar" aria-hidden="true"></span>
          <span className="nav__hamburger-bar" aria-hidden="true"></span>
        </button>

        <nav
          id="nav-menu"
          className={`nav__menu${menuOpen ? " nav__menu--open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="nav__list">
            <li>
              <a href="#/" className="nav__link" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#/destinations"
                className="nav__link"
                onClick={closeMenu}
              >
                Destinations
              </a>
            </li>
            <li>
              <a href="#/apply" className="nav__link" onClick={closeMenu}>
                Apply
              </a>
            </li>
            <li>
              <a href="#/about" className="nav__link" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#/profile" className="nav__link" onClick={closeMenu}>
                Profile
              </a>
            </li>
          </ul>

          <div className="nav__actions">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <a
              href="#/profile"
              className="nav__profile-btn"
              onClick={closeMenu}
              aria-label={`View profile for ${profile.name}`}
            >
              <span className="nav__profile-title">{profile.title}</span>
              <span className="nav__profile-name">{profile.name}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
