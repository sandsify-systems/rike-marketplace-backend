import { Router } from 'express';
import { ProductCategoryController } from '../controllers/ProductCategoryController';

const router = Router();
const productCategoryController = new ProductCategoryController();

router.get('/', (req, res) => productCategoryController.getAll(req, res));
router.get('/:id', (req, res) => productCategoryController.getById(req, res));
router.post('/', (req, res) => productCategoryController.create(req, res));
router.put('/:id', (req, res) => productCategoryController.update(req, res));
router.delete('/:id', (req, res) => productCategoryController.delete(req, res));

export default router;
