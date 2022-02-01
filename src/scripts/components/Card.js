class Card {
    constructor(selector, title, image, alt, openPopup) {
        this._selector = selector;
        this._title = title;
        this._image = image;
        this._alt = alt;
        this._handleCardClick = openPopup;
    }

    _getTemplate() {
        return document.querySelector(this._selector)
        .content
        .querySelector('.elements__box')
        .cloneNode(true)
    }

    _handleDeleteCard = () => {
        this._element.remove();
        this._element = null;   
    }

    _handlePressLike = () => {
        this._element.querySelector('.elements__like-button').classList.toggle('elements__like-button_active');
    }

    _addEventListeners = () => {
        this._element.querySelector('.elements__image').addEventListener('click',() => {
            this._handleCardClick()
        });
        this._element.querySelector('.elements__delete-button').addEventListener('click', this._handleDeleteCard);
        this._element.querySelector('.elements__like-button').addEventListener('click', this._handlePressLike);
    }

    getView() {
        this._element = this._getTemplate();
        this._element.querySelector('.elements__title').textContent = this._title;
        this._element.querySelector('.elements__image').src = this._image;
        this._element.querySelector('.elements__image').alt = this._alt;
        this._addEventListeners();
        return this._element;
    }
}

export default Card;