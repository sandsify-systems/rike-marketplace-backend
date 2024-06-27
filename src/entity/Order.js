"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var typeorm_1 = require("typeorm");
var Customer_1 = require("./Customer");
var OrderItem_1 = require("./OrderItem");
var Transaction_1 = require("./Transaction");
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Order.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Customer_1.Customer; }, function (customer) { return customer.orders; }),
        __metadata("design:type", Customer_1.Customer)
    ], Order.prototype, "customer", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Order.prototype, "totalAmount", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Order.prototype, "date", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return OrderItem_1.OrderItem; }, function (orderItem) { return orderItem.order; }),
        __metadata("design:type", Array)
    ], Order.prototype, "items", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Transaction_1.Transaction; }, function (transaction) { return transaction.order; }),
        __metadata("design:type", Array)
    ], Order.prototype, "transactions", void 0);
    Order = __decorate([
        (0, typeorm_1.Entity)()
    ], Order);
    return Order;
}());
exports.Order = Order;
