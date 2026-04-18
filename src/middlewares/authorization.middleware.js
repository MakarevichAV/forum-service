import {USER} from "../configuration/constants.js";
import postService from "../services/post.service.js";

class Authorization {
    hasRole(role) {
        return (req, res, next) => req.principal.roles.includes(role.toUpperCase().trim()) ? next() : res.status(403).json({message: 'Access denied'})
    }
    isOwner(paramName) {
        return (req, res, next) => req.params[paramName] === req.principal.userName ? next() : res.status(403).json({message: 'Access denied'})
    }
    isOwnerOrHasRole(paramName, role = USER) {
        return (req, res, next) => {
            const isOwner = req.params[paramName] === req.principal.userName;
            const hasRole = req.principal.roles.includes(role.toUpperCase().trim());
            return isOwner || hasRole ? next() : res.status(403).json({message: 'Access denied'})
        }
    }

    isPostAuthor(postIdParam = 'id') {
        return async (req, res, next) => {
            const postId = req.params[postIdParam];
            const post = await postService.getPostById(postId);
            return post.author === req.principal.userName ? next() : res.status(403).json({message: 'Access denied'})
        }
    }

    isPostAuthorOrHasRole(postIdParam = 'id', role = USER) {
        return async (req, res, next) => {
            const postId = req.params[postIdParam];
            const post = await postService.getPostById(postId);
            const isAuthor = post.author === req.principal.userName;
            const hasRole = req.principal.roles.includes(role.toUpperCase().trim());
            return isAuthor || hasRole ? next() : res.status(403).json({message: 'Access denied'})
        }
    }
}

export default new Authorization;