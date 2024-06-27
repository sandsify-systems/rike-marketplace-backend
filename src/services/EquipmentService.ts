import { AppDataSource } from '../data-source';
import { Equipment } from '../entity/Equipment';

export class EquipmentService {
  private equipmentRepository = AppDataSource.getRepository(Equipment);

  async getAll() {
    return this.equipmentRepository.find();
  }

  async getById(id: number) {
    return this.equipmentRepository.findOneBy({ id });
  }

  async create(data: Partial<Equipment>) {
    const equipment = this.equipmentRepository.create(data);
    return this.equipmentRepository.save(equipment);
  }

  async update(id: number, data: Partial<Equipment>) {
    await this.equipmentRepository.update(id, data);
    return this.equipmentRepository.findOneBy({ id });
  }

  async delete(id: number) {
    return this.equipmentRepository.delete(id);
  }
}
