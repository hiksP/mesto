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
    console.log(this._items);
    this._items.forEach((item) => {
      console.log(item);
        this._renderer(item);
    })
  }


}

export default Section;