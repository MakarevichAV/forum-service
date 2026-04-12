import User from '../models/account.model.js';

class AccountRepository {
    async register(user) {
        return User.create(user)
    }
    async login(login, password) {
        //TODO
    }
    async deleteUser(login) {
        return User.findOneAndDelete({login}).exec()
    }
    async updateUser(login, data) {
        return User.findOneAndUpdate({login}, {$set: data}, {returnDocument: 'after'}).exec()
    }
    async addRole(login, role) {
        return User.findOneAndUpdate({login}, {$addToSet: {roles: role}}, {returnDocument: 'after'}).exec()
    }
    async deleteRole(login, role) {
        return User.findOneAndUpdate({login}, {$pull: {roles: role}}, {returnDocument: 'after'}).exec()
    }
    async changePassword(newPassword) {
        //TODO
    }
    async getUser(login) {
        return User.findOne({login: login})
    }
}

export default new AccountRepository();