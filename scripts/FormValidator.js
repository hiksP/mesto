class FormValidator {
    constructor(data, formSelector) {
        this._formSelector = formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
    }


    _getTemplate() {
        return document.querySelector(this._selector)
    }

    _handlesubmit = (evt) => {
        evt.preventDefault();
        const input = this._element.querySelector('.popup__data-box');
        this._onSubmit(input.value);
        input.value = '';
    }

    getView() {
        this._element = this._getTemplate();
        this._element.addEventListener('submit', this._handlesubmit() );
    }

}

export default FormValidator