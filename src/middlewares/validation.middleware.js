import Joi from 'joi';

const passwordValidator = Joi.string()
    .min(8)
    .max(20)
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/)
    .message('Password must contain letters and numbers, and be at least 8 characters long')
    .required();

const nameValidator = Joi.string()
    .pattern(/^[A-Za-z]+$/)
    .message('First and last name must contain only letters');

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

    register: Joi.object({
        login: Joi.string().min(1).max(40).required(),
        password: passwordValidator,
        firstName: nameValidator,
        lastName: nameValidator,
    }),
    updateUser: Joi.object({
       firstName: nameValidator,
       lastName: nameValidator,
    }),
    changePassword: Joi.object({
        password: passwordValidator,
    }),

    dateFormat: Joi.object({
        dateFrom: Joi.date().iso().required(),
        dateTo: Joi.date().iso().required().greater(Joi.ref('dateFrom')),
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