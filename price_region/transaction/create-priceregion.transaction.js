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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePriceRegionTransaction = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const polygon_entity_1 = require("../../polygon/entities/polygon.entity");
const typeorm_2 = require("typeorm");
const price_repository_1 = require("../price.repository");
let CreatePriceRegionTransaction = class CreatePriceRegionTransaction {
    constructor(connection, priceRegionRepository) {
        this.connection = connection;
        this.priceRegionRepository = priceRegionRepository;
    }
    async run(createPriceRegionDto) {
        return await this.connection.transaction(async (manager) => {
            const { polygonsDto, name } = createPriceRegionDto;
            let polygons = [];
            for (let i = 0; i < polygonsDto.length; i++) {
                let polygon = await this.createPolygon(polygonsDto[i], manager);
                polygons.push(polygon);
            }
            return await this.priceRegionRepository.createPriceRegion(createPriceRegionDto, polygons, manager);
        });
    }
    async createPolygon(createPolygon, manager) {
        const polygon = new polygon_entity_1.Polygon();
        polygon.lat = createPolygon.lat;
        polygon.lng = createPolygon.lng;
        await manager.save(polygon);
        return polygon;
    }
};
CreatePriceRegionTransaction = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(price_repository_1.PriceRegionRepository)),
    __metadata("design:paramtypes", [typeorm_2.Connection,
        price_repository_1.PriceRegionRepository])
], CreatePriceRegionTransaction);
exports.CreatePriceRegionTransaction = CreatePriceRegionTransaction;
//# sourceMappingURL=create-priceregion.transaction.js.map