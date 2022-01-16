class FormValidator {
    constructor(data, formSelector) {
        this._formSelector = formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._inputs = Array.from(this._formSelector._querySelectorAll(this._inputSelector) );
        this._button = this._formSelector.querySelector(this._popup__submit);

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

    _hasInvalidInput = () => {
        return this._inputs.some( (element) => !element.validity.valid);
    }

    _toggleButtonError = () => {
      if (this.__inputSelector._hasInvalidInput(inputs) ) {
        this._button.classList.add(this._inactiveButtonClass);
        this._button.disable = true;
      } else {
        this._button.classList.remove(this._inactiveButtonClass);
        this._button.disable = false;
      }
    }

    _checkIfInputValid = (input) => {
        if (!input.validity.valid) {
            this._showError(input, input.validationMessage);
        } else {
            this._hideError(input);
        }
    }

    _setInputListeners = () => {
        this._toggleButtonError();
        inputs.forEach( (input) => {
            input.addEventListener('input', () => {
                this._checkIfInputValid(input);
                this._toggleButtonError();
            });
        });
    }

}

export default FormValidator