class Section {
  constructor({ renderer }, contSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(contSelector);
  }

  addItem (element) {
      this._container.prepend(element);
  }

  renderItems (cards) {
    cards.forEach((item) => {
        this._renderer(item);
    })
  }


}

export default Section;