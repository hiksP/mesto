class Popup {
    constructor(selector) {
        this._selector = document.querySelector(selector);
    }

    open() {
        this._selector.classList.add('popup_opened');
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt))
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
        const closeButton = this._selector.querySelector('.popup__close');
        closeButton.addEventListener('click', () => {
            this.close();
        });
    }
}

export default Popup