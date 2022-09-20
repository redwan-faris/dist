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
exports.Group = void 0;
const captin_entity_1 = require("../../captin/entities/captin.entity");
const typeorm_1 = require("typeorm");
const student_group_entity_1 = require("./student-group.entity");
let Group = class Group {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Group.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => student_group_entity_1.StudentGroup, (StudentGrous) => StudentGrous.groups, { eager: true }),
    __metadata("design:type", student_group_entity_1.StudentGroup)
], Group.prototype, "student_group", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => captin_entity_1.Captin, (captin) => captin.groups, { onDelete: "CASCADE", eager: true }),
    __metadata("design:type", captin_entity_1.Captin)
], Group.prototype, "captin", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Group.prototype, "temp_captin_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Group.prototype, "day", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Group.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Group.prototype, "updated_at", void 0);
Group = __decorate([
    (0, typeorm_1.Entity)('student_captin_group')
], Group);
exports.Group = Group;
//# sourceMappingURL=group.entity.js.map