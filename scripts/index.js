const editPopup = document.querySelector('.popup_edit')
const addPopup = document.querySelector('.popup_add')
const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close_edit');
const addButton = document.querySelector('.profile__add-button');
const closePopupAddButton = document.querySelector('.popup__close_add');
const formElement = document.querySelector('.popup__form_edit');
const formAdd = document.querySelector('.popup__form_add')
const nameInput = document.querySelector('[name="user-name"]');
const statusInput = document.querySelector('[name="user-status"]');
const nameStart = document.querySelector('.profile__name');
const statusStart = document.querySelector('.profile__status');
const placeInput = document.querySelector('[name="place-name"]');
const linkInput = document.querySelector('[name="place-link"]');
const templateBox = document.querySelector('.template');
const listContainer = document.querySelector('.elements__list');
const popupImage = document.querySelector('.popup_image');
const popupImageClose = document.querySelector('.popup__close_image')
const popupPlacePicture = document.querySelector('.popup__place-picture');
const popupPlaceName = document.querySelector('.popup__place-name');


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
  const imageAdress = imageEL.src
  const imageTitle = newCard.querySelector('.elements__title').textContent;
  imageEL.addEventListener('click', () => {
    popupPlacePicture.src = imageAdress;
    popupPlaceName.textContent = imageTitle;
    showpop(popupImage)
    });
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
  hidepop(editPopup);
}

function handleAdd(evt)  {
  evt.preventDefault();
  const placeText = placeInput.value;
  const placeLink = linkInput.value;
  const cardItem = getItem({name: placeText, link: placeLink});
  listContainer.prepend(cardItem);
  hidepop(addPopup);
  formAdd.reset();
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

openPopupButton.addEventListener('click', () => {
  nameInput.value = nameStart.textContent;
  statusInput.value = statusStart.textContent;
  showpop(editPopup);
  });
closePopupButton.addEventListener('click', () => hidepop(editPopup) );
formElement.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', () => showpop(addPopup) );
closePopupAddButton.addEventListener('click', () => hidepop(addPopup) );
formAdd.addEventListener('submit', handleAdd);
popupImageClose.addEventListener('click',() => hidepop(popupImage) );

render()