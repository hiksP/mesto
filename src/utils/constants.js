export const cardsList = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Челябинская область'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал'
  }
];
export const openPopupProfileButton = document.querySelector('.profile__edit-button');
export const addNewCardButton = document.querySelector('.profile__add-button');
export const formEditProfile = document.querySelector('.popup__form_edit');
export const formAdd = document.querySelector('.popup__form_add')
export const nameInput = document.querySelector('[name="user-name"]');
export const statusInput = document.querySelector('[name="user-status"]');
export const profileName = document.querySelector('.profile__name');
export const profileAvatarPlace = document.querySelector('.profile__avatar');
export const profileStatus = document.querySelector('.profile__status');
export const placeNameInput = document.querySelector('[name="place-name"]');
export const linkInput = document.querySelector('[name="place-link"]');
export const listContainer = document.querySelector('.elements__list');
export const submitButtonEdit = formEditProfile.querySelector('.popup__submit');
export const dataOfValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__data-box',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__data-box_error',
  errorClass: 'popup__input-error_visible'
});