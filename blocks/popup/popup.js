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
const templateBox = document.querySelector('.template');
const ListContainer = document.querySelector('.elements__list');

function render() {
  const html = initialCards
    .map((item) => {
      return getItem(item);
    });
    ListContainer.append(...html);
}

function getItem(item) {
  const newItem = templateBox.content.cloneNode(true);
  const headerEl = newItem.querySelector('.elements__title');
  const imageEL = newItem.querySelector('.elements__image');
  headerEl.textContent = item.name;
  imageEL.src = item.link;
  return newItem;
}

render()

let popupEdit = document.querySelector('.popup_edit');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('[name="user_name"]');
let statusInput = document.querySelector('[name="user_status"]');
let nameStart = document.querySelector('.profile__name');
let statusStart = document.querySelector('.profile__status');
let placeInput = document.querySelector('[name="place_name"]');
let linkInput = document.querySelector('[name="place_link"]');

function showpop() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = nameStart.textContent;
  statusInput.value = statusStart.textContent;
}

function hidepop() {
  popupEdit.classList.remove('popup_opened');
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
