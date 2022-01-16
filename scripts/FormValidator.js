class FormValidator {
    constructor(data, formSelector) {
        this._formSelector = formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._inputs = Array.from(this._formSelector._querySelectorAll(this._inputSelector) );

    }

    _showError = (input, errorMessageText) => {
        const errorMessage = this._querySelector(`#${input.name}-error`);
        errorMessage.textContent = errorMessageText;
        errorMessage.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideError = (input) => {
        const errorMessage = this._querySelector(`#${input.name}-error`);
        errorMessage.textContent = ' ';
        errorMessage.classList.remove(this._errorClass);
        input.classList.remove(inputErrorClass);
    }

    _hasInvalidInput = (inputs) => {
        return this._inputs.some( (element) => !element.validity.valid);
    }

    
}

export default FormValidator