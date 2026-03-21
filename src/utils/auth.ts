import { IRole } from '@/types/auth';
import { User, Bell, CreditCard } from 'lucide-react';

type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

//ROUTES DEFINITION
const authRoutes = ['/login', '/signup', '/forget-password', '/reset-password'];

const commonProtectedRoutes: RouteConfig = {
  exact: ['/profile', '/settings'],
  patterns: [],
};

const journalistProtectedRoutes: RouteConfig = {
  patterns: [/^\/journalist/],
  exact: [],
};

const adminProtectedRoutes: RouteConfig = {
  patterns: [/^\/admin/],
  exact: [],
};

const readerProtectedRoutes: RouteConfig = {
  patterns: [/^\/dashboard/],
  exact: [],
};

//HELPER
export const isAuthRoute = (pathname: string) => {
  return authRoutes.includes(pathname);
};

const isRouteMatches = (pathname: string, routes: RouteConfig): boolean => {
  if (routes.exact.includes(pathname)) return true;
  return routes.patterns.some((pattern) => pattern.test(pathname));
};

//ROLE MATCHER
export const getRouteOwner = (
  pathname: string
): 'ADMIN' | 'JOURNALIST' | 'READER' | 'COMMON' | null => {
  if (isRouteMatches(pathname, adminProtectedRoutes)) return 'ADMIN';
  if (isRouteMatches(pathname, journalistProtectedRoutes)) return 'JOURNALIST';
  if (isRouteMatches(pathname, readerProtectedRoutes)) return 'READER';
  if (isRouteMatches(pathname, commonProtectedRoutes)) return 'COMMON';
  return null;
};

//DEFAULT DASHBOARD
export const getDefaultDashboardRoutes = (role: IRole): string => {
  switch (role) {
    case 'ADMIN':
      return '/admin/dashboard';
    case 'JOURNALIST':
      return '/journalist/dashboard';
    case 'READER':
      return '/dashboard';
    default:
      return '/';
  }
};

export const getUserMenuItems = (role: IRole | undefined) => {
  const baseDashboardPath =
    role === 'READER' ? '/dashboard' : `/${role?.toLowerCase()}/dashboard`;

  return [
    {
      label: 'Account',
      href: `${baseDashboardPath}/account`,
      icon: User,
    },
    {
      label: 'Billing',
      href: `${baseDashboardPath}/billing`,
      icon: CreditCard,
    },
    {
      label: 'Notification',
      href: `${baseDashboardPath}/notifications`,
      icon: Bell,
    },
  ];
};
