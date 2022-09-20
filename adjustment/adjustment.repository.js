"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjustmentRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const adjustment_entity_1 = require("./entities/adjustment.entity");
let AdjustmentRepository = class AdjustmentRepository extends typeorm_1.Repository {
    async createAdjustment(createAdjustmentDto) {
        const { amount, date } = createAdjustmentDto;
        const adjustment = new adjustment_entity_1.Adjustment();
        adjustment.amount = amount;
        adjustment.date = date;
        return await this.save(adjustment);
    }
    async findAllAdjustment() {
        return await this.find();
    }
    async findOneAdjustment(id) {
        const adjustment = await this.findOne(id);
        if (!adjustment) {
            throw new Error('Adjustment not found');
        }
        return adjustment;
    }
    async updateAdjustment(id, updateAdjustmentDto) {
        const adjustment = await this.findOneAdjustment(id);
        const newAdjustment = Object.assign(adjustment, updateAdjustmentDto);
        return await this.save(newAdjustment);
    }
    async removeAdjustment(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new Error('Adjustment not found');
        }
    }
};
AdjustmentRepository = __decorate([
    (0, typeorm_1.EntityRepository)(adjustment_entity_1.Adjustment),
    (0, common_1.Injectable)()
], AdjustmentRepository);
exports.AdjustmentRepository = AdjustmentRepository;
//# sourceMappingURL=adjustment.repository.js.map