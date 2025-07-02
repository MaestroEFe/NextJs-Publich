// models/Post.ts
import mongoose, { Schema, Document } from "mongoose";

export type PostType = "blog" | "product" | "service";

export interface IPost extends Document {
  title: string;
  slug: string;
  content: string;
  summary?: string;
  coverImage?: string;
  tags?: string[];
  type: PostType;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;

  // Optional fields depending on type
  price?: number;           // for products/services
  category?: string;        // for filtering
  features?: string[];      // for products/services
}

const PostSchema: Schema<IPost> = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  summary: { type: String },
  coverImage: { type: String },
  tags: [{ type: String }],
  type: { type: String, enum: ["blog", "product", "service"], required: true },
  published: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

  // Product/Service only
  price: { type: Number },
  category: { type: String },
  features: [{ type: String }],
});

export default mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);
