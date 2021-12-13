const checkIfInputValid = (form, input) => {
  if (!input.validity.valid) {
    console.log('nicht valid')
  } else {
    console.log('valid')
  }
}

const setInputListeners = (form, {inputSelector} ) => {
  const inputs = form.querySelectorAll(inputSelector);

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      checkIfInputValid(form, input);
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
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});