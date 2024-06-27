import { Router } from 'express';
import { TaxonomyController } from '../controllers/EquipmentTaxonomyController';

const router = Router();
const Taxonomy = new TaxonomyController();

router.get('/', (req, res) => Taxonomy.getAll(req, res));
router.get('/:id', (req, res) => Taxonomy.getById(req, res));
router.post('/', (req, res) => Taxonomy.create(req, res));
router.put('/:id', (req, res) => Taxonomy.update(req, res));
router.delete('/:id', (req, res) => Taxonomy.delete(req, res));

export default router;

