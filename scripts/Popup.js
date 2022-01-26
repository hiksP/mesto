class Popup {
    constructor(selector) {
        this._selector = selector;
    }

    open() {
        this._selector.classList.add('popup_opened');
    }

    close() {
        this._selector.classList.remove('popup_opened');
    }

    _handleEscClose() {
        if(evt.key === 'Escape') {
            this._selector.close();
          }
    }

    setEventListeners() {
        this._selector.addEventListener('click', () => {
            this.open();
        });
        this._selector.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
        });
        document.addEventListener('keydown', () => {
            this._handleEscClose();
        });
    }
}