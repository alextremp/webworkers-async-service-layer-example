import {DomainEvent} from "../../../bus/DomainEvent"

export const POST_RENDER = 'POST_RENDER'
export const postRenderEvent = ({slug} = {}) => ({
  domainEvent: new DomainEvent({
    eventName: POST_RENDER,
    payload: {
      slug
    }
  })
})
