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
    async getPostsByAuthor(author) {
        return Post.find({author: author})
    }
    async addComment(id, comment) {
        return Post.findByIdAndUpdate(id, {$push: {comments: comment}}, {new: true})
    }
    async getPostsByTags(tags) {
        return Post.find({tags: {$in: tags}})
    }
    async getPostsByPeriod(dateFrom, dateTo) {
        return Post.find({dateCreated: {$gte: dateFrom, $lte: dateTo}})
    }
    async updatePost(id, data) {
        return Post.findByIdAndUpdate(id, data, {new: true})
    }
}

export default new PostRepository();