import Joi from 'joi';
import {ADMIN, MODERATOR, USER} from "../configuration/constants.js";

const schemas = {
    createPost: Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        tags: Joi.array().items(Joi.string()),
    }),
    updatePost: Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        tags: Joi.array().items(Joi.string()),
    }),
    addComment: Joi.object({
        message: Joi.string().min(1).max(500).required(),
    }),

    dateFormat: Joi.object({
        dateFrom: Joi.date().iso().required(),
        dateTo: Joi.date().iso().required().greater(Joi.ref('dateFrom')),
    }),

    register: Joi.object({
        login: Joi.string().min(1).max(50).required(),
        password: Joi.string().min(8).max(50).required(),
        firstName: Joi.string().min(1).max(50).required(),
        lastName: Joi.string().min(1).max(50).required(),
    }),

    updateUser: Joi.object({
        firstName: Joi.string().min(1).max(50),
        lastName: Joi.string().min(1).max(50)
    }),

    changeRoles: Joi.object({
        role: Joi.string().valid(USER, MODERATOR, ADMIN).insensitive().required(),
        login: Joi.string().required()
    })
}

const validate = (schemaName, target = "body") => (req, res, next) => {
    const schema = schemas[schemaName];
    if (!schema) {
        return next(new Error('Invalid schema name'));
    }
    const { error } = schema.validate(req[target]);
    if (error) {
        return res.status(400).send({
            message: error.details[0].message,
            code: 400,
            status: 'Bad Request',
            timestamp: new Date().toISOString(),
            path: req.path
        })
    }
    next();
};

export default validate;