import swaggerJSDoc from 'swagger-jsdoc';
import { Express } from 'express';

const isLocal = process.env.NODE_ENV === 'development'; // Check if running in development mode

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Welcome to Rike-MarketPlace Node TypeScript API with TypeORM and Express',
    version: '1.0.0',
    description: 'API documentation for managing R.I.K.E Market Place.',
  },
  servers: [
    {
      url: isLocal ? 'http://localhost:8000' : 'https://rike-marketplace-backend.onrender.com',
      description: isLocal ? 'Local server' : 'Remote server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/controllers/*.ts'], // Path to the API routes folder
};

export const swaggerSpec = swaggerJSDoc(options);

export const swaggerSetup = (app: Express) => {
  app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};
