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
exports.Taxonomy = void 0;
var typeorm_1 = require("typeorm");
var Equipment_1 = require("./Equipment");
var Taxonomy = /** @class */ (function () {
    function Taxonomy() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Taxonomy.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Equipment_1.Equipment; }),
        __metadata("design:type", Equipment_1.Equipment)
    ], Taxonomy.prototype, "equipment", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Taxonomy.prototype, "parameter", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Taxonomy.prototype, "value", void 0);
    Taxonomy = __decorate([
        (0, typeorm_1.Entity)()
    ], Taxonomy);
    return Taxonomy;
}());
exports.Taxonomy = Taxonomy;
