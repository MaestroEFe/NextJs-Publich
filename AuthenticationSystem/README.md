# Next.js Authentication System

This project is a comprehensive, highly customizable Next.js authentication system built with NextAuth.js and MongoDB. It provides a secure and robust foundation for handling user authentication, authorization, and management in any modern web application.

## Features

- **User Authentication:** Secure user registration, login, and session management.
- **Profile Management:** Authenticated users can view and update their profile information (name, email).
- **Password Reset:** A complete, secure flow for users to reset their forgotten passwords via email (simulated via console logs).
- **Role-Based Access Control (RBAC):**
  - Distinct roles for `user` and `admin`.
  - Protected routes and API endpoints for authenticated users and admins.
  - Middleware to enforce access control across the application.
- **Admin Dashboard:**
  - A central hub for administrators.
  - Admins can view, update, and delete all users.
  - Admins can view, update, and delete other admins.
- **Responsive UI:** Built with Tailwind CSS for a clean and responsive user interface.
- **Schema Validation:** Uses `zod` for robust and consistent form validation on both the client and server.

## Project Structure

```
/AuthenticationSystem/
│
├── /app/                            # Next.js App Router
│   ├── /(auth)/                     # Layout group for auth pages
│   │   ├── /login/
│   │   ├── /register/
│   │   ├── /reset-password/
│   │   └── layout.tsx
│   │
│   ├── /api/                        # API routes
│   │   ├── /auth/                  # Handles login, register, password reset
│   │   ├── /user/                  # Get/update current user info
│   │   └── /admin/                 # Admin-only actions (CRUD users & admins)
│   │
│   ├── /dashboard/                 # Protected user dashboard
│   │   └── page.tsx
│   │
│   ├── /profile/                   # Protected user profile page
│   │   └── page.tsx
│   │
│   ├── /admin/                     # Admin-only pages
│   │   ├── /dashboard/
│   │   ├── /manage-admins/
│   │   └── /manage-users/
│   │
│   ├── /page.tsx                  # Public home page
│   └── layout.tsx                 # Root app layout
│
├── /components/                   # Reusable UI components
│   ├── AuthForm.tsx               # Reusable form for login/register
│   ├── Navbar.tsx                 # Site-wide navigation bar
│   └── UserCard.tsx               # Card for displaying user info (admin)
│
├── /contexts/                     # React contexts
│   └── AuthProvider.tsx           # Wraps NextAuth SessionProvider
│
├── /lib/                          # Utility functions
│   ├── auth.ts                    # NextAuth.js configuration
│   ├── connectDB.ts               # MongoDB connection logic
│   └── role.ts                    # RBAC helper (isAdmin)
│
├── /models/                       # Mongoose models
│   ├── PasswordResetToken.ts
│   └── User.ts
│
├── /schemas/                      # Zod validation schemas
│   └── userSchema.ts
│
├── /middleware.ts                 # Route protection middleware
│
├── .env.local.example             # Example environment variables
├── next.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x or later)
- [MongoDB](https://www.mongodb.com/try/download/community) instance (local or cloud-hosted)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd AuthenticationSystem
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project by copying the example file:
    ```bash
    cp .env.local.example .env.local
    ```
    Update the `.env.local` file with your specific credentials:
    ```
    MONGODB_URI="your_mongodb_connection_string"
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="your_super_secret_string_for_nextauth"
    ```
    -   `NEXTAUTH_SECRET`: A random string used to hash tokens. You can generate one with `openssl rand -base64 32`.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

-   **Register a new user:** Navigate to `/register`.
-   **Create an admin user:** After registering, you can manually change a user's role to `admin` in your MongoDB database to access the admin features.
-   **Admin Dashboard:** Log in as an admin and navigate to `/admin/dashboard` to manage users and other admins.
-   **Password Reset:** Go to `/reset-password` to request a reset link. The link will be printed in the console where the development server is running.
npm install
```

## Setup

Create a `.env.local` file:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/yourdb
JWT_SECRET=your_jwt_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

## Development

```bash
npm run dev
```

## Production

```bash
npm run build
npm run start
```

## Available Scripts

```bash
npm run dev       # Run development server
npm run build     # Build for production
npm run lint      # Check for errors
```


