import postRepo from "../repositories/post.repository.js";
class PostService {
    async createPost(author, data) {
        const tags = [...new Set(data.tags)];
        return await postRepo.createPost({...data, tags, author});
    }

    async getPostById(id) {
        const post = await postRepo.findPostById(id);
        if (!post) {
            throw new Error(`Post with id = ${id} not found`);
        }
        return post;
    }

    async deletePost(id) {
        const post = await postRepo.deletePost(id);
        if (!post) {
            throw new Error(`Post with id = ${id} not found`);
        }
        return post;
    }

    async addLike(id) {
        const post = await postRepo.addLike(id);
        if (!post) {
            throw new Error(`Post with id = ${id} not found`);
        }
        return true;
    }

    async getPostsByAuthor(author) {
        //TODO get posts by author
        throw new Error('Not implemented');
    }

    async addComment(id, commenter, content) {
        //TODO add comment
        throw new Error('Not implemented');
    }

    async getPostsByTags(tagsString) {
        //TODO get posts by tags
        throw new Error('Not implemented');
    }

    async getPostsByPeriod(dateFrom, dateTo) {
        //TODO get posts by period
        throw new Error('Not implemented');
    }

    async updatePost(id, data) {
        //TODO update post
        throw new Error('Not implemented');
    }

}
export default new PostService();