import {Observable} from './Observable'

class EventBus {
  constructor() {
    this._observables = new Map()
  }

  register({eventName, observer, autoUnregister = false} = {}) {
    if (!eventName) {
      throw new Error('Event Name is required')
    }
    if (typeof observer !== 'function') {
      throw new Error('Observer must be a function')
    }
    const observable = new Observable({eventName, observer, autoUnregister})
    if (!this._observables.has(eventName)) {
      this._observables.set(eventName, [])
    }
    this._observables.get(eventName).push(observable)
    return observable
  }

  unregister({reference}) {
    if (reference && reference.eventName && this._observables.has(reference.eventName)) {
      const eventObservables = this._observables.get(reference.eventName)
      const index = eventObservables.indexOf(reference)
      if (index !== -1) {
        eventObservables.splice(index, 1)
      }
    }
  }

  raise({domainEvent}) {
    const eventObservables = this._observables.get(domainEvent.eventName)
    eventObservables &&
    eventObservables.forEach(observable => observable.observe({domainEvent}))
  }

  clear({eventName}) {
    this._observables.delete(eventName)
  }

  clearAllObservers() {
    this._observables.clear()
  }

}

const DomainEventBus = new EventBus()
export {DomainEventBus}
