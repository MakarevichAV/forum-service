import mongoose from "mongoose"
import commentSchema from "./comment.model.js";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: [{type: String,  unique: true}],
        default: []
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: [commentSchema],
        default: []
    }
},
    {
        versionKey: false,
        toJSON: {
            transform: (doc, ret) => {
                ret.id = doc._id;
                delete ret._id;
                ret.dateCreated = doc.dateCreated.toISOString().slice(0, 19);
            }
        }
    })

export default mongoose.model('Post', PostSchema, 'posts');