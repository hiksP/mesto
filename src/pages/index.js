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
  openPopupProfileButton,
  addNewCardButton,
  formEditProfile,
  formAdd,
  nameInput,
  statusInput,
  profileName,
  profileAvatarPlace,
  profileStatus,
  placeNameInput,
  linkInput,
  submitButtonEdit,
  avatarButton,
  formAvatarChange,
  avatarInput,
  dataOfValidation
} from '../utils/constants.js';
import Popup from '../scripts/components/Popup.js';
import PopupWithConfirm from '../scripts/components/PopupWithConfirm.js'
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from '../scripts/components/UserInfo.js';
import Section from '../scripts/components/Section.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Card.js'
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import Api from '../scripts/components/Api.js';

function cardCreation({name, link, likes, _id, owner}, userId) {
  const handleOpenImage = () => {
   bigPicturePopup.open(name, link);
  }
  const handleOpenDeletePopup = (card) => {
    deletePopup.open();
    deletePopup.setSubmitAction(() => {
      api.deleteCard(_id)
      .then(res => {
        card.handleDeleteCard();
      })
      .catch(res => {
        console.log(res);
      })
      deletePopup.close();
    })
  }
  const likeCard = (card) => {
    const cardLikeCount = card.querySelector('.elements__likes-count');
    const likeButton = card.querySelector('.elements__like').querySelector('.elements__like-button');
    if(likeButton.classList.contains('elements__like-button_active')) {
      api.deleteLike(_id)
      .then(res => {
        cardLikeCount.textContent = res.likes.length;
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      api.addLike(_id)
      .then(res => {
        cardLikeCount.textContent = res.likes.length;
      })
      .catch(err => {
        console.log(err)
      })
    }
}
  const alt = name;
  const card = new Card('.template', name, link, alt, likes, owner._id, userId, handleOpenImage, handleOpenDeletePopup, likeCard);
  const cardBox = card.getView();
  return cardBox;
} 

const api = new Api({
  adress: 'https://mesto.nomoreparties.co/v1/cohort-35',
  token: 'd4eb43b8-f03a-4178-a37e-1c688ba22106'
});

const startingPage = new Section({
  renderer: (item) => {
    const cardElement = cardCreation(item, userOnThePage._id);
    startingPage.addItem(cardElement);
  }
}, '.elements__list');

api.getCards()
.then(cards => {
  startingPage.renderItems(cards);
})
.catch((err) => {
  console.log(err);
})

const userOnThePage = new UserInfo({
  userName: profileName,
  info: profileStatus,
  avatar: profileAvatarPlace });

api.getUserInfo()
.then((user) => {
  userOnThePage.setUserInfo(user.name, user.about, user.avatar, user._id);
})
.catch((err) => {
  console.log(err);
})

const bigPicturePopup = new PopupWithImage('.popup_image');
bigPicturePopup.setEventListeners();

const addCardValidation = new FormValidator(dataOfValidation, formAdd);
const editProfileValidation = new FormValidator(dataOfValidation, formEditProfile);
const changeAvatarValidation = new FormValidator(dataOfValidation, formAvatarChange);
addCardValidation.enableValidtaion();
editProfileValidation.enableValidtaion();
changeAvatarValidation.enableValidtaion();

function handleAddCard(placeInput, imageInput) {
  api.uploadCard(placeInput.value, imageInput.value)
  .then((res) => {
    startingPage.addItem(cardCreation(res, userOnThePage._id));
  })
  .catch((err) => {
    console.log(err);
  })
  addCardPopup.close();
}

function handleProfileSubmit () {
  const name = nameInput.value;
  const status = statusInput.value;
  api.editInfo(name, status)
  .then((res) => {
    userOnThePage.setUserInfo(res.name, res.about, profileAvatarPlace.src);
  })
  .catch((err) => {
    console.log(err);
  })
  editPopup.close();
}

function handleChangeAvatar () {
  const avatarLink = avatarInput.value;
  api.changeAvatar(avatarLink)
  .then((res) => {
    userOnThePage.setUserInfo(res.name, res.about, avatarLink);
  })
  .catch((err) => {
    console.log(err);
  })
  changeAvatarPopup.close();
}

const editPopup = new PopupWithForm('.popup_edit', handleProfileSubmit);
editPopup.setEventListeners();
const addCardPopup = new PopupWithForm('.popup_add',() => handleAddCard(placeNameInput, linkInput));
addCardPopup.setEventListeners();
const changeAvatarPopup = new PopupWithForm('.popup_change-photo', handleChangeAvatar);
changeAvatarPopup.setEventListeners();
const deletePopup = new PopupWithConfirm('.popup_confirm');
deletePopup.setEventListeners();

openPopupProfileButton.addEventListener('click', () => {
  editProfileValidation.clearValidation();
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
  submitButtonEdit.disabled = false;
  submitButtonEdit.classList.remove('popup__submit_inactive');
  editPopup.open();
  });
addNewCardButton.addEventListener('click', () => {
  addCardValidation.clearValidation();
  addCardPopup.open();
});
avatarButton.addEventListener('click', () => {
  changeAvatarValidation.clearValidation();
  changeAvatarPopup.open();
})