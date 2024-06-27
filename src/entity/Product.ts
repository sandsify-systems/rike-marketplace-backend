import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ProductCategory } from './ProductCategory';
import { OrderItem } from './OrderItem';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  description: string; // Add description field

  @Column('decimal', { precision: 10, scale: 2 })
  price: number; // Add price field

  @Column({ default: 0 })
  likes: number;

  @ManyToOne(() => ProductCategory, category => category.products)
  category: ProductCategory;

  @OneToMany(() => OrderItem, orderItem => orderItem.product)
  orderItems: OrderItem[];
}
