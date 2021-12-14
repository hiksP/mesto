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


function render() {
  const cardsList = initialCards
    .map((card) => {
      return getItem(card);
    });
    listContainer.append(...cardsList);
}

function getItem(card) {
  const newCard = templateBox.content.cloneNode(true);
  const cardTitle = newCard.querySelector('.elements__title');
  const imageElement = newCard.querySelector('.elements__image');
  cardTitle.textContent = card.name;
  imageElement.src = card.link;
  const deleteButton = newCard.querySelector('.elements__delete-button');
  deleteButton.addEventListener('click', handleDelete);
  const likeButton = newCard.querySelector('.elements__like-button');
  likeButton.addEventListener('click', handleLikeClick);
  const imageAdress = imageElement.src;
  imageElement.alt = card.name;
  const imageTitle = newCard.querySelector('.elements__title').textContent;
  imageElement.addEventListener('click', () => {
    popupPlacePicture.src = imageAdress;
    popupPlacePicture.alt = card.name;
    popupPlaceName.textContent = imageTitle;
    showPopup(popupImage)
    });
  return newCard;
}

function resetPopup(popup) {
  const inputError = popup.querySelectorAll('.popup__input-error');
  inputError.forEach((error) => {
    const input = error.previousElementSibling;
    input.classList.remove('popup__data-box_error');
    error.textContent = '';
  });
}

function showPopup(popup) {
  resetPopup(popup);
  popup.classList.add('popup_opened');
}

function hidePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleProfileSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = statusInput.value;
  hidePopup(editPopup);
}

function handleAddCard(evt)  {
  evt.preventDefault();
  const placeText = placeInput.value;
  const placeLink = linkInput.value;
  const cardItem = getItem({name: placeText, link: placeLink});
  listContainer.prepend(cardItem);
  hidePopup(addPopup);
  formAdd.reset();
}

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
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
  const submitButton = formEditProfile.querySelector('.popup__submit');
  submitButton.classList.remove('popup__submit_inactive');
  showPopup(editPopup);
  });
closePopupProfileButton.addEventListener('click', () => hidePopup(editPopup) );
formEditProfile.addEventListener('submit', handleProfileSubmit );
addNewCardButton.addEventListener('click', () => {
  formAdd.reset();
  const submitButton = formAdd.querySelector('.popup__submit');
  submitButton.classList.add('popup__submit_inactive');
  showPopup(addPopup);
});
closePopupAddButton.addEventListener('click', () => hidePopup(addPopup) );
formAdd.addEventListener('submit', handleAddCard);
popupImageCloseButton.addEventListener('click',() => hidePopup(popupImage) );

render()