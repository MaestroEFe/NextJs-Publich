import { Session } from "next-auth";

export const isAdmin = (session: Session | null) => {
  return session?.user?.group === 'admin';
};
