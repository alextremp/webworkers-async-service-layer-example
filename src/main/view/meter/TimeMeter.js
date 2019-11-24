import React, {Component} from "react"

class TimeMeter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Not all loaded'
    }
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