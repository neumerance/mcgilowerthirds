import Channel from '../lib/channel.js';
import Store from '../lib/store.js';
import Callbacks from './callbacks.js';
import date from '../lib/date.js';
export default class NameTagsController {
  constructor() {
    this.store = new Store('nameTags');
    this.callbacks = new Callbacks(this, this.store);
    this.channel = new Channel('nameTags', this.callbacks);

    this.params = this.store.get();
    this.title = this.params.title || 'Brother';
    this.name = this.params.name || 'Daniel Razon' ;
    this.nameOffset = this.params.nameOffset || 0;
    this.nameFontSize = this.params.nameFontSize || 36;
    this.titleOffset = this.params.titleOffset || 0;
    this.date = date;

    return this;
  }

  // This will require data-callback
  // on the input field where this method will be used
  // see callback.js for possible callbacks
  onChange(event) {
    const value = event.value;
    const callback = event.getAttribute('data-callback');

    this.channel.broadcast(callback, value);
  }

  render() {
    const title = document.getElementById('nametags__title');
    const name = document.getElementById('nametags__name');

    title.setAttribute('dx', this.titleOffset);
    name.setAttribute('dx', this.nameOffset);
    name.setAttribute('font-size', this.nameFontSize);

    title.innerHTML = this.title;
    title.setAttribute('dx', this.titleOffset);

    name.innerHTML = this.name;
    name.setAttribute('dx', this.nameOffset);
    name.setAttribute('font-size', this.nameFontSize);

    return this;
  }

  reloadPage() {
    window.location.replace(`intro.html?t=${this.date}`);
  }

  toggleOffNameTags() {
    const nameTagStore = new Store('nameTagEntries');
    let entries = nameTagStore.get().data || [];
    entries = entries.map((entry) => {
      entry.active = false

      return entry;
    });

    nameTagStore.set({ data: entries });

    this.channel.broadcast('renderListTags', {});

    return this;
  }
}
