import { Request, Response } from 'express';
import { CustomerService } from '../services/CustomerService';

const customerService = new CustomerService();

export class CustomerController {
  /**
   * @swagger
   * tags:
   *   name: Customers
   *   description: API endpoints for managing customers.
   */

  /**
   * @swagger
   * /customers:
   *   get:
   *     summary: Retrieve all customers
   *     tags: [Customers]
   *     responses:
   *       '200':
   *         description: A list of customers
   */
  async getAll(req: Request, res: Response) {
    const customers = await customerService.getAll();
    res.json(customers);
  }

  /**
   * @swagger
   * /customers/{id}:
   *   get:
   *     summary: Retrieve a single customer by ID
   *     tags: [Customers]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the customer to retrieve
   *     responses:
   *       '200':
   *         description: A customer object
   *       '404':
   *         description: Customer not found
   */
  async getById(req: Request, res: Response) {
    const customer = await customerService.getById(Number(req.params.id));
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
  }

  /**
   * @swagger
   * /customers:
   *   post:
   *     summary: Create a new customer
   *     tags: [Customers]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Name of the customer
   *               email:
   *                 type: string
   *                 format: email
   *                 description: Email address of the customer
   *             example:
   *               name: John Doe
   *               email: john.doe@example.com
   *     responses:
   *       '200':
   *         description: Created customer object
   */
  async create(req: Request, res: Response) {
    const customer = await customerService.create(req.body);
    res.json(customer);
  }

  /**
   * @swagger
   * /customers/{id}:
   *   put:
   *     summary: Update a customer by ID
   *     tags: [Customers]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the customer to update
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Updated name of the customer
   *               email:
   *                 type: string
   *                 format: email
   *                 description: Updated email address of the customer
   *             example:
   *               name: John Doe (Updated)
   *               email: john.doe@example.com
   *     responses:
   *       '200':
   *         description: Updated customer object
   *       '404':
   *         description: Customer not found
   */
  async update(req: Request, res: Response) {
    const customer = await customerService.update(Number(req.params.id), req.body);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
  }

  /**
   * @swagger
   * /customers/{id}:
   *   delete:
   *     summary: Delete a customer by ID
   *     tags: [Customers]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the customer to delete
   *     responses:
   *       '204':
   *         description: Customer deleted successfully
   *       '404':
   *         description: Customer not found
   */
  async delete(req: Request, res: Response) {
    await customerService.delete(Number(req.params.id));
    res.sendStatus(204);
  }
}
