import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({

});

export const TaskModel = mongoose.model('Task', TaskSchema);

// Task Actions
export const getTasks = ()=>TaskModel.find();