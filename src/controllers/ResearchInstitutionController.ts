import { Request, Response } from 'express';
import { ResearchInstitutionService } from '../services/ResearchInstitutionService';

const researchInstitutionService = new ResearchInstitutionService();

export const getResearchInstitutions = async (req: Request, res: Response) => {
  const institutions = await researchInstitutionService.getAll();
  res.json(institutions);
};

export const getResearchInstitutionById = async (req: Request, res: Response) => {
  const institution = await researchInstitutionService.getById(Number(req.params.id));
  res.json(institution);
};

export const createResearchInstitution = async (req: Request, res: Response) => {
  const institution = await researchInstitutionService.create(req.body);
  res.json(institution);
};

export const updateResearchInstitution = async (req: Request, res: Response) => {
  const institution = await researchInstitutionService.update(Number(req.params.id), req.body);
  res.json(institution);
};

export const deleteResearchInstitution = async (req: Request, res: Response) => {
  await researchInstitutionService.delete(Number(req.params.id));
  res.sendStatus(204);
};
