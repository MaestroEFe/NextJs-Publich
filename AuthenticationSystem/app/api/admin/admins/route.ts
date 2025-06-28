import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import User from "@/models/User";
import { isAdmin } from "@/lib/role";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!isAdmin(session)) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  try {
    await connectDB();
    // Find only users with the 'admin' role
    const admins = await User.find({ role: 'admin' }).select("name email role");
    return NextResponse.json(admins);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
