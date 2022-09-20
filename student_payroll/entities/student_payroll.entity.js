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
exports.StudentPayroll = void 0;
const student_entity_1 = require("../../student/entities/student.entity");
const typeorm_1 = require("typeorm");
let StudentPayroll = class StudentPayroll {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], StudentPayroll.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: false }),
    __metadata("design:type", Number)
], StudentPayroll.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => student_entity_1.Student, (stuednt) => stuednt.student_payroll),
    __metadata("design:type", student_entity_1.Student)
], StudentPayroll.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], StudentPayroll.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], StudentPayroll.prototype, "updated_at", void 0);
StudentPayroll = __decorate([
    (0, typeorm_1.Entity)()
], StudentPayroll);
exports.StudentPayroll = StudentPayroll;
//# sourceMappingURL=student_payroll.entity.js.map