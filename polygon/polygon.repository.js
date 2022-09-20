"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const polygon_entity_1 = require("./entities/polygon.entity");
let PolygonRepository = class PolygonRepository extends typeorm_1.Repository {
    async createPolygon(createPolygonDto, region) {
        const polygon = new polygon_entity_1.Polygon();
        polygon.lng = createPolygonDto.lng;
        polygon.lat = createPolygonDto.lat;
        polygon.region = region;
        return await this.save(polygon);
    }
    async findAllPolygons() {
        return await this.find();
    }
    async findOnePolygon(id) {
        const polygon = await this.findOne(id);
        if (!polygon) {
            throw new common_1.NotFoundException('Polygon not found');
        }
        return polygon;
    }
    async updatePolygon(id, updatePolygonDto) {
        const polygon = await this.findOnePolygon(id);
        const newPolygon = Object.assign(polygon, updatePolygonDto);
        return await this.save(newPolygon);
    }
    async deletePolygon(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException('Polygon not found');
        }
    }
    async findPolygonsByRegion(regionId) {
        const polygons = await this.find({ where: { regionId: regionId } });
        if (polygons.length === 0) {
            throw new common_1.NotFoundException('Polygons not found');
        }
        return polygons;
    }
};
PolygonRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(polygon_entity_1.Polygon)
], PolygonRepository);
exports.PolygonRepository = PolygonRepository;
//# sourceMappingURL=polygon.repository.js.map