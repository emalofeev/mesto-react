// import './App.css';
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <>
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />

      <Footer />

      <PopupWithForm
        name={"avatar"}
        title={"Обновить аватар"}
        button={"Сохранить"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              className="popup__input popup__input_type_linkAvatar"
              placeholder="Ссылка на аватар"
              name="avatar"
              type="url"
              id="popup__input-error-linkAvatar"
              required
            />
            <span className="popup__text-error popup__input-error-linkAvatar"></span>
          </>
        }
      />

      <PopupWithForm
        name={"profile"}
        title={"Редактировать профиль"}
        isOpen={isEditProfilePopupOpen}
        button={"Сохранить"}
        onClose={closeAllPopups}
        children={
          <>
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
          </>
        }
      />

      <PopupWithForm
        name={"card"}
        title={"Новое место"}
        isOpen={isAddPlacePopupOpen}
        button={"Создать"}
        onClose={closeAllPopups}
        children={
          <>
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
          </>
        }
      />

      <div className="popup popup_type_delete">
        <div className="popup__container popup__container-delete">
          <button
            className="popup__close"
            type="button"
            aria-label="Закрыть окно подтверждения удаления карточки"
          ></button>
          <h3 className="popup__content-question">Вы уверены?</h3>
          <form
            className="popup__content popup__content_type_delete"
            name="delete-card"
            noValidate
          >
            <button className="popup__content-delete" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>

      <template id="element-template" className="element-template">
        <article className="element">
          <button
            className="element__delete"
            type="button"
            aria-label="Удалить фотографию"
          ></button>
          <img className="element__image" alt="" src="#" />
          <div className="element__item">
            <h2 className="element__item-name"></h2>
            <div className="element__item-likes">
              <button
                className="element__item-like"
                type="button"
                aria-label="Лайкнуть"
              ></button>
              <span className="element__item-amount"></span>
            </div>
          </div>
        </article>
      </template>
    </>
  );
}

export default App;
