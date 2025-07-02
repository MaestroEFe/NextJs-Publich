import { getServerSession } from "next-auth/next";
import { authOptions, connectDB, User, userUpdateSchema } from "@repo/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const user = await User.findById(session.user.id).select("name email role");

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const result = userUpdateSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ message: "Invalid input", errors: result.error.flatten().fieldErrors }, { status: 400 });
    }

    await connectDB();
    const user = await User.findByIdAndUpdate(
      session.user.id,
      { $set: result.data },
      { new: true, runValidators: true }
    ).select("name email");

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Profile updated successfully", user });

  } catch (error) {
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
