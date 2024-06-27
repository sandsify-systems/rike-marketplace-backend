import { Request, Response } from 'express';
import { TransactionService } from '../service/TransactionService';

const transactionService = new TransactionService();

export class TransactionController {
  /**
   * @swagger
   * tags:
   *   name: Transactions
   *   description: API endpoints for managing transactions.
   */

  /**
   * @swagger
   * /transactions:
   *   get:
   *     summary: Retrieve all transactions
   *     tags: [Transactions]
   *     responses:
   *       '200':
   *         description: A list of transactions
   */
  async getAll(req: Request, res: Response) {
    const transactions = await transactionService.getAll();
    res.json(transactions);
  }

  /**
   * @swagger
   * /transactions/{id}:
   *   get:
   *     summary: Retrieve a single transaction by ID
   *     tags: [Transactions]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the transaction to retrieve
   *     responses:
   *       '200':
   *         description: A transaction object
   *       '404':
   *         description: Transaction not found
   */
  async getById(req: Request, res: Response) {
    const transaction = await transactionService.getById(Number(req.params.id));
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(transaction);
  }

  /**
   * @swagger
   * /transactions:
   *   post:
   *     summary: Create a new transaction
   *     tags: [Transactions]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               orderId:
   *                 type: integer
   *                 description: ID of the order for the transaction
   *               amount:
   *                 type: number
   *                 description: Amount of the transaction
   *             example:
   *               orderId: 1
   *               amount: 100.5
   *     responses:
   *       '200':
   *         description: Created transaction object
   */
  async create(req: Request, res: Response) {
    const transaction = await transactionService.create(req.body);
    res.json(transaction);
  }

  /**
   * @swagger
   * /transactions/{id}:
   *   put:
   *     summary: Update a transaction by ID
   *     tags: [Transactions]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the transaction to update
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               orderId:
   *                 type: integer
   *                 description: Updated ID of the order for the transaction
   *               amount:
   *                 type: number
   *                 description: Updated amount of the transaction
   *             example:
   *               orderId: 1 (Updated)
   *               amount: 120.75
   *     responses:
   *       '200':
   *         description: Updated transaction object
   *       '404':
   *         description: Transaction not found
   */
  async update(req: Request, res: Response) {
    const transaction = await transactionService.update(Number(req.params.id), req.body);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(transaction);
  }

  /**
   * @swagger
   * /transactions/{id}:
   *   delete:
   *     summary: Delete a transaction by ID
   *     tags: [Transactions]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the transaction to delete
   *     responses:
   *       '204':
   *         description: Transaction deleted successfully
   *       '404':
   *         description: Transaction not found
   */
  async delete(req: Request, res: Response) {
    await transactionService.delete(Number(req.params.id));
    res.sendStatus(204);
  }
}
