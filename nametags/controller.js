class NameTagsController {
  constructor() {
    this.urlParams = new URLSearchParams(window.location.search);
    this.title = this.urlParams.get('title') || 'Brother';
    this.name = this.urlParams.get('name') || 'Daniel Razon' ;

    return this;
  }

  params() {
    return {
      title: this.title,
      name: this.name
    }
  }

  replaceText() {
    const title = document.getElementById('nametags__title');
    const name = document.getElementById('nametags__name');

    title.innerHTML = this.title;
    name.innerHTML = this.name;

    return this;
  }
}
