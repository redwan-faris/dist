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
exports.PolygonController = void 0;
const common_1 = require("@nestjs/common");
const polygon_service_1 = require("./polygon.service");
const create_polygon_dto_1 = require("./dto/create-polygon.dto");
const update_polygon_dto_1 = require("./dto/update-polygon.dto");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const accountant_guard_1 = require("../auth/guards/accountant.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let PolygonController = class PolygonController {
    constructor(polygonService) {
        this.polygonService = polygonService;
    }
    create(createPolygonDto) {
        return this.polygonService.create(createPolygonDto);
    }
    findAll(regionId) {
        return this.polygonService.findAll(regionId);
    }
    findOne(id) {
        return this.polygonService.findOne(+id);
    }
    update(id, updatePolygonDto) {
        return this.polygonService.update(+id, updatePolygonDto);
    }
    remove(id) {
        return this.polygonService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_polygon_dto_1.CreatePolygonDto]),
    __metadata("design:returntype", Promise)
], PolygonController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("regionId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PolygonController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PolygonController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_polygon_dto_1.UpdatePolygonDto]),
    __metadata("design:returntype", Promise)
], PolygonController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PolygonController.prototype, "remove", null);
PolygonController = __decorate([
    (0, common_1.Controller)('polygon'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __metadata("design:paramtypes", [polygon_service_1.PolygonService])
], PolygonController);
exports.PolygonController = PolygonController;
//# sourceMappingURL=polygon.controller.js.map