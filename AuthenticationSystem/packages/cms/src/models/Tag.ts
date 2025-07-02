import mongoose, { Document, Schema, Model } from 'mongoose';

/**
 * @interface ITag
 * @description Interface for the Tag model.
 */
export interface ITag extends Document {
  name: string;
  slug: string;
  postType: 'blog' | 'product' | 'service' | 'page';
}

const TagSchema: Schema<ITag> = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, unique: true, index: true, trim: true },
    postType: {
      type: String,
      enum: ['blog', 'product', 'service', 'page'],
      required: true,
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

