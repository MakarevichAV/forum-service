import * as repo from "../repositories/post.repository.js";

class PostService {
    async createPost(author, data) {
        return await repo.createPost({author, ...data});
    }

    async getPostById(id) {
        return await repo.getPostById(id);
    }
}
export default new PostService();