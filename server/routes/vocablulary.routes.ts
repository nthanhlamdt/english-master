import express from "express";
import { authenticateToken, requireRole } from "../middleware/auth.middleware";
import { VocabularyController } from "../controllers/vocabulary.controller";
const router = express.Router()

router.get(
  '/topics-user',
  authenticateToken,
  VocabularyController.getAllTopicsVocabularyUser
)

router.get(
  '/topics-admin',
  VocabularyController.getAllTopics
)

router.post(
  '/create-topic',
  // authenticateToken,
  // requireRole(['admin']),
  VocabularyController.createTopicVocabulary
)

export const vocabularyRoutes = router;