import { useState, useEffect, useRef } from "react";
import "./ProfileModal.css";

const titleOptions = ["Cadet", "Officer", "Commander", "Admiral"];

export default function ProfileModal({ isOpen, profile, onSave, onClose }) {
  const [name, setName] = useState(profile.name);
  const [title, setTitle] = useState(profile.title);
  const [errors, setErrors] = useState({});
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setName(profile.name);
      setTitle(profile.title);
      setErrors({});
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen, profile]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleCancel = (e) => {
      e.preventDefault();
      onClose();
    };
    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [onClose]);

  function validate() {
    const next = {};
    if (!name.trim()) next.name = "Name is required.";
    else if (name.trim().length < 2)
      next.name = "Name must be at least 2 characters.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    onSave({ name: name.trim(), title });
    onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      className="profile-modal"
      aria-labelledby="profile-modal-title"
    >
      <div className="profile-modal__inner">
        <div className="profile-modal__header">
          <h2 id="profile-modal-title" className="profile-modal__title">
            Edit Traveler Profile
          </h2>
          <button
            className="profile-modal__close"
            onClick={onClose}
            aria-label="Close profile editor"
          >
            ✕
          </button>
        </div>

        <form
          className="profile-modal__form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="profile-modal__field">
            <label htmlFor="profile-title" className="profile-modal__label">
              Rank / Title
            </label>
            <select
              id="profile-title"
              className="profile-modal__select"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
              {titleOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="profile-modal__field">
            <label htmlFor="profile-name" className="profile-modal__label">
              Traveler Name
            </label>
            <input
              id="profile-name"
              type="text"
              className={`profile-modal__input${errors.name ? " profile-modal__input--error" : ""}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
            />
            {errors.name && (
              <span className="profile-modal__error" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="profile-modal__actions">
            <button
              type="button"
              className="profile-modal__btn profile-modal__btn--secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="profile-modal__btn profile-modal__btn--primary"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
