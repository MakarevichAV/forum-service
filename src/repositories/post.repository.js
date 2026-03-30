import Post from "../models/post.model.js";

class PostRepository {
    async createPost(postData) {
        return Post.create(postData);
    }
    async findPostById(id) {
        return Post.findById(id)
    }
    async deletePost(id) {
        return Post.findByIdAndDelete(id)
    }
    async addLike(id) {
        return Post.findByIdAndUpdate(id, {$inc: {likes: 1}})
    }
}

export default new PostRepository();