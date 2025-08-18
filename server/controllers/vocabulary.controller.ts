import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/CatchAsyncError";
import { VocabularyService } from "../services/vocabulary.service";
import ErrorHandler from "../utils/ErrorHandler";

export class VocabularyController {
  //(ADMIN) Lấy tất cả chủ đề Vocabulary
  static getAllTopics = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const topics = await VocabularyService.getAllTopics();
    res.status(200).json({
      success: true,
      data: topics,
    });
  });

  //(USER) Lấy tất cả chủ đề từ bảng VocabularyTopic(chủ đề từ vựng) cho user
  static getAllTopicsVocabularyUser = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?._id;
    if (!userId) return next(new ErrorHandler('Vui lòng đăng nhập người dùng', 404));

    const topics = await VocabularyService.getAllTopicsVocabularyUser(userId);
    if (!topics) return next(new ErrorHandler('Không tìm thấy chủ đề', 404));

    res.status(200).json({
      success: true,
      data: topics,
    });
  });

  //(ADMIN) TẠO CHỦ ĐỀ TỪ VỰNG
  static createTopicVocabulary = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { name, image } = req.body;
    const topic = await VocabularyService.createTopicVocabulary({ name, image });
    res.status(200).json({
      success: true,
      data: topic,
    });
  });
}