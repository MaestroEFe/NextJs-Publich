// models/Contact.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
  createdAt: Date;
}

const ContactSchema: Schema<IContact> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  subject: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
