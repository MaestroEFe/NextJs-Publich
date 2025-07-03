import { createAuthOptions, connectDB as connectAuthDB, sendEmail } from '@repo/auth';

const MONGODB_URI = process.env.MONGODB_URI;
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM || 'onboarding@resend.dev';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!NEXTAUTH_SECRET) {
  throw new Error('Please define the NEXTAUTH_SECRET environment variable inside .env.local');
}

if (!RESEND_API_KEY) {
  throw new Error('Please define the RESEND_API_KEY environment variable inside .env.local');
}

// Export configured auth options
export const authOptions = createAuthOptions(MONGODB_URI, NEXTAUTH_SECRET);

// Export configured email sender
export async function sendVerificationRequest(params: { identifier: any; url: any; }) {
  const { identifier: email, url } = params;
  await sendEmail({
    to: email,
    from: process.env.EMAIL_FROM!,
    subject: 'Verify your email address',
    html: `<p>Click <a href="${url}">here</a> to verify your email address.</p>`
  });
}

// Export configured database connector
export const connectDB = () => connectAuthDB(MONGODB_URI);
