import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/CatchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";
import { MediaService } from "../services/media.service";

export class MediaController {
  // TẢI LÊN 1 MEDIA
  static uploadMedia = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) return next(new ErrorHandler('Vui lòng tải lên file', 400));

    const userId = req.user?._id;

    if (!userId) return next(new ErrorHandler('Vui lòng đăng nhập người dùng', 404));

    const media = await MediaService.uploadMedia(
      {
        filePath: req.file.path,
        userId,
      }
    );

    res.status(201).json({
      success: true,
      message: 'Upload media thành công',
      data: media
    });
  })

  // TẢI LÊN NHIỀU MEDIA
  static uploadMultipleMedia = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    if (!req.files || req.files.length === 0) return next(new ErrorHandler('Vui lòng tải lên file', 400));

    const userId = req.user?._id;

    if (!userId) return next(new ErrorHandler('Vui lòng đăng nhập người dùng', 404));

    const media = await MediaService.uploadMultipleMedia(
      {
        files: req.files as Express.Multer.File[],
        userId,
      });

    res.status(201).json({
      success: true,
      message: 'Upload nhiều media thành công',
      data: media
    });
  });

  // LẤY MEDIA BẰNG ID
  static getMediaById = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const media = await MediaService.getMediaById(id);

    if (!media) return next(new ErrorHandler('Media không tồn tại', 404));

    res.status(200).json({
      success: true,
      message: 'Lấy media thành công',
      data: media
    })
  })

  // LẤY DANH SÁCH MEDIA VÀ PHÂN TRANG
  static getMediaList = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const mediaList = await MediaService.getMediaList();

    res.status(200).json({
      success: true,
      message: 'Lấy danh sách media thành công',
      data: mediaList
    })
  })

  // XÓA MEDIA
  static deleteMedia = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const userId = req.user?._id;

    if (!userId) return next(new ErrorHandler('Vui lòng đăng nhập người dùng', 404));

    const media = await MediaService.deleteMedia(id, userId);

    res.status(200).json({
      success: true,
    })
  })
}