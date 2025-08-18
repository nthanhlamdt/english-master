import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Tạo thư mục uploads nếu chưa có
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Cấu hình storage cho multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Filter file types
const fileFilter = (req: any, file: any, cb: any) => {
  const allowedTypes = {
    image: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'],
    audio: ['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/m4a', 'audio/aac'],
    video: ['video/mp4', 'video/avi', 'video/mov', 'video/wmv', 'video/webm']
  };

  const isAllowed = Object.values(allowedTypes).flat().includes(file.mimetype);

  if (isAllowed) {
    cb(null, true);
  } else {
    cb(new Error(`File type ${file.mimetype} không được hỗ trợ!`), false);
  }
};

// Cấu hình multer
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // Giới hạn 10MB
  }
});

// Middleware xử lý lỗi upload
export const handleUploadError = (err: any, req: any, res: any, next: any) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File quá lớn. Giới hạn 10MB'
      });
    }
    if (err.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({
        success: false,
        message: 'Quá nhiều file. Giới hạn 5 file'
      });
    }
  }

  if (err.message.includes('không được hỗ trợ')) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }

  next(err);
};