import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IServiceInquiry extends Document {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  destination: string;
  studyLevel: string;
  services: string[];
  message?: string;
  createdAt: Date;
}

const ServiceInquirySchema: Schema<IServiceInquiry> = new Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required.'],
    trim: true,
  },
  nationality: {
    type: String,
    required: [true, 'Nationality is required.'],
    trim: true,
  },
  destination: {
    type: String,
    required: [true, 'Preferred study destination is required.'],
    trim: true,
  },
  studyLevel: {
    type: String,
    required: [true, 'Level of study is required.'],
    trim: true,
  },
  services: {
    type: [String],
    required: [true, 'Please select at least one service.'],
    validate: {
      validator: (v: string | any[]) => Array.isArray(v) && v.length > 0,
      message: 'Please select at least one service.',
    },
  },
  message: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ServiceInquiry: Model<IServiceInquiry> = mongoose.models.ServiceInquiry || mongoose.model<IServiceInquiry>('ServiceInquiry', ServiceInquirySchema);

export default ServiceInquiry;
