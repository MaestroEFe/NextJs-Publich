'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginSchema } from "@repo/auth";
import AuthForm from "@/components/AuthForm";

const LoginPage = () => {
  const [apiError, setApiError] = useState("");
  const router = useRouter();

  const handleLogin = async (data: any) => {
    setApiError("");
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        setApiError("Invalid credentials");
        return;
      }

      router.replace("/dashboard");
    } catch (error) {
      setApiError("Something went wrong!");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
      <AuthForm
        formType="login"
        onSubmit={handleLogin}
        schema={loginSchema}
        apiError={apiError}
      />
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
      <p className="mt-2 text-center">
        <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
          Forgot Password?
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
