class BadgeController {
  constructor() {
    this.urlParams = new URLSearchParams(window.location.search);
    this.defaultIdleTime = 120;
    this.defaultScreenTime = 60;
    this.localeName = this.urlParams.get('localeName') || 'LOKAL NG COLO';
    this.districtName = this.urlParams.get('districtName') || 'BATZAM';
    this.localeNameOffset = this.urlParams.get('localeNameOffset') || 0;
    this.districtNameOffset = this.urlParams.get('districtNameOffset') || 0;

    return this;
  }

  params() {
    return {
      localeName: this.localeName,
      districtName: this.districtName,
      localeNameOffset: this.localeNameOffset,
      districtNameOffset: this.districtNameOffset
    }
  }

  replaceText() {
    const localeName = document.getElementById('locale-name')
    const districtName = document.getElementById('district-name');

    localeName.innerHTML = this.localeName;
    districtName.innerHTML = this.districtName;

    localeName.setAttribute('dx', this.localeNameOffset);
    districtName.setAttribute('dx', this.districtNameOffset);

    return this;
  }
}
