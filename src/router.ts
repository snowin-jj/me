import { Router } from 'express';
import { getMe } from './handlers/me';

const router = Router();

/**
 * GET /me
 */
router.get('/', getMe);

export default router;
