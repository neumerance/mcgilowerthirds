import Channel from '../lib/channel.js';
import Store from '../lib/store.js';
import Callbacks from './callbacks.js';
export default class NameTagsController {
  constructor() {
    this.store = new Store('nameTags');
    this.callbacks = new Callbacks(this, this.store);
    this.channel = new Channel('nameTags', this.callbacks);

    this.params = this.store.get();
    this.title = this.params.title || 'Brother';
    this.name = this.params.name || 'Daniel Razon' ;

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

  replaceText() {
    const title = document.getElementById('nametags__title');
    const name = document.getElementById('nametags__name');

    title.innerHTML = this.title;
    name.innerHTML = this.name;

    return this;
  }

  reloadPage() {
    window.location.reload();
  }
}
