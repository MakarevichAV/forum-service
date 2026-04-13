import Repo from "../repositories/account.repository.js"

class AccountService {
    async register(user) {
        try {
            return await Repo.addUser(user)
        } catch (e) {
            console.log(e)
            throw new Error('User already exists')
        }
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
        //TODO
        throw new Error('Not Implemented');
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