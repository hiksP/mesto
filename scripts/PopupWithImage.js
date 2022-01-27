import Popup from "./Popup.js";
class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);

    }

    open(place) {
        super.open();
        this._imageLink = this._selector.querySelector('.popup__place-picture');
        this._placeName = this._selector.querySelector('.popup__place-name');
        this._imageLink.src = place.link;
        this._placeName.textContent = place.name;
    }
}

export default PopupWithImage;