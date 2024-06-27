import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Customer } from './Customer';
import { OrderItem } from './OrderItem';
import { Transaction } from './Transaction';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, customer => customer.orders)
  customer: Customer;

  @Column()
  totalAmount: number;

  @Column()
  date: Date;

  @OneToMany(() => OrderItem, orderItem => orderItem.order)
  items: OrderItem[];

  @OneToMany(() => Transaction, transaction => transaction.order)
  transactions: Transaction[];
}
