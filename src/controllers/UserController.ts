import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

const userService = new UserService();

export class UserController {
  /**
   * @swagger
   * tags:
   *   name: Users
   *   description: API endpoints for managing users.
   */

  /**
   * @swagger
   * /users:
   *   get:
   *     summary: Retrieve all users
   *     tags: [Users]
   *     responses:
   *       '200':
   *         description: A list of users
   */
  async getAll(req: Request, res: Response) {
    const users = await userService.getAll();
    res.json(users);
  }

  /**
   * @swagger
   * /users/{id}:
   *   get:
   *     summary: Retrieve a single user by ID
   *     tags: [Users]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the user to retrieve
   *     responses:
   *       '200':
   *         description: A user object
   *       '404':
   *         description: User not found
   */
  async getById(req: Request, res: Response) {
    const user = await userService.getById(Number(req.params.id));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  }

  /**
   * @swagger
   * /users:
   *   post:
   *     summary: Create a new user
   *     tags: [Users]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 description: Email address of the user
   *               password:
   *                 type: string
   *                 description: Password of the user
   *               accountStatus:
   *                 type: boolean
   *                 description: Status of the user's account
   *                 default: true
   *               role:
   *                 type: string
   *                 enum: [admin, institution, researcher, agent, explorer]
   *                 description: Role of the user
   *                 default: explorer
   *             example:
   *               name: john doe
   *               email: john.doe@example.com
   *               password: mypassword
   *               accountStatus: true
   *               role: explorer
   *     responses:
   *       '200':
   *         description: Created user object
   */
  async create(req: Request, res: Response) {
    const user = await userService.create(req.body);
    res.json(user);
  }

  /**
   * @swagger
   * /users/{id}:
   *   put:
   *     summary: Update a user by ID
   *     tags: [Users]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the user to update
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Updated name of the user
   *               email:
   *                 type: string
   *                 description: Updated email address of the user
   *               password:
   *                 type: string
   *                 description: Updated password of the user
   *               accountStatus:
   *                 type: boolean
   *                 description: Updated status of the user's account
   *               role:
   *                 type: string
   *                 enum: [admin, institution, researcher, explorer]
   *                 description: Updated role of the user
   *     responses:
   *       '200':
   *         description: Updated user object
   *       '404':
   *         description: User not found
   */
  async update(req: Request, res: Response) {
    const user = await userService.update(Number(req.params.id), req.body);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  }

  /**
   * @swagger
   * /users/{id}:
   *   delete:
   *     summary: Delete a user by ID
   *     tags: [Users]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID of the user to delete
   *     responses:
   *       '204':
   *         description: User deleted successfully
   *       '404':
   *         description: User not found
   */
  async delete(req: Request, res: Response) {
    await userService.delete(Number(req.params.id));
    res.sendStatus(204);
  }
}
