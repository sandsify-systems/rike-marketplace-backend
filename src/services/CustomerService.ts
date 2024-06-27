import { AppDataSource } from '../data-source';
import { Customer } from '../entity/Customer';

export class CustomerService {
  private customerRepository = AppDataSource.getRepository(Customer);

  async getAll() { 
    return this.customerRepository.find();
  }

  async getById(id: number) {
    return this.customerRepository.findOneBy({ id });
  }

  async create(customerData: Partial<Customer>) {
    const customer = this.customerRepository.create(customerData);
    return this.customerRepository.save(customer);
  }

  async update(id: number, customerData: Partial<Customer>) {
    await this.customerRepository.update(id, customerData);
    return this.customerRepository.findOneBy({ id });
  }

  async delete(id: number) {
    return this.customerRepository.delete(id);
  }
}
