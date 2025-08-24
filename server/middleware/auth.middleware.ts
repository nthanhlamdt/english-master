import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "./CatchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import { AuthService, UserInfo } from "../services/auth.service";
import { CookieUtil } from "../utils/cookie.util";
import { JWTUtils } from "../utils/jwt.utils";


// Extend Request để có thêm thuộc tính user
declare global {
  namespace Express {
    interface Request {
      user?: UserInfo
    }
  }
}

// MIDDLEWARE XÁC THỰC 
export const authenticateTokenUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.cookies.access_token_user;

    //Nếu không có access token, kiểm tra refresh token
    if (!accessToken) {
      const refeshToken = req.cookies.refresh_token_user;
      if (!refeshToken) return next(new ErrorHandler('Vui lòng đăng nhập', 410))

      // Tạo access token mới từ refresh token
      const { accessToken: newAccessToken } = await AuthService.refreshToken(refeshToken);

      //Set access token mới vào cookie
      CookieUtil.setAccessTokenCookie(res, newAccessToken, 'user');
      req.cookies.access_token_user = newAccessToken;

      //Verify token mới và lấy thông tin user
      const decoded = JWTUtils.verifyAccessToken(newAccessToken)
      const userResult = await AuthService.getUserById(decoded.userId)

      req.user = userResult.user

      return next();
    }

    //Nếu có access token, verify và lấy thông tin user
    const decoded = JWTUtils.verifyAccessToken(accessToken);
    const userResult = await AuthService.getUserById(decoded.userId);

    req.user = userResult.user;
    next();
  })

export const authenticateTokenAdmin = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.cookies.access_token_admin;

    //Nếu không có access token, kiểm tra refresh token
    if (!accessToken) {
      const refeshToken = req.cookies.refresh_token_admin;
      if (!refeshToken) return next(new ErrorHandler('Vui lòng đăng nhập', 410))

      // Tạo access token mới từ refresh token
      const { accessToken: newAccessToken } = await AuthService.refreshToken(refeshToken);

      //Set access token mới vào cookie
      CookieUtil.setAccessTokenCookie(res, newAccessToken, 'admin');
      req.cookies.access_token_admin = newAccessToken;

      //Verify token mới và lấy thông tin user
      const decoded = JWTUtils.verifyAccessToken(newAccessToken)
      const userResult = await AuthService.getUserById(decoded.userId)

      req.user = userResult.user

      return next();
    }

    //Nếu có access token, verify và lấy thông tin user
    const decoded = JWTUtils.verifyAccessToken(accessToken);
    const userResult = await AuthService.getUserById(decoded.userId);

    req.user = userResult.user;
    next();
  })

// MIDDLEWARE PHÂN QUYỀN
export const requireRole = (roles: string[]) => {
  return CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return next(new ErrorHandler('Vui lòng đăng nhập', 401))

    //Kiếm tra role
    if (!roles.includes(req.user.role)) return next(new ErrorHandler('Bạn không có quyền truy cập', 403))

    next();
  })
}