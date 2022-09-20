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
exports.CaptinPayroll = void 0;
const captin_entity_1 = require("../../captin/entities/captin.entity");
const typeorm_1 = require("typeorm");
let CaptinPayroll = class CaptinPayroll {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CaptinPayroll.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: false }),
    __metadata("design:type", Number)
], CaptinPayroll.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => captin_entity_1.Captin, (captin) => captin.captin_payrolls),
    __metadata("design:type", captin_entity_1.Captin)
], CaptinPayroll.prototype, "captin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], CaptinPayroll.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], CaptinPayroll.prototype, "updated_at", void 0);
CaptinPayroll = __decorate([
    (0, typeorm_1.Entity)()
], CaptinPayroll);
exports.CaptinPayroll = CaptinPayroll;
//# sourceMappingURL=captin_payroll.entity.js.map