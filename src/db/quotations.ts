import mongoose from "mongoose";

const QuotationSchema = new mongoose.Schema({

});

export const QuotationModel = mongoose.model('Quotation', QuotationSchema);

// Quotation Actions
export const getQuotations = QuotationModel.find();