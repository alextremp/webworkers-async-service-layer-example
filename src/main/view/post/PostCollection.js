import React, {Component} from "react"
import {Post} from './Post'

class PostCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.count || DEFAULT_COUNT
    }
  }

  render() {
    return (
      <div className="PostCollection">
        {this._createPosts()}
      </div>
    )
  }

  _createPosts() {
    const posts = []
    for (let i = 1; i <= this.state.count; i++) {
      posts.push(
        <Post key={i} slug={i}></Post>
      )
    }
    return posts
  }
}

const DEFAULT_COUNT = 5

export {
  PostCollection
}