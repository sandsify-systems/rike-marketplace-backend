import { Router } from 'express';
import { CustomerController } from '../controllers/CustomerController';

const router = Router();
const customerController = new CustomerController();

router.get('/', (req, res) => customerController.getAll(req, res));
router.get('/:id', (req, res) => customerController.getById(req, res));
router.post('/', (req, res) => customerController.create(req, res));
router.put('/:id', (req, res) => customerController.update(req, res));
router.delete('/:id', (req, res) => customerController.delete(req, res));

export default router;
