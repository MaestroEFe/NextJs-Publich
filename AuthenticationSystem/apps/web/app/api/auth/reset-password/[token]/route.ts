import { NextResponse } from 'next/server';
import { connectDB, User, PasswordResetToken } from '@repo/auth';
import bcrypt from 'bcryptjs';

export async function POST(req: Request, { params }: { params: { token: string } }) {
  try {
    await connectDB(process.env.MONGODB_URI!);
    const { password } = await req.json();
    const { token } = params;

    if (!password) {
      return NextResponse.json({ message: 'Password is required' }, { status: 400 });
    }

    const resetToken = await PasswordResetToken.findOne({ token });

    if (!resetToken || resetToken.expiresAt < new Date()) {
      return NextResponse.json({ message: 'Invalid or expired token' }, { status: 400 });
    }

    const user = await User.findOne({ email: resetToken.email });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();

    // Delete the token so it cannot be reused
    await PasswordResetToken.deleteOne({ _id: resetToken._id });

    return NextResponse.json({ message: 'Password has been reset successfully.' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
  }
}
