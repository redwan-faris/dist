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
exports.StudentGroup = void 0;
const common_1 = require("@nestjs/common");
const student_entity_1 = require("../../student/entities/student.entity");
const trip_entity_1 = require("../../trips/entities/trip.entity");
const typeorm_1 = require("typeorm");
const group_entity_1 = require("./group.entity");
let StudentGroup = class StudentGroup {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StudentGroup.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => student_entity_1.Student, (student) => student.studentGroup, { eager: true }),
    __metadata("design:type", Array)
], StudentGroup.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => group_entity_1.Group, (group) => group.student_group),
    __metadata("design:type", Array)
], StudentGroup.prototype, "groups", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => trip_entity_1.Trip, (group) => group.students),
    __metadata("design:type", trip_entity_1.Trip)
], StudentGroup.prototype, "trip", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], StudentGroup.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], StudentGroup.prototype, "updated_at", void 0);
StudentGroup = __decorate([
    (0, typeorm_1.Entity)('student_group'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor)
], StudentGroup);
exports.StudentGroup = StudentGroup;
//# sourceMappingURL=student-group.entity.js.map