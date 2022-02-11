class Api {
    constructor({adress, token}) {
        this._adress = adress;
        this._token = token;
    }

    getUserInfo() {
        return fetch(`${this._adress}/users/me`, {
            headers: {
                authorization: this._token
            }
        }) .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`) 
        })
    }

    getCards() {
        return fetch(`${this._adress}/cards`, {
            headers: {
                authorization: this._token
            }
        }) .then(response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject(`Ошибка ${response.status}`) 
        })
    }
    
    editInfo(name, status) {
        return fetch(`${this._adress}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: status
            })
        }) .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`)
        })
    }

    uploadCard(cardName, cardLink) {
        return fetch(`${this._adress}/cards`, {
            method: "POST",
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: cardName,
                link: cardLink
            })
        }) .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`)
        })
    }

    deleteCard(cardId) {
        return fetch(`${this._adress}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._token,
            }
        }) .then(response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject(`Ошибка ${response.status}`) 
        })
    }


}

export default Api;