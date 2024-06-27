import { Router } from 'express';
import { TransactionController } from '../controllers/TransactionController';

const router = Router();
const transactionController = new TransactionController();

router.get('/', (req, res) => transactionController.getAll(req, res));
router.get('/:id', (req, res) => transactionController.getById(req, res));
router.post('/', (req, res) => transactionController.create(req, res));
router.put('/:id', (req, res) => transactionController.update(req, res));
router.delete('/:id', (req, res) => transactionController.delete(req, res));

export default router;
