import Account from '../models/account.model.js';
import {ADMIN, MODERATOR, USER} from "./constants.js";

export async function createAdmin() {
    let admin = await Account.findById('admin')
    if (!admin) {
        admin = new Account({
            login: 'admin',
            password: 'admin',
            firstName: 'Administrator',
            lastName: 'Administrator',
            roles: [USER, MODERATOR, ADMIN]
        })
        await admin.save()
    }
}