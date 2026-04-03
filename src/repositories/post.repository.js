import Post from "../models/post.model.js";

class PostRepository {
    async createPost(postData) {
        return Post.create(postData);
    }
    async findPostById(id) {
        return Post.findById(id).exec()
    }
    async deletePost(id) {
        return Post.findByIdAndDelete(id).exec()
    }
    async addLike(id) {
        return Post.findByIdAndUpdate(id, {$inc: {likes: 1}}, {new: true}).exec()
    }
    async getPostsByAuthor(author) {
        return Post.find({author: new RegExp(`^${author}$`, 'i')}).exec()
    }
    async addComment(id, comment) {
        return Post.findByIdAndUpdate(id, {$push: {comments: comment}}, {new: true}).exec()
    }
    async getPostsByTags(tags) {
        const regexConditons = tags.map(tag => ({tags: new RegExp(`^${tag}$`, 'i')}));
        return Post.find({$or: regexConditons}).exec()
    }
    async getPostsByPeriod(dateFrom, dateTo) {
        return Post.find({dateCreated: {$gte: dateFrom, $lte: dateTo}}).exec()
    }
    async updatePost(id, data) {
        const tags = data.tags ?? []
        delete data.tags
        const newData = {...data, $addToSet: {tags}}
        return Post.findByIdAndUpdate(id, newData, {new: true}).exec()
    }
}

export default new PostRepository();