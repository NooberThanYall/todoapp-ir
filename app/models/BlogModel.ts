import { Schema, model, models } from "mongoose";

export type BlogType = {
    _id: string,
    title: string,
    description: string,
    content: string,
    tags: string[],
    headImgUrl: string,
    author: string,
    publishDate: Date
}
const blogSchema = new Schema({
    title: String,
    description: String,
    content: String,
    tags: Array,
    headImgUrl: String,
    author: String,
    publishDate: Date
})

export const Blog = models.Blog || model("Blog", blogSchema);


