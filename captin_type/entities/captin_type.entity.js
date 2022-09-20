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
exports.CaptinType = void 0;
const captin_entity_1 = require("../../captin/entities/captin.entity");
const typeorm_1 = require("typeorm");
let CaptinType = class CaptinType {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CaptinType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 30, unique: true }),
    __metadata("design:type", String)
], CaptinType.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => captin_entity_1.Captin, (captin) => captin.caption_type),
    __metadata("design:type", Array)
], CaptinType.prototype, "captins", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CaptinType.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CaptinType.prototype, "updated_at", void 0);
CaptinType = __decorate([
    (0, typeorm_1.Entity)()
], CaptinType);
exports.CaptinType = CaptinType;
//# sourceMappingURL=captin_type.entity.js.map