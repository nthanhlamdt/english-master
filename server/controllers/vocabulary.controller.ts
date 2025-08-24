import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/CatchAsyncError";
import { VocabularyService } from "../services/vocabulary.service";
import ErrorHandler from "../utils/ErrorHandler";

export class VocabularyController {
  /*=========================== CHỦ ĐỀ TỪ VỰNG ================================== */
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

    if (!name || !image) return next(new ErrorHandler('Vui lòng nhập đầy đủ thông tin', 400));

    const topic = await VocabularyService.createTopicVocabulary({ name, image });

    res.status(200).json({
      success: true,
      data: topic,
    });
  });

  //(ADMIN) XÓA CHỦ ĐỀ TỪ VỰNG
  static deleteTopicVocabulary = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) return next(new ErrorHandler('Vui lòng nhập đầy đủ thông tin', 400));

    const topic = await VocabularyService.deleteTopicVocabulary(id);

    res.status(200).json({
      success: true,
      message: 'Xóa chủ đề từ vựng thành công',
      data: topic,
    });
  });

  //(ADMIN) SỬA CHỦ ĐỀ TỪ VỰNG
  static updateTopicVocabulary = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name, image } = req.body;

    if (!id || !name || !image) return next(new ErrorHandler('Vui lòng nhập đầy đủ thông tin', 400));

    const topic = await VocabularyService.updateTopicVocabulary(id, { name, image });

    res.status(200).json({
      success: true,
      message: 'Cập nhật chủ đề từ vựng thành công',
      data: topic,
    });
  });

  //(ADMIN) CẬP NHẬT TRẠNG THÁI XUẤT BẢN
  static updateTopicVocabularyStatus = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) return next(new ErrorHandler('Vui lòng nhập đầy đủ thông tin', 400));

    const topic = await VocabularyService.updateTopicVocabularyStatus(id);

    res.status(200).json({
      success: true,
      message: 'Cập nhật trạng thái xuất bản thành công',
      data: topic,
    });
  });

  /*=============================TỪ VỰNG================================= */
  //(ADMIN) LẤY TẤT CẢ TỪ VỰNG THEO CHỦ ĐỀ
  static getAllVocabularyByTopic = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) return next(new ErrorHandler('Vui lòng nhập đầy đủ thông tin', 400));

    const vocabulary = await VocabularyService.getAllVocabularyByTopic(id);

    res.status(200).json({
      success: true,
      message: 'Lấy tất cả từ vựng theo chủ đề thành công',
      data: vocabulary,
    });
  });

  //(ADMIN) TẠO TỪ VỰNG
  static createVocabulary = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { word, transcription, partOfSpeech, definition, vietnameseMeaning, example, image, vocabularyTopicId, quizId } = req.body;

    if (!word || !transcription || !partOfSpeech || !definition || !vietnameseMeaning || !example || !image || !vocabularyTopicId || !quizId) return next(new ErrorHandler('Vui lòng nhập đầy đủ thông tin', 400));

    const vocabulary = await VocabularyService.createVocabulary({ word, transcription, partOfSpeech, definition, vietnameseMeaning, example, image, vocabularyTopicId, quizId });

    res.status(201).json({
      success: true,
      message: 'Tạo từ vựng thành công',
      data: vocabulary
    })
  });

  //(ADMIN) XÓA TỪ VỰNG
  static deleteVocabulary = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) return next(new ErrorHandler('Vui lòng chọn từ vựng cần xóa', 400));

    const vocabulary = await VocabularyService.deleteVocabulary(id);

    res.status(200).json({
      success: true,
      message: 'Xóa từ vựng thành công',
      data: vocabulary,
    });
  })
}