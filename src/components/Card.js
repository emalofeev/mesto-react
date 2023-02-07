function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <button
        className="element__delete"
        type="button"
        aria-label="Удалить фотографию"
      ></button>
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
            className="element__item-like"
            type="button"
            aria-label="Лайкнуть"
          ></button>
          <span className="element__item-amount">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
