import { getServerSession } from "next-auth/next";
import { authOptions, connectDB, User } from '@/lib/auth';
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!isAdmin(session)) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  try {
    await connectDB();
    const users = await User.find({}).select("name email role");
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
