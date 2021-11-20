let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('[name="user_name"]');
let statusInput = document.querySelector('[name="user_status"]');
let nameStart = document.querySelector('.profile__name');
let statusStart = document.querySelector('.profile__status');

function showpop() {
  popup.classList.add('popup_opened');
  nameInput.value = nameStart.textContent;
  statusInput.value = statusStart.textContent;
}

function hidepop() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameStart.textContent = nameInput.value;
  statusStart.textContent = statusInput.value;
  hidepop();
}
openPopupButton.addEventListener('click', showpop);
closePopupButton.addEventListener('click', hidepop);
formElement.addEventListener('submit', formSubmitHandler);