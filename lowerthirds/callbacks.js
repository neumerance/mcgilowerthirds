import date from '../lib/date.js';
export default class Callbacks {
  constructor(controller, store) {
    this.controller = controller;
    this.store = store;
    this.date = date;
  }

  onTitleChange(title) {
    this.updateParams({ title });

    this.controller.reloadPage();
  }

  onOffsetChange(offset) {
    this.updateParams({ offset });

    this.controller.reloadPage();
  }

  onFontSizeChange(fontSize) {
    this.updateParams({ fontSize });

    this.controller.reloadPage();
  }


  onReloadPage() {
    window.location.replace(`index.html?t=${this.date}`);
  }

  updateParams(params) {
    const newParams = {
      ...this.store.get(),
      ...params
    }

    this.store.set(newParams);
  }
}
