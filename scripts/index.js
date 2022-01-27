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
const submitEditButton = formEditProfile.querySelector('.popup__submit');
const cardsList = initialCards;

import Popup from './Popup.js';
import PopupWithImage from "./PopupWithImage.js";
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import Card from './Card.js'
import PopupWithForm from './PopupWithForm.js';

const bigPicturePopup = new PopupWithImage('.popup_image');
bigPicturePopup.setEventListeners();

function cardCreation(place) {
  const handleOpenImage = () => {
   bigPicturePopup.open(place);
  }
  const card = new Card('.template', place.name, place.link, handleOpenImage);
  const cardBox = card.getView();
  return cardBox;
}

const StartingPage = new Section({
  items: cardsList,
  renderer: (item) => {
    const cardElement = cardCreation(item);
    StartingPage.addItem(cardElement);
  }
}, '.elements__list');

StartingPage.renderItems();

const dataOfValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__data-box',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__data-box_error',
  errorClass: 'popup__input-error_visible'
});

const addCardValidation = new FormValidator(dataOfValidation, formAdd);
const editProfileValidation = new FormValidator(dataOfValidation, formEditProfile);
addCardValidation.enableValidtaion();
editProfileValidation.enableValidtaion();

function handleAddCard(placeInput, imageInput) {
  const createdCard = new Card('.template', placeInput.value, imageInput.value, handleOpenImage);
  listContainer.prepend(createdCard.getView() );
  addCardPopup.close();
}

function handleProfileSubmit (evt) {
  profileName.textContent = nameInput.value;
  profileStatus.textContent = statusInput.value;
  EditPopup.close();
}

const EditPopup = new PopupWithForm('.popup_edit', handleProfileSubmit);
EditPopup.setEventListeners();
const addCardPopup = new PopupWithForm('.popup_add',);
addCardPopup.setEventListeners();

openPopupProfileButton.addEventListener('click', () => {
  editProfileValidation.clearValidation();
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
  submitEditButton.disabled = false;
  submitEditButton.classList.remove('popup__submit_inactive');
  EditPopup.open();
  });
addNewCardButton.addEventListener('click', () => {
  addCardValidation.clearValidation();
  addCardPopup.open();
});
formAdd.addEventListener('submit', () => {
  handleAddCard(placeInput, linkInput);
})
