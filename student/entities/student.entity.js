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
exports.Student = void 0;
const class_transformer_1 = require("class-transformer");
const day_entity_1 = require("../../days/entities/day.entity");
const department_entity_1 = require("../../department/entities/department.entity");
const polygon_entity_1 = require("../../polygon/entities/polygon.entity");
const region_entity_1 = require("../../region/entities/region.entity");
const shift_entity_1 = require("../../shift/entities/shift.entity");
const student_payroll_entity_1 = require("../../student_payroll/entities/student_payroll.entity");
const student_type_entity_1 = require("../../student_type/entities/student_type.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
const student_group_entity_1 = require("../../group/entities/student-group.entity");
const rating_entity_1 = require("../../rating/entities/rating.entity");
let Student = class Student {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], Student.prototype, "department_door", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: false }),
    __metadata("design:type", Date)
], Student.prototype, "birth_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 35, nullable: true, type: 'varchar' }),
    __metadata("design:type", String)
], Student.prototype, "parents_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10, type: "varchar", nullable: false }),
    __metadata("design:type", String)
], Student.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 35, nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Student.prototype, "stage", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 35, nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Student.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], Student.prototype, "leave_time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => department_entity_1.Department, (department) => department.students),
    (0, class_transformer_1.Transform)(({ value }) => value.name),
    __metadata("design:type", department_entity_1.Department)
], Student.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => polygon_entity_1.Polygon, (polygon) => polygon.student, { onDelete: "CASCADE", eager: true }),
    __metadata("design:type", polygon_entity_1.Polygon)
], Student.prototype, "polygons", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => region_entity_1.Region, (region) => region.students, { eager: true }),
    (0, class_transformer_1.Transform)(({ value }) => value.name),
    __metadata("design:type", region_entity_1.Region)
], Student.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => shift_entity_1.Shift, (shift) => shift.students),
    (0, class_transformer_1.Transform)(({ value }) => value.shift),
    __metadata("design:type", shift_entity_1.Shift)
], Student.prototype, "shift", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => student_type_entity_1.StudentType, (student_type) => student_type.students),
    (0, class_transformer_1.Transform)(({ value }) => { value.type; }),
    __metadata("design:type", student_type_entity_1.StudentType)
], Student.prototype, "student_type", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => day_entity_1.Day, day => day.students, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Student.prototype, "days", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => user_entity_1.User, (user) => user.student, { eager: true }),
    __metadata("design:type", user_entity_1.User)
], Student.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => student_payroll_entity_1.StudentPayroll, (student_payroll) => student_payroll.student),
    __metadata("design:type", student_payroll_entity_1.StudentPayroll)
], Student.prototype, "student_payroll", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true }),
    __metadata("design:type", Boolean)
], Student.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: false }),
    __metadata("design:type", Boolean)
], Student.prototype, "vecation", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 35, nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Student.prototype, "collage", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => student_group_entity_1.StudentGroup, (group) => group.students),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Student.prototype, "studentGroup", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => rating_entity_1.Rating, rating => rating.student),
    __metadata("design:type", rating_entity_1.Rating)
], Student.prototype, "ratings", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Student.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Student.prototype, "updated_at", void 0);
Student = __decorate([
    (0, typeorm_1.Entity)()
], Student);
exports.Student = Student;
//# sourceMappingURL=student.entity.js.map