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
exports.PriceRegion = void 0;
const polygon_entity_1 = require("../../polygon/entities/polygon.entity");
const price_entity_1 = require("../../prices/entities/price.entity");
const typeorm_1 = require("typeorm");
let PriceRegion = class PriceRegion {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PriceRegion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "varchar", length: 30 }),
    __metadata("design:type", String)
], PriceRegion.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => price_entity_1.Price, price => price.price_region),
    __metadata("design:type", Array)
], PriceRegion.prototype, "prices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => polygon_entity_1.Polygon, polygon => polygon.priceRegion, { eager: true }),
    __metadata("design:type", Array)
], PriceRegion.prototype, "polygons", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PriceRegion.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PriceRegion.prototype, "updated_At", void 0);
PriceRegion = __decorate([
    (0, typeorm_1.Entity)()
], PriceRegion);
exports.PriceRegion = PriceRegion;
//# sourceMappingURL=price_region.entity.js.map