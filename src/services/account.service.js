import Repo from "../repositories/account.repository.js"

class AccountService {
    async register(user) {
        const account = await Repo.addUser(user)
        if (!account) {
            throw new Error(`User with login ${user.login} already exists`)
        }
        return account
    }

    async removeUser(login) {
        const user = await Repo.deleteUser(login)
        if (!user) {
            throw new Error(`User with login ${login} not found`)
        }
        return user
    }

    async updateUser(login, updateData) {
        const user = await Repo.updateUser(login, updateData)
        if (!user) {
            throw new Error(`User with login ${login} not found`)
        }
        return user
    }

    async changeRoles(login, role, isAddRole) {
        const roleUpCase = role.toUpperCase()
        let account
        if (isAddRole) {
            account = await Repo.addRole(login, roleUpCase)
        } else {
            account = await Repo.removeRole(login, roleUpCase)
        }
        if (!account) {
            throw new Error(`User with login ${login} not found`)
        }
        const {roles} = account
        return {login, roles}
    }

    async changePassword(login, newPassword) {
        const user = await Repo.changePassword(login, newPassword)
        if (!user) {
            throw new Error(`User with login ${login} not found`)
        }
    }

    async getUser(login) {
        const user = await Repo.findUser(login)
        if (!user) {
            throw new Error(`User with login ${login} not found`)
        }
        return user
    }
}

export default new AccountService();