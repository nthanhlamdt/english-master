import express from 'express'
import { upload } from '../middleware/upload.middleware'
import { MediaController } from '../controllers/media.controller'
import { authenticateToken, requireRole } from '../middleware/auth.middleware'
const router = express.Router()


// TẢI LÊN 1 MEDIA
router.post(
  '/upload/single',
  // authenticateToken,
  // requireRole(['admin']),
  upload.single('file'),
  MediaController.uploadMedia
)

// TẢI LÊN NHIỀU MEDIA
router.post(
  '/upload/multiple',
  authenticateToken,
  requireRole(['admin']),
  upload.array('files'),
  MediaController.uploadMultipleMedia
)

// LẤY MEDIA BẰNG ID
router.get(
  '/:id',
  authenticateToken,
  requireRole(['admin']),
  MediaController.getMediaById
)

// LẤY DANH SÁCH MEDIA
router.get(
  '/',
  // authenticateToken,
  // requireRole(['admin']),
  MediaController.getMediaList
)

// XÓA MEDIA
router.delete(
  '/:id',
  authenticateToken,
  requireRole(['admin']),
  MediaController.deleteMedia
)

export const MediaRoutes = router