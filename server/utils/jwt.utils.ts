import jwt from "jsonwebtoken";
require('dotenv').config()

export class JWTUtils {
  //Tạo Access Token
  static generateAccessToken(userId: string): string {
    return jwt.sign(
      { userId },
      process.env.JWT_SECRET || '8D9F8FAB5EC3138B233ECC7BA947E04B3463994AE8BA0FCA55E2D4BBC60E3F41',
      { expiresIn: '15m' } //Hết hạn sau 15 phút
    )
  }

  //Tạo Refresh Token
  static generateRefreshToken(userId: string): string {
    return jwt.sign(
      { userId },
      process.env.JWT_REFRESH_SECRET || 'F067FD2C637610FA76761110BD60C70C854FC95AED1AC07A184A735D20DD5BED',
      { expiresIn: '7d' } //Hết hạn sau 7 ngày
    )
  }
  // Kiểm tra Access Token có hợp lệ không
  static verifyAccessToken(token: string): any {
    try {
      return jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    } catch (error) {
      throw new Error('Access Token không hợp lệ');
    }
  }

  //Kiểm tra refresh token có hợp lệ không
  static verifyRefreshToken(token: string): any {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH_SECRET || '')
    }
    catch (error) {
      throw new Error('Refresh Token không hợp lệ');
    }
  }
}
