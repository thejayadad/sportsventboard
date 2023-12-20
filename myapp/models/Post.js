import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
    
    },
    desc: {
        type: String,
        required: true,
        min: 6
    },
    imageUrl: {
        type: String,
        required: true,
    },
   draft: {
    type: Boolean,
    default: true,
   },
   category: {
    type: String,
    required: true,
    enum: [
        'Football',
        'Soccer',
        'Basketball',
        'Baseball',
        'Volleyball',
    ]
},

}, {timestamps: true})

export default mongoose?.models?.Post || mongoose.model("Post", PostSchema)