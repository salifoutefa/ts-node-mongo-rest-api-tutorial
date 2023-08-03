import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({

});

export const InvoiceModel = mongoose.model('Invoice', InvoiceSchema);

// Invoice Actions
export const getInvoices = ()=>InvoiceModel.find();