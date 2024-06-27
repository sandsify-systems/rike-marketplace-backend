import swaggerJSDoc from 'swagger-jsdoc';
import { Express } from 'express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Welcome to Rike-MarketPlace Node TypeScript API with TypeORM and Express',
    version: '1.0.0',
    description: 'API documentation for managing products, categories, users, customers, orders, and transactions.',
  },
  servers: [
    {
      url: 'http://localhost:8000', // Replace with your server URL
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./controllers/*.ts'], // Path to the API routes folder
};

export const swaggerSpec = swaggerJSDoc(options);

export const swaggerSetup = (app: Express) => {
  app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};
