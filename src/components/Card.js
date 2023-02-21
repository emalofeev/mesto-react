import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardDelete, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `element__item-like ${
    isLiked && "element__item-like_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <article className="element">
      {isOwn && (
        <button className="element__delete" onClick={handleDeleteClick} />
      )}
      <img
        className="element__image"
        alt={card.name}
        src={card.link}
        onClick={handleClick}
      />
      <div className="element__item">
        <h2 className="element__item-name">{card.name}</h2>
        <div className="element__item-likes">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Лайкнуть"
            onClick={handleLikeClick}
          ></button>
          <span className="element__item-amount">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
