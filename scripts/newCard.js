class card {
    constructor(selector, title, image) {
        this._selector = selector;
        this._title = title;
        this._image = image;
    }

    _getTemplate() {
        return document.querySelector(this._selector)
        .content
        .querySelector('.elements__box')
        .cloneNode(true)
    }

    _handleDeleteCard = () => {
        this._element.remove();
    }

    _handlePressLike = () => {
        this._element.querySelector('.elements__like-button').classList.toggle('elements__like-button_active');
    }

    _handleOpenImagePopup = () => {
        document.querySelector('.popup_image').classList.add('popup_opened');
    }

    _addCard = (title, link) => {
        const place = new card('.elements__box', title, image);
        this._element.append(place.getView() )
    }

    getView() {
        this._element = this._getTemplate();
        this._element.querySelector('.elements__title').textContent = this._title;
        this._element.querySelector('.elements__image').src = this._image;
        this._element.querySelector('.elements__image').addEventListener('click', this._handleOpenImagePopup);
        this._element.querySelector('.elements__delete-button').addEventListener('click', this._handleDeleteCard);
        this._element.querySelector('.elements__like-button').addEventListener('click', this._handlePressLike);
        return this._element;
    }
}

export default card;