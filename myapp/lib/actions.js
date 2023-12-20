"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Post from "@/models/Post";
import db from "./db";
import Comment from "@/models/Comment";
import getServerUser from "./getServerUser";

export const addPost = async (formData) => {
    const { title, desc, imageUrl, draft, category, } =
    Object.fromEntries(formData);
    try {
        db.connect()
        const newPost = new Post({
            title, desc, imageUrl, draft, category,
          });
      
          await newPost.save();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create product!");

    }
    revalidatePath("/admin/");
    redirect("/admin/");
}

export const addComment = async(formData) => {
    const userId = await getServerUser()
    const { text, postId} = Object.fromEntries(formData);
    try {
        db.connect();
        const newComment = new Comment({
            text,
            postId,
            email: userId && userId.email 
        });
        console.log("First UserId from session " + userId)
        console.log("Creator Id " + newComment.email); 
        await newComment.save();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create Comment! " + error);
    }
    revalidatePath("/admin");
    redirect("/admin");
}