import Popup from "./Popup.js";
class PopupWithForm extends Popup {
    constructor(selector, handleSubmit) {
        super(selector);
        this._handleSubmit = handleSubmit;
    }

    _getInputValues() {
        
    }

    setEventListeners() {
        super.setEventListeners();
        this._selector.addEventListener('submit', this._handleSubmit);
    }

    close() {
        super.close();
    }

}

export default PopupWithForm