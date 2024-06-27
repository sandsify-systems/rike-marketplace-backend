import { DataSource } from 'typeorm';
import { Product } from './entity/Product';
import { ProductCategory } from './entity/ProductCategory';
import { User } from './entity/User';
import { Customer } from './entity/Customer';
import { Order } from './entity/Order';
import { OrderItem } from './entity/OrderItem'; // Import OrderItem
import { Transaction } from './entity/Transaction';
import { ResearchInstitution } from './entity/ResearchInstitution';
import { Equipment } from './entity/Equipment';
import { EquipmentTaxonomy } from './entity/EquipmentTaxonomy';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'marketplace',
  synchronize: true,
  logging: false,
  entities: [
    Product, 
    ProductCategory, 
    User, 
    Customer, 
    Order, 
    OrderItem, 
    Transaction, 
    ResearchInstitution, 
    Equipment, 
    EquipmentTaxonomy
  ], // Add OrderItem to entities
  migrations: [],
  subscribers: [],
});
