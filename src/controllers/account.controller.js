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
        //TODO deleting user
    }

    async updateUser(req, res, next) {
        //TODO updating user
    }

    async addRole(req, res, next) {
        //TODO adding role
    }

    async deleteRole(req, res, next) {
        //TODO deleting role
    }

    async changePassword(req, res, next) {
        //TODO changing password
    }

    async getUser(req, res, next) {
        //TODO getting user by login
    }
}

export default new AccountController();