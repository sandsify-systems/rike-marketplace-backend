import { AppDataSource } from '../data-source';
import { ResearchInstitution } from '../entity/ResearchInstitution';

export class ResearchInstitutionService {
  private researchInstitutionRepository = AppDataSource.getRepository(ResearchInstitution);

  async getAll() {
    return this.researchInstitutionRepository.find();
  }

  async getById(id: number) {
    return this.researchInstitutionRepository.findOneBy({ id });
  }

  async create(data: Partial<ResearchInstitution>) {
    const institution = this.researchInstitutionRepository.create(data);
    return this.researchInstitutionRepository.save(institution);
  }

  async update(id: number, data: Partial<ResearchInstitution>) {
    await this.researchInstitutionRepository.update(id, data);
    return this.researchInstitutionRepository.findOneBy({ id });
  }

  async delete(id: number) {
    return this.researchInstitutionRepository.delete(id);
  }
}
