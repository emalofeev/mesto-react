import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onSubmit, onAddPlace }) {
  const counterRefName = useRef(0);
  const counterRefLink = useRef(0);

  useEffect(() => {
    counterRefName.current.value = "";
    counterRefLink.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: counterRefName.current.value,
      link: counterRefLink.current.value,
    });
    e.target.reset();
  }

  return (
    <PopupWithForm
      name={"card"}
      title={"Новое место"}
      button={"Создать"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_nameCard"
        placeholder="Название"
        name="name"
        type="text"
        minLength="2"
        maxLength="30"
        id="popup__input-error-nameCard"
        ref={counterRefName}
        required
      />
      <span className="popup__text-error popup__input-error-nameCard"></span>
      <input
        className="popup__input popup__input_type_linkCard"
        placeholder="Ссылка на картинку"
        name="link"
        type="url"
        id="popup__input-error-linkCard"
        ref={counterRefLink}
        required
      />
      <span className="popup__text-error popup__input-error-linkCard"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
