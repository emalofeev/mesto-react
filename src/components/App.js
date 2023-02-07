import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name={"avatar"}
        title={"Обновить аватар"}
        button={"Сохранить"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_linkAvatar"
          placeholder="Ссылка на аватар"
          name="avatar"
          type="url"
          id="popup__input-error-linkAvatar"
          required
        />
        <span className="popup__text-error popup__input-error-linkAvatar"></span>
      </PopupWithForm>

      <PopupWithForm
        name={"profile"}
        title={"Редактировать профиль"}
        button={"Сохранить"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_name"
          name="name"
          type="text"
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
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          id="popup__input-error-about"
          required
        />
        <span className="popup__text-error popup__input-error-about"></span>
      </PopupWithForm>

      <PopupWithForm
        name={"card"}
        title={"Новое место"}
        button={"Создать"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_nameCard"
          placeholder="Название"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          id="popup__input-error-nameCard"
          required
        />
        <span className="popup__text-error popup__input-error-nameCard"></span>
        <input
          className="popup__input popup__input_type_linkCard"
          placeholder="Ссылка на картинку"
          name="link"
          type="url"
          id="popup__input-error-linkCard"
          required
        />
        <span className="popup__text-error popup__input-error-linkCard"></span>
      </PopupWithForm>

      <ImagePopup
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
        card={selectedCard}
      />
    </>
  );
}

export default App;
