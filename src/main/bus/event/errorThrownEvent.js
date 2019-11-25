import {DomainEvent} from "../DomainEvent"

export const ERROR_THROWN = 'ERROR_THROWN'
export const errorThrownEvent = ({error, message} = {}) => ({
  domainEvent: new DomainEvent({
    eventName: ERROR_THROWN,
    payload: {
      error,
      message
    }
  })
})
