import {errorThrownEvent} from './event/errorThrownEvent'
import {DomainEventBus} from './EventBus'

class Observable {
  constructor({eventName, observer, autoUnregister}) {
    this._eventName = eventName
    this._observer = observer
    this._autoUnregister = autoUnregister
  }

  observe({domainEvent}) {
    try {
      this._call({domainEvent})
    } catch (error) {
      this._raiseError({error})
    }
  }

  get eventName() {
    return this._eventName
  }

  _call({domainEvent}) {
    this._autoUnregister &&
    DomainEventBus.unregister({
      eventName: this._eventName,
      reference: this
    })
    this._observer(domainEvent)
  }

  _raiseError({error}) {
    DomainEventBus.raise(errorThrownEvent({
      message: 'Error processing the observer.',
      error
    }))
  }
}

export {Observable}
