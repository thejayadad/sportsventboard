import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    email: {
        type: String,
    },
    text: {
        type: String,
        required: true,
    }
}, {timestamps: true})

await newComment.save();


export default mongoose?.models?.Comment || mongoose.model("Comment", CommentSchema)``