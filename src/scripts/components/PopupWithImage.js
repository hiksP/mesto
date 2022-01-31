import Popup from "./Popup.js";
class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);

    }

    open(name, link) {
        super.open();
        this._imageLink = this._selector.querySelector('.popup__place-picture');
        this._placeName = this._selector.querySelector('.popup__place-name');
        this._imageLink.src = link;
        this._placeName.textContent = name;
    }
}

export default PopupWithImage;