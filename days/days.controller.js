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
exports.DaysController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const accountant_guard_1 = require("../auth/guards/accountant.guard");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const days_service_1 = require("./days.service");
const create_day_dto_1 = require("./dto/create-day.dto");
const update_day_dto_1 = require("./dto/update-day.dto");
let DaysController = class DaysController {
    constructor(daysService) {
        this.daysService = daysService;
    }
    create(createDayDto) {
        return this.daysService.create(createDayDto);
    }
    findAll() {
        return this.daysService.findAll();
    }
    findOne(id) {
        return this.daysService.findOne(+id);
    }
    update(id, updateDayDto) {
        return this.daysService.update(+id, updateDayDto);
    }
    remove(id) {
        return this.daysService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_day_dto_1.CreateDayDto]),
    __metadata("design:returntype", Promise)
], DaysController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DaysController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DaysController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_day_dto_1.UpdateDayDto]),
    __metadata("design:returntype", Promise)
], DaysController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DaysController.prototype, "remove", null);
DaysController = __decorate([
    (0, common_1.Controller)('days'),
    __metadata("design:paramtypes", [days_service_1.DaysService])
], DaysController);
exports.DaysController = DaysController;
//# sourceMappingURL=days.controller.js.map