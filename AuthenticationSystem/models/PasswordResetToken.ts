import mongoose, { Schema, Document } from 'mongoose';

export interface IPasswordResetToken extends Document {
  email: string;
  token: string;
  expiresAt: Date;
}

const PasswordResetTokenSchema: Schema = new Schema({
  email: { type: String, required: true },
  token: { type: String, required: true, unique: true },
  expiresAt: { type: Date, required: true, expires: '1h' }, // Token will be automatically deleted after 1 hour
});

export default mongoose.models.PasswordResetToken || mongoose.model<IPasswordResetToken>('PasswordResetToken', PasswordResetTokenSchema);
