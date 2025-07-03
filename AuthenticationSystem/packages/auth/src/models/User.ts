import mongoose, { Document, Schema, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  group: string;
  isVerified: boolean;
  verificationToken?: string;
  verificationTokenExpires?: Date;
  passwordResetToken?: string;
  passwordResetTokenExpires?: Date;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 6,
      select: false, // Do not return password by default
    },
    group: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      select: false,
    },
    verificationTokenExpires: {
      type: Date,
      select: false,
    },
    passwordResetToken: {
      type: String,
      select: false,
    },
    passwordResetTokenExpires: {
      type: Date,
      select: false,
    },
  },
  { timestamps: true }
);

// Hash password before saving
UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password') || !this.password) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare entered password with hashed password
UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  if (!this.password) return false;
  return await bcrypt.compare(password, this.password);
};

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
