import { Router } from 'express';
import genreRoutes from './genre.route';
import bandRoutes from './band.route';

const router = Router();

router.use('/genre', genreRoutes);
router.use('/band', bandRoutes);

export default router;
