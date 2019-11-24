import {valueNotEmpty} from "./validation";

class Post {
  constructor({id, title}) {
    valueNotEmpty(id, 'id')
    valueNotEmpty(title, 'title')
    this._id = id
    this._title = title
  }

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }
}

export {
  Post
}