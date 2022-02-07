class Api {
    constructor({adress, token}) {
        this._adress = adress;
        this._token = token;
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