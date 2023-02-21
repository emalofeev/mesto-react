import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardContext } from "../contexts/CardContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
      .then((data) => {
        setCurrentUser(data[0]);
        setCards(data[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    if (!isLiked) {
      api.addLike(card._id).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    } else {
      api.deleteLike(card._id).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((cards) => cards.filter((c) => c._id !== card._id));
    });
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
      <CurrentUserContext.Provider value={currentUser}>
        <CardContext.Provider value={cards}>
          <Header />

          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
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
        </CardContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
