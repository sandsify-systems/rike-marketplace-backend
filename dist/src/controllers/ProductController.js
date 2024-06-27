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
exports.ProductController = void 0;
var ProductService_1 = require("../services/ProductService");
var productService = new ProductService_1.ProductService();
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
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
    ProductController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productService.getAll()];
                    case 1:
                        products = _a.sent();
                        res.json(products);
                        return [2 /*return*/];
                }
            });
        });
    };
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
    ProductController.prototype.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productService.getById(Number(req.params.id))];
                    case 1:
                        product = _a.sent();
                        if (!product) {
                            return [2 /*return*/, res.status(404).json({ message: 'Product not found' })];
                        }
                        res.json(product);
                        return [2 /*return*/];
                }
            });
        });
    };
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
    ProductController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var product, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, productService.create(req.body)];
                    case 1:
                        product = _a.sent();
                        res.json(product);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(400).json({ message: error_1.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
    ProductController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var product, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, productService.update(Number(req.params.id), req.body)];
                    case 1:
                        product = _a.sent();
                        if (!product) {
                            return [2 /*return*/, res.status(404).json({ message: 'Product not found' })];
                        }
                        res.json(product);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.status(400).json({ message: error_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
    ProductController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, productService.delete(Number(req.params.id))];
                    case 1:
                        _a.sent();
                        res.sendStatus(204);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.status(400).json({ message: error_3.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
    ProductController.prototype.findByCategoryId = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, productService.findByCategoryId(Number(req.params.categoryId))];
                    case 1:
                        products = _a.sent();
                        res.json(products);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProductController;
}());
exports.ProductController = ProductController;
