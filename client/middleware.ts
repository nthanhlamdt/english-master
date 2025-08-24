import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const publicRoutes = [
    '/login',
  ]
  const privateRoutes = [
    '/dashboard',
    '/roadmap',
    '/study',
    '/skills',
    '/entertainment',
    '/settings',
    '/profile',
    '/settings/account',
    '/settings/security',
    '/settings/privacy'
  ]

  const isAuthenticated = checkSimpleAuthentication(request)

  // Trang cần đăng nhập
  const isPrivatePage = privateRoutes.some(route => pathname.includes(route))

  // Trang đăng nhập/đăng ký
  const isAuthPage = publicRoutes.some(route => pathname.includes(route))

  // ✅ Đã đăng nhập mà vào trang auth → về dashboard
  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // ❌ Chưa đăng nhập mà vào trang private → về login
  if (!isAuthenticated && isPrivatePage) {
    const user = localStorage.getItem('userData')
    if (user) {
      localStorage.removeItem('userData')
    }
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Cho phép truy cập các trang khác
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|sounds).*)']
}

function checkSimpleAuthentication(request: NextRequest): boolean {
  const accessToken = request.cookies.get('access_token_user')?.value
  const refreshToken = request.cookies.get('refresh_token_user')?.value

  // Không có token nào
  if (!accessToken && !refreshToken) {
    return false
  }

  // Có access token và còn valid
  if (accessToken && !isTokenExpired(accessToken)) {
    return true
  }

  // Access token expired nhưng có refresh token còn valid
  if (refreshToken && !isTokenExpired(refreshToken)) {
    return true
  }

  // Cả hai đều expired hoặc invalid
  return false
}

function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const currentTime = Math.floor(Date.now() / 1000)
    return payload.exp < currentTime
  } catch {
    return true
  }
}