import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IContactMessage extends Document {
  name: string;
  email: string;
  interestArea?: string;
  message: string;
  createdAt: Date;
}

const ContactMessageSchema: Schema<IContactMessage> = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  interestArea: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Message is required.'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ContactMessage: Model<IContactMessage> = mongoose.models.ContactMessage || mongoose.model<IContactMessage>('ContactMessage', ContactMessageSchema);

export default ContactMessage;
