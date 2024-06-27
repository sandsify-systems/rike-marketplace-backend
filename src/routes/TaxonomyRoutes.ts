import { Router } from 'express';
import { getTaxonomies, getTaxonomyById, createTaxonomy, updateTaxonomy, deleteTaxonomy } from '../controllers/TaxonomyController';

const router = Router();

router.get('/', getTaxonomies);
router.get('/:id', getTaxonomyById);
router.post('/', createTaxonomy);
router.put('/:id', updateTaxonomy);
router.delete('/:id', deleteTaxonomy);

export default router;
