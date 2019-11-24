class GetPostUseCase {
  constructor({postRepository}) {
    this._postRepository = postRepository
  }

  execute({slug}) {
    return this._postRepository.findBySlug({slug})
  }
}

export {
  GetPostUseCase
}