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
            .then((userObject) => {
                return userObject;
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
}

export default Api;