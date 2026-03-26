import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
    {
        user: { type: String, required: true, trim: true },
        message: { type: String, required: true, trim: true },
        dateCreated: { type: Date, default: Date.now },
        likes: { type: Number, default: 0 }
    },
    {
        _id: false
    }
);

const postSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    content: {type: String, required: true, trim: true},
    author: {type: String, required: true, trim: true},
    dateCreated: {type: Date, default: Date.now},
    tags: {type: [String], default: []},
    likes: {type: Number, default: 0},
    comments: { type: [commentSchema], default: [] }
}, {
    versionKey: false,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id.toString();
            delete ret._id;
        }
    },
    toObject: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
        }
    }
});

const Post = mongoose.model('Post', postSchema, 'forum');

export default Post;