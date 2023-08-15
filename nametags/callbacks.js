export default class Callbacks {
  constructor(controller, store) {
    this.controller = controller;
    this.store = store;
  }

  onNameChange(name) {
    this.updateParams({ name });

    this.controller.reloadPage();
  }

  onTitleChange(title) {
    this.updateParams({ title });

    this.controller.reloadPage();
  }

  updateParams(params) {
    const newParams = {
      ...this.store.get(),
      ...params
    }

    this.store.set(newParams);
  }
}
