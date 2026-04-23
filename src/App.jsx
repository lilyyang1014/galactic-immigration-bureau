import { useState, useEffect } from "react";
import { getRoute } from "./utils/router";
import "./App.css";

import SkipLink from "./components/SkipLink/SkipLink";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ProfileModal from "./components/ProfileModal/ProfileModal";

import HomePage from "./pages/HomePage/HomePage";
import DestinationsPage from "./pages/DestinationsPage/DestinationsPage";
import DestinationDetailPage from "./pages/DestinationDetailPage/DestinationDetailPage";
import ApplyPage from "./pages/ApplyPage/ApplyPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AboutPage from "./pages/AboutPage/AboutPage";

export default function App() {
  const [route, setRoute] = useState(getRoute());
  const [theme, setTheme] = useState("dark");
  const [travelerProfile, setTravelerProfile] = useState({
    name: "Traveler",
    title: "Cadet",
  });
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  function renderPage() {
    switch (route.page) {
      case "home":
        return <HomePage />;
      case "destinations":
        return <DestinationsPage />;
      case "destination-detail":
        return <DestinationDetailPage id={route.params.id} />;
      case "apply":
        return <ApplyPage />;
      case "profile":
        return (
          <ProfilePage
            profile={travelerProfile}
            onEditClick={() => setIsProfileModalOpen(true)}
          />
        );
      case "about":
        return <AboutPage />;
      default:
        return (
          <main id="main-content" className="not-found">
            <h1>Page not found</h1>
            <a href="#/">Back to home</a>
          </main>
        );
    }
  }

  return (
    <>
      <SkipLink />
      <Nav
        profile={travelerProfile}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      {renderPage()}
      <Footer />
      <ProfileModal
        isOpen={isProfileModalOpen}
        profile={travelerProfile}
        onSave={setTravelerProfile}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </>
  );
}
