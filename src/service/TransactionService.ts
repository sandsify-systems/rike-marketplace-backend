import { AppDataSource } from '../data-source';
import { Transaction } from '../entity/Transaction';

export class TransactionService {
  private transactionRepository = AppDataSource.getRepository(Transaction);

  async getAll() {
    return this.transactionRepository.find({ relations: ['order'] });
  }



  async getById(id: number) {
    return this.transactionRepository.findOne({
      where: { id },
      relations: ['order']
    });
  }

  async create(transactionData: Partial<Transaction>) {
    const transaction = this.transactionRepository.create(transactionData);
    return this.transactionRepository.save(transaction);
  }

  async update(id: number, transactionData: Partial<Transaction>) {
    await this.transactionRepository.update(id, transactionData);
    return this.transactionRepository.findOne({
      where: { id },
      relations: ['order']
    });
  }

  async delete(id: number) {
    return this.transactionRepository.delete(id);
  }
}
