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
        return await postRepo.getPostsByAuthor(author);
    }

    async addComment(id, commenter, content) {
        const post = await postRepo.addComment(id, {user: commenter, message: content})
        if (!post) {
            throw new Error(`Post with id = ${id} not found`);
        }
        return post;
    }

    async getPostsByTags(tagsString) {
        const tags = tagsString.split(',').map(tag => tag.trim());
        return await postRepo.getPostsByTags(tags);
    }

    async getPostsByPeriod(dateFrom, dateTo) {
        return await postRepo.getPostsByPeriod(dateFrom, dateTo);
    }

    async updatePost(id, data) {
        const post = await postRepo.updatePost(id, data);
        if (!post) {
            throw new Error(`Post with id = ${id} not found`);
        }
        return post;
    }

}
export default new PostService();