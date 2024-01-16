import { Router } from 'express';
import genreRoutes from './genre.route';

const router = Router();

router.use('/genre', genreRoutes);

export default router;
