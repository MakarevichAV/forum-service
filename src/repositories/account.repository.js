import Account from '../models/account.model.js';

class AccountRepository {
    async addUser(user) {
        return Account.create(user)
    }
    async findUser(login) {
        return Account.findById(login).exec()
    }
    async deleteUser(login) {
        return Account.findByIdAndDelete(login).exec()
    }
    async updateUser(login, updateData) {
        return Account.findByIdAndUpdate(login, updateData, {new: true}).exec()
    }
    async addRole(login, role) {
        return Account.findByIdAndUpdate(login, {$addToSet: {roles: role}}, {new: true}).exec()
    }
    async removeRole(login, role) {
        return Account.findByIdAndUpdate(login, {$pull: {roles: role}}, {new: true}).exec()
    }
    async changePassword(login, newPassword) {
        const user = await Account.findById(login)
        if (user) {
            user.password = newPassword
            return user.save()
        }
    }
}

export default new AccountRepository()