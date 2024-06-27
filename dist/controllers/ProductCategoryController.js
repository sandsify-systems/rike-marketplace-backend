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
exports.ProductCategoryController = void 0;
var ProductCategoryService_1 = require("../service/ProductCategoryService");
var productCategoryService = new ProductCategoryService_1.ProductCategoryService();
var ProductCategoryController = /** @class */ (function () {
    function ProductCategoryController() {
    }
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
    ProductCategoryController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var categories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productCategoryService.getAll()];
                    case 1:
                        categories = _a.sent();
                        res.json(categories);
                        return [2 /*return*/];
                }
            });
        });
    };
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
    ProductCategoryController.prototype.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productCategoryService.getById(Number(req.params.id))];
                    case 1:
                        category = _a.sent();
                        if (!category) {
                            return [2 /*return*/, res.status(404).json({ message: 'Product category not found' })];
                        }
                        res.json(category);
                        return [2 /*return*/];
                }
            });
        });
    };
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
    ProductCategoryController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productCategoryService.create(req.body)];
                    case 1:
                        category = _a.sent();
                        res.json(category);
                        return [2 /*return*/];
                }
            });
        });
    };
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
    ProductCategoryController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productCategoryService.update(Number(req.params.id), req.body)];
                    case 1:
                        category = _a.sent();
                        if (!category) {
                            return [2 /*return*/, res.status(404).json({ message: 'Product category not found' })];
                        }
                        res.json(category);
                        return [2 /*return*/];
                }
            });
        });
    };
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
    ProductCategoryController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productCategoryService.delete(Number(req.params.id))];
                    case 1:
                        _a.sent();
                        res.sendStatus(204);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProductCategoryController;
}());
exports.ProductCategoryController = ProductCategoryController;
