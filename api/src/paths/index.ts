import { Router } from 'express';
import isOddRoutes from './is-odd';
import health from './health';

const router = Router();

router.use('/health', health);
router.use('/is-odd', isOddRoutes);
router.get('/', (_req, res, _next) => {
  res.status(200).json({ status: 'ok' });
  return;
});

export default router;
