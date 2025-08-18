import mongoose, { Document, Schema } from "mongoose"
import bcrypt from "bcrypt"

export interface IUser extends Document {
  email: string;
  password: string;
  fullName: string;
  avatar: Schema.Types.ObjectId;
  role: 'user' | 'admin';
  currentLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  currentStreak: number;
  longestStreak: number;
  totalStudyTime: number;
  totalPoints: number;

  // Methods
  comparePassword(password: string): Promise<boolean>;

}

// Regex kiểm tra email hợp lệ
const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Schema user
const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, 'Vui lòng nhập email'],
    unique: true, //Không được trùng lặp
    lowercase: true, //Chuyển email thành chữ thường
    validate: {
      validator: (val: string) => emailRegexPattern.test(val),
      message: 'Email không hợp lệ',
    },
  },
  password: {
    type: String,
    required: [true, 'Vui lòng nhập mật khẩu'],
    select: false, //Không hiển thị mật khẩu khi lấy dữ liệu
  },
  fullName: {
    type: String,
    required: [true, 'Vui lòng nhập tên người dùng'],
    minlength: [3, 'Tên người dùng phải có ít nhất 3 ký tự'],
    maxlength: [30, 'Tên người dùng không được vượt quá 30 ký tự'],
    trim: true
  },
  avatar: {
    type: Schema.Types.ObjectId,
    ref: 'Media',
    default: null,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  currentLevel: {
    type: String,
    enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    default: 'A1',
  },
  currentStreak: {
    type: Number,
    default: 0,
  },
  longestStreak: {
    type: Number,
    default: 0,
  },
  totalStudyTime: {
    type: Number,
    default: 0,
  },
  totalPoints: {
    type: Number,
    default: 0,
  }
}, { timestamps: true })

//METHOD SO SÁNH MẬT KHẨU
// Dùng để kiểm tra mật khẩu khi đăng nhập
userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
}

//METHOD HASH MẬT KHẨU
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
})

// Tạo index cho email để tìm kiếm nhanh hơn
userSchema.index({ email: 1 }, { unique: true });

export const User = mongoose.model<IUser>('User', userSchema);