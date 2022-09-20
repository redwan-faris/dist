"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const day_entity_1 = require("./entities/day.entity");
let DayRepository = class DayRepository extends typeorm_1.Repository {
    async createDay(createDayDto) {
        const { day } = createDayDto;
        const dayEntity = new day_entity_1.Day();
        dayEntity.day = day;
        return await this.save(dayEntity);
    }
    async findAllDays() {
        return await this.find();
    }
    async findDayById(id) {
        const day = await this.findOne(id);
        if (!day) {
            throw new common_1.NotFoundException(`Day not found`);
        }
        return day;
    }
    async updateDay(id, updateDayDto) {
        const day = await this.findDayById(id);
        const newDay = Object.assign(day, updateDayDto);
        return await this.save(newDay);
    }
    async removeDay(id) {
        const day = await this.delete(id);
        if (day.affected === 0) {
            throw new common_1.NotFoundException(`Day not found`);
        }
    }
    async findDaysByIds(ids) {
        const days = await this.findByIds(ids);
        if (days.length === 0) {
            throw new common_1.NotFoundException("Days not found");
        }
        return days;
    }
};
DayRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(day_entity_1.Day)
], DayRepository);
exports.DayRepository = DayRepository;
//# sourceMappingURL=days.repository.js.map