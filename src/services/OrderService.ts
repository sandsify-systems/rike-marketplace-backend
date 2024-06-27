import { AppDataSource } from '../data-source';
import { Order } from '../entity/Order';
import { OrderItem } from '../entity/OrderItem';
import { Product } from '../entity/Product';

export class OrderService {
  private orderRepository = AppDataSource.getRepository(Order);
  private orderItemRepository = AppDataSource.getRepository(OrderItem);
  private productRepository = AppDataSource.getRepository(Product);

  async getAll() {
    return this.orderRepository.find({ relations: ['customer', 'items', 'items.product'] });
  }

  async getById(id: number) {
    return this.orderRepository.findOne({ where: { id }, relations: ['customer', 'items', 'items.product'] });
  }

  async create(orderData: { customerId: number; items: { productId: number; quantity: number }[] }) {
    const order = this.orderRepository.create({
      customer: { id: orderData.customerId },
      totalAmount: 0, // Calculate total amount based on items
      date: new Date(),
    });

    await this.orderRepository.save(order);

    let totalAmount = 0;

    for (const item of orderData.items) {
      const product = await this.productRepository.findOne({ where: { id: item.productId } });
      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found`);
      }

      const orderItem = this.orderItemRepository.create({
        order,
        product,
        quantity: item.quantity,
      });

      await this.orderItemRepository.save(orderItem);
      totalAmount += product.price * item.quantity; // Assuming product has a price field
    }

    order.totalAmount = totalAmount;
    await this.orderRepository.save(order);

    return order;
  }

  async update(id: number, orderData: Partial<Order>) {
    await this.orderRepository.update(id, orderData);
    return this.orderRepository.findOne({ where: { id }, relations: ['customer', 'items', 'items.product'] });
  }

  async delete(id: number) {
    return this.orderRepository.delete(id);
  }
}
