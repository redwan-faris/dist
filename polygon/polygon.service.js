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
exports.PolygonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const region_service_1 = require("../region/region.service");
const polygon_repository_1 = require("./polygon.repository");
let PolygonService = class PolygonService {
    constructor(polygonRepository, regionService) {
        this.polygonRepository = polygonRepository;
        this.regionService = regionService;
    }
    async create(createPolygonDto) {
        const region = await this.regionService.findOne(createPolygonDto.regionId);
        return this.polygonRepository.createPolygon(createPolygonDto, region);
    }
    findAll(regionId) {
        if (regionId) {
            return this.polygonRepository.findPolygonsByRegion(regionId);
        }
        return this.polygonRepository.findAllPolygons();
    }
    findOne(id) {
        return this.polygonRepository.findOnePolygon(id);
    }
    update(id, updatePolygonDto) {
        return this.polygonRepository.updatePolygon(id, updatePolygonDto);
    }
    remove(id) {
        return this.polygonRepository.deletePolygon(id);
    }
};
PolygonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(polygon_repository_1.PolygonRepository)),
    __metadata("design:paramtypes", [polygon_repository_1.PolygonRepository, region_service_1.RegionService])
], PolygonService);
exports.PolygonService = PolygonService;
//# sourceMappingURL=polygon.service.js.map