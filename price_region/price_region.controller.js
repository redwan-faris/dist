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
exports.PriceRegionController = void 0;
const common_1 = require("@nestjs/common");
const price_region_service_1 = require("./price_region.service");
const create_price_region_dto_1 = require("./dto/create-price_region.dto");
const update_price_region_dto_1 = require("./dto/update-price_region.dto");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const accountant_guard_1 = require("../auth/guards/accountant.guard");
let PriceRegionController = class PriceRegionController {
    constructor(priceRegionService) {
        this.priceRegionService = priceRegionService;
    }
    create(createPriceRegionDto) {
        return this.priceRegionService.create(createPriceRegionDto);
    }
    findAll() {
        return this.priceRegionService.findAll();
    }
    findOne(id) {
        return this.priceRegionService.findOne(+id);
    }
    update(id, updatePriceRegionDto) {
        return this.priceRegionService.update(+id, updatePriceRegionDto);
    }
    remove(id) {
        return this.priceRegionService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_price_region_dto_1.CreatePriceRegionDto]),
    __metadata("design:returntype", Promise)
], PriceRegionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PriceRegionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PriceRegionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_price_region_dto_1.UpdatePriceRegionDto]),
    __metadata("design:returntype", Promise)
], PriceRegionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PriceRegionController.prototype, "remove", null);
PriceRegionController = __decorate([
    (0, common_1.Controller)('price-region'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __metadata("design:paramtypes", [price_region_service_1.PriceRegionService])
], PriceRegionController);
exports.PriceRegionController = PriceRegionController;
//# sourceMappingURL=price_region.controller.js.map