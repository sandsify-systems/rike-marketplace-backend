import { AppDataSource } from '../data-source';
import { Product } from '../entity/Product';
import { ProductCategory } from '../entity/ProductCategory';

export class ProductService {
  private productRepository = AppDataSource.getRepository(Product);
  private productCategoryRepository = AppDataSource.getRepository(ProductCategory);

  async getAll() {
    return this.productRepository.find({ relations: ['category'] });
  }

  async getById(id: number) {
    return this.productRepository.findOne({ where: { id }, relations: ['category'] });
  }

  async create(productData: Partial<Product> & { categoryId: number }) {
    const { categoryId, ...restProductData } = productData;
    const category = await this.productCategoryRepository.findOne({ where: { id: categoryId } });

    if (!category) {
      throw new Error(`Product category with ID ${categoryId} not found`);
    }

    const product = this.productRepository.create({
      ...restProductData,
      category,
    });

    return this.productRepository.save(product);
  }

  async update(id: number, productData: Partial<Product> & { categoryId?: number }) {
    const productToUpdate = await this.productRepository.findOne({ where: { id }, relations: ['category'] });
    if (!productToUpdate) {
      throw new Error(`Product with ID ${id} not found`);
    }

    if (productData.categoryId) {
      const category = await this.productCategoryRepository.findOne({ where: { id: productData.categoryId } });
      if (!category) {
        throw new Error(`Product category with ID ${productData.categoryId} not found`);
      }
      productToUpdate.category = category;
    }

    Object.assign(productToUpdate, productData);
    return this.productRepository.save(productToUpdate);
  }

  async delete(id: number) {
    return this.productRepository.delete(id);
  }

  async findByCategoryId(categoryId: number) {
    return this.productRepository.find({ where: { category: { id: categoryId } }, relations: ['category'] });
  }
}
