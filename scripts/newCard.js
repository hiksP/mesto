class newCard {
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

    getView() {
        this._element = this._getTemplate();
        this._element.querySelector('.elements__title').textContent = this._title;
        this._element.querySelector('.elements__image').src = this._image;
        return this._element;
    }
}

export default newCard;