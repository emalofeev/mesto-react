import React from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");

  const [userDescription, setUserDescription] = React.useState("");

  const [userAvatar, setUserAvatar] = React.useState("");

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" alt="Аватар" src={userAvatar} />
        <div
          className="profile__avatar-button"
          onClick={props.onEditAvatar}
        ></div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__edit-name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__info-about">{userDescription}</p>
        </div>
        <button
          className="profile__button"
          type="button"
          aria-label="Добавить карточку с фотографией"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={props.onCardClick}
              card={card}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
