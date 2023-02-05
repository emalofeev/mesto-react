function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && "popup_opened"
      }`}
    >
      <div className={`popup__container popup__container-${props.name}`}>
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть окно редактирования профиля"
          onClick={props.onClose}
        ></button>
        <h3 className="popup__content-title">{props.title}</h3>
        <form
          className={`popup__content popup__content_type_${props.name}`}
          name={`edit-${props.name}`}
          noValidate
        >
          {props.children}
          <button className="popup__content-submit" type="submit">
            {props.button}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
