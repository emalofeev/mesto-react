function PopupWithForm({
  name,
  title,
  isOpen,
  button,
  onClose,
  handleSubmit,
  children,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? `popup_opened` : ""}`}>
      <div className={`popup__container popup__container-${name}`}>
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть окно редактирования профиля"
          onClick={onClose}
        ></button>
        <h3 className="popup__content-title">{title}</h3>
        <form
          className={`popup__content popup__content_type_${name}`}
          name={`edit-${name}`}
          onSubmit={handleSubmit}
        >
          {children}
          <button className="popup__content-submit" type="submit">
            {button}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
