import Channel from '../lib/channel.js';
import Store from '../lib/store.js';
import Callbacks from './callbacks.js';

export default class LowerThirdsController {
  constructor(type = 'default') {
    const uniqueKey = `${type}-lowerthirds`
    this.store = new Store(uniqueKey);
    this.callbacks = new Callbacks(this, this.store);
    this.channel = new Channel(uniqueKey, this.callbacks);
    this.params = this.store.get();
    this.title = this.params.title || 'PLEASE CHANGE THE TITLE'
    this.offset = this.params.offset || 0;
    this.fontSize = this.params.fontSize || 32;
    this.type = type;
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
    const title = document.getElementById("title-container");
    title.setAttribute('dx', this.offset);
    title.setAttribute('font-size', this.fontSize);
    title.innerHTML = this.title;

    document.getElementById("date-container").innerHTML = this.date();
  }

  date() {
    const format = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString("en-US", format);
  }

  reloadPage() {
    window.location.reload();
  }
}
