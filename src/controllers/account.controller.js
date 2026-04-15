import accountService from '../services/account.service.js';

class AccountController {
    async register(req, res, next) {
        try {
            const account = await accountService.register(req.body);
            return res.status(201).json(account);
        } catch (e) {
            return next(e);
        }
    }

    async login(req, res, next) {
        const account = await accountService.getUser(req.principal.userName)
        return res.json(account);
    }

    async deleteUser(req, res, next) {
        try {
            const account = await accountService.removeUser(req.params.login);
            return res.json(account);
        } catch (e) {
            return next(e);
        }
    }

    async updateUser(req, res, next) {
        try {
            const account = await accountService.updateUser(req.params.login, req.body);
            return res.json(account);
        } catch (e) {
            return next(e);
        }
    }

    async addRole(req, res, next) {
        try {
            const userRoles = await accountService.changeRoles(req.params.login, req.params.role, true);
            return res.json(userRoles);
        } catch (e) {
            return next(e);
        }
    }

    async deleteRole(req, res, next) {
        try {
            const userRoles = await accountService.changeRoles(req.params.login, req.params.role, false);
            return res.json(userRoles);
        } catch (e) {
            return next(e);
        }
    }

    async changePassword(req, res, next) {
        await accountService.changePassword(req.principal.userName, req.body.password);
        return res.status(204).send()
    }

    async getUsers(req, res, next) {
        try {
            const user = await accountService.getUser(req.params.login);
            return res.json(user);
        } catch (e) {
            return next(e);
        }
    }
}

export default new AccountController();