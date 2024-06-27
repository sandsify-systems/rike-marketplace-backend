import { Request, Response } from 'express';
import { OrderService } from '../services/OrderService';

const orderService = new OrderService();

export class OrderController {
  /**
   * @swagger
   * tags:
   *   name: Orders
   *   description: API endpoints for managing orders.
   */

  /**
   * @swagger
   * /orders:
   *   get:
   *     summary: Retrieve all orders
   *     tags: [Orders]
   *     responses:
   *       '200':
   *         description: A list of orders
   */
  async getAll(req: Request, res: Response) {
    const orders = await orderService.getAll();
    res.json(orders);
  }

  /**
   * @swagger
   * /orders/{id}:
   *   get:
   *     summary: Retrieve a single order by ID
   *     tags: [Orders]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the order to retrieve
   *     responses:
   *       '200':
   *         description: An order object
   *       '404':
   *         description: Order not found
   */
  async getById(req: Request, res: Response) {
    const order = await orderService.getById(Number(req.params.id));
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  }

  /**
   * @swagger
   * /orders:
   *   post:
   *     summary: Create a new order
   *     tags: [Orders]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               customerId:
   *                 type: integer
   *                 description: ID of the customer placing the order
   *               amount:
   *                 type: number
   *                 description: Total amount of the order
   *             example:
   *               customerId: 1
   *               amount: 100.5
   *     responses:
   *       '200':
   *         description: Created order object
   */
  async create(req: Request, res: Response) {
    const order = await orderService.create(req.body);
    res.json(order);
  }

  /**
   * @swagger
   * /orders/{id}:
   *   put:
   *     summary: Update an order by ID
   *     tags: [Orders]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the order to update
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               customerId:
   *                 type: integer
   *                 description: Updated ID of the customer placing the order
   *               amount:
   *                 type: number
   *                 description: Updated total amount of the order
   *             example:
   *               customerId: 1 (Updated)
   *               amount: 120.75
   *     responses:
   *       '200':
   *         description: Updated order object
   *       '404':
   *         description: Order not found
   */
  async update(req: Request, res: Response) {
    const order = await orderService.update(Number(req.params.id), req.body);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  }

  /**
   * @swagger
   * /orders/{id}:
   *   delete:
   *     summary: Delete an order by ID
   *     tags: [Orders]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the order to delete
   *     responses:
   *       '204':
   *         description: Order deleted successfully
   *       '404':
   *         description: Order not found
   */
  async delete(req: Request, res: Response) {
    await orderService.delete(Number(req.params.id));
    res.sendStatus(204);
  }
}
