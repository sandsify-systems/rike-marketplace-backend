import { AppDataSource } from '../data-source';
import { User } from '../entity/User';

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  async getAll() {
    return this.userRepository.find();
  }

  async getById(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  async create(userData: Partial<User>) {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async update(id: number, userData: Partial<User>) {
    await this.userRepository.update(id, userData);
    return this.userRepository.findOneBy({ id });
  }

  async delete(id: number) {
    return this.userRepository.delete(id);
  }
}
