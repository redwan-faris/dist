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
exports.CaptinPayrollController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const captin_payroll_service_1 = require("./captin_payroll.service");
const create_captin_payroll_dto_1 = require("./dto/create-captin_payroll.dto");
const update_captin_payroll_dto_1 = require("./dto/update-captin_payroll.dto");
let CaptinPayrollController = class CaptinPayrollController {
    constructor(captinPayrollService) {
        this.captinPayrollService = captinPayrollService;
    }
    create(createCaptinPayrollDto) {
        return this.captinPayrollService.create(createCaptinPayrollDto);
    }
    findAll() {
        return this.captinPayrollService.findAll();
    }
    findOne(id) {
        return this.captinPayrollService.findOne(+id);
    }
    update(id, updateCaptinPayrollDto) {
        return this.captinPayrollService.update(+id, updateCaptinPayrollDto);
    }
    remove(id) {
        return this.captinPayrollService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_captin_payroll_dto_1.CreateCaptinPayrollDto]),
    __metadata("design:returntype", void 0)
], CaptinPayrollController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CaptinPayrollController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaptinPayrollController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_captin_payroll_dto_1.UpdateCaptinPayrollDto]),
    __metadata("design:returntype", void 0)
], CaptinPayrollController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaptinPayrollController.prototype, "remove", null);
CaptinPayrollController = __decorate([
    (0, common_1.Controller)('captin-payroll'),
    (0, roles_decorator_1.hasRoles)('ACCOUNTANT'),
    __metadata("design:paramtypes", [captin_payroll_service_1.CaptinPayrollService])
], CaptinPayrollController);
exports.CaptinPayrollController = CaptinPayrollController;
//# sourceMappingURL=captin_payroll.controller.js.map