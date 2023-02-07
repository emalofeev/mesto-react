function ImagePopup({ isOpen, onClose, card }) {
  return (
    <div className={`popup popup_type_image ${isOpen ? `popup_opened` : ""}`}>
      <div className="popup__container-image">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть окно с фотографией"
          onClick={onClose}
        ></button>
        <img className="popup__image" alt={`${card.name}`} src={card.link} />
        <h3 className="popup__image-title">{card.name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;
