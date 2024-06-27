import { Router } from 'express';
import { getEquipment, getEquipmentById, createEquipment, updateEquipment, deleteEquipment } from '../controllers/EquipmentController';

const router = Router();

router.get('/', getEquipment);
router.get('/:id', getEquipmentById);
router.post('/', createEquipment);
router.put('/:id', updateEquipment);
router.delete('/:id', deleteEquipment);

export default router;
