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
exports.Day = void 0;
const student_entity_1 = require("../../student/entities/student.entity");
const typeorm_1 = require("typeorm");
let Day = class Day {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Day.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: false }),
    __metadata("design:type", Number)
], Day.prototype, "day", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => student_entity_1.Student, student => student.days, { onDelete: 'CASCADE' }),
    __metadata("design:type", student_entity_1.Student)
], Day.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Day.prototype, "craeted_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Day.prototype, "updated_at", void 0);
Day = __decorate([
    (0, typeorm_1.Entity)()
], Day);
exports.Day = Day;
//# sourceMappingURL=day.entity.js.map