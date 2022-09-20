"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const shift_entity_1 = require("./entities/shift.entity");
let ShiftRepository = class ShiftRepository extends typeorm_1.Repository {
    async createShift(createShiftDto) {
        const { shift } = createShiftDto;
        const newShift = new shift_entity_1.Shift();
        newShift.shift = shift;
        try {
            return await this.save(newShift);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('Shift already exists');
            }
        }
    }
    async findAllShifts() {
        return await this.find();
    }
    async findShiftById(id) {
        const shift = await this.findOne(id);
        if (!shift) {
            throw new common_1.NotFoundException('Shift not found');
        }
        return shift;
    }
    async updateShift(id, updateShiftDto) {
        const shift = await this.findShiftById(id);
        const newShift = Object.assign(shift, updateShiftDto);
        try {
            return await this.save(newShift);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('Shift already exists');
            }
        }
    }
    async deleteShift(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException('Shift not found');
        }
    }
};
ShiftRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(shift_entity_1.Shift)
], ShiftRepository);
exports.ShiftRepository = ShiftRepository;
//# sourceMappingURL=shift.repository.js.map