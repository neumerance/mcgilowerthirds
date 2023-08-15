export default class ScreenTimeController {
  constructor(params) {
    this.defaultIdleTime = 120;
    this.defaultScreenTime = 60;
    this.params = params

    return this;
  }

  executeRedirectToIntro() {
    const self = this;

    window.location.replace('intro.html');
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
      window.location.replace('outro.html');
    }, self.screenTime() * 1000);
  }

  idleTime() {
    const time = this.params.idleTime;

    if (!time) { return this.defaultIdleTime };

    return parseInt(time);
  }

  screenTime() {
    const time = this.params.screenTime;

    if (!time) { return this.defaultScreenTime }

    return parseInt(time);
  }

  removeOutro() {
    setTimeout(() => {
      document.getElementById('e6UJtHzKx2W1').remove();
    }, 2000);
  }
}