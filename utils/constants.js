export const cardsList = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
export const editPopup = document.querySelector('.popup_edit')
export const addPopup = document.querySelector('.popup_add')
export const openPopupProfileButton = document.querySelector('.profile__edit-button');
export const closePopupProfileButton = document.querySelector('.popup__close_edit');
export const addNewCardButton = document.querySelector('.profile__add-button');
export const closePopupAddButton = document.querySelector('.popup__close_add');
export const formEditProfile = document.querySelector('.popup__form_edit');
export const formAdd = document.querySelector('.popup__form_add')
export const nameInput = document.querySelector('[name="user-name"]');
export const statusInput = document.querySelector('[name="user-status"]');
export const profileName = document.querySelector('.profile__name');
export const profileStatus = document.querySelector('.profile__status');
export const placeNameInput = document.querySelector('[name="place-name"]');
export const linkInput = document.querySelector('[name="place-link"]');
export const templateBox = document.querySelector('.template');
export const listContainer = document.querySelector('.elements__list');
export const popupImage = document.querySelector('.popup_image');
export const popupImageCloseButton = document.querySelector('.popup__close_image')
export const popupPlacePicture = document.querySelector('.popup__place-picture');
export const popupPlaceName = document.querySelector('.popup__place-name');
export const submitEditButton = formEditProfile.querySelector('.popup__submit');