import mongoose, { Document, Schema, Model } from 'mongoose';

export interface ITag extends Document {
  name: string;
  slug: string;
}

const TagSchema: Schema<ITag> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// Middleware to generate slug from name before saving
TagSchema.pre<ITag>('save', function (next) {
  if (this.isModified('name')) {
    this.slug = this.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  }
  next();
});

export const Tag: Model<ITag> = mongoose.models.Tag || mongoose.model<ITag>('Tag', TagSchema);
