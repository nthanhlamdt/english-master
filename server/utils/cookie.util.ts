import { Response } from "express";

export class CookieUtil {
  // Đặt Access Token vào cookie
  static setAccessTokenCookie(res: Response, token: string, role: 'admin' | 'user') {
    res.cookie(`access_token_${role}`, token, {
      httpOnly: true, // Không thể truy cập từ client (chống XSS)
      secure: process.env.NODE_ENV === 'production', // Chỉ gửi qua HTTPS ở production
      sameSite: 'lax', // Ngăn chặn CSRF
      maxAge: 15 * 60 * 1000, //Hết hạn sau 15 phút
      path: '/', // Áp dụng cho tất cả đường dẫn
    })
  }

  // Đặt refresh token vào cookie
  static setRefreshTokenCookie(res: Response, token: string, role: 'admin' | 'user') {
    res.cookie(`refresh_token_${role}`, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,  // ⏰ Hết hạn sau 7 ngày
      path: '/'
    })
  }

  // Xóa tất cả cookies xác thực (khi đăng xuất)
  static clearAuthCookies(res: Response, role: 'admin' | 'user') {
    res.clearCookie(`access_token_${role}`);
    res.clearCookie(`refresh_token_${role}`);
  }
}