import {PlaceholderPostRepository} from "./infrastructure/placeholder/PlaceholderPostRepository";
import {GetPostUseCase} from "./application/GetPostUseCase";

class PostServiceFacade {

  constructor({getPostUseCase}) {
    this._getPostUseCase = getPostUseCase
  }

  getPost({slug}) {
    return this._getPostUseCase.execute({slug})
  }
}

const postRepository = new PlaceholderPostRepository()
const getPostUseCase = new GetPostUseCase({postRepository})

export default new PostServiceFacade({getPostUseCase})