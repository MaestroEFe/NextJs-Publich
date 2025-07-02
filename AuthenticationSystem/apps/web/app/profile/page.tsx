'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { userUpdateSchema } from "@repo/auth/schemas";
import { z } from "zod";

const ProfilePage = () => {
  const { data: session, update } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<z.ZodError | null>(null);
  const [success, setSuccess] = useState("");
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    if (session) {
      setName(session.user?.name || "");
      setEmail(session.user?.email || "");
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");
    setSuccess("");
    setErrors(null);

    const result = userUpdateSchema.safeParse({ name, email });

    if (!result.success) {
      setErrors(result.error);
      return;
    }

    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message);
        // Update the session to reflect the changes
        await update({ ...session, user: { ...session?.user, ...result.data } });
      } else {
        setApiError(data.message || "Something went wrong!");
      }
    } catch (error) {
      setApiError("Something went wrong!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {session ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors?.flatten().fieldErrors.name && (
                <p className="text-red-500 text-sm">{errors.flatten().fieldErrors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors?.flatten().fieldErrors.email && (
                <p className="text-red-500 text-sm">{errors.flatten().fieldErrors.email}</p>
              )}
            </div>
            <p>
              <strong>Role:</strong> {session.user?.group}
            </p>
            {apiError && <p className="text-red-500">{apiError}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Update Profile
            </button>
          </form>
        </div>
      ) : (
        <p>Loading session...</p>
      )}
    </div>
  );
};

export default ProfilePage;
