import 'next-auth';
import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT as DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      group: string;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    group: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string;
    group: string;
  }
}
