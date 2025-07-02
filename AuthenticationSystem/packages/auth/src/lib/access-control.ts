import { Session } from "next-auth";

/**
 * Checks if the user's group has admin-level access.
 * @param group The user's group (role).
 * @returns True if the user is an 'admin' or 'staff'.
 */
export const hasAdminAccess = (group: string | undefined | null): boolean => {
  if (!group) return false;
  return ['admin', 'staff'].includes(group.toLowerCase());
};

export const isAdmin = (session: Session | null) => {
  return session?.user?.group === 'admin';
};
