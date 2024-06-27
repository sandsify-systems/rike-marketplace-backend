import { Request, Response } from 'express';
import { ProductCategoryService } from '../services/ProductCategoryService';

const productCategoryService = new ProductCategoryService();

export class ProductCategoryController {
  /**
   * @swagger
   * tags:
   *   name: Product Categories
   *   description: API endpoints for managing product categories.
   */

  /**
   * @swagger
   * /product-categories:
   *   get:
   *     summary: Retrieve all product categories
   *     tags: [Product Categories]
   *     responses:
   *       '200':
   *         description: A list of product categories
   */
  async getAll(req: Request, res: Response) {
    const categories = await productCategoryService.getAll();
    res.json(categories);
  }

  /**
   * @swagger
   * /product-categories/{id}:
   *   get:
   *     summary: Retrieve a single product category by ID
   *     tags: [Product Categories]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the product category to retrieve
   *     responses:
   *       '200':
   *         description: A product category object
   *       '404':
   *         description: Product category not found
   */
  async getById(req: Request, res: Response) {
    const category = await productCategoryService.getById(Number(req.params.id));
    if (!category) {
      return res.status(404).json({ message: 'Product category not found' });
    }
    res.json(category);
  }

  /**
   * @swagger
   * /product-categories:
   *   post:
   *     summary: Create a new product category
   *     tags: [Product Categories]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Name of the product category
   *             example:
   *               name: Electronics
   *     responses:
   *       '200':
   *         description: Created product category object
   */
  async create(req: Request, res: Response) {
    const category = await productCategoryService.create(req.body);
    res.json(category);
  }

  /**
   * @swagger
   * /product-categories/{id}:
   *   put:
   *     summary: Update a product category by ID
   *     tags: [Product Categories]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the product category to update
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Updated name of the product category
   *             example:
   *               name: Electronics (Updated)
   *     responses:
   *       '200':
   *         description: Updated product category object
   *       '404':
   *         description: Product category not found
   */
  async update(req: Request, res: Response) {
    const category = await productCategoryService.update(Number(req.params.id), req.body);
    if (!category) {
      return res.status(404).json({ message: 'Product category not found' });
    }
    res.json(category);
  }

  /**
   * @swagger
   * /product-categories/{id}:
   *   delete:
   *     summary: Delete a product category by ID
   *     tags: [Product Categories]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the product category to delete
   *     responses:
   *       '204':
   *         description: Product category deleted successfully
   *       '404':
   *         description: Product category not found
   */
  async delete(req: Request, res: Response) {
    await productCategoryService.delete(Number(req.params.id));
    res.sendStatus(204);
  }
}
