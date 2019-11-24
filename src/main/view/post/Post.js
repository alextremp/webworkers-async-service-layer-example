import React, {Component} from "react"
import postServiceFacade from "../../service/PostServiceFacade";

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slug: props.slug,
      title: ''
    }
  }

  componentDidMount() {
    return postServiceFacade.getPost({
      slug: this.props.slug
    })
      .then(post => this.setState({
        slug: post.id,
        title: post.title
      }))
  }

  render() {
    return (
      <div className="Post">
        <div className="Post-header">{this.state.slug}</div>
        <div className="Post-title">{this.state.title}</div>
      </div>
    )
  }
}

export {
  Post
}