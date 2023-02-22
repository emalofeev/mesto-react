import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onSubmit, onUpdateAvatar }) {
  const [link, setAvatar] = React.useState("");
  const counterRef = React.useRef(0);
  
  function handleChangeAvatar(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: link,
    });
  }

  return (
    <PopupWithForm
      name={"avatar"}
      title={"Обновить аватар"}
      button={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_linkAvatar"
        placeholder="Ссылка на аватар"
        name="avatar"
        type="url"
        id="popup__input-error-linkAvatar"
        ref={counterRef}
        onChange={handleChangeAvatar}
        required
      />
      <span className="popup__text-error popup__input-error-linkAvatar"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
