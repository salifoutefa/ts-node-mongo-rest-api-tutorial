import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({

});

export const PackageModel = mongoose.model('Package', PackageSchema);

// Package Actions 
export const getPackages = ()=>PackageModel.find();