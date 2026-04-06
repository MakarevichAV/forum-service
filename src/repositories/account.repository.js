import User from '../models/account.model.js';

class AccountRepository {
    async register(user) {
        return User.create(user)
    }
    async login(login, password) {
        //TODO
    }
    async deleteUser(login) {
        return User.findOneAndDelete({login: login}).exec()
    }
    async updateUser(login, data) {
        return User.findOneAndUpdate({login: login}, {$set: data}, {new: true}).exec()
    }
    async addRole(login, role) {
        return User.findOneAndUpdate({login: login}, {$push: {roles: role}}, {new: true}).exec()
    }
    async deleteRole(login, role) {
        return User.findOneAndUpdate({login: login}, {$pull: {roles: role}}, {new: true}).exec()
    }
    async changePassword(newPassword) {
        //TODO
    }
    async getUser(login) {
        return User.findOne({login: login})
    }
}

export default new AccountRepository();