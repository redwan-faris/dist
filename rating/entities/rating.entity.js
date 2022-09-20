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
exports.Rating = void 0;
const captin_entity_1 = require("../../captin/entities/captin.entity");
const student_entity_1 = require("../../student/entities/student.entity");
const typeorm_1 = require("typeorm");
let Rating = class Rating {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Rating.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rating.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Rating.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => student_entity_1.Student, student => student.ratings),
    __metadata("design:type", student_entity_1.Student)
], Rating.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => captin_entity_1.Captin, captin => captin.ratings),
    __metadata("design:type", captin_entity_1.Captin)
], Rating.prototype, "captin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Rating.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Rating.prototype, "updated_At", void 0);
Rating = __decorate([
    (0, typeorm_1.Entity)()
], Rating);
exports.Rating = Rating;
//# sourceMappingURL=rating.entity.js.map