import Popup from "./Popup.js";
class PopupWithConfirm extends Popup {
    constructor(selector) {
        super(selector);
        this._submitButton = this._selector.querySelector('.popup__submit')
    }

    setEventListeners() {
        super.setEventListeners();
    }

    setSubmitAction(cardDelete) {
        this._submitButton.addEventListener('click', () => {
            cardDelete();
        })
    }

    close() {
        super.close();
    }

}

export default PopupWithConfirm