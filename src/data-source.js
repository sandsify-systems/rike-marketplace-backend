"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var Product_1 = require("./entity/Product");
var ProductCategory_1 = require("./entity/ProductCategory");
var User_1 = require("./entity/User");
var Customer_1 = require("./entity/Customer");
var Order_1 = require("./entity/Order");
var OrderItem_1 = require("./entity/OrderItem"); // Import OrderItem
var Transaction_1 = require("./entity/Transaction");
var dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'marketplace',
    synchronize: true,
    logging: true,
    entities: [Product_1.Product, ProductCategory_1.ProductCategory, User_1.User, Customer_1.Customer, Order_1.Order, OrderItem_1.OrderItem, Transaction_1.Transaction], // Add OrderItem to entities
    migrations: [],
    subscribers: [],
});
