"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          AuthSystem
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          {session ? (
            <>
              <Link href="/dashboard" className="text-gray-300 hover:text-white">
                Dashboard
              </Link>
              <Link href="/profile" className="text-gray-300 hover:text-white">
                Profile
              </Link>
              {session.user?.role === "admin" && (
                <Link href="/admin/dashboard" className="text-gray-300 hover:text-white">
                  Admin
                </Link>
              )}
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-gray-300 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-300 hover:text-white">
                Login
              </Link>
              <Link href="/register" className="text-gray-300 hover:text-white">
                Register
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link href="/" className="block text-gray-300 hover:text-white py-2">
            Home
          </Link>
          {session ? (
            <>
              <Link href="/dashboard" className="block text-gray-300 hover:text-white py-2">
                Dashboard
              </Link>
              <Link href="/profile" className="block text-gray-300 hover:text-white py-2">
                Profile
              </Link>
              {session.user?.role === "admin" && (
                <Link href="/admin/dashboard" className="block text-gray-300 hover:text-white py-2">
                  Admin
                </Link>
              )}
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="block text-gray-300 hover:text-white w-full text-left py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="block text-gray-300 hover:text-white py-2">
                Login
              </Link>
              <Link href="/register" className="block text-gray-300 hover:text-white py-2">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
