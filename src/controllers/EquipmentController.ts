import { Request, Response } from 'express';
import { EquipmentService } from '../services/EquipmentService';

const equipmentService = new EquipmentService();

export const getEquipment = async (req: Request, res: Response) => {
  const equipment = await equipmentService.getAll();
  res.json(equipment);
};

export const getEquipmentById = async (req: Request, res: Response) => {
  const equipment = await equipmentService.getById(Number(req.params.id));
  res.json(equipment);
};

export const createEquipment = async (req: Request, res: Response) => {
  const equipment = await equipmentService.create(req.body);
  res.json(equipment);
};

export const updateEquipment = async (req: Request, res: Response) => {
  const equipment = await equipmentService.update(Number(req.params.id), req.body);
  res.json(equipment);
};

export const deleteEquipment = async (req: Request, res: Response) => {
  await equipmentService.delete(Number(req.params.id));
  res.sendStatus(204);
};
