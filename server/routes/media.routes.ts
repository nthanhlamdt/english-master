import express from 'express'
import { upload } from '../middleware/upload.middleware'
import { MediaController } from '../controllers/media.controller'
import { authenticateTokenAdmin, requireRole } from '../middleware/auth.middleware'
const router = express.Router()


// TẢI LÊN 1 MEDIA
router.post(
  '/upload/single',
  authenticateTokenAdmin,
  requireRole(['admin']),
  upload.single('file'),
  MediaController.uploadMedia
)

// TẢI LÊN NHIỀU MEDIA
router.post(
  '/upload/multiple',
  authenticateTokenAdmin,
  requireRole(['admin']),
  MediaController.getMediaById
)

// LẤY DANH SÁCH MEDIA
router.get(
  '/',
  authenticateTokenAdmin,
  requireRole(['admin']),
  MediaController.getMediaList
)

// XÓA MEDIA
router.delete(
  '/:id',
  authenticateTokenAdmin,
  requireRole(['admin']),
  MediaController.deleteMedia
)

export const MediaRoutes = router