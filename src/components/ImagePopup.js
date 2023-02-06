function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image ${props.card ? `popup_opened` : ""}`}
    >
      <div className="popup__container-image">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть окно с фотографией"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          alt={`${props.card.name}`}
          src={props.card.link}
        />
        <h3 className="popup__image-title">{props.card.name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;
