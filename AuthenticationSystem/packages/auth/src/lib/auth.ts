import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDB } from './connectDB';
import User from '../models/User';

export const createAuthOptions = (
  mongodbUri: string,
  nextAuthSecret: string
): NextAuthOptions => ({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectDB(mongodbUri);

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await User.findOne({ email: credentials.email }).select(
          '+password'
        );

        if (!user) {
          return null;
        }

        const isPasswordMatch = await user.comparePassword(
          credentials.password
        );

        if (!isPasswordMatch) {
          return null;
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          group: user.group,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.group = (user as any).group; // Cast to access group property
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string; // Cast to assign to session
        session.user.group = token.group as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: nextAuthSecret,
});
