import Store from '../../lib/store.js';

export default class NametagsControlsList {
  constructor(pageController, listID) {
    this.list = document.getElementById(listID);
    this.store = new Store('nameTagEntries');
    this.pageController = pageController
  }

  render() {
    const renderList = this.nameTagEntries().map((nameTag) => {
      return `
        <li class="list-group-item text-bg-dark d-flex justify-content-between">
          <span>${nameTag.name}</span>
          <span>
            <a href="#">
              <img
                width="20"
                src="../../assets/${nameTag.active ? 'view' : 'hide'}.png"
                onclick="window.nameTagList.onViewToggle('${nameTag.id}')"
                data-id="${nameTag.id}"
              />
            </a>
          </span>
        </li>
      `;
    });

    this.list.innerHTML = `
      <ul class="list-group list-group-flush">
        ${renderList.join('')}
      </ul>
    `;

    return this;
  }

  nameTagEntries() {
    return this.store.get().data || [];
  }

  onViewToggle(id) {
    let entries = this.nameTagEntries();
    const index = entries.findIndex(entry => id == entry.id);

    entries = entries.map((entry) => {
      if (entry.id == id) { return entry; }

      entry.active = false

      return entry;
    });

    entries[index].active = !entries[index].active;
    this.store.set({ data: entries });

    this.pageController.store.set(entries[index].active ? entries[index] : {});
    this.pageController.channel.broadcast('onReloadPage', {});

    window.location.replace('./index.html');

    return this;
  }
}
