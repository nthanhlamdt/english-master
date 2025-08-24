import express from 'express';
import { QuizController } from '../controllers/quiz.controller';
import { authenticateTokenAdmin, requireRole } from '../middleware/auth.middleware';

const router = express.Router()


//Lấy tất cả câu hỏi
router.get(
  '/',
  authenticateTokenAdmin,
  requireRole(['admin']),
  QuizController.getAllQuiz
)

//Tạo câu hỏi
router.post(
  '/create',
  authenticateTokenAdmin,
  requireRole(['admin']),
  QuizController.createQuiz
)

export const quizRoutes = router;