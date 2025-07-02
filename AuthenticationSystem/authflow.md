# Authentication Flow: Files and Functions

This document outlines the complete authentication flow, detailing the files and functions involved at each stage. This serves as a guide for easy debugging and understanding of the system.

## 1. User Registration Flow

**Path**: `Frontend (Signup Page)` → `API Route` → `Database`

- **Frontend ([`./app/(auth)/register/page.tsx`](./app/(auth)/register/page.tsx))**
  - **Component**: `RegisterForm`
  - **Action**: Handles form submission, calls a `signUp` function with user data, and manages form state and validation.

- **API Route ([`./app/api/auth/register/route.ts`](./app/api/auth/register/route.ts))**
  - **Function**: `POST`
  - **Action**: Validates the incoming request, checks if the user already exists, hashes the password using `bcrypt`, and creates a new user record in the database.

- **Database Model ([`./models/User.ts`](./models/User.ts))**
  - **Model**: `User`
  - **Action**: Defines the user schema, includes a pre-save hook for password hashing, and provides a `comparePassword` method for login verification.

## 2. User Login Flow

**Path**: `Frontend (Login Page)` → `NextAuth.js` → `API Route` → `Database` → `Session Creation`

- **Frontend ([`./app/(auth)/login/page.tsx`](./app/(auth)/login/page.tsx))**
  - **Component**: `LoginForm`
  - **Action**: Handles form submission, uses `signIn('credentials', {...})` from `next-auth/react` to initiate the login process, and manages loading states and errors.

- **NextAuth Configuration ([`./lib/auth.ts`](./lib/auth.ts))**
  - **Configuration**: `authOptions`
  - **Action**: Sets up the `CredentialsProvider`, defines the `authorize` function for validating credentials, and configures JWT and session callbacks.

- **Session Management ([`./lib/auth.ts`](./lib/auth.ts))**
  - **Functions**:
    - `jwt`: Adds user data (like ID and group) to the JWT token.
    - `session`: Makes user data available in the session object.

## 3. Protected Routes & Middleware

- **Middleware ([`./middleware.ts`](./middleware.ts))**
  - **Function**: `middleware`
  - **Action**: Intercepts requests to verify authentication, handles role-based redirects (e.g., for admin routes), and protects pages from unauthenticated access.

## 4. API Authentication

- **API Routes (`/app/api/**/route.ts`)**
  - **Action**: Protected API routes use `getServerSession(authOptions)` to get the current user's session and verify their role (`session.user.group`) before processing the request.

- **Database Connection ([`./lib/connectDB.ts`](./lib/connectDB.ts))**
  - **Function**: `connectDB`
  - **Action**: Establishes the connection to the MongoDB database.

## 5. Session Management

- **Client-Side ([`./app/layout.tsx`](./app/layout.tsx))**
  - **Component**: `SessionProvider`
  - **Action**: Wraps the application to provide session context to all components.

- **Server-Side ([`./lib/auth.ts`](./lib/auth.ts))**
  - **Hooks/Functions**:
    - `getServerSession`: Used in server components to access session data.
    - `useSession`: Used in client components to access session data.

## 6. Admin Features

- **Admin Routes (`/app/admin/**/*.tsx`)**
  - **Action**: These components are protected by the middleware and render admin-specific UI.

- **Admin API Endpoints (`/app/api/admin/**/route.ts`)**
  - **Action**: Provide functionality for admin tasks like listing users, updating roles, etc. These are protected to ensure only admins can access them.

## 7. Security

- **Middleware ([`./middleware.ts`](./middleware.ts))**
  - **Action**: Can be extended to include CSRF protection, rate limiting, and setting secure headers.

- **Auth Configuration ([`./lib/auth.ts`](./lib/auth.ts))**
  - **Action**: Configures JWT encryption, session expiration, and secure cookie settings.

This detailed flow provides a clear map of the authentication system, making it easier to navigate, debug, and extend the codebase.
