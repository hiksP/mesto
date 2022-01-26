class Popup {
    constructor(selector) {
        this._selector = document.querySelector(selector);
    }

    open() {
        this._selector.classList.add('popup_opened');
        document.addEventListener('keydown', () => this._handleEscClose);
    }

    close() {
        this._selector.classList.remove('.popup_opened');
    }

    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            this._selector.close();
          }
    }

    setEventListeners() {
        this._selector.addEventListener('click', () => {
            this.open();
        });
        const closeButton = this._selector.querySelector('.popup__close');
        closeButton.addEventListener('click', () => {
            this.close();
        });
    }
}

export default Popup