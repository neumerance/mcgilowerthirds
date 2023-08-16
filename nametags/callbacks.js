export default class Callbacks {
  constructor(controller, store) {
    this.controller = controller;
    this.store = store;
  }

  onNameChange(name) {
    this.updateParams({ name });

    this.controller.reloadPage();
  }

  onNameOffsetChange(nameOffset) {
    this.updateParams({ nameOffset });

    this.controller.reloadPage();
  }

  onNameFontSizeChange(nameFontSize) {
    this.updateParams({ nameFontSize });

    this.controller.reloadPage();
  }

  onTitleChange(title) {
    this.updateParams({ title });

    this.controller.reloadPage();
  }

  onTitleOffsetChange(titleOffset) {
    this.updateParams({ titleOffset });

    this.controller.reloadPage();
  }

  onReloadPage() {
    window.location.replace('intro.html');
  }

  executeOutro() {
    window.location.replace('outro.html');
  }

  updateParams(params) {
    const newParams = {
      ...this.store.get(),
      ...params
    }

    this.store.set(newParams);
  }
}
