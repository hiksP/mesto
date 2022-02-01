class Section {
  constructor({ items, renderer }, contSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(contSelector);
  }

  addItem (element) {
      this._container.prepend(element);
  }

  renderItems () {
    this._items.forEach((item) => {
        this._renderer(item);
    })
  }


}

export default Section;