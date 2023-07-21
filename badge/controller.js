window.BadgeController = {
  init() {
    this.urlParams = new URLSearchParams(window.location.search);
    this.defaultIdleTime = 120;
    this.defaultScreenTime = 60;
    this.localeName = this.urlParams.get('localeName') || 'LOKAL NG COLO';
    this.districtName = this.urlParams.get('districtName') || 'BATZAM';
    this.localeNameOffset = this.urlParams.get('localeNameOffset') || 0;
    this.districtNameOffset = this.urlParams.get('districtNameOffset') || 0;

    return this;
  },
  replaceText() {
    const localeName = document.getElementById('locale-name')
    const districtName = document.getElementById('district-name');

    localeName.innerHTML = this.localeName;
    districtName.innerHTML = this.districtName;

    localeName.setAttribute('dx', this.localeNameOffset);
    districtName.setAttribute('dx', this.districtNameOffset);
  },
  executeRedirectToIntro() {
    const self = this;

    window.location.replace(`intro.html?${this.params()}`);
  },
  queueRedirectToIntro() {
    const self = this;

    setTimeout(() => {
      self.executeRedirectToIntro();
    }, self.idleTime() * 1000);
  },
  queueRedirectToOutro() {
    const self = this;

    setTimeout(() => {
      window.location.replace(`outro.html?${this.params()}`);
    }, self.screenTime() * 1000);
  },
  idleTime() {
    const time = this.urlParams.get('idleTime');

    if (!time) { return this.defaultIdleTime };

    return parseInt(time);
  },
  screenTime() {
    const time = this.urlParams.get('screenTime');

    if (!time) { return this.defaultScreenTime }

    return parseInt(time);
  },
  params() {
    return new URLSearchParams({
      localeName: this.localeName,
      districtName: this.districtName,
      localeNameOffset: this.localeNameOffset,
      districtNameOffset: this.districtNameOffset,
      idleTime: this.idleTime(),
      screenTime: this.screenTime()
    }).toString();
  },
  removeOutro() {
    setTimeout(() => {
      document.getElementById('e6UJtHzKx2W1').remove();
    }, 2000);
  }
}
