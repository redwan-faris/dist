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
exports.PricesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const department_service_1 = require("../department/department.service");
const price_region_service_1 = require("../price_region/price_region.service");
const price_repository_1 = require("./price.repository");
const pointInPolygon = require("point-in-polygon");
let PricesService = class PricesService {
    constructor(priceRepository, deparmentService, priceRegionService) {
        this.priceRepository = priceRepository;
        this.deparmentService = deparmentService;
        this.priceRegionService = priceRegionService;
    }
    async create(createPriceDto) {
        const { deparmentId, priceRegionId } = createPriceDto;
        const department = await this.deparmentService.findOne(deparmentId);
        const priceRegion = await this.priceRegionService.findOne(priceRegionId);
        return this.priceRepository.createPrice(createPriceDto, priceRegion, department);
    }
    findAll() {
        return this.priceRepository.findAllPrices();
    }
    findOne(id) {
        return this.priceRepository.findPriceById(id);
    }
    update(id, updatePriceDto) {
        return this.priceRepository.updatePrice(id, updatePriceDto);
    }
    remove(id) {
        return this.priceRepository.deletePrice(id);
    }
    async getPriceByPolygon(getPriceByPolygonDto) {
        const { departmentId, days, polygon } = getPriceByPolygonDto;
        const deparment = await this.deparmentService.findOne(departmentId);
        const prices = await this.priceRepository.findPriceByDaysAndDeparment(days, deparment);
        const result = prices.find((e) => {
            let polygons = [];
            let regionPolygons = e.price_region.polygons;
            for (let i = 0; i < regionPolygons.length; i++) {
                polygons.push([regionPolygons[i].lng, regionPolygons[i].lat]);
            }
            const isIn = pointInPolygon([polygon.lng, polygon.lat], polygons);
            if (isIn) {
                return e;
            }
        });
        if (!result) {
            throw new common_1.NotFoundException("location is not found");
        }
        return { price: result.price };
    }
};
PricesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(price_repository_1.PriceRerpository)),
    __metadata("design:paramtypes", [price_repository_1.PriceRerpository,
        department_service_1.DepartmentService,
        price_region_service_1.PriceRegionService])
], PricesService);
exports.PricesService = PricesService;
//# sourceMappingURL=prices.service.js.map