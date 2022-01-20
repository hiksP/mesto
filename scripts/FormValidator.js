class FormValidator {
    constructor(data, formSelector, submitCard) {
        this._formSelector = formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._submitCard = submitCard;
        this._inputs = Array.from(this._formSelector.querySelectorAll(this._inputSelector) );
        this._button = this._formSelector.querySelector(this._submitButtonSelector);
    }

    _showError = (input, errorMessageText) => {
        const errorMessage = this._formSelector.querySelector(`#${input.name}-error`);
        errorMessage.textContent = errorMessageText;
        errorMessage.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideError = (input) => {
        const errorMessage = this._formSelector.querySelector(`#${input.name}-error`);
        errorMessage.textContent = ' ';
        errorMessage.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    }

    _hasInvalidInput = () => {
        return this._inputs.some( (element) => !element.validity.valid); 
    }

    _toggleButtonError = () => {
      if (this._hasInvalidInput() ) {
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

    _handleSubmit = () => {
        const nameInput = this._formSelector.querySelector('[name="place-name"]');
        const imageInput = this._formSelector.querySelector('[name="place-link"]');
        this._submitCard(nameInput, imageInput);
        nameInput.value = '';
        imageInput.value = '';
        this._button.disabled = true;
        this._button.classList.add('popup__submit_inactive');
    }

    _setInputListeners = () => {
        this._toggleButtonError();
        this._inputs.forEach( (input) => {
            input.addEventListener('input', () => {
                this._checkIfInputValid(input);
                this._toggleButtonError();
            });
        });
    }

    enableValidtaion = () => {
        this._formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            if (this._formSelector.classList.contains('popup__form_add') ) {
                this._formSelector.addEventListener('submit', this._handleSubmit() );
            }
        });

        this._setInputListeners();
    }

    clearValidation = () => {
        this._toggleButtonError();
        this._inputs.forEach((input) => {
            this._hideError(input);
        });
    }

}

export default FormValidator