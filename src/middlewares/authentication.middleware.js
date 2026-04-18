import Account from '../models/account.model.js';

const authentication = async (req, res, next) => {
    if (req.path !== '/account/register' && !req.path.startsWith('/forum/posts')) {
        const authorization = req.headers.authorization;
        if (!authorization || !authorization.startsWith('Basic ')) {
            return res.status(401).json({message: "Authorization required"});
        }
        const base64Credentials = authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [login, password] = credentials.split(':')
        const account = await Account.findById(login);
        if (!account || !(await account.comparePassword(password))) {
            return res.status(401).json({message: "Invalid credentials"});
        }
        req.headers.authorization = ''
        req.principal = {userName: login, roles: account.roles}
    }

    next();
}

export default authentication;