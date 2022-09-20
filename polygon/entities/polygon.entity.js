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
exports.Polygon = void 0;
const captin_entity_1 = require("../../captin/entities/captin.entity");
const price_region_entity_1 = require("../../price_region/entities/price_region.entity");
const region_entity_1 = require("../../region/entities/region.entity");
const student_entity_1 = require("../../student/entities/student.entity");
const typeorm_1 = require("typeorm");
let Polygon = class Polygon {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Polygon.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: false }),
    __metadata("design:type", Number)
], Polygon.prototype, "lng", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: false }),
    __metadata("design:type", Number)
], Polygon.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => price_region_entity_1.PriceRegion, priceRegion => priceRegion.polygons),
    __metadata("design:type", price_region_entity_1.PriceRegion)
], Polygon.prototype, "priceRegion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => region_entity_1.Region, (region) => region.polygon),
    __metadata("design:type", region_entity_1.Region)
], Polygon.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => student_entity_1.Student, (student) => student.polygons, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", student_entity_1.Student)
], Polygon.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => captin_entity_1.Captin, (captin) => captin.polygon, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", captin_entity_1.Captin)
], Polygon.prototype, "captin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Polygon.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Polygon.prototype, "updated_at", void 0);
Polygon = __decorate([
    (0, typeorm_1.Entity)()
], Polygon);
exports.Polygon = Polygon;
//# sourceMappingURL=polygon.entity.js.map