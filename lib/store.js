export default class Store {
  constructor(name) {
    this.name = name;

    return this
  }

  get() {
    const data = localStorage.getItem(this.name);

    if (data) {
      return JSON.parse(data);
    }

    return {}
  }

  set(data = {}) {
    localStorage.setItem(this.name, JSON.stringify(data));
  }
}
