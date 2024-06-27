import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './Order';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, order => order.transactions)
  order: Order;

  @Column()
  amount: number;

  @Column()
  date: Date;
}
