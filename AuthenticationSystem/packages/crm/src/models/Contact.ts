import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IContact extends Document {
  user: mongoose.Types.ObjectId; // Link to the core User model
  company?: string;
  jobTitle?: string;
  phone?: string;
  tags: string[]; // For categorizing contacts
  notes?: string;
}

const ContactSchema: Schema<IContact> = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // This MUST match the model name from your auth package
      required: true,
      unique: true, // Ensures one CRM profile per user
    },
    company: {
      type: String,
      trim: true,
    },
    jobTitle: {
      type: String,
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
