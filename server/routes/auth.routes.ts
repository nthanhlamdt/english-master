import express from "express";
import { AuthController } from "../controllers/auth.controller";
import { authenticateTokenAdmin, authenticateTokenUser, requireRole } from "../middleware/auth.middleware";

const router = express.Router();

//ĐĂNG KÍ TÀI KHOẢN
router.post('/register', AuthController.register)

// ĐĂNG NHẬP
router.post('/login', AuthController.login)

// REFESH TOKEN
router.post('/refresh-token', AuthController.refeshToken)

// ĐĂNG XUẤT NGƯỜI DÙNG
router.post('/logout', authenticateTokenUser, AuthController.logout)

// ĐĂNG XUẤT ADMIN
router.post('/admin/logout', authenticateTokenAdmin, AuthController.logout)


// (ADMIN) TẠO USER MỚI
router.post('/create-user', authenticateTokenAdmin, requireRole(['admin']), AuthController.createUser)

export const authRoutes = router;