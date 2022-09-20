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
exports.Department = void 0;
const door_entity_1 = require("../../door/entities/door.entity");
const price_entity_1 = require("../../prices/entities/price.entity");
const student_entity_1 = require("../../student/entities/student.entity");
const typeorm_1 = require("typeorm");
let Department = class Department {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Department.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, unique: true }),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => student_entity_1.Student, (student) => student.department),
    __metadata("design:type", student_entity_1.Student)
], Department.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => price_entity_1.Price, price => price.department),
    __metadata("design:type", Array)
], Department.prototype, "prices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => door_entity_1.Door, door => door.department),
    __metadata("design:type", Array)
], Department.prototype, "doors", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Department.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Department.prototype, "updated_at", void 0);
Department = __decorate([
    (0, typeorm_1.Entity)()
], Department);
exports.Department = Department;
//# sourceMappingURL=department.entity.js.map