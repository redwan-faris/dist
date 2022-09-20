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
exports.PriceRegionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const price_repository_1 = require("./price.repository");
const create_priceregion_transaction_1 = require("./transaction/create-priceregion.transaction");
let PriceRegionService = class PriceRegionService {
    constructor(priceRegionRepository, createPriceRegionTransaction) {
        this.priceRegionRepository = priceRegionRepository;
        this.createPriceRegionTransaction = createPriceRegionTransaction;
    }
    create(createPriceRegionDto) {
        return this.createPriceRegionTransaction.run(createPriceRegionDto);
    }
    findAll() {
        return this.priceRegionRepository.findALlPriceRegions();
    }
    findOne(id) {
        return this.priceRegionRepository.findPriceRegionById(id);
    }
    update(id, updatePriceRegionDto) {
        return this.priceRegionRepository.updatePriceRegion(id, updatePriceRegionDto);
    }
    remove(id) {
        return this.priceRegionRepository.removePriceRegion(id);
    }
};
PriceRegionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(price_repository_1.PriceRegionRepository)),
    __metadata("design:paramtypes", [price_repository_1.PriceRegionRepository,
        create_priceregion_transaction_1.CreatePriceRegionTransaction])
], PriceRegionService);
exports.PriceRegionService = PriceRegionService;
//# sourceMappingURL=price_region.service.js.map