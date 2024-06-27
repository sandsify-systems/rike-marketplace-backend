import { Router } from 'express';
import { getResearchInstitutions, getResearchInstitutionById, createResearchInstitution, updateResearchInstitution, deleteResearchInstitution } from '../controllers/ResearchInstitutionController';

const router = Router();

router.get('/', getResearchInstitutions);
router.get('/:id', getResearchInstitutionById);
router.post('/', createResearchInstitution);
router.put('/:id', updateResearchInstitution);
router.delete('/:id', deleteResearchInstitution);

export default router;
