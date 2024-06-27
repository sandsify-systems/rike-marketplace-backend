import { Request, Response } from 'express';
import { EquipmentService } from '../services/EquipmentService';

const equipmentService = new EquipmentService();

export class EquipmentController {

    /**
     * @swagger
     * tags:
     *   name: Equipment
     *   description: Operations related to equipment management
     */

    /**
     * @swagger
     * /api/equipment:
     *   get:
     *     summary: Retrieve all equipment entries.
     *     tags: [Equipment]
     *     responses:
     *       200:
     *         description: A list of equipment entries.
     */
    async getAll(req: Request, res: Response) {
        const equipment = await equipmentService.getAll();
        res.json(equipment);
    }

    /**
     * @swagger
     * /api/equipment/{id}:
     *   get:
     *     summary: Retrieve a single equipment entry by ID.
     *     tags: [Equipment]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the equipment entry to retrieve.
     *     responses:
     *       200:
     *         description: A single equipment entry object.
     *       404:
     *         description: Equipment entry not found.
     */
    async getById(req: Request, res: Response) {
        const equipment = await equipmentService.getById(Number(req.params.id));
        if (!equipment) {
            return res.status(404).json({ message: 'Equipment entry not found' });
        }
        res.json(equipment);
    }

    /**
     * @swagger
     * /api/equipment:
     *   post:
     *     summary: Create a new equipment entry.
     *     tags: [Equipment]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *               description:
     *                 type: string
     *               availability:
     *                 type: boolean
     *               verificationStatus:
     *                 type: boolean
     *               verifiedBy:
     *                 type: integer
     *             required:
     *               - name
     *               - description
     *               - availability
     *     responses:
     *       200:
     *         description: The created equipment entry object.
     *       400:
     *         description: Bad request. Missing required fields.
     */
    async create(req: Request, res: Response) {
        try {
            const equipment = await equipmentService.create(req.body);
            res.json(equipment);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * @swagger
     * /api/equipment/{id}:
     *   put:
     *     summary: Update an existing equipment entry by ID.
     *     tags: [Equipment]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the equipment entry to update.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *               description:
     *                 type: string
     *               availability:
     *                 type: boolean
     *               verificationStatus:
     *                 type: boolean
     *               verifiedBy:
     *                 type: integer
     *             required:
     *               - name
     *               - description
     *               - availability
     *     responses:
     *       200:
     *         description: The updated equipment entry object.
     *       404:
     *         description: Equipment entry not found.
     *       400:
     *         description: Bad request. Missing required fields.
     */
    async update(req: Request, res: Response) {
        try {
            const equipment = await equipmentService.update(Number(req.params.id), req.body);
            if (!equipment) {
                res.status(404).json({ message: 'Equipment entry not found' });
                return;
            }
            res.json(equipment);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * @swagger
     * /api/equipment/{id}:
     *   delete:
     *     summary: Delete an equipment entry by ID.
     *     tags: [Equipment]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the equipment entry to delete.
     *     responses:
     *       204:
     *         description: Equipment entry successfully deleted.
     *       404:
     *         description: Equipment entry not found.
     */
    async delete(req: Request, res: Response) {
        try {
            await equipmentService.delete(Number(req.params.id));
            res.sendStatus(204);
        } catch (err) {
            res.status(404).json({ error: 'Equipment entry not found' });
        }
    }
}
