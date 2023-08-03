import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({

});

export const ProjectModel = mongoose.model('Project', ProjectSchema);

//Project Actions
export const getProjects = ()=>ProjectModel.find();