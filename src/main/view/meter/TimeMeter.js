import React, {Component} from "react"
import {DomainEventBus} from "../../bus/EventBus";
import {POST_RENDER} from "../post/event/postRenderEvent";

class TimeMeter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Not all loaded'
    }
    this._startTime = new Date().getTime()
    DomainEventBus.register({
      eventName: POST_RENDER,
      observer: event => this._updatePostRender(({
        slug: event.payload.slug
      }))
    })
  }

  _updatePostRender({slug}) {
    Promise.resolve()
      .then(() => console.log('POST_RENDER > ', slug))
      .then(() => {
        const currentTime = new Date().getTime()
        this.setState({
          message: 'Ellapsed: ' + (currentTime - this._startTime)
        })
      })

  }

  render() {
    return (
      <div className="TimeMeter">
        <span>{this.state.message}</span>
      </div>
    )
  }
}

export {
  TimeMeter
}