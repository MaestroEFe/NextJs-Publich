import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      group: string;
    } & DefaultSession['user'];
  }

  interface User {
    group: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    group: string;
  }
}
