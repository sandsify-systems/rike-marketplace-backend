import { Router } from 'express';
import { EquipmentController } from '../controllers/EquipmentController';

const router = Router();
const equipmentController = new EquipmentController();

router.get('/', (req, res) => equipmentController.getAll(req, res));
router.get('/:id', (req, res) => equipmentController.getById(req, res));
router.post('/', (req, res) => equipmentController.create(req, res));
router.put('/:id', (req, res) => equipmentController.update(req, res));
router.delete('/:id', (req, res) => equipmentController.delete(req, res));

export default router;

