class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }

  editProfile(dataUser) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(dataUser),
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }

  addCard(dataCard) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(dataCard),
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }

  addLike(id) {
    return fetch(`${this._baseUrl}cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }

  changeAvatar(link) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(link),
    })
      .then(this._getResponseData)
      .catch((err) => {
        console.log(err);
      });
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-57/",
  headers: {
    authorization: "dc84dd50-cc4d-44d6-abd1-1dd8f8bfa8b4",
    "Content-Type": "application/json",
  },
});
