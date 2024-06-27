import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import swaggerUI from 'swagger-ui-express';
import { swaggerSetup, swaggerSpec } from '../swagger'; // Import swaggerSetup and swaggerSpec

createConnection()
  .then(db => {
    console.log('Database connection established successfully.');

    const app = express();
    const port = 8000;

    app.use(cors({
      origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
    }));

    app.use(express.json());

    // Swagger setup
    swaggerSetup(app);

    // API routes (assuming you have these defined)
    // Replace these with your actual route definitions
    app.get('/', (req, res) => {
      res.send('Hello World');
    });

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
