class DomainEvent {
  constructor({eventName, payload = {}} = {}) {
    this._eventName = eventName
    this._payload = payload
  }

  get eventName() {
    return this._eventName;
  }

  get payload() {
    return this._payload;
  }
}

export {
  DomainEvent
}