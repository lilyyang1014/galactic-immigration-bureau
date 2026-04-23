import { useState } from "react";
import "./ApplyPage.css";
import { destinations } from "../../data/destinations";

const occupationOptions = [
  "",
  "scientist",
  "engineer",
  "medical",
  "civilian",
  "military",
  "other",
];
const researchFields = [
  "Xenobiology",
  "Astrophysics",
  "Climate Science",
  "Materials Engineering",
  "Medicine",
  "Computer Science",
];
const militaryRanks = [
  "Private",
  "Corporal",
  "Sergeant",
  "Lieutenant",
  "Captain",
  "Major",
  "Colonel",
];

const initialForm = {
  fullName: "",
  earthId: "",
  destination: "",
  occupation: "",
  researchField: "",
  militaryRank: "",
  otherOccupation: "",
  hasMedicalCondition: false,
  medicalDetails: "",
  emergencyContact: "",
  departureDate: "",
  agreeTerms: false,
};

export default function ApplyPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate() {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    else if (form.fullName.trim().length < 2)
      errs.fullName = "Name must be at least 2 characters.";

    if (!form.earthId.trim()) errs.earthId = "Earth ID is required.";
    else if (!/^EARTH-[A-Z0-9]{6}$/.test(form.earthId.trim()))
      errs.earthId = "Format must be EARTH-XXXXXX (e.g. EARTH-A1B2C3).";

    if (!form.destination) errs.destination = "Please select a destination.";
    if (!form.occupation) errs.occupation = "Please select an occupation.";

    if (form.occupation === "scientist" && !form.researchField) {
      errs.researchField = "Please select a research field.";
    }
    if (form.occupation === "military" && !form.militaryRank.trim()) {
      errs.militaryRank = "Please enter your rank.";
    }
    if (form.occupation === "other" && !form.otherOccupation.trim()) {
      errs.otherOccupation = "Please describe your occupation.";
    }
    if (form.hasMedicalCondition && !form.medicalDetails.trim()) {
      errs.medicalDetails = "Please provide medical details.";
    }

    if (!form.emergencyContact.trim())
      errs.emergencyContact = "Emergency contact is required.";

    if (!form.departureDate.trim())
      errs.departureDate = "Preferred departure date is required.";
    else if (!/^\d{4}-\d{2}-\d{2}$/.test(form.departureDate.trim())) {
      errs.departureDate = "Format must be YYYY-MM-DD.";
    }

    if (!form.agreeTerms)
      errs.agreeTerms = "You must agree to the terms to proceed.";

    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    const dest = destinations.find((d) => d.id === form.destination);
    return (
      <main id="main-content" className="apply-page">
        <div className="apply-page__success">
          <div className="apply-page__success-icon" aria-hidden="true">
            {"✓"}
          </div>
          <h1 className="apply-page__success-title">Application submitted</h1>
          <p className="apply-page__success-text">
            Thank you, {form.fullName}. Your application for{" "}
            <strong>{dest ? dest.name : form.destination}</strong> has been
            received. Our team will review your submission within 30 standard
            Earth days.
          </p>
          <p className="apply-page__success-ref">
            Reference ID: GIB-{form.earthId}-{Date.now().toString().slice(-6)}
          </p>
          <a href="#/" className="apply-page__success-btn">
            Back to home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="apply-page">
      <div className="apply-page__header">
        <h1 className="apply-page__title">Immigration application</h1>
        <p className="apply-page__subtitle">
          Complete all fields below. Applications are reviewed within 30
          standard Earth days.
        </p>
      </div>

      <form className="apply-page__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="apply-page__fieldset">
          <legend className="apply-page__legend">Personal information</legend>

          <div className="apply-page__field">
            <label htmlFor="fullName" className="apply-page__label">
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className={`apply-page__input${errors.fullName ? " apply-page__input--error" : ""}`}
              value={form.fullName}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.fullName && (
              <span className="apply-page__error" role="alert">
                {errors.fullName}
              </span>
            )}
          </div>

          <div className="apply-page__field">
            <label htmlFor="earthId" className="apply-page__label">
              Earth identification number
              <span className="apply-page__label-hint">
                Format: EARTH-XXXXXX
              </span>
            </label>
            <input
              id="earthId"
              name="earthId"
              type="text"
              className={`apply-page__input${errors.earthId ? " apply-page__input--error" : ""}`}
              value={form.earthId}
              onChange={handleChange}
              autoComplete="off"
              placeholder="EARTH-A1B2C3"
            />
            {errors.earthId && (
              <span className="apply-page__error" role="alert">
                {errors.earthId}
              </span>
            )}
          </div>
        </fieldset>

        <fieldset className="apply-page__fieldset">
          <legend className="apply-page__legend">
            Destination and occupation
          </legend>

          <div className="apply-page__field">
            <label htmlFor="destination" className="apply-page__label">
              Preferred destination
            </label>
            <select
              id="destination"
              name="destination"
              className={`apply-page__select${errors.destination ? " apply-page__input--error" : ""}`}
              value={form.destination}
              onChange={handleChange}
            >
              <option value="">Select a destination</option>
              {destinations.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
            {errors.destination && (
              <span className="apply-page__error" role="alert">
                {errors.destination}
              </span>
            )}
          </div>

          <div className="apply-page__field">
            <label htmlFor="occupation" className="apply-page__label">
              Occupation category
            </label>
            <select
              id="occupation"
              name="occupation"
              className={`apply-page__select${errors.occupation ? " apply-page__input--error" : ""}`}
              value={form.occupation}
              onChange={handleChange}
            >
              <option value="">Select an occupation</option>
              {occupationOptions
                .filter((o) => o !== "")
                .map((o) => (
                  <option key={o} value={o}>
                    {o.charAt(0).toUpperCase() + o.slice(1)}
                  </option>
                ))}
            </select>
            {errors.occupation && (
              <span className="apply-page__error" role="alert">
                {errors.occupation}
              </span>
            )}
          </div>

          {form.occupation === "scientist" && (
            <div className="apply-page__field apply-page__field--conditional">
              <label htmlFor="researchField" className="apply-page__label">
                Research field
              </label>
              <select
                id="researchField"
                name="researchField"
                className={`apply-page__select${errors.researchField ? " apply-page__input--error" : ""}`}
                value={form.researchField}
                onChange={handleChange}
              >
                <option value="">Select a field</option>
                {researchFields.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
              {errors.researchField && (
                <span className="apply-page__error" role="alert">
                  {errors.researchField}
                </span>
              )}
            </div>
          )}

          {form.occupation === "military" && (
            <div className="apply-page__field apply-page__field--conditional">
              <label htmlFor="militaryRank" className="apply-page__label">
                Military rank
              </label>
              <select
                id="militaryRank"
                name="militaryRank"
                className={`apply-page__select${errors.militaryRank ? " apply-page__input--error" : ""}`}
                value={form.militaryRank}
                onChange={handleChange}
              >
                <option value="">Select a rank</option>
                {militaryRanks.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {errors.militaryRank && (
                <span className="apply-page__error" role="alert">
                  {errors.militaryRank}
                </span>
              )}
            </div>
          )}

          {form.occupation === "other" && (
            <div className="apply-page__field apply-page__field--conditional">
              <label htmlFor="otherOccupation" className="apply-page__label">
                Please describe your occupation
              </label>
              <input
                id="otherOccupation"
                name="otherOccupation"
                type="text"
                className={`apply-page__input${errors.otherOccupation ? " apply-page__input--error" : ""}`}
                value={form.otherOccupation}
                onChange={handleChange}
              />
              {errors.otherOccupation && (
                <span className="apply-page__error" role="alert">
                  {errors.otherOccupation}
                </span>
              )}
            </div>
          )}
        </fieldset>

        <fieldset className="apply-page__fieldset">
          <legend className="apply-page__legend">Medical and emergency</legend>

          <div className="apply-page__field apply-page__field--checkbox">
            <input
              id="hasMedicalCondition"
              name="hasMedicalCondition"
              type="checkbox"
              className="apply-page__checkbox"
              checked={form.hasMedicalCondition}
              onChange={handleChange}
            />
            <label
              htmlFor="hasMedicalCondition"
              className="apply-page__checkbox-label"
            >
              I have a medical condition relevant to long-distance space travel
            </label>
          </div>

          {form.hasMedicalCondition && (
            <div className="apply-page__field apply-page__field--conditional">
              <label htmlFor="medicalDetails" className="apply-page__label">
                Medical details
              </label>
              <textarea
                id="medicalDetails"
                name="medicalDetails"
                className={`apply-page__textarea${errors.medicalDetails ? " apply-page__input--error" : ""}`}
                value={form.medicalDetails}
                onChange={handleChange}
                rows={4}
              />
              {errors.medicalDetails && (
                <span className="apply-page__error" role="alert">
                  {errors.medicalDetails}
                </span>
              )}
            </div>
          )}

          <div className="apply-page__field">
            <label htmlFor="emergencyContact" className="apply-page__label">
              Emergency contact name
            </label>
            <input
              id="emergencyContact"
              name="emergencyContact"
              type="text"
              className={`apply-page__input${errors.emergencyContact ? " apply-page__input--error" : ""}`}
              value={form.emergencyContact}
              onChange={handleChange}
            />
            {errors.emergencyContact && (
              <span className="apply-page__error" role="alert">
                {errors.emergencyContact}
              </span>
            )}
          </div>
        </fieldset>

        <fieldset className="apply-page__fieldset">
          <legend className="apply-page__legend">Departure</legend>

          <div className="apply-page__field">
            <label htmlFor="departureDate" className="apply-page__label">
              Preferred departure date
              <span className="apply-page__label-hint">Format: YYYY-MM-DD</span>
            </label>
            <input
              id="departureDate"
              name="departureDate"
              type="text"
              className={`apply-page__input${errors.departureDate ? " apply-page__input--error" : ""}`}
              value={form.departureDate}
              onChange={handleChange}
              placeholder="2027-06-01"
            />
            {errors.departureDate && (
              <span className="apply-page__error" role="alert">
                {errors.departureDate}
              </span>
            )}
          </div>

          <div className="apply-page__field apply-page__field--checkbox">
            <input
              id="agreeTerms"
              name="agreeTerms"
              type="checkbox"
              className="apply-page__checkbox"
              checked={form.agreeTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeTerms" className="apply-page__checkbox-label">
              I agree to the Bureau terms of transit and acknowledge that
              settlement decisions are final once a departure slot is confirmed
            </label>
          </div>
          {errors.agreeTerms && (
            <span className="apply-page__error" role="alert">
              {errors.agreeTerms}
            </span>
          )}
        </fieldset>

        <div className="apply-page__submit-row">
          <button type="submit" className="apply-page__submit-btn">
            Submit application
          </button>
        </div>
      </form>
    </main>
  );
}
