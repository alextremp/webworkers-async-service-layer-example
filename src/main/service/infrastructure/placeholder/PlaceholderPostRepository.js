import {PostRepository} from "../../domain/PostRepository"
import {Post} from "../../domain/Post"

class PlaceholderPostRepository extends PostRepository {

  findBySlug({slug}) {
    return Promise.resolve(`${POSTS_ENDPOINT}/${slug}`)
      .then(url => fetch(url))
      .then(response => response.json())
      .then(dto => new Post({
        id: dto.id,
        title: dto.title
      }))
  }
}

const PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com'
const POSTS_ENDPOINT = PLACEHOLDER_API + '/posts'

export {
  PlaceholderPostRepository
}