import { model, models, Schema } from "mongoose";

const routineSchema = new Schema({
    name: String,
    tasks: Array,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

export const Routine = models.Routine ? models.Routine : model("Routine", routineSchema);
