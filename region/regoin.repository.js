"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const region_entity_1 = require("./entities/region.entity");
let RegionRepository = class RegionRepository extends typeorm_1.Repository {
    async createRegion(createRegionDto, manager) {
        const { name } = createRegionDto;
        const region = new region_entity_1.Region();
        region.name = name;
        try {
            return await this.save(region);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException(`Region already exists`);
            }
        }
    }
    async findAllRegions() {
        return await this.find({ relations: ['polygon'] });
    }
    async findOneRegion(id) {
        const region = await this.findOne(id, { relations: ['polygon'] });
        if (!region) {
            throw new common_1.NotFoundException(`Region not found`);
        }
        return region;
    }
    async updateRegion(id, updateRegionDto) {
        const region = await this.findOneRegion(id);
        const newRegion = Object.assign(region, updateRegionDto);
        try {
            return await this.save(newRegion);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException(`Region already exists`);
            }
        }
    }
    async deleteRegion(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException(`Region not found`);
        }
    }
};
RegionRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(region_entity_1.Region)
], RegionRepository);
exports.RegionRepository = RegionRepository;
//# sourceMappingURL=regoin.repository.js.map