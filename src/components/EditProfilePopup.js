import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onSubmit, onUpdateUser }) {
  const [name, setName] = React.useState("");

  const [description, setDescription] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name={"profile"}
      title={"Редактировать профиль"}
      button={"Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_name"
        name="name"
        type="text"
        value={name || ""}
        onChange={handleChangeName}
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        id="popup__input-error-name"
        required
      />
      <span className="popup__text-error popup__input-error-name"></span>
      <input
        className="popup__input popup__input_type_about"
        name="about"
        type="text"
        value={description || ""}
        onChange={handleChangeDescription}
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        id="popup__input-error-about"
        required
      />
      <span className="popup__text-error popup__input-error-about"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
