import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['pt', 'en'];
const defaultLocale = 'pt';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Legacy redirects as defined in the plan:
  // /orcamento, /obrigado, /servicos/* redirect to homepage
  // /trabalhos redirects to /pt#projects
  if (pathname.startsWith('/orcamento') || pathname.startsWith('/obrigado') || pathname.startsWith('/servicos')) {
    return NextResponse.redirect(new URL('/pt', request.url), 301);
  }

  if (pathname.startsWith('/trabalhos')) {
    return NextResponse.redirect(new URL('/pt#projects', request.url), 301);
  }

  // Check if pathname has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Root redirect to default locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Redirect /sobre to /pt/sobre
  if (pathname === '/sobre') {
    return NextResponse.redirect(new URL(`/${defaultLocale}/sobre`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.pdf|.*\\.png|.*\\.jpg|.*\\.svg).*)'],
};
