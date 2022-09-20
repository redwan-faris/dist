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
exports.PricesController = void 0;
const common_1 = require("@nestjs/common");
const prices_service_1 = require("./prices.service");
const create_price_dto_1 = require("./dto/create-price.dto");
const update_price_dto_1 = require("./dto/update-price.dto");
const get_price_by_polygon_dto_1 = require("./dto/get-price-by-polygon.dto");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const accountant_guard_1 = require("../auth/guards/accountant.guard");
let PricesController = class PricesController {
    constructor(pricesService) {
        this.pricesService = pricesService;
    }
    getPrice(getPriceByPolygonDto) {
        return this.pricesService.getPriceByPolygon(getPriceByPolygonDto);
    }
    create(createPriceDto) {
        return this.pricesService.create(createPriceDto);
    }
    findAll() {
        return this.pricesService.findAll();
    }
    findOne(id) {
        return this.pricesService.findOne(+id);
    }
    update(id, updatePriceDto) {
        return this.pricesService.update(+id, updatePriceDto);
    }
    remove(id) {
        return this.pricesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('/get-price'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_price_by_polygon_dto_1.GetPriceByPolygonDto]),
    __metadata("design:returntype", void 0)
], PricesController.prototype, "getPrice", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_price_dto_1.CreatePriceDto]),
    __metadata("design:returntype", Promise)
], PricesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PricesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PricesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_price_dto_1.UpdatePriceDto]),
    __metadata("design:returntype", Promise)
], PricesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PricesController.prototype, "remove", null);
PricesController = __decorate([
    (0, common_1.Controller)('prices'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [prices_service_1.PricesService])
], PricesController);
exports.PricesController = PricesController;
//# sourceMappingURL=prices.controller.js.map