class NameTagsController {
  constructor() {
    this.urlParams = new URLSearchParams(window.location.search);
    this.title = this.urlParams.get('title') || 'Brother';
    this.name = this.urlParams.get('name') || 'Daniel Razon';
    this.titleOffset = this.urlParams.get('titleOffset') || 0;
    this.nameOffset = this.urlParams.get('nameOffset') || 0
    this.nameFontSize = this.urlParams.get('nameFontSize') || 36

    return this;
  }

  params() {
    return {
      title: this.title,
      name: this.name,
      titleOffset: this.titleOffset,
      nameOffset: this.nameOffset,
      nameFontSize: this.nameFontSize
    }
  }

  replaceText() {
    const title = document.getElementById('nametags__title');
    const name = document.getElementById('nametags__name');

    title.setAttribute('dx', this.titleOffset);
    name.setAttribute('dx', this.nameOffset);
    name.setAttribute('font-size', this.nameFontSize);

    title.innerHTML = this.title;
    name.innerHTML = this.name;

    return this;
  }
}
