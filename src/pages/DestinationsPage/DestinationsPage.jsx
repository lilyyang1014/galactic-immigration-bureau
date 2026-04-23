import { useState, useMemo } from "react";
import "./DestinationsPage.css";
import { destinations } from "../../data/destinations";
import DestinationCard from "../../components/DestinationCard/DestinationCard";

const climateOptions = [
  "all",
  "temperate",
  "arid",
  "oceanic",
  "polar",
  "artificial",
  "vacuum",
  "tropical",
];
const dangerOptions = ["all", "low", "medium", "high"];
const sortOptions = [
  { value: "name-asc", label: "Name A–Z" },
  { value: "danger-asc", label: "Danger: low first" },
  { value: "danger-desc", label: "Danger: high first" },
  { value: "population-desc", label: "Population: most first" },
];
const dangerRank = { low: 1, medium: 2, high: 3 };

export default function DestinationsPage() {
  const [climate, setClimate] = useState("all");
  const [danger, setDanger] = useState("all");
  const [sort, setSort] = useState("name-asc");

  const filtered = useMemo(() => {
    let list = [...destinations];
    if (climate !== "all") list = list.filter((d) => d.climate === climate);
    if (danger !== "all") list = list.filter((d) => d.dangerLevel === danger);
    list.sort((a, b) => {
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "danger-asc")
        return dangerRank[a.dangerLevel] - dangerRank[b.dangerLevel];
      if (sort === "danger-desc")
        return dangerRank[b.dangerLevel] - dangerRank[a.dangerLevel];
      if (sort === "population-desc")
        return parseFloat(b.population) - parseFloat(a.population);
      return 0;
    });
    return list;
  }, [climate, danger, sort]);

  return (
    <main id="main-content" className="destinations-page">
      <div className="destinations-page__header">
        <div className="destinations-page__header-inner">
          <h1 className="destinations-page__title">All destinations</h1>
          <p className="destinations-page__subtitle">
            {destinations.length} approved destinations across the settled
            systems. All listings are verified by the Bureau.
          </p>
        </div>
      </div>

      <div className="destinations-page__body">
        <aside
          className="destinations-page__filters"
          aria-label="Filter and sort destinations"
        >
          <div className="destinations-page__filter-group">
            <h2 className="destinations-page__filter-heading">Climate</h2>
            <div className="destinations-page__filter-options">
              {climateOptions.map((c) => (
                <button
                  key={c}
                  className={`destinations-page__filter-btn${climate === c ? " destinations-page__filter-btn--active" : ""}`}
                  onClick={() => setClimate(c)}
                  aria-pressed={climate === c}
                >
                  {c === "all"
                    ? "All climates"
                    : c.charAt(0).toUpperCase() + c.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="destinations-page__filter-group">
            <h2 className="destinations-page__filter-heading">Risk level</h2>
            <div className="destinations-page__filter-options">
              {dangerOptions.map((d) => (
                <button
                  key={d}
                  className={`destinations-page__filter-btn${danger === d ? " destinations-page__filter-btn--active" : ""}`}
                  onClick={() => setDanger(d)}
                  aria-pressed={danger === d}
                >
                  {d === "all"
                    ? "All levels"
                    : d.charAt(0).toUpperCase() + d.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="destinations-page__filter-group">
            <label
              htmlFor="sort-select"
              className="destinations-page__filter-heading"
            >
              Sort by
            </label>
            <select
              id="sort-select"
              className="destinations-page__sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </aside>

        <section aria-label="Destination listings">
          {filtered.length === 0 ? (
            <div className="destinations-page__empty">
              <p className="destinations-page__empty-text">
                No destinations match your current filters.
              </p>
              <button
                className="destinations-page__reset-btn"
                onClick={() => {
                  setClimate("all");
                  setDanger("all");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <p className="destinations-page__count" aria-live="polite">
                Showing {filtered.length} of {destinations.length} destinations
              </p>
              <div className="destinations-page__grid">
                {filtered.map((d) => (
                  <DestinationCard key={d.id} destination={d} />
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
