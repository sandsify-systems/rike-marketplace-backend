import { AppDataSource } from '../data-source';
import { ProductCategory } from '../entity/ProductCategory';

export class ProductCategoryService {
  private categoryRepository = AppDataSource.getRepository(ProductCategory);

  async getAll() {
    return this.categoryRepository.find();
  }

  async getById(id: number) {
    return this.categoryRepository.findOneBy({ id });
  }

  async create(categoryData: Partial<ProductCategory>) {
    const category = this.categoryRepository.create(categoryData);
    return this.categoryRepository.save(category);
  }

  async update(id: number, categoryData: Partial<ProductCategory>) {
    await this.categoryRepository.update(id, categoryData);
    return this.categoryRepository.findOneBy({ id });
  }

  async delete(id: number) {
    return this.categoryRepository.delete(id);
  }
}
