import express from 'express';
import { authRoutes } from './auth.routes';
import { vocabularyRoutes } from './vocablulary.routes';
import { MediaRoutes } from './media.routes';


const router = express.Router();

router.use('/auth', authRoutes)
router.use('/vocabulary', vocabularyRoutes)
router.use('/media', MediaRoutes)

// ✅ ROOT ENDPOINT
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Chào mừng đến với English Master API! 🎓',
    documentation: req.protocol + '://' + req.get('host') + '/api',
    health: req.protocol + '://' + req.get('host') + '/health'
  });
});

export const mainRouter = router;