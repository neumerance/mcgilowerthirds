export default class Channel {
  constructor(channelName, callbacks) {
    this.channel = new BroadcastChannel(channelName);
    this.callbacks = callbacks;

    this.listen();

    return this;
  }

  broadcast(command, params) {
    this.channel.postMessage(
      {
        command: command,
        params: params
      }
    );
  }

  listen() {
    const self = this;

    self.channel.addEventListener("message", (event) => {
      self.callbacks[event.data.command](event.data.params);
    });
  }
}
