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
import card from './newCard.js'

function render() {
  const cardsList = initialCards
    .map((place) => {
      const cardBox = new card('.template', place.name, place.link);
      return cardBox.getView();
    });
    listContainer.append(...cardsList);
}

// function getItem(card) {
//   const newCard = templateBox.content.cloneNode(true);
//   const cardTitle = newCard.querySelector('.elements__title');
//   const imageElement = newCard.querySelector('.elements__image');
//   cardTitle.textContent = card.name;
//   imageElement.src = card.link;
//   const deleteButton = newCard.querySelector('.elements__delete-button');
//   deleteButton.addEventListener('click', handleDelete);
//   const likeButton = newCard.querySelector('.elements__like-button');
//   likeButton.addEventListener('click', handleLikeClick);
//   const imageAdress = imageElement.src;
//   imageElement.alt = card.name;
//   const imageTitle = cardTitle.textContent;
  // imageElement.addEventListener('click', () => {
  //   popupPlacePicture.src = imageAdress;
  //   popupPlacePicture.alt = card.name;
  //   popupPlaceName.textContent = imageTitle;
  //   showPopup(popupImage)
  //   });
//   return newCard;
// }

const dataOfValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__data-box',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__data-box_error',
  errorClass: 'popup__input-error_visible'
});

const addCardValidation = new FormValidator(dataOfValidation, formAdd, (placeInput, imageInput) => {
  const createdCard = new card('.template', placeInput.value, imageInput.value);
  createdCard.addCard(placeInput.value, imageInput.value);
  listContainer.prepend(createdCard);
})
const editProfileValidation = new FormValidator(dataOfValidation, formEditProfile);
addCardValidation.enableValidtaion();
editProfileValidation.enableValidtaion();

function closePopupByEsc (evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    hidePopup(popupOpened);
  }
}

function closePopupOnOverlay(evt) {
  if(evt.path[0].classList.contains('popup__overlay') ) {
    const popupOpened = document.querySelector('.popup_opened')
    hidePopup(popupOpened);
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

function hidePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('click', closePopupOnOverlay);
  document.removeEventListener('keydown', closePopupByEsc);
}

function handleProfileSubmit (evt) {
  profileName.textContent = nameInput.value;
  profileStatus.textContent = statusInput.value;
  hidePopup(editPopup);
}

// function handleAddCard(evt)  {
//   const placeText = placeInput.value;
//   const placeLink = linkInput.value;
//   const cardItem = getItem({name: placeText, link: placeLink});
//   listContainer.prepend(cardItem);
//   hidePopup(addPopup);
//   formAdd.reset();
//   submitAddButton.classList.add('popup__submit_inactive');
//   submitAddButton.disabled = true;
// }

function handleDelete(evt) {
  const targetEl = evt.target;
  const cardItem = targetEl.closest('.elements__box');
  cardItem.remove();
}

function handleLikeClick(evt) {
  const targetEl = evt.target;
  targetEl.classList.toggle('elements__like-button_active');
}

openPopupProfileButton.addEventListener('click', () => {
  resetPopup(editPopup);
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
  submitEditButton.disabled = false;
  submitEditButton.classList.remove('popup__submit_inactive');
  showPopup(editPopup);
  });
closePopupProfileButton.addEventListener('click', () => hidePopup(editPopup) );
formEditProfile.addEventListener('submit', handleProfileSubmit );
addNewCardButton.addEventListener('click', () => {
  resetPopup(addPopup);
  showPopup(addPopup);
});
closePopupAddButton.addEventListener('click', () => hidePopup(addPopup) );
// formAdd.addEventListener('submit', handleAddCard);
popupImageCloseButton.addEventListener('click',() => hidePopup(popupImage) );

render()