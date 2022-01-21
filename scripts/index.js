const editPopup = document.querySelector('.popup_edit')
const addPopup = document.querySelector('.popup_add')
const openPopupProfileButton = document.querySelector('.profile__edit-button');
const closePopupProfileButton = document.querySelector('.popup__close_edit');
const addNewCardButton = document.querySelector('.profile__add-button');
const closePopupAddButton = document.querySelector('.popup__close_add');
const formEditProfile = document.querySelector('.popup__form_edit');
const formAdd = document.querySelector('.popup__form_add')
const nameInput = document.querySelector('[name="user-name"]');
const statusInput = document.querySelector('[name="user-status"]');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const placeInput = document.querySelector('[name="place-name"]');
const linkInput = document.querySelector('[name="place-link"]');
const templateBox = document.querySelector('.template');
const listContainer = document.querySelector('.elements__list');
const popupImage = document.querySelector('.popup_image');
const popupImageCloseButton = document.querySelector('.popup__close_image')
const popupPlacePicture = document.querySelector('.popup__place-picture');
const popupPlaceName = document.querySelector('.popup__place-name');
const inputError = Array.from(document.querySelectorAll('.popup__input-error'));
const inputs = Array.from(document.querySelectorAll('.popup__data-box'));
const submitEditButton = formEditProfile.querySelector('.popup__submit');
const submitAddButton = formAdd.querySelector('.popup__submit');

import FormValidator from './FormValidator.js';
import card from './Card.js'

function render() {
  const cardsList = initialCards
    .map((place) => {
      const cardBox = new card('.template', place.name, place.link, handleOpenImage);
      return cardBox.getView();
    });
    listContainer.append(...cardsList);
}

const dataOfValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__data-box',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__data-box_error',
  errorClass: 'popup__input-error_visible'
});

const addCardValidation = new FormValidator(dataOfValidation, formAdd, (placeInput, imageInput) => {
  const createdCard = new card('.template', placeInput.value, imageInput.value, handleOpenImage);
  listContainer.prepend(createdCard.addCard(placeInput.value, imageInput.value, handleOpenImage) );
  hidePopup();
})
const editProfileValidation = new FormValidator(dataOfValidation, formEditProfile);
addCardValidation.enableValidtaion();
editProfileValidation.enableValidtaion();

function handleOpenImage(title, image) {
  showPopup(popupImage);
  document.querySelector('.popup__place-picture').src = image;
  document.querySelector('.popup__place-name').textContent = title;

}

function closePopupByEsc (evt) {
  if(evt.key === 'Escape') {
    hidePopup();
  }
}

function closePopupOnOverlay(evt) {
  if(evt.path[0].classList.contains('popup__overlay') ) {
    hidePopup();
  }
}

function resetPopup(popup) {
  inputError.forEach((error) => {
    error.textContent = '';
  });
  inputs.forEach((errorLine) => {
    errorLine.classList.remove('popup__data-box_error')
  });
}

function showPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('click', closePopupOnOverlay);
  document.addEventListener('keydown', closePopupByEsc);
}

function hidePopup() {
  const popup = document.querySelector('.popup_opened')
  popup.classList.remove('popup_opened');
  document.removeEventListener('click', closePopupOnOverlay);
  document.removeEventListener('keydown', closePopupByEsc);
}

function handleProfileSubmit (evt) {
  profileName.textContent = nameInput.value;
  profileStatus.textContent = statusInput.value;
  hidePopup();
}

openPopupProfileButton.addEventListener('click', () => {
  editProfileValidation.clearValidation();
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
  submitEditButton.disabled = false;
  submitEditButton.classList.remove('popup__submit_inactive');
  showPopup(editPopup);
  });
closePopupProfileButton.addEventListener('click', () => hidePopup() );
formEditProfile.addEventListener('submit', handleProfileSubmit );
addNewCardButton.addEventListener('click', () => {
  addCardValidation.clearValidation();
  showPopup(addPopup);
});
closePopupAddButton.addEventListener('click', () => hidePopup() );
popupImageCloseButton.addEventListener('click',() => hidePopup() );

render()