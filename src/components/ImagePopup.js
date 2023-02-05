function ImagPopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container-image">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть окно с фотографией"
        ></button>
        <img className="popup__image" alt="" src="#" />
        <h3 className="popup__image-title"></h3>
      </div>
    </div>
  );
}

export default ImagPopup;
