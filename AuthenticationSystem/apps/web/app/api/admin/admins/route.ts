import { getServerSession } from "next-auth/next";
import { authOptions, connectDB } from '@/lib/auth';
import { User, isAdmin } from '@repo/auth';
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!isAdmin(session)) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  try {
    await connectDB();
    // Find only users with the 'admin' group
    const admins = await User.find({ group: 'admin' }).select("name email group");
    return NextResponse.json(admins);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
