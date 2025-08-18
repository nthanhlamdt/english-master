export interface User {
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