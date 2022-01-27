class Popup {
    constructor(selector) {
        this._selector = document.querySelector(selector);
        this._overlay = this._selector.querySelector('.popup__overlay');
        this._closeButton = this._selector.querySelector('.popup__close');
    }

    open() {
        this._selector.classList.add('popup_opened');
    }

    close() {
        this._selector.classList.remove('popup_opened');
        document.removeEventListener('keydown',(evt) => this._handleEscClose(evt));
    }

    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            this.close();
          }
    }

    setEventListeners() {
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt))
        this._overlay.addEventListener('click', () => {
            this.close();
        });
        this._closeButton.addEventListener('click', () => {
            this.close();
        });
    }
}

export default Popup