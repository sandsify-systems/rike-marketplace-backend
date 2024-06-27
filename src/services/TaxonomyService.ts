import { AppDataSource } from '../data-source';
import { Taxonomy } from '../entity/Taxonomy';

export class TaxonomyService {
  private taxonomyRepository = AppDataSource.getRepository(Taxonomy);

  async getAll() {
    return this.taxonomyRepository.find();
  }

  async getById(id: number) {
    return this.taxonomyRepository.findOneBy({ id });
  }

  async create(data: Partial<Taxonomy>) {
    const taxonomy = this.taxonomyRepository.create(data);
    return this.taxonomyRepository.save(taxonomy);
  }

  async update(id: number, data: Partial<Taxonomy>) {
    await this.taxonomyRepository.update(id, data);
    return this.taxonomyRepository.findOneBy({ id });
  }

  async delete(id: number) {
    return this.taxonomyRepository.delete(id);
  }
}
