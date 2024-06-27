import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

const productService = new ProductService();

export class ProductController {
  /**
   * @swagger
   * tags:
   *   name: Products
   *   description: API endpoints for managing products.
   */

  /**
   * @swagger
   * /products:
   *   get:
   *     summary: Retrieve all products
   *     tags: [Products]
   *     responses:
   *       '200':
   *         description: A list of products
   */
  async getAll(req: Request, res: Response) {
    const products = await productService.getAll();
    res.json(products);
  }

  /**
   * @swagger
   * /products/{id}:
   *   get:
   *     summary: Retrieve a single product by ID
   *     tags: [Products]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the product to retrieve
   *     responses:
   *       '200':
   *         description: A product object
   *       '404':
   *         description: Product not found
   */
  async getById(req: Request, res: Response) {
    const product = await productService.getById(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  }

  /**
   * @swagger
   * /products:
   *   post:
   *     summary: Create a new product
   *     tags: [Products]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               title:
   *                 type: string
   *                 description: Title of the product
   *               image:
   *                 type: string
   *                 description: URL of the product image
   *               description:
   *                 type: string
   *                 description: Description of the product
   *               price:
   *                 type: number
   *                 description: Price of the product
   *               likes:
   *                 type: number
   *                 description: Number of likes for the product default = 0
   *               categoryId:
   *                 type: integer
   *                 description: ID of the product category
   *             example:
   *               title: MacBook Pro
   *               image: https://example.com/macbook.jpg
   *               description: A high-end laptop from Apple
   *               price: 1999.99
   *               likes: 0
   *               categoryId: 1
   *     responses:
   *       '200':
   *         description: Created product object
   */
  async create(req: Request, res: Response) {
    try {
      const product = await productService.create(req.body);
      res.json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  /**
   * @swagger
   * /products/{id}:
   *   put:
   *     summary: Update a product by ID
   *     tags: [Products]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the product to update
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               title:
   *                 type: string
   *                 description: Updated title of the product
   *               image:
   *                 type: string
   *                 description: Updated URL of the product image
   *               description:
   *                 type: string
   *                 description: Updated description of the product
   *               price:
   *                 type: number
   *                 description: Updated price of the product
   *               likes:
   *                 type: number
   *                 description: Updated number of likes for the product
   *               categoryId:
   *                 type: integer
   *                 description: Updated ID of the product category
   *             example:
   *               title: MacBook Pro (Updated)
   *               image: https://example.com/macbook_updated.jpg
   *               description: A high-end laptop from Apple (Updated)
   *               price: 2199.99
   *               likes: 10
   *               categoryId: 1
   *     responses:
   *       '200':
   *         description: Updated product object
   *       '404':
   *         description: Product not found
   */
  async update(req: Request, res: Response) {
    try {
      const product = await productService.update(Number(req.params.id), req.body);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  /**
   * @swagger
   * /products/{id}:
   *   delete:
   *     summary: Delete a product by ID
   *     tags: [Products]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the product to delete
   *     responses:
   *       '204':
   *         description: No content, product deleted
   *       '404':
   *         description: Product not found
   */
  async delete(req: Request, res: Response) {
    try {
      await productService.delete(Number(req.params.id));
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  /**
   * @swagger
   * /products/category/{categoryId}:
   *   get:
   *     summary: Retrieve products by category ID
   *     tags: [Products]
   *     parameters:
   *       - in: path
   *         name: categoryId
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the product category
   *     responses:
   *       '200':
   *         description: A list of products in the category
   */
  async findByCategoryId(req: Request, res: Response) {
    const products = await productService.findByCategoryId(Number(req.params.categoryId));
    res.json(products);
  }
}
