import User from '../models/account.model.js';

class AccountRepository {
    async register(user) {
        return User.create(user)
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

export default new AccountRepository();