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
exports.OrderService = void 0;
var data_source_1 = require("../data-source");
var Order_1 = require("../entity/Order");
var OrderItem_1 = require("../entity/OrderItem");
var Product_1 = require("../entity/Product");
var OrderService = /** @class */ (function () {
    function OrderService() {
        this.orderRepository = data_source_1.AppDataSource.getRepository(Order_1.Order);
        this.orderItemRepository = data_source_1.AppDataSource.getRepository(OrderItem_1.OrderItem);
        this.productRepository = data_source_1.AppDataSource.getRepository(Product_1.Product);
    }
    OrderService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.orderRepository.find({ relations: ['customer', 'items', 'items.product'] })];
            });
        });
    };
    OrderService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.orderRepository.findOne({ where: { id: id }, relations: ['customer', 'items', 'items.product'] })];
            });
        });
    };
    OrderService.prototype.create = function (orderData) {
        return __awaiter(this, void 0, void 0, function () {
            var order, totalAmount, _i, _a, item, product, orderItem;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        order = this.orderRepository.create({
                            customer: { id: orderData.customerId },
                            totalAmount: 0, // Calculate total amount based on items
                            date: new Date(),
                        });
                        return [4 /*yield*/, this.orderRepository.save(order)];
                    case 1:
                        _b.sent();
                        totalAmount = 0;
                        _i = 0, _a = orderData.items;
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        item = _a[_i];
                        return [4 /*yield*/, this.productRepository.findOne({ where: { id: item.productId } })];
                    case 3:
                        product = _b.sent();
                        if (!product) {
                            throw new Error("Product with ID ".concat(item.productId, " not found"));
                        }
                        orderItem = this.orderItemRepository.create({
                            order: order,
                            product: product,
                            quantity: item.quantity,
                        });
                        return [4 /*yield*/, this.orderItemRepository.save(orderItem)];
                    case 4:
                        _b.sent();
                        totalAmount += product.price * item.quantity; // Assuming product has a price field
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6:
                        order.totalAmount = totalAmount;
                        return [4 /*yield*/, this.orderRepository.save(order)];
                    case 7:
                        _b.sent();
                        return [2 /*return*/, order];
                }
            });
        });
    };
    OrderService.prototype.update = function (id, orderData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.orderRepository.update(id, orderData)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.orderRepository.findOne({ where: { id: id }, relations: ['customer', 'items', 'items.product'] })];
                }
            });
        });
    };
    OrderService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.orderRepository.delete(id)];
            });
        });
    };
    return OrderService;
}());
exports.OrderService = OrderService;
