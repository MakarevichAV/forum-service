import {model, Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import {USER} from "../configuration/constants.js";

const accountSchema = new Schema({
        _id: {type: String, required: true, alias: 'login'},
        password: {type: String, required: true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        roles: {type: [String], default: [USER]},
    },
    {
        versionKey: false,
        toJSON: {
            transform(doc, ret) {
                ret.login = doc._id;
                delete ret.password;
                delete ret._id;
            }
        }
    }
)

accountSchema.pre('save', async function () {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(12)
        this.password = await bcrypt.hash(this.password, salt)
    }
})

accountSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

export default model("Account", accountSchema, 'users');