import express from "express";
import { authenticateTokenAdmin, authenticateTokenUser, requireRole } from "../middleware/auth.middleware";
import { VocabularyController } from "../controllers/vocabulary.controller";
const router = express.Router()

/*===================CHỦ ĐỀ TỪ VỰNG====================== */
// (USER) LẤY DANH SÁCH TỪ VỰNG CỦA NGƯỜI DÙNG
router.get(
  '/topics-user',
  authenticateTokenUser,
  VocabularyController.getAllTopicsVocabularyUser
)

// (ADMIN) LẤY DANH SÁCH TỪ VỰNG CỦA ADMIN
router.get(
  '/topics-admin',
  authenticateTokenAdmin,
  requireRole(['admin']),
  VocabularyController.getAllTopics
)

// (ADMIN) TẠO CHỦ ĐỀ TỪ VỰNG
router.post(
  '/create-topic',
  authenticateTokenAdmin,
  requireRole(['admin']),
  VocabularyController.createTopicVocabulary
)

// (ADMIN) XÓA CHỦ ĐỀ TỪ VỰNG
router.delete(
  '/topic/:id',
  authenticateTokenAdmin,
  requireRole(['admin']),
  VocabularyController.deleteTopicVocabulary
)

// (ADMIN) SỬA CHỦ ĐỀ TỪ VỰNG
router.put(
  '/topic/:id',
  authenticateTokenAdmin,
  requireRole(['admin']),
  VocabularyController.updateTopicVocabulary
)

// (ADMIN) CẬP NHẬT TRẠNG THÁI XUẤT BẢN
router.put(
  '/topic/:id/status',
  authenticateTokenAdmin,
  requireRole(['admin']),
  VocabularyController.updateTopicVocabularyStatus
)

/*==========================TỪ VỰNG========================*/
//(ADMIN) LẤY TẤT CẢ TỪ VỰNG THEO CHỦ ĐỀ
router.get(
  '/:id',
  authenticateTokenAdmin,
  requireRole(['admin']),
  VocabularyController.getAllVocabularyByTopic
)
//(ADMIN) TẠO TỪ VỰNG*
router.post(
  '/create',
  authenticateTokenAdmin,
  requireRole(['admin']),
  VocabularyController.createVocabulary
)

//(ADMIN) XÓA TỪ VỰNG
router.delete(
  '/:id',
  authenticateTokenAdmin,
  requireRole(['admin']),
  VocabularyController.deleteVocabulary
)

export const vocabularyRoutes = router;