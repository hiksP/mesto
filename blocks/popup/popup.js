const initialCards = [
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

let popup = document.querySelector('.popup');
let editPopup = document.querySelector('.popup_edit')
let addPopup = document.querySelector('.popup_add')
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close_edit');
let addButton = document.querySelector('.profile__add-button');
let closePopupAddButton = document.querySelector('.popup__close_add');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('[name="user_name"]');
let statusInput = document.querySelector('[name="user_status"]');
let nameStart = document.querySelector('.profile__name');
let statusStart = document.querySelector('.profile__status');
let placeInput = document.querySelector('[name="place_name"]');
let linkInput = document.querySelector('[name="place_link"]');
const templateBox = document.querySelector('.template');
const listContainer = document.querySelector('.elements__list');


function render() {
  const html = initialCards
    .map((card) => {
      return getItem(card);
    });
    listContainer.append(...html);
}

function getItem(card) {
  const newCard = templateBox.content.cloneNode(true);
  const headerEl = newCard.querySelector('.elements__title');
  const imageEL = newCard.querySelector('.elements__image');
  headerEl.textContent = card.name;
  imageEL.src = card.link;
  const deleteButton = newCard.querySelector('.elements__delete-button');
  deleteButton.addEventListener('click', handleDelete);
  const likeButton = newCard.querySelector('.elements__like-button');
  likeButton.addEventListener('click', like);
  return newCard;
}

function showpop(popup) {
  popup.classList.add('popup_opened')
}

function hidepop(popup) {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameStart.textContent = nameInput.value;
  statusStart.textContent = statusInput.value;
  hidepop();
}

function handleAdd()  {
  const placeText = placeInput.value;
  const placeLink = linkInput.value;
  const cardItem = getItem({title: placeText, link: placeLink});
  listContainer.prepend(cardItem);
  placeInput.value = '';
}

function handleDelete(evt) {
  const targetEl = evt.target;
  const cardItem = targetEl.closest('.elements__box');
  cardItem.remove();
}

function like(evt) {
  const targetEl = evt.target;
  targetEl.classList.toggle('elements__like-button_active');
}

openPopupButton.addEventListener('click', () => showpop(editPopup) );
closePopupButton.addEventListener('click', () => hidepop(editPopup) );
formElement.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', () => showpop(addPopup) );
closePopupAddButton.addEventListener('click', () => hidepop(addPopup) );

render()