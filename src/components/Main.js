import React from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");

  const [userDescription, setUserDescription] = React.useState("");

  const [userAvatar, setUserAvatar] = React.useState("");

  const [cards, setCards] = React.useState([]);

  const cardsElements = cards.map((card) => {
    return <Card key={card._id} onCardClick={onCardClick} card={card} />;
  });

  React.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
      .then((data) => {
        setUserName(data[0].name);
        setUserDescription(data[0].about);
        setUserAvatar(data[0].avatar);
        setCards(data[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" alt="Аватар" src={userAvatar} />
        <div className="profile__avatar-button" onClick={onEditAvatar}></div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__edit-name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__info-about">{userDescription}</p>
        </div>
        <button
          className="profile__button"
          type="button"
          aria-label="Добавить карточку с фотографией"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">{cardsElements}</section>
    </main>
  );
}

export default Main;
