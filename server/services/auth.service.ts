import { Error } from 'mongoose';
import { User, IUser } from '../models/user.model'
import ErrorHandler from '../utils/ErrorHandler'
import { JWTUtils } from '../utils/jwt.utils'
import { Media } from '../models/media.model';

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  role?: string;
}

interface LoginData {
  email: string;
  password: string;
  role: string;
}

export interface UserInfo {
  _id: string;
  fullName: string;
  email: string;
  avatar: string;
  role: string;
  currentLevel: string;
  currentStreak: number;
  longestStreak: number;
  totalStudyTime: number;
  totalPoints: number;
}

interface AuthResponse {
  user: UserInfo;
  accessToken: string;
  refreshToken: string;
}

export class AuthService {
  // ĐĂNG KÍ TÀI KHOẢN MỚI
  static async register(userData: RegisterData): Promise<AuthResponse> {
    const { fullName, email, password } = userData;

    //Kiểm tra email đã tồn tại chưa
    const existingUser = await User.findOne({ email })
    if (existingUser) throw new ErrorHandler('Email đã tồn tại', 400);

    //Tạo user mới
    const newUser = await User.create({
      fullName,
      email,
      password
    })

    //Tạo JWT tokens
    const accessToken = JWTUtils.generateAccessToken((newUser._id as any).toString());
    const refreshToken = JWTUtils.generateRefreshToken((newUser._id as any).toString());

    //Trả về kết quả
    return {
      user: {
        _id: (newUser._id as any).toString(),
        fullName: newUser.fullName,
        email: newUser.email,
        avatar: '',
        role: 'user',
        currentLevel: newUser.currentLevel,
        currentStreak: newUser.currentStreak,
        longestStreak: newUser.longestStreak,
        totalStudyTime: newUser.totalStudyTime,
        totalPoints: newUser.totalPoints
      },
      accessToken,
      refreshToken
    }
  }

  //ĐĂNG NHẬP NGƯỜI DÙNG
  static async login(loginData: LoginData): Promise<AuthResponse> {
    const { email, password, role } = loginData;

    //Tìm user có password
    const user = await User.findOne({ email: email.toLocaleLowerCase().trim(), role }).select('+password')

    if (!user) throw new ErrorHandler('Email không tồn tại', 400);

    const isPasswordValid = await user?.comparePassword(password);
    if (!isPasswordValid) throw new ErrorHandler('Mật khẩu không chính xác', 400);

    //Lấy avatar media
    const avatar = await Media.findById(user.avatar)
    console.log(avatar)
    //Tạo JWT tokens
    const accessToken = JWTUtils.generateAccessToken((user._id as any).toString());
    const refreshToken = JWTUtils.generateRefreshToken((user._id as any).toString());

    //Trả về kết quả
    return {
      user: {
        _id: (user._id as any).toString(),
        fullName: user.fullName,
        email: user.email,
        avatar: avatar?.url || '',
        role: user.role,
        currentLevel: user.currentLevel,
        currentStreak: user.currentStreak,
        longestStreak: user.longestStreak,
        totalStudyTime: user.totalStudyTime,
        totalPoints: user.totalPoints
      },
      accessToken,
      refreshToken
    }
  }

  //LÀM MỚI ACCESS TOKEN
  static async refreshToken(refreshToken: string): Promise<{ accessToken: string }> {
    //verify refesh token
    const decoded = JWTUtils.verifyRefreshToken(refreshToken)

    if (!decoded) throw new ErrorHandler('Refresh token không hợp lệ', 401);

    const user = await User.findById(decoded.userId)
    if (!user) throw new ErrorHandler('User không tồn tại', 401);

    //Tạo access token mới
    const accessToken = JWTUtils.generateAccessToken((user._id as any).toString());

    return { accessToken }
  }

  // LẤY THÔNG TIN USER THEO ID
  static async getUserById(userId: string): Promise<{ user: UserInfo }> {
    const user = await User.findById(userId);

    if (!user) {
      throw new ErrorHandler('Không tìm thấy người dùng', 404);
    }

    //Lấy avatar media
    const avatar = await Media.findById(user.avatar)

    return {
      user: {
        _id: (user._id as any).toString(),
        fullName: user.fullName,
        email: user.email,
        avatar: avatar?.url || '',
        role: user.role,
        currentLevel: user.currentLevel,
        currentStreak: user.currentStreak,
        longestStreak: user.longestStreak,
        totalStudyTime: user.totalStudyTime,
        totalPoints: user.totalPoints
      }
    };
  }

  // (ADMIN) TẠO USER MỚI
  static async createUser(userData: RegisterData): Promise<UserInfo> {
    const { fullName, email, password, role } = userData;

    //Kiểm tra email đã tồn tại chưa
    const existingUser = await User.findOne({ email })
    if (existingUser) throw new ErrorHandler('Email đã tồn tại', 400);

    //Tạo user mới
    const newUser = await User.create({
      fullName,
      email,
      password,
      role
    })

    await newUser.save();

    return {
      _id: (newUser._id as any).toString(),
      fullName: newUser.fullName,
      email: newUser.email,
      avatar: '',
      role: newUser.role,
      currentLevel: newUser.currentLevel,
      currentStreak: newUser.currentStreak,
      longestStreak: newUser.longestStreak,
      totalStudyTime: newUser.totalStudyTime,
      totalPoints: newUser.totalPoints
    }
  }
}