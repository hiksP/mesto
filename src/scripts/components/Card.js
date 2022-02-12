class Card {
    constructor(selector, title, image, alt, likes, ownerId, userId, openPopup, deleteCardPopup) {
        this._selector = selector;
        this._title = title;
        this._image = image;
        this._alt = alt;
        this._likes = likes;
        this._ownerId = ownerId;
        this._userId = userId;
        this._handleCardClick = openPopup;
        this._handleDeleteCardPopup = deleteCardPopup;
    }

    _getTemplate() {
        return document.querySelector(this._selector)
        .content
        .querySelector('.elements__box')
        .cloneNode(true)
    }

    handleDeleteCard = () => {
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
        this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
            this._handleDeleteCardPopup(this);
        });
        this._element.querySelector('.elements__like-button').addEventListener('click', this._handlePressLike);
    }

    _hideTrash = () => {
        if(this._ownerId != this._userId) {
            this._element.querySelector('.elements__delete-button').classList.add('elements__delete-button_inactive');
        }
    }

    _likeChek = () => {
        this._likes.forEach((item) => {
            if(item._id === this._ownerId) {
                this._element.querySelector('.elements__like-button').classList.add('elements__like-button_active')
            }
        });
    }

    getView() {
        this._element = this._getTemplate();
        this._element.querySelector('.elements__title').textContent = this._title;
        this._element.querySelector('.elements__image').src = this._image;
        this._element.querySelector('.elements__image').alt = this._alt;
        this._element.querySelector('.elements__likes-count').textContent = this._likes.length;
        this._hideTrash();
        this._likeChek();
        this._addEventListeners();
        return this._element;
    }
}

export default Card;