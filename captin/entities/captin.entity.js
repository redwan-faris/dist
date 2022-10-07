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
exports.Captin = void 0;
const class_transformer_1 = require("class-transformer");
const adjustment_entity_1 = require("../../adjustment/entities/adjustment.entity");
const captin_payroll_entity_1 = require("../../captin_payroll/entities/captin_payroll.entity");
const captin_type_entity_1 = require("../../captin_type/entities/captin_type.entity");
const car_entity_1 = require("../../car/entities/car.entity");
const polygon_entity_1 = require("../../polygon/entities/polygon.entity");
const region_entity_1 = require("../../region/entities/region.entity");
const group_entity_1 = require("../../group/entities/group.entity");
const trip_entity_1 = require("../../trips/entities/trip.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
const rating_entity_1 = require("../../rating/entities/rating.entity");
let Captin = class Captin {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Captin.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false }),
    __metadata("design:type", Boolean)
], Captin.prototype, "driving_license", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false }),
    __metadata("design:type", Boolean)
], Captin.prototype, "is_captin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false, default: false }),
    __metadata("design:type", Boolean)
], Captin.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: true, default: false }),
    __metadata("design:type", Boolean)
], Captin.prototype, "working_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80, nullable: true, type: 'varchar' }),
    __metadata("design:type", String)
], Captin.prototype, "documents", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => captin_type_entity_1.CaptinType, (captin_type) => captin_type.captins),
    __metadata("design:type", captin_type_entity_1.CaptinType)
], Captin.prototype, "caption_type", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => user_entity_1.User, (user) => user.captin, { onDelete: 'CASCADE', eager: true }),
    __metadata("design:type", user_entity_1.User)
], Captin.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => car_entity_1.Car, (car) => car.captin, { onDelete: 'CASCADE', eager: true }),
    __metadata("design:type", Array)
], Captin.prototype, "cars", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => captin_payroll_entity_1.CaptinPayroll, (captin_payroll) => captin_payroll.captin),
    __metadata("design:type", Array)
], Captin.prototype, "captin_payrolls", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => group_entity_1.Group, (group) => group.captin, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], Captin.prototype, "groups", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => region_entity_1.Region, (region) => region.captin, { eager: true }),
    (0, class_transformer_1.Transform)(({ value }) => value.name),
    __metadata("design:type", region_entity_1.Region)
], Captin.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => rating_entity_1.Rating, rating => rating.captin),
    __metadata("design:type", rating_entity_1.Rating)
], Captin.prototype, "ratings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => adjustment_entity_1.Adjustment, (adjustment) => adjustment.captin),
    __metadata("design:type", adjustment_entity_1.Adjustment)
], Captin.prototype, "adjustment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => trip_entity_1.Trip, (trip) => trip.captin),
    __metadata("design:type", Array)
], Captin.prototype, "trips", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => polygon_entity_1.Polygon, (polygon) => polygon.captin, {
        onDelete: 'CASCADE',
        eager: true
    }),
    __metadata("design:type", polygon_entity_1.Polygon)
], Captin.prototype, "polygon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: false }),
    __metadata("design:type", Date)
], Captin.prototype, "birth_date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Captin.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Captin.prototype, "updated_at", void 0);
Captin = __decorate([
    (0, typeorm_1.Entity)()
], Captin);
exports.Captin = Captin;
//# sourceMappingURL=captin.entity.js.map