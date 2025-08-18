import express from "express";
import { AuthController } from "../controllers/auth.controller";
import { authenticateToken, requireRole } from "../middleware/auth.middleware";

const router = express.Router();

//ĐĂNG KÍ TÀI KHOẢN
router.post('/register', AuthController.register)

// ĐĂNG NHẬP
router.post('/login', AuthController.login)

// REFESH TOKEN
router.post('/refresh-token', AuthController.refeshToken)

// ĐĂNG XUẤT
router.post('/logout', authenticateToken, AuthController.logout)

// LẤY THÔNG TIN USER
router.get('/profile', authenticateToken, AuthController.getProfile)

// (ADMIN) TẠO USER MỚI
router.post('/create-user', authenticateToken, requireRole(['admin']), AuthController.createUser)

export const authRoutes = router;