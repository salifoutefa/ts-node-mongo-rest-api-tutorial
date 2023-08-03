import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({

});

export const SubscriptionModel = mongoose.model('Subscription', PackageSchema);

//Subscription Actions
export const getSubscriptions = ()=>SubscriptionModel.find();