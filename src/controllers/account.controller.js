import accountService from "../services/account.service.js";

class AccountController {
    async register(req, res, next) {
        try {
            const user = await accountService.register(req.body);
            return res.status(201).json(user);
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        //TODO Authorization logic
    }

    async deleteUser(req, res, next) {
        try {
            const user = await accountService.deleteUser(req.params.user);
            return res.status(200).json(user);
        } catch(e) {
            next(e)
        }
    }

    async updateUser(req, res, next) {
        try {
            const user = await accountService.updateUser(req.params.user, req.body);
            return res.status(200).json(user);
        } catch(e) {
            next(e)
        }
    }

    async addRole(req, res, next) {
        try {
            const user = await accountService.addRole(req.params.user, req.params.role);
            return res.status(200).json(user);
        } catch(e) {
            next(e)
        }
    }

    async deleteRole(req, res, next) {
        try {
            const user = await accountService.deleteRole(req.params.user, req.params.role);
            return res.status(200).json(user);
        } catch(e) {
            next(e)
        }
    }

    async changePassword(req, res, next) {
        try {
            await accountService.changePassword(req.body.password);
            return res.status(204).send();
        } catch(e) {
            next(e)
        }
    }

    async getUser(req, res, next) {
        try {
            const user = await accountService.getUser(req.params.user);
            return res.status(200).json(user);
        } catch(e) {
            next(e)
        }
    }
}

export default new AccountController();