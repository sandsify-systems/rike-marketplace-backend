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
exports.TaxonomyController = void 0;
var EquipmentTaxonomyService_1 = require("../services/EquipmentTaxonomyService");
var equipmentTaxonomyService = new EquipmentTaxonomyService_1.EquipmentTaxonomyService();
var TaxonomyController = /** @class */ (function () {
    function TaxonomyController() {
    }
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
    TaxonomyController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var taxonomy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, equipmentTaxonomyService.getAll()];
                    case 1:
                        taxonomy = _a.sent();
                        res.json(taxonomy);
                        return [2 /*return*/];
                }
            });
        });
    };
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
    TaxonomyController.prototype.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var taxonomy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, equipmentTaxonomyService.getById(Number(req.params.id))];
                    case 1:
                        taxonomy = _a.sent();
                        if (!taxonomy) {
                            return [2 /*return*/, res.status(404).json({ message: 'Taxonomy entry not found' })];
                        }
                        res.json(taxonomy);
                        return [2 /*return*/];
                }
            });
        });
    };
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
    TaxonomyController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var taxonomy, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, equipmentTaxonomyService.create(req.body)];
                    case 1:
                        taxonomy = _a.sent();
                        res.json(taxonomy);
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
    TaxonomyController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var taxonomy, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, equipmentTaxonomyService.update(Number(req.params.id), req.body)];
                    case 1:
                        taxonomy = _a.sent();
                        if (!taxonomy) {
                            res.status(404).json({ error: 'Taxonomy entry not found' });
                            return [2 /*return*/];
                        }
                        res.json(taxonomy);
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
    TaxonomyController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, equipmentTaxonomyService.delete(Number(req.params.id))];
                    case 1:
                        _a.sent();
                        res.sendStatus(204);
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        res.status(404).json({ error: 'Taxonomy entry not found' });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
    TaxonomyController.prototype.getByEquipment = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var equipmentId, taxonomy, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        equipmentId = req.params.equipmentId;
                        return [4 /*yield*/, equipmentTaxonomyService.getByEquipmentId(Number(equipmentId))];
                    case 1:
                        taxonomy = _a.sent();
                        if (!taxonomy) {
                            res.status(404).json({ error: 'No taxonomy entries found for the specified equipment ID' });
                            return [2 /*return*/];
                        }
                        res.json(taxonomy);
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        res.status(500).json({ error: err_4.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return TaxonomyController;
}());
exports.TaxonomyController = TaxonomyController;
