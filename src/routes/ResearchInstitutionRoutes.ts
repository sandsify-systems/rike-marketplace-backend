import { Router } from 'express';
import { ResearchInstitutionController } from '../controllers/ResearchInstitutionController';

const router = Router();
const ResearchInstitution = new ResearchInstitutionController();

router.get('/', (req, res) => ResearchInstitution.getAll(req, res));
router.get('/:id', (req, res) => ResearchInstitution.getById(req, res));
router.post('/', (req, res) => ResearchInstitution.create(req, res));
router.put('/:id', (req, res) => ResearchInstitution.update(req, res));
router.delete('/:id', (req, res) => ResearchInstitution.delete(req, res));

export default router;
