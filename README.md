# Authentication System for any application

This project is a highly customizable Next.js authentication system that uses NextAuth.js for authentication and MongoDB for user management. It provides a secure and user-friendly way to handle user authentication and authorization in your Next.js application.

## Objectives

- Implement user authentication and authorization using NextAuth.js and MongoDB.
- Provide a secure and user-friendly way to handle user authentication and authorization in your Next.js application.

## Features

- User registration and login.
- User profile management.
- Password reset and recovery.
- Role-based access control.
- Secure user authentication and authorization.
- User session management.
- General pages that are accessible to public users (no authentication required).
- General pages that are accessible to authenticated users (authentication required).
- User profile pages that are accessible to authenticated users (authentication required).
- Admin pages that are accessible to admin users only.
- Admin dashboard that is accessible to admin users only.
- Admin users can add, edit, and delete other users.
- Admin users can add, edit, and delete other admin users.

## Structure
/auth-app/
│
├── /app/                            # Next.js App Router pages
│   ├── /api/                        # API routes
│   │   ├── /auth/                  # login, register, logout, reset
│   │   ├── /user/                  # get/update user info
│   │   └── /admin/                 # admin-only actions (CRUD users)
│   │
│   ├── /dashboard/                 # Admin dashboard (admin only)
│   │   └── page.tsx
│   │
│   ├── /profile/                   # Authenticated user profile
│   │   └── page.tsx
│   │
│   ├── /login/                     # Public login page
│   │   └── page.tsx
│   │
│   ├── /register/                  # Public registration page
│   │   └── page.tsx
│   │
│   ├── /reset-password/           # Password recovery flow
│   │   └── page.tsx
│   │
│   ├── /admin/manage-users/       # Admin-only user management
│   │   └── page.tsx
│   │
│   ├── /admin/manage-admins/      # Admin-only admin management
│   │   └── page.tsx
│   │
│   ├── /page.tsx                  # Public home page
│   └── layout.tsx                 # App layout
│
├── /components/                   # Reusable UI components
│   ├── AuthForm.tsx
│   ├── UserCard.tsx
│   ├── Sidebar.tsx
│   └── Navbar.tsx
│
├── /lib/                          # Utility functions & middleware
│   ├── auth.ts                    # Auth/session utilities (getSession, protectRoute)
│   ├── role.ts                    # RBAC helpers
│   └── connectDB.ts               # MongoDB connection logic
│
├── /middleware.ts                # Middleware (auth guards, role checks)
│
├── /models/                      # Mongoose models
│   ├── User.ts
│   └── Role.ts
│
├── /schemas/                     # Form validation (zod/yup)
│   └── userSchema.ts
│
├── /contexts/                    # AuthContext if needed (optional for session)
│   └── AuthProvider.tsx
│
├── /types/                       # TypeScript definitions
│   ├── user.d.ts
│   └── session.d.ts
│
├── /styles/                      # Global and module styles
│   └── globals.css
│
├── .env.local                    # Environment variables (DB URI, JWT secret, etc.)
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json



