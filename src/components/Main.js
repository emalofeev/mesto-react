function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" alt="Аватар" src="#" />
        <div className="profile__avatar-button" onClick={onEditAvatar}></div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__edit-name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__info-about">Исслеодователь океана</p>
        </div>
        <button
          className="profile__button"
          type="button"
          aria-label="Добавить карточку с фотографией"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
