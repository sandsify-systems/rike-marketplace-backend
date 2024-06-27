import { Request, Response } from 'express';
import { ResearchInstitutionService } from '../services/ResearchInstitutionService';

const researchInstitutionService = new ResearchInstitutionService();

export class ResearchInstitutionController {

    /**
     * @swagger
     * tags:
     *   name: Research Institutions
     *   description: Operations related to research institutions
     */

    /**
     * @swagger
     * /api/research-institutions:
     *   get:
     *     summary: Retrieve all research institutions.
     *     tags: [Research Institutions]
     *     responses:
     *       200:
     *         description: A list of research institutions.
     */
    async getAll(req: Request, res: Response) {
        const researchInstitutions = await researchInstitutionService.getAll();
        res.json(researchInstitutions);
    }

    /**
     * @swagger
     * /api/research-institutions/{id}:
     *   get:
     *     summary: Retrieve a single research institution by ID.
     *     tags: [Research Institutions]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the research institution to retrieve.
     *     responses:
     *       200:
     *         description: A single research institution object.
     *       404:
     *         description: Research institution not found.
     */
    async getById(req: Request, res: Response) {
        const researchInstitution = await researchInstitutionService.getById(Number(req.params.id));
        if (!researchInstitution) {
            return res.status(404).json({ message: 'Research institution not found' });
        }
        res.json(researchInstitution);
    }

    /**
     * @swagger
     * /api/research-institutions:
     *   post:
     *     summary: Create a new research institution.
     *     tags: [Research Institutions]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *               address:
     *                 type: string
     *               city:
     *                 type: string
     *               country:
     *                 type: string
     *               phone:
     *                 type: string
     *               email:
     *                 type: string
     *             required:
     *               - name
     *               - address
     *               - city
     *               - country
     *               - phone
     *               - email
     *     responses:
     *       200:
     *         description: The created research institution object.
     *       400:
     *         description: Bad request. Missing required fields.
     */
    async create(req: Request, res: Response) {
        try {
            const institution = await researchInstitutionService.create(req.body);
            res.json(institution);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * @swagger
     * /api/research-institutions/{id}:
     *   put:
     *     summary: Update an existing research institution by ID.
     *     tags: [Research Institutions]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the research institution to update.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *               address:
     *                 type: string
     *               city:
     *                 type: string
     *               country:
     *                 type: string
     *               phone:
     *                 type: string
     *               email:
     *                 type: string
     *             required:
     *               - name
     *               - address
     *               - city
     *               - country
     *               - phone
     *               - email
     *     responses:
     *       200:
     *         description: The updated research institution object.
     *       404:
     *         description: Research institution not found.
     *       400:
     *         description: Bad request. Missing required fields.
     */
    async update(req: Request, res: Response) {
        try {
            const institution = await researchInstitutionService.update(Number(req.params.id), req.body);
            if (!institution) {
                res.status(404).json({ error: 'Research institution not found' });
                return;
            }
            res.json(institution);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * @swagger
     * /api/research-institutions/{id}:
     *   delete:
     *     summary: Delete a research institution by ID.
     *     tags: [Research Institutions]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the research institution to delete.
     *     responses:
     *       204:
     *         description: Research institution successfully deleted.
     *       404:
     *         description: Research institution not found.
     */
    async delete(req: Request, res: Response) {
        try {
            await researchInstitutionService.delete(Number(req.params.id));
            res.sendStatus(204);
        } catch (err) {
            res.status(404).json({ error: 'Research institution not found' });
        }
    }
}
