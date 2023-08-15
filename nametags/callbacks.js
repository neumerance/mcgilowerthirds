export default class Callbacks {
  constructor(controller, store) {
    this.controller = controller;
    this.store = store;
  }

  onNameChange(name) {
    this.updateParams({ name });

    this.controller.replaceText();
  }

  onTitleChange(title) {
    this.updateParams({ title });

    this.controller.replaceText();
  }

  updateParams(params) {
    const newParams = {
      ...this.params(),
      ...params
    }

    this.store.set(newParams);
  }

  params() {
    this.store.get();
  }
}
