"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchInstitutionController = void 0;
var ResearchInstitutionService_1 = require("../services/ResearchInstitutionService");
var researchInstitutionService = new ResearchInstitutionService_1.ResearchInstitutionService();
var ResearchInstitutionController = /** @class */ (function () {
    function ResearchInstitutionController() {
    }
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
    ResearchInstitutionController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var researchInstitutions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, researchInstitutionService.getAll()];
                    case 1:
                        researchInstitutions = _a.sent();
                        res.json(researchInstitutions);
                        return [2 /*return*/];
                }
            });
        });
    };
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
    ResearchInstitutionController.prototype.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var researchInstitution;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, researchInstitutionService.getById(Number(req.params.id))];
                    case 1:
                        researchInstitution = _a.sent();
                        if (!researchInstitution) {
                            return [2 /*return*/, res.status(404).json({ message: 'Research institution not found' })];
                        }
                        res.json(researchInstitution);
                        return [2 /*return*/];
                }
            });
        });
    };
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
    ResearchInstitutionController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var institution, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, researchInstitutionService.create(req.body)];
                    case 1:
                        institution = _a.sent();
                        res.json(institution);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        res.status(400).json({ error: err_1.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
    ResearchInstitutionController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var institution, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, researchInstitutionService.update(Number(req.params.id), req.body)];
                    case 1:
                        institution = _a.sent();
                        if (!institution) {
                            res.status(404).json({ error: 'Research institution not found' });
                            return [2 /*return*/];
                        }
                        res.json(institution);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        res.status(400).json({ error: err_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
    ResearchInstitutionController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, researchInstitutionService.delete(Number(req.params.id))];
                    case 1:
                        _a.sent();
                        res.sendStatus(204);
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        res.status(404).json({ error: 'Research institution not found' });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ResearchInstitutionController;
}());
exports.ResearchInstitutionController = ResearchInstitutionController;
