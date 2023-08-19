import Store from '../lib/store.js';
export default class BadgeController {
  constructor() {
    this.store = new Store('badge');
    this.params = this.store.get();

    this.localeName = this.params.localeName || 'LOKAL NG COLO';
    this.districtName = this.params.districtName || 'BATZAM';
    this.localeNameOffset = this.params.localeNameOffset || 0;
    this.districtNameOffset = this.params.districtNameOffset || 0;

    return this;
  }

  render() {
    const localeName = document.getElementById('locale-name')
    const districtName = document.getElementById('district-name');

    localeName.innerHTML = this.localeName;
    districtName.innerHTML = this.districtName;

    localeName.setAttribute('dx', this.localeNameOffset);
    districtName.setAttribute('dx', this.districtNameOffset);

    return this;
  }
}
