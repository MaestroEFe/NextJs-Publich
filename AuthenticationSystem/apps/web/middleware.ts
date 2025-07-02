import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Paths that should only be accessible to unauthenticated users
  const authPaths = ['/login', '/register'];

  // If the user is authenticated
  if (token) {
    // If they try to access login/register, redirect to dashboard
    if (authPaths.some(path => pathname.startsWith(path))) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    // If they try to access an admin route without the admin role, redirect
    if (pathname.startsWith('/admin') && token.group !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', req.url)); // Or a '/unauthorized' page
    }
  }

  // If the user is not authenticated
  if (!token) {
    // And they try to access a protected route, redirect to login
    const protectedPaths = ['/dashboard', '/profile', '/admin'];
    if (protectedPaths.some(path => pathname.startsWith(path))) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Otherwise, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
