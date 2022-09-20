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
exports.Car = void 0;
const captin_entity_1 = require("../../captin/entities/captin.entity");
const typeorm_1 = require("typeorm");
let Car = class Car {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Car.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 35, nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Car.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Car.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 35, nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Car.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Car.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 35, nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Car.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80, nullable: true, type: 'varchar' }),
    __metadata("design:type", String)
], Car.prototype, "picture", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => captin_entity_1.Captin, (captin) => captin.cars, { onDelete: "CASCADE" }),
    __metadata("design:type", captin_entity_1.Captin)
], Car.prototype, "captin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Car.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Car.prototype, "updated_at", void 0);
Car = __decorate([
    (0, typeorm_1.Entity)()
], Car);
exports.Car = Car;
//# sourceMappingURL=car.entity.js.map