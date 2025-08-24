import cloudinary from "../config/cloudinary.config";
import { IMedia, Media } from "../models/media.model";
import fs from 'fs';

interface IUploadMedia {
  filePath: string;
  userId: string
}

interface IUploadMedias {
  files: Express.Multer.File[];
  userId: string
}


export class MediaService {
  // các hàm hổ trợ
  private static getMediaType(resourceType: string): 'image' | 'audio' | 'video' {
    switch (resourceType) {
      case 'image': return 'image';
      case 'video': return 'video';
      case 'raw': return 'audio';
      default: return 'image';
    }
  }

  private static deleteTempFile(filePath: string): void {
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (error) {
      console.error('Lỗi xóa file tạm:', error);
    }
  }

  // TẢI LÊN 1 MEDIA
  static async uploadMedia(uploadData: IUploadMedia): Promise<IMedia> {
    const { filePath, userId } = uploadData;

    console.log('user', userId)
    // tải media lên Cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'english-learning',
      resource_type: 'auto',
      transformation: [
        { width: 1000, height: 1000, crop: 'limit' },
        { quality: 'auto' }
      ]
    });
    const newMedia = await Media.create({
      type: this.getMediaType(result.resource_type),
      url: result.secure_url,
      publicId: result.public_id,
      format: result.format,
      size: result.bytes,
      duration: result.duration,
      width: result.width,
      height: result.height,
      userId: userId
    })

    console.log('new media: ', newMedia)
    // Xóa file tạm
    this.deleteTempFile(filePath);

    return newMedia
  }

  // TẢI LÊN NHIỀU MEDIA
  static async uploadMultipleMedia(dataUpload: IUploadMedias): Promise<IMedia[]> {
    const { files, userId } = dataUpload
    const uploadPromises = files.map((file) => {
      return this.uploadMedia({ filePath: file.path, userId })
    });

    const results = await Promise.all(uploadPromises);
    return results;
  }

  // LẤY MEDIA BẰNG ID
  static async getMediaById(id: string): Promise<IMedia | null> {
    return await Media.findById(id).populate('userId', 'fullName email');
  }

  //LẤY DANH SÁCH MEDIA VÀ PHÂN TRANG
  static async getMediaList() {
    const media = await Media.find().populate('userId', 'fullName email');
    return media;
  }

  // XÓA MEDIA
  static async deleteMedia(mediaId: string, userId: string): Promise<IMedia | null> {
    const media = await Media.findOne({ _id: mediaId, uploadedBy: userId });
    if (!media) {
      throw new Error('Media không tồn tại hoặc bạn không có quyền xóa');
    }

    // Xóa từ Cloudinary
    await cloudinary.uploader.destroy(media.publicId);

    // Xóa từ database
    const mediaDeleted = await Media.findByIdAndDelete(mediaId);

    return mediaDeleted;
  }
}