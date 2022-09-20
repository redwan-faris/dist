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
exports.Region = void 0;
const captin_entity_1 = require("../../captin/entities/captin.entity");
const polygon_entity_1 = require("../../polygon/entities/polygon.entity");
const student_entity_1 = require("../../student/entities/student.entity");
const typeorm_1 = require("typeorm");
let Region = class Region {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Region.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 35, nullable: false, unique: true }),
    __metadata("design:type", String)
], Region.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => captin_entity_1.Captin, (captin) => captin.region),
    __metadata("design:type", captin_entity_1.Captin)
], Region.prototype, "captin", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => student_entity_1.Student, (student) => student.region),
    __metadata("design:type", Array)
], Region.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => polygon_entity_1.Polygon, (polygon) => polygon.region),
    __metadata("design:type", Array)
], Region.prototype, "polygon", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Region.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Region.prototype, "updated_at", void 0);
Region = __decorate([
    (0, typeorm_1.Entity)()
], Region);
exports.Region = Region;
//# sourceMappingURL=region.entity.js.map