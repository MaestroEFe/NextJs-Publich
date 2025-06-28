
# 🚀 Next.js + MongoDB Authentication System

A robust, role-based authentication and user management system built with **Next.js 14 (App Router)** and **MongoDB**, designed for:

✅ Secure authentication  
✅ Role-based access control (RBAC)  
✅ Admin dashboard  
✅ User session management  
✅ Password reset, user profile, and more

---

## 📁 Project Structure Overview

```
/app             → App Router pages (login, register, dashboard, etc.)
/api             → API route handlers
/components      → Reusable UI components
/lib             → Auth logic, MongoDB connection, helpers
/models          → Mongoose schemas
/middleware.ts   → Protect routes based on auth/roles
```

---

## 🧱 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: NextAuth.js or custom JWT
- **Styling**: Tailwind CSS (optional)
- **Validation**: Zod or Yup

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/your-auth-project.git
cd your-auth-project
```

### 2. Install Dependencies
```bash
npm install
# or
yarn
```

### 3. Set Up Environment Variables
Create a `.env.local` file:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/yourdb
JWT_SECRET=your_jwt_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

---

## 🔐 Development Plan / Milestones

### ✅ Phase 1: Core Authentication
- [ ] Set up MongoDB connection (`lib/connectDB.ts`)
- [ ] Create User model (`models/User.ts`)
- [ ] Implement registration API (`/api/auth/register.ts`)
- [ ] Implement login API (`/api/auth/login.ts`)
- [ ] Add session storage with JWT or `next-auth`
- [ ] Create login & register pages
- [ ] Protect authenticated pages with middleware

### ✅ Phase 2: User Profile & Password Management
- [ ] Profile page (`/profile/page.tsx`)
- [ ] Update user info API (`/api/user/update.ts`)
- [ ] Implement password reset (request + token + reset form)

### ✅ Phase 3: Role-Based Access Control
- [ ] Add `role` field to user model
- [ ] Create admin-only middleware
- [ ] Create `/admin/dashboard` page
- [ ] Implement manage-users API (CRUD)
- [ ] Create admin panel for user management

### ✅ Phase 4: Session & Access Control
- [ ] Set up middleware (`middleware.ts`) for route protection
- [ ] Track user sessions via cookies or `next-auth`
- [ ] Role-check utilities (`lib/role.ts`)

---

## 🧪 Testing the App

- Register a normal user via `/register`
- Manually assign `admin` role in the database
- Try accessing `/dashboard`, `/admin/manage-users`
- Test session expiration and redirect flow

---

## 🔄 Available Scripts

```bash
npm run dev       # Run development server
npm run build     # Build for production
npm run lint      # Check for errors
```

---

## ✅ Feature Summary

| Feature                          | Status        |
|----------------------------------|---------------|
| Registration & Login             | ✅ In Progress |
| Profile Management               | ✅ Planned     |
| Password Reset                   | ✅ Planned     |
| RBAC (Role-Based Access)         | ✅ Planned     |
| Admin Dashboard                  | ✅ Planned     |
| User & Admin Management          | ✅ Planned     |
| Public + Private Pages           | ✅ Completed   |
| Session Handling                 | ✅ In Progress |

---

## 📂 Folder Highlights

| Folder      | Purpose                                  |
|-------------|------------------------------------------|
| `/app`      | App pages (login, register, dashboard)   |
| `/api`      | API endpoints for auth/user/admin        |
| `/models`   | Mongoose schema definitions              |
| `/lib`      | Utility functions, DB connection, tokens |
| `/components` | Reusable UI widgets (forms, navbars)  |
| `/middleware.ts` | Route guards based on auth & roles |

---

## 👤 Author & Maintainer

**Your Name**  
`@yourusername` on GitHub  
[youremail@example.com](mailto:youremail@example.com)
