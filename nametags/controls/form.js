import Store from '../../lib/store.js';
import uuidv4 from '../../lib/uuid.js';

export default class NametagsControlsForm {
  constructor(formID) {
    this.form = document.getElementById(formID);
    this.store = new Store('nameTagEntries');

    this.listen();
  }

  listen() {
    const self = this;

    self.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(self.form)

      let newData = {};
      for (const pair of formData.entries()) {
        newData[pair[0]] = pair[1];
      }
      newData.active = false;
      newData.id = uuidv4();

      const nameTagEntries = this.store.get().data || [];
      nameTagEntries.push(newData);

      this.store.set({ data: nameTagEntries });

      window.location.replace('./index.html');
    });
  }
}
