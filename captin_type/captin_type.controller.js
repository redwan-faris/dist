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
exports.CaptinTypeController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const captin_type_service_1 = require("./captin_type.service");
const create_captin_type_dto_1 = require("./dto/create-captin_type.dto");
const update_captin_type_dto_1 = require("./dto/update-captin_type.dto");
let CaptinTypeController = class CaptinTypeController {
    constructor(captinTypeService) {
        this.captinTypeService = captinTypeService;
    }
    create(createCaptinTypeDto) {
        return this.captinTypeService.create(createCaptinTypeDto);
    }
    findAll() {
        return this.captinTypeService.findAll();
    }
    findOne(id) {
        return this.captinTypeService.findOne(+id);
    }
    update(id, updateCaptinTypeDto) {
        return this.captinTypeService.update(+id, updateCaptinTypeDto);
    }
    remove(id) {
        return this.captinTypeService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_captin_type_dto_1.CreateCaptinTypeDto]),
    __metadata("design:returntype", Promise)
], CaptinTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaptinTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CaptinTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_captin_type_dto_1.UpdateCaptinTypeDto]),
    __metadata("design:returntype", Promise)
], CaptinTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CaptinTypeController.prototype, "remove", null);
CaptinTypeController = __decorate([
    (0, common_1.Controller)('captin-type'),
    __metadata("design:paramtypes", [captin_type_service_1.CaptinTypeService])
], CaptinTypeController);
exports.CaptinTypeController = CaptinTypeController;
//# sourceMappingURL=captin_type.controller.js.map