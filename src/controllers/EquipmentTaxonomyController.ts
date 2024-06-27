import { Request, Response } from 'express';
import { EquipmentTaxonomyService   } from '../services/EquipmentTaxonomyService';

const equipmentTaxonomyService   = new EquipmentTaxonomyService  ();

export class TaxonomyController {

    /**
     * @swagger
     * tags:
     *   name: Taxonomy
     *   description: Operations related to taxonomy management
     */

    /**
     * @swagger
     * /api/taxonomy:
     *   get:
     *     summary: Retrieve all taxonomy entries.
     *     tags: [Taxonomy]
     *     responses:
     *       200:
     *         description: A list of taxonomy entries.
     */
    async getAll(req: Request, res: Response) {
        const taxonomy = await equipmentTaxonomyService .getAll();
        res.json(taxonomy);
    }

    /**
     * @swagger
     * /api/taxonomy/{id}:
     *   get:
     *     summary: Retrieve a single taxonomy entry by ID.
     *     tags: [Taxonomy]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the taxonomy entry to retrieve.
     *     responses:
     *       200:
     *         description: A single taxonomy entry object.
     *       404:
     *         description: Taxonomy entry not found.
     */
    async getById(req: Request, res: Response) {
        const taxonomy = await equipmentTaxonomyService .getById(Number(req.params.id));
        if (!taxonomy) {
            return res.status(404).json({ message: 'Taxonomy entry not found' });
        }
        res.json(taxonomy);
    }

    /**
     * @swagger
     * /api/taxonomy:
     *   post:
     *     summary: Create a new taxonomy entry.
     *     tags: [Taxonomy]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               equipmentID:
     *                 type: integer
     *               parameter:
     *                 type: string
     *               value:
     *                 type: string
     *             required:
     *               - equipmentID
     *               - parameter
     *               - value
     *     responses:
     *       200:
     *         description: The created taxonomy entry object.
     *       400:
     *         description: Bad request. Missing required fields.
     */
    async create(req: Request, res: Response) {
        try {
            const taxonomy = await equipmentTaxonomyService .create(req.body);
            res.json(taxonomy);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * @swagger
     * /api/taxonomy/{id}:
     *   put:
     *     summary: Update an existing taxonomy entry by ID.
     *     tags: [Taxonomy]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the taxonomy entry to update.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               equipmentID:
     *                 type: integer
     *               parameter:
     *                 type: string
     *               value:
     *                 type: string
     *             required:
     *               - equipmentID
     *               - parameter
     *               - value
     *     responses:
     *       200:
     *         description: The updated taxonomy entry object.
     *       404:
     *         description: Taxonomy entry not found.
     *       400:
     *         description: Bad request. Missing required fields.
     */
    async update(req: Request, res: Response) {
        try {
            const taxonomy = await equipmentTaxonomyService .update(Number(req.params.id), req.body);
            if (!taxonomy) {
                res.status(404).json({ error: 'Taxonomy entry not found' });
                return;
            }
            res.json(taxonomy);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * @swagger
     * /api/taxonomy/{id}:
     *   delete:
     *     summary: Delete a taxonomy entry by ID.
     *     tags: [Taxonomy]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the taxonomy entry to delete.
     *     responses:
     *       204:
     *         description: Taxonomy entry successfully deleted.
     *       404:
     *         description: Taxonomy entry not found.
     */
    async delete(req: Request, res: Response) {
        try {
            await equipmentTaxonomyService .delete(Number(req.params.id));
            res.sendStatus(204);
        } catch (err) {
            res.status(404).json({ error: 'Taxonomy entry not found' });
        }
    }

    /**
     * @swagger
     * /api/taxonomy/by-equipment/{equipmentId}:
     *   get:
     *     summary: Retrieve taxonomy entries by equipment ID.
     *     tags: [Taxonomy]
     *     parameters:
     *       - in: path
     *         name: equipmentId
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the equipment to retrieve taxonomy entries for.
     *     responses:
     *       200:
     *         description: A list of taxonomy entries associated with the equipment.
     *       404:
     *         description: No taxonomy entries found for the specified equipment ID.
     */
    async getByEquipment(req: Request, res: Response) {
        try {
            const { equipmentId } = req.params;
            const taxonomy = await equipmentTaxonomyService .getByEquipmentId(Number(equipmentId));
            if (!taxonomy) {
                res.status(404).json({ error: 'No taxonomy entries found for the specified equipment ID' });
                return;
            }
            res.json(taxonomy);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}
