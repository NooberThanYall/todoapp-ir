import { model, models, Schema } from "mongoose";

const todoSchema = new Schema({
    task: String,
    done: Boolean,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    priority: Number,
}, {
    timestamps: true,
})

export const Todo = models.Todo ? models.Todo : model("Todo", todoSchema);
