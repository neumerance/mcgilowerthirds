export default class Channel {
  constructor(channelName, callbacks) {
    this.channel = new BroadcastChannel(channelName);
    this.callbacks = callbacks;

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
    self.channel.onmessage = (event) => {
      this.callbacks[event.data.command](event.data.params);
    }
  }
}
