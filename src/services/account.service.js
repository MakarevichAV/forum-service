import accountRepo from "../repositories/account.repository.js";

class AccountService {
    async register(data) {
        const user = await accountRepo.register(data);
        if (!user) {
            throw new Error(`Account with login ${data.login} already registered`);
        }
        return user;
    }
    async login(login, password) {
        //TODO
    }
    async deleteUser(login) {
        const user = await accountRepo.deleteUser(login);
        if (!user) {
            throw new Error(`Account with login ${login} does not exist`);
        }
        return user;
    }
    async updateUser(login, data) {
        const user = await accountRepo.updateUser(login, data);
        if (!user) {
            throw new Error(`Account with login ${login} does not exist`);
        }
        return user;
    }
    async addRole(login, role) {
        const user = await accountRepo.addRole(login, role);
        if (!user) {
            throw new Error(`Account with login ${login} does not exist`);
        }
        return {login: user.login, roles: user.roles};
    }
    async deleteRole(login, role) {
        const user = await accountRepo.deleteRole(login, role);
        if (!user) {
            throw new Error(`Account with login ${login} does not exist`);
        }
        return {login: user.login, roles: user.roles};
    }
    async changePassword(newPassword) {
        //TODO
    }
    async getUser(login) {
        const user = await accountRepo.getUser(login);
        if (!user) {
            throw new Error(`Account with login ${login} does not exist`);
        }
        return user;
    }
}

export default new AccountService();