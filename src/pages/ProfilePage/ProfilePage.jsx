import "./ProfilePage.css";

export default function ProfilePage({ profile, onEditClick }) {
  return (
    <main id="main-content" className="profile-page">
      <div className="profile-page__header">
        <h1 className="profile-page__title">Traveler profile</h1>
      </div>

      <div className="profile-page__body">
        <section className="profile-page__card" aria-label="Traveler identity">
          <div className="profile-page__avatar" aria-hidden="true">
            {profile.name.charAt(0).toUpperCase()}
          </div>
          <div className="profile-page__info">
            <p className="profile-page__rank">{profile.title}</p>
            <h2 className="profile-page__name">{profile.name}</h2>
            <p className="profile-page__status">GIB Registered Traveler</p>
          </div>
          <button className="profile-page__edit-btn" onClick={onEditClick}>
            Edit profile
          </button>
        </section>

        <section className="profile-page__section" aria-label="Account details">
          <h2 className="profile-page__section-title">Account details</h2>
          <div className="profile-page__details">
            <div className="profile-page__detail-row">
              <span className="profile-page__detail-label">Display name</span>
              <span className="profile-page__detail-value">{profile.name}</span>
            </div>
            <div className="profile-page__detail-row">
              <span className="profile-page__detail-label">Rank</span>
              <span className="profile-page__detail-value">
                {profile.title}
              </span>
            </div>
            <div className="profile-page__detail-row">
              <span className="profile-page__detail-label">
                Registry status
              </span>
              <span className="profile-page__detail-value profile-page__detail-value--active">
                Active
              </span>
            </div>
            <div className="profile-page__detail-row">
              <span className="profile-page__detail-label">Bureau region</span>
              <span className="profile-page__detail-value">Earth Central</span>
            </div>
          </div>
        </section>

        <section className="profile-page__section" aria-label="Quick actions">
          <h2 className="profile-page__section-title">Quick actions</h2>
          <div className="profile-page__actions">
            <a href="#/destinations" className="profile-page__action-card">
              <span className="profile-page__action-title">
                Browse destinations
              </span>
              <span className="profile-page__action-desc">
                View all approved settlements
              </span>
            </a>
            <a href="#/apply" className="profile-page__action-card">
              <span className="profile-page__action-title">
                Start an application
              </span>
              <span className="profile-page__action-desc">
                Apply for a new destination
              </span>
            </a>
            <a href="#/about" className="profile-page__action-card">
              <span className="profile-page__action-title">
                About the Bureau
              </span>
              <span className="profile-page__action-desc">
                Learn about the GIB
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
