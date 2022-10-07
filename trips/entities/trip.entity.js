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
exports.Trip = void 0;
const captin_entity_1 = require("../../captin/entities/captin.entity");
const student_group_entity_1 = require("../../group/entities/student-group.entity");
const typeorm_1 = require("typeorm");
let Trip = class Trip {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Trip.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => student_group_entity_1.StudentGroup, (students) => students.trip),
    __metadata("design:type", student_group_entity_1.StudentGroup)
], Trip.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => captin_entity_1.Captin, (captin) => captin.trips, { eager: true }),
    __metadata("design:type", captin_entity_1.Captin)
], Trip.prototype, "captin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Trip.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Trip.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Trip.prototype, "updated_at", void 0);
Trip = __decorate([
    (0, typeorm_1.Entity)('trips')
], Trip);
exports.Trip = Trip;
//# sourceMappingURL=trip.entity.js.map