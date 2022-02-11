import Popup from "./Popup.js";
class PopupWithConfirm extends Popup {
    constructor(selector) {
        super(selector);
        // this._handleConfirm = handleConfirm;
        this._submitButton = this._selector.querySelector('.popup__submit')
    }

    setEventListeners() {
        super.setEventListeners();
    }

    setSubmitAction(func) {
        this._handleConfirm = func;
        this._submitButton.addEventListener('click', () => {
            func();
        })
    }

    close() {
        super.close();
    }

}

export default PopupWithConfirm