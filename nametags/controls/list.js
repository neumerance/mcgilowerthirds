import Store from '../../lib/store.js';
import date from '../../lib/date.js';

export default class NametagsControlsList {
  constructor(pageController, listID) {
    this.list = document.getElementById(listID);
    this.store = new Store('nameTagEntries');
    this.pageController = pageController
    this.date = date;
  }

  render() {
    const renderList = this.nameTagEntries().map((nameTag) => {
      return `
        <li class="list-group-item text-bg-dark d-flex justify-content-between">
          <span>${nameTag.title} ${nameTag.name}</span>
          <span>
            <a href="#" class="link-dark">
              <img
                width="20"
                src="../../assets/delete.png"
                onclick="window.nameTagList.deleteEntry('${nameTag.id}')"
              />
            </a>
            <a href="#" class="link-dark">
              <img
                width="20"
                src="../../assets/${nameTag.active ? 'view' : 'hide'}.png"
                onclick="window.nameTagList.onViewToggle('${nameTag.id}')"
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

    if(entries[index].active) {
      this.pageController.store.set(entries[index])
      this.pageController.channel.broadcast('onReloadPage', {});
    } else {
      this.pageController.channel.broadcast('executeOutro', {});
    }

    window.location.replace(`./index.html?t=${this.date}`);

    return this;
  }

  deleteEntry(id) {
    let entries = this.nameTagEntries();
    const index = entries.findIndex(entry => id == entry.id);

    entries.splice(index, 1);

    this.store.set({ data: entries });
    window.location.replace(`./index.html?t=${this.date}`);
  }
}
