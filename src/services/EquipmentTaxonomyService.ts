// src/services/EquipmentTaxonomyService.ts

import { AppDataSource } from '../data-source';
import { EquipmentTaxonomy } from '../entity/EquipmentTaxonomy';

export class EquipmentTaxonomyService {
  private equipmentTaxonomyRepository = AppDataSource.getRepository(EquipmentTaxonomy);

  async getAll() {
    return this.equipmentTaxonomyRepository.find();
  }

  async getById(id: number) {
    return this.equipmentTaxonomyRepository.findOneBy({ id });
  }

  async getByEquipmentId(equipmentId: number) {
    return this.equipmentTaxonomyRepository.find({ where: { equipment: { id: equipmentId } } });
  }

  async create(data: Partial<EquipmentTaxonomy>) {
    const equipmentTaxonomy = this.equipmentTaxonomyRepository.create(data);
    return this.equipmentTaxonomyRepository.save(equipmentTaxonomy);
  }


  async update(id: number, data: Partial<EquipmentTaxonomy>) {
    await this.equipmentTaxonomyRepository.update(id, data);
    return this.equipmentTaxonomyRepository.findOneBy({ id });
  }

  async delete(id: number) {
    return this.equipmentTaxonomyRepository.delete(id);
  }
}
