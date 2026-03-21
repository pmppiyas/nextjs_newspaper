import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { env } from '@/config/env.config';
import {
  getDefaultDashboardRoutes,
  getRouteOwner,
  isAuthRoute,
} from '@/utils/auth';
import { IRole } from '@/types/auth';

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.get('accessToken')?.value;

  if (!accessToken) {
    const routeOwner = getRouteOwner(pathname);

    if (routeOwner && routeOwner !== 'COMMON') {
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('redirectTo', pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  try {
    const secret = new TextEncoder().encode(env.JWT_SECRET);
    const { payload } = await jwtVerify(accessToken, secret);
    const userRole = payload.role as IRole | 'READER';

    if (isAuthRoute(pathname)) {
      return NextResponse.redirect(
        new URL(getDefaultDashboardRoutes(userRole), req.url)
      );
    }

    const routeOwner = getRouteOwner(pathname);

    if (routeOwner && routeOwner !== 'COMMON' && routeOwner !== userRole) {
      return NextResponse.redirect(
        new URL(getDefaultDashboardRoutes(userRole), req.url)
      );
    }

    return NextResponse.next();
  } catch (error) {
    console.error('JWT Verification Error:', error);

    const res = NextResponse.redirect(new URL('/login', req.url));
    res.cookies.delete('accessToken');
    return res;
  }
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/journalist/:path*',
    '/dashboard/:path*',
    '/login',
    '/signup',
  ],
};
