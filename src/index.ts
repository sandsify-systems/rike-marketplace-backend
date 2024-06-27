import express from 'express';
import cors from 'cors';
import { AppDataSource } from './data-source';
import productRoutes from './routes/productRoutes';
import productCategoryRoutes from './routes/productCategoryRoutes';
import userRoutes from './routes/userRoutes';
import customerRoutes from './routes/customerRoutes';
import orderRoutes from './routes/orderRoutes';
import transactionRoutes from './routes/transactionRoutes';
import { swaggerSetup, swaggerSpec } from '../swagger'; // Import swaggerSetup and swaggerSpec
import swaggerUI from 'swagger-ui-express'; // Import swaggerUI

AppDataSource.initialize()
  .then(() => {
    console.log('Database connection established successfully.');

    const app = express();
    const port = 8000;

    app.use(cors({
      origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
    }));

    app.use(express.json());

    // Swagger setup
    swaggerSetup(app);

    // API routes
    app.use('/products', productRoutes);
    app.use('/product-categories', productCategoryRoutes);
    app.use('/users', userRoutes);
    app.use('/customers', customerRoutes);
    app.use('/orders', orderRoutes);
    app.use('/transactions', transactionRoutes);

    // Serve Swagger UI
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
      console.log(`Swagger UI is available at http://localhost:${port}/api-docs`);
    });
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
