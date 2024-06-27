import { Request, Response } from 'express';
import { TaxonomyService } from '../services/TaxonomyService';

const taxonomyService = new TaxonomyService();

export const getTaxonomies = async (req: Request, res: Response) => {
  const taxonomies = await taxonomyService.getAll();
  res.json(taxonomies);
};

export const getTaxonomyById = async (req: Request, res: Response) => {
  const taxonomy = await taxonomyService.getById(Number(req.params.id));
  res.json(taxonomy);
};

export const createTaxonomy = async (req: Request, res: Response) => {
  const taxonomy = await taxonomyService.create(req.body);
  res.json(taxonomy);
};

export const updateTaxonomy = async (req: Request, res: Response) => {
  const taxonomy = await taxonomyService.update(Number(req.params.id), req.body);
  res.json(taxonomy);
};

export const deleteTaxonomy = async (req: Request, res: Response) => {
  await taxonomyService.delete(Number(req.params.id));
  res.sendStatus(204);
};
