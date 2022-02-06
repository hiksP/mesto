import Popup from "./Popup.js";
class PopupWithForm extends Popup {
    constructor(selector, handleSubmit) {
        super(selector);
        this._handleSubmit = handleSubmit;
        this._form = this._selector.querySelector('.popup__form');
        this._inputs = this._form.querySelectorAll('.popup__data-box');
    }

    _getInputValues() {
        this._values = {};
        this._inputs.forEach((input) => {
            this._values[input.name] = input.value;
        });

        return this._values;
    }

    setEventListeners() {
        super.setEventListeners();
        this._selector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
            this.close();
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

}

export default PopupWithForm