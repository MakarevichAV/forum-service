import accountRepo from "../repositories/account.repository.js";

class AccountService {
    async register(user) {
        const account = await accountRepo.register(user);
        if (!account) {
            throw new Error(`Conflict: Account with login ${user.login} already registered`);
        }
        return account;
    }
    async login(login, password) {
        //TODO
    }
    async deleteUser(login) {
        //TODO
    }
    async updateUser(login, data) {
        //TODO
    }
    async addRole(login, role) {
        //TODO
    }
    async deleteRole(login, role) {
        //TODO
    }
    async changePassword(newPassword) {
        //TODO
    }
    async getUser(login) {
        //TODO
    }
}

export default new AccountService();