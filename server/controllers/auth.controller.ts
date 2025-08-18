import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/CatchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import { AuthService } from "../services/auth.service";
import { CookieUtil } from "../utils/cookie.util";

export class AuthController {
  // ĐĂNG KÍ NGƯỜI DÙNG
  static register = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const { fullName, email, password, confirmPassword } = req.body;

      if (!fullName || !email || !password || !confirmPassword) return next(new ErrorHandler('Vui lòng điển đầy đủ thông tin', 400))

      if (password !== confirmPassword) return next(new ErrorHandler('Mật khẩu không khớp', 400))

      if (password.length < 8) return next(new ErrorHandler('Mật khẩu phải có ít nhất 8 ký tự', 400))

      if (password.length > 30) return next(new ErrorHandler('Mật khẩu không được vượt quá 30 ký tự', 400))

      // Kiểm tra email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) return next(new ErrorHandler('Email không hợp lệ', 400));

      //Gọi service để xử lý đăng ký người dùng
      const result = await AuthService.register({ fullName, email, password })

      //set cookies
      CookieUtil.setAccessTokenCookie(res, result.accessToken);
      CookieUtil.setRefreshTokenCookie(res, result.refreshToken);

      //Trả về thông tin người dùng
      return res.status(201).json({
        success: true,
        message: 'Đăng ký thành công',
        data: result.user
      })
    })

  // ĐĂNG NHẬP NGƯỜI DÙNG
  static login = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      const { email, password } = req.body;

      if (!email || !password) return next(new ErrorHandler('Vui lòng điển đầy đủ thông tin', 400))

      const result = await AuthService.login({ email, password })

      CookieUtil.setAccessTokenCookie(res, result.accessToken);
      CookieUtil.setRefreshTokenCookie(res, result.refreshToken);

      return res.status(200).json({
        success: true,
        message: 'Đăng nhập thành công',
        data: result.user
      })
    })

  // ĐĂNG XUẤT NGƯỜI DÙNG
  static logout = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      CookieUtil.clearAuthCookies(res)

      return res.status(200).json({
        success: true,
        message: 'Đăng xuất thành công'
      })
    })

  // LẤY THÔNG TIN USER
  static getProfile = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      if (!req.user) return next(new ErrorHandler('Vui lòng đăng nhập', 401))
      const result = await AuthService.getUserById(req.user._id);

      return res.status(200).json({
        success: true,
        data: result.user
      });
    })

  // CẬP NHẬT THÔNG TIN NGƯỜI DÙNG

  // ĐỔI MẬT KHẨU

  // REFESH TOKEN
  static refeshToken = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) return next(new ErrorHandler('Vui lòng đăng nhập', 401))

    const result = await AuthService.refreshToken(refreshToken);
    CookieUtil.setAccessTokenCookie(res, result.accessToken);

    return res.status(200).json({
      success: true,
      message: 'Token đã được làm mới'
    });
  })

  // (ADMIN) TẠO USER MỚI
  static createUser = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password || !role) return next(new ErrorHandler('Vui lòng điển đầy đủ thông tin', 400))

    if (password.length < 8) return next(new ErrorHandler('Mật khẩu phải có ít nhất 8 ký tự', 400))

    if (password.length > 30) return next(new ErrorHandler('Mật khẩu không được vượt quá 30 ký tự', 400))

    // Kiểm tra email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return next(new ErrorHandler('Email không hợp lệ', 400));

    const result = await AuthService.createUser({ fullName, email, password, role })

    return res.status(200).json({
      success: true,
      message: 'Tạo user thành công',
      data: result
    })
  })
}