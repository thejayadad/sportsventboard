'use server'
import Post from "@/models/Post";
import db from "./db";
// import Comment from "@/models/Comment";

export const fetchPosts = async () => {
    try {
        db.connect()
        const postCount = await Post.countDocuments();
        const posts = await Post.find();
        return { posts}
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch products!");
    }

}

export const fetchPost = async (id) => {
    try {
        db.connect()
        const post = await Post.findById(id)
        return post
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post!");
    }

}


// export const fetchComments = async (postId) => {
//     try {
//         db.connect();
//         const comments = await Comment.find({ postId });
//         const result = {
//           comments,
//         };
//         return result;
//       } catch (error) {
//         console.error(error);
//         throw new Error('Failed to fetch comments!');
//       }
// };
