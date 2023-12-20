"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Post from "@/models/Post";
import db from "./db";

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
