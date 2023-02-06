function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="element" id={props._id}>
      <button
        className="element__delete"
        type="button"
        aria-label="Удалить фотографию"
      ></button>
      <img
        className="element__image"
        alt={props.name}
        src={props.link}
        onClick={handleClick}
      />
      <div className="element__item">
        <h2 className="element__item-name">{props.name}</h2>
        <div className="element__item-likes">
          <button
            className="element__item-like"
            type="button"
            aria-label="Лайкнуть"
          ></button>
          <span className="element__item-amount">{props.likes}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
