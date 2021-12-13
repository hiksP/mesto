const showError = (form, input, errorMessageText, errorClass, inputErrorClass) => {
  const errorMessage = form.querySelector(`#${input.name}-error`)
  errorMessage.textContent = errorMessageText
  errorMessage.classList.add(errorClass);
  input.classList.add(inputErrorClass);
}

const hideError = (form, input, errorClass, inputErrorClass) => {
  const errorMessage = form.querySelector(`#${input.name}-error`)
  errorMessage.textContent = ' '
  errorMessage.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
}

const checkIfInputValid = (form, input, {inputErrorClass, errorClass }) => {
  if (!input.validity.valid) {
    showError(form, input, input.validationMessage, inputErrorClass, errorClass)
  } else {
    hideError(form, input, inputErrorClass, errorClass)
  }
}

const setInputListeners = (form, {inputSelector, ...rest} ) => {
  const inputs = form.querySelectorAll(inputSelector);

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      checkIfInputValid(form, input, rest);
    });
  });
  
}

const enableValidation = ({ formSelector, ...rest }) => {
  const forms = document.querySelectorAll(formSelector);

  forms.forEach((form) => {
      form.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    setInputListeners(form, rest);
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__data-box',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__error_visible',
  errorClass: 'popup__data-box_error'
});