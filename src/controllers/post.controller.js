import postService from "../services/post.service.js";

class PostController {
    async createPost(req, res, next) {
        try {
            const post = await postService.createPost(req.params.author, req.body);
            return res.status(201).json(post);
        } catch (e) {
            next(e);
        }
    }
    
    async getPostById(req, res, next) {
        try {
            const post = await postService.getPostById(req.params.id);
            return res.json(post);
        } catch (e) {
            next(e);
        }
    }
    
    async deletePost(req, res, next) {
        try {
            const post = await postService.deletePost(req.params.id);
            return res.json(post);
        } catch (e) {
            next(e);
        }
    }
    
    async addLike(req, res, next) {
        try {
            await postService.addLike(req.params.id);
            return res.status(204).send()
        } catch (e) {
            next(e);
        }
    }
    
    async getPostByAuthor(req, res, next) {
        try {
            const posts = await postService.getPostsByAuthor(req.params.author);
            return res.json(posts);
        } catch (e) {
            next(e);
        }
    }

    async addComment(req, res, next) {
        try {
            const {id, commenter} = req.params;
            const post = await postService.addComment(id, commenter, req.body.message);
            return res.json(post);
        } catch (e) {
            next(e);
        }
    }

    async getPostsByTags(req, res, next) {
        try {
            const posts = await postService.getPostsByTags(req.query.values);
            return res.json(posts);
        } catch(e) {
            next(e);
        }
    }

    async getPostsByPeriod(req, res, next) {
        try {
            const {dateFrom, dateTo} = req.query;
            const posts = await postService.getPostsByPeriod(dateFrom, dateTo);
            return res.json(posts);
        } catch(e) {
            next(e);
        }
    }

    async updatePost(req, res) {
        try {
            const post = await postService.updatePost(req.params.id, req.body);
            return res.status(200).json(post);
        } catch (e) {
            next(e);
        }
    }

}

export default new PostController();