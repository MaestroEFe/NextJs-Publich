import mongoose, { Document, Schema, Model } from 'mongoose';
import { IUser } from '@repo/auth';
import { ITag } from './Tag';
import { ICategory } from './Category';

export interface IPost extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featuredImage?: string;
  author: IUser['_id'];
  status: 'draft' | 'published' | 'archived';
  postType: 'blog' | 'product' | 'service' | 'page';
  tags: ITag['_id'][];
  categories: ICategory['_id'][];
  meta?: Record<string, any>;
  publishedAt?: Date;
}

const PostSchema: Schema<IPost> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      trim: true,
    },
    featuredImage: {
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
    },
    postType: {
      type: String,
      enum: ['blog', 'product', 'service', 'page'],
      required: true,
    },
    tags: [{
      type: Schema.Types.ObjectId,
      ref: 'Tag',
    }],
    categories: [{
      type: Schema.Types.ObjectId,
      ref: 'Category',
    }],
    meta: {
      type: Schema.Types.Mixed,
    },
    publishedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Middleware to generate slug from title before saving
PostSchema.pre<IPost>('save', function (next) {
  if (this.isModified('title')) {
    this.slug = this.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  }
  next();
});

export const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
