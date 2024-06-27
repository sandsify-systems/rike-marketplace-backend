"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var data_source_1 = require("../data-source");
var Product_1 = require("../entity/Product");
var ProductCategory_1 = require("../entity/ProductCategory");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.productRepository = data_source_1.AppDataSource.getRepository(Product_1.Product);
        this.productCategoryRepository = data_source_1.AppDataSource.getRepository(ProductCategory_1.ProductCategory);
    }
    ProductService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.productRepository.find({ relations: ['category'] })];
            });
        });
    };
    ProductService.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.productRepository.findOne({ where: { id: id }, relations: ['category'] })];
            });
        });
    };
    ProductService.prototype.create = function (productData) {
        return __awaiter(this, void 0, void 0, function () {
            var categoryId, restProductData, category, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoryId = productData.categoryId, restProductData = __rest(productData, ["categoryId"]);
                        return [4 /*yield*/, this.productCategoryRepository.findOne({ where: { id: categoryId } })];
                    case 1:
                        category = _a.sent();
                        if (!category) {
                            throw new Error("Product category with ID ".concat(categoryId, " not found"));
                        }
                        product = this.productRepository.create(__assign(__assign({}, restProductData), { category: category }));
                        return [2 /*return*/, this.productRepository.save(product)];
                }
            });
        });
    };
    ProductService.prototype.update = function (id, productData) {
        return __awaiter(this, void 0, void 0, function () {
            var productToUpdate, category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productRepository.findOne({ where: { id: id }, relations: ['category'] })];
                    case 1:
                        productToUpdate = _a.sent();
                        if (!productToUpdate) {
                            throw new Error("Product with ID ".concat(id, " not found"));
                        }
                        if (!productData.categoryId) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.productCategoryRepository.findOne({ where: { id: productData.categoryId } })];
                    case 2:
                        category = _a.sent();
                        if (!category) {
                            throw new Error("Product category with ID ".concat(productData.categoryId, " not found"));
                        }
                        productToUpdate.category = category;
                        _a.label = 3;
                    case 3:
                        Object.assign(productToUpdate, productData);
                        return [2 /*return*/, this.productRepository.save(productToUpdate)];
                }
            });
        });
    };
    ProductService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.productRepository.delete(id)];
            });
        });
    };
    ProductService.prototype.findByCategoryId = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.productRepository.find({ where: { category: { id: categoryId } }, relations: ['category'] })];
            });
        });
    };
    return ProductService;
}());
exports.ProductService = ProductService;
