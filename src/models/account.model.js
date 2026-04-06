import mongoose, {Schema, Types, model} from "mongoose";

const AccountSchema = new Schema({
        _id: {
            type: String,
            default: () => new Types.ObjectId().toHexString(),
        },
        login: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            default: ''
        },
        lastName: {
            type: String,
            default: ''
        },
        roles: {
            type: [String],
            default: ['USER']
        }
    },
    {
        versionKey: false,
        toJSON: {
            transform(doc, ret) {
                delete ret._id;
                delete ret.password;
            }
        }
    }
)

export default model('Account', AccountSchema, 'users')