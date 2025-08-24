import { NextFunction, Request, Response } from 'express'
import { QuizService } from '../services/quiz.service'
import { CatchAsyncError } from '../middleware/CatchAsyncError'
import ErrorHandler from '../utils/ErrorHandler'

export class QuizController {
  //(ADMIN) LẤY TẤT CẢ CÂU HỎI
  static getAllQuiz = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const quiz = await QuizService.getAllQuiz()
    return res.status(200).json({
      success: true,
      message: 'Lấy tất cả câu hỏi thành công',
      data: quiz,
    })
  })

  //(ADMIN) TẠO CÂU HỎI
  static createQuiz = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { assignment, question, type, options, answer, explanation } = req.body
    if (!assignment || !question || !type || !answer || !explanation)
      return next(new ErrorHandler('Vui lòng nhập đầy đủ thông tin', 400))

    if (type === 'Multiple Choice' && options.length < 2)
      return next(new ErrorHandler('Cần có ít nhất 2 lựa chọn', 400))

    const quiz = await QuizService.createQuiz({
      assignment,
      question,
      type,
      options,
      answer,
      explanation,
    })
    return res.status(201).json({
      success: true,
      message: 'Tạo câu hỏi thành công',
      data: quiz,
    })
  })
}
