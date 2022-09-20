"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceRegionRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const price_region_entity_1 = require("./entities/price_region.entity");
let PriceRegionRepository = class PriceRegionRepository extends typeorm_1.Repository {
    async createPriceRegion(createPriceRegionDto, polygons, manager) {
        const { name } = createPriceRegionDto;
        const priceRegion = new price_region_entity_1.PriceRegion();
        priceRegion.polygons = polygons;
        priceRegion.name = name;
        return await manager.save(priceRegion);
    }
    async findALlPriceRegions() {
        return await this.find();
    }
    async findPriceRegionById(id) {
        const priceRegion = await this.findOne(id);
        if (!priceRegion) {
            throw new common_1.NotFoundException("Price Region Not Found");
        }
        return priceRegion;
    }
    async updatePriceRegion(id, updatePriceREgionDto) {
        const priceRegion = await this.findPriceRegionById(id);
        const newPriceRegion = Object.assign(priceRegion, updatePriceREgionDto);
        return await this.save(newPriceRegion);
    }
    async removePriceRegion(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException("Price Region Not Found");
        }
    }
};
PriceRegionRepository = __decorate([
    (0, typeorm_1.EntityRepository)(price_region_entity_1.PriceRegion),
    (0, common_1.Injectable)()
], PriceRegionRepository);
exports.PriceRegionRepository = PriceRegionRepository;
//# sourceMappingURL=price.repository.js.map