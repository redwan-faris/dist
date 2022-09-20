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
exports.Adjustment = void 0;
const captin_entity_1 = require("../../captin/entities/captin.entity");
const typeorm_1 = require("typeorm");
let Adjustment = class Adjustment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Adjustment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => captin_entity_1.Captin, (captin) => captin.adjustment),
    __metadata("design:type", captin_entity_1.Captin)
], Adjustment.prototype, "captin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: false }),
    __metadata("design:type", Number)
], Adjustment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: false }),
    __metadata("design:type", Date)
], Adjustment.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Adjustment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Adjustment.prototype, "updated_at", void 0);
Adjustment = __decorate([
    (0, typeorm_1.Entity)()
], Adjustment);
exports.Adjustment = Adjustment;
//# sourceMappingURL=adjustment.entity.js.map