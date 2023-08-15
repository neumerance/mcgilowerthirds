class ScreenTimeController {
  constructor(pageParams = {}) {
    this.urlParams = new URLSearchParams(window.location.search);
    this.defaultIdleTime = 120;
    this.defaultScreenTime = 60;
    this.pageParams = pageParams

    return this;
  }

  executeRedirectToIntro() {
    const self = this;

    window.location.replace(`intro.html?${this.params()}`);
  }

  queueRedirectToIntro() {
    const self = this;

    setTimeout(() => {
      self.executeRedirectToIntro();
    }, self.idleTime() * 1000);
  }

  queueRedirectToOutro() {
    const self = this;

    setTimeout(() => {
      window.location.replace(`outro.html?${this.params()}`);
    }, self.screenTime() * 1000);
  }

  idleTime() {
    const time = this.urlParams.get('idleTime');

    if (!time) { return this.defaultIdleTime };

    return parseInt(time);
  }

  screenTime() {
    const time = this.urlParams.get('screenTime');

    if (!time) { return this.defaultScreenTime }

    return parseInt(time);
  }

  params() {
    return new URLSearchParams({
      ...this.pageParams,
      idleTime: this.idleTime(),
      screenTime: this.screenTime()
    }).toString();
  }

  removeOutro() {
    setTimeout(() => {
      document.getElementById('e6UJtHzKx2W1').remove();
    }, 2000);
  }
}