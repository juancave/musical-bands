import { Router } from 'express';
import * as bandController from '../controllers/band.controller';

const router = Router();

router.get('/', bandController.all);
router.get('/:id([0-9]+)', bandController.byId);
router.post('/', bandController.create);
router.put('/:id([0-9]+)', bandController.update);

export default router;
