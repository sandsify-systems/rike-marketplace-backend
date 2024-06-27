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
exports.TransactionController = void 0;
var TransactionService_1 = require("../service/TransactionService");
var transactionService = new TransactionService_1.TransactionService();
var TransactionController = /** @class */ (function () {
    function TransactionController() {
    }
    /**
     * @swagger
     * tags:
     *   name: Transactions
     *   description: API endpoints for managing transactions.
     */
    /**
     * @swagger
     * /transactions:
     *   get:
     *     summary: Retrieve all transactions
     *     tags: [Transactions]
     *     responses:
     *       '200':
     *         description: A list of transactions
     */
    TransactionController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var transactions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transactionService.getAll()];
                    case 1:
                        transactions = _a.sent();
                        res.json(transactions);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /transactions/{id}:
     *   get:
     *     summary: Retrieve a single transaction by ID
     *     tags: [Transactions]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the transaction to retrieve
     *     responses:
     *       '200':
     *         description: A transaction object
     *       '404':
     *         description: Transaction not found
     */
    TransactionController.prototype.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transactionService.getById(Number(req.params.id))];
                    case 1:
                        transaction = _a.sent();
                        if (!transaction) {
                            return [2 /*return*/, res.status(404).json({ message: 'Transaction not found' })];
                        }
                        res.json(transaction);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /transactions:
     *   post:
     *     summary: Create a new transaction
     *     tags: [Transactions]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               orderId:
     *                 type: integer
     *                 description: ID of the order for the transaction
     *               amount:
     *                 type: number
     *                 description: Amount of the transaction
     *             example:
     *               orderId: 1
     *               amount: 100.5
     *     responses:
     *       '200':
     *         description: Created transaction object
     */
    TransactionController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transactionService.create(req.body)];
                    case 1:
                        transaction = _a.sent();
                        res.json(transaction);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /transactions/{id}:
     *   put:
     *     summary: Update a transaction by ID
     *     tags: [Transactions]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the transaction to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               orderId:
     *                 type: integer
     *                 description: Updated ID of the order for the transaction
     *               amount:
     *                 type: number
     *                 description: Updated amount of the transaction
     *             example:
     *               orderId: 1 (Updated)
     *               amount: 120.75
     *     responses:
     *       '200':
     *         description: Updated transaction object
     *       '404':
     *         description: Transaction not found
     */
    TransactionController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transactionService.update(Number(req.params.id), req.body)];
                    case 1:
                        transaction = _a.sent();
                        if (!transaction) {
                            return [2 /*return*/, res.status(404).json({ message: 'Transaction not found' })];
                        }
                        res.json(transaction);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /transactions/{id}:
     *   delete:
     *     summary: Delete a transaction by ID
     *     tags: [Transactions]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the transaction to delete
     *     responses:
     *       '204':
     *         description: Transaction deleted successfully
     *       '404':
     *         description: Transaction not found
     */
    TransactionController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transactionService.delete(Number(req.params.id))];
                    case 1:
                        _a.sent();
                        res.sendStatus(204);
                        return [2 /*return*/];
                }
            });
        });
    };
    return TransactionController;
}());
exports.TransactionController = TransactionController;
