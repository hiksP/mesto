import './index.css';
import deleteButton from '../images/deleteButton.svg';
import headerLine from '../images/headerLine.jpg';
import headerLogo from '../images/headerLogo.svg';
import likeButton from '../images/likeButton.svg';
import likeButtonActive from '../images/likeButtonActive.svg';
import popupCloseButton from '../images/popupCloseButton.svg';
import profileAddButton from '../images/profileAddButton.svg';
import profileAvatar from '../images/profileAvatar.jpg';
import profileEditButton from '../images/profileEditButton.svg';
import {
  cardsList,
  openPopupProfileButton,
  addNewCardButton,
  formEditProfile,
  formAdd,
  nameInput,
  statusInput,
  profileName,
  profileStatus,
  placeNameInput,
  linkInput,
  listContainer,
  dataOfValidation
} from '../utils/constants.js';
import Popup from '../scripts/components/Popup.js';
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from '../scripts/components/UserInfo.js';
import Section from '../scripts/components/Section.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Card.js'
import PopupWithForm from '../scripts/components/PopupWithForm.js';

function cardCreation({name, link, alt}) {
  const handleOpenImage = () => {
   bigPicturePopup.open(name, link);
  }
  const card = new Card('.template', name, link, alt, handleOpenImage);
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

const bigPicturePopup = new PopupWithImage('.popup_image');
bigPicturePopup.setEventListeners();

const addCardValidation = new FormValidator(dataOfValidation, formAdd);
const editProfileValidation = new FormValidator(dataOfValidation, formEditProfile);
addCardValidation.enableValidtaion();
editProfileValidation.enableValidtaion();

const userOnThePage = new UserInfo({
  userName: profileName,
  info: profileStatus});

function handleAddCard(placeInput, imageInput) {
  let card = {
    name: placeInput.value,
    link: imageInput.value,
    alt: placeInput.value
  };
  const createdCard = cardCreation(card);
  listContainer.prepend(createdCard);
  addCardPopup.close();
}

function handleProfileSubmit () {
  const name = nameInput.value;
  const status = statusInput.value;
  userOnThePage.setUserInfo(name, status);
  EditPopup.close();
}

const EditPopup = new PopupWithForm('.popup_edit', handleProfileSubmit);
EditPopup.setEventListeners();
const addCardPopup = new PopupWithForm('.popup_add',() => handleAddCard(placeNameInput, linkInput));
addCardPopup.setEventListeners();

openPopupProfileButton.addEventListener('click', () => {
  editProfileValidation.clearValidation();
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
  editProfileValidation._toggleButtonError();
  EditPopup.open();
  });
addNewCardButton.addEventListener('click', () => {
  addCardValidation.clearValidation();
  addCardPopup.open();
});