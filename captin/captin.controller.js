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
exports.CaptinController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const captin_service_1 = require("./captin.service");
const update_captin_dto_1 = require("./dto/update-captin.dto");
const uuid_1 = require("uuid");
const path = require("path");
const update_captin_profile_1 = require("./dto/update-captin-profile");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const role_admin_guard_1 = require("../auth/guards/role-admin.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const create_car_dto_1 = require("../car/dto/create-car.dto");
let CaptinController = class CaptinController {
    constructor(captinService) {
        this.captinService = captinService;
    }
    create(createCaptinDto) {
        console.log(createCaptinDto);
        return this.captinService.create(createCaptinDto);
    }
    changeCaptinStatus(id) {
        return this.captinService.changeCaptinWorkingState(+id);
    }
    assignCar(id) {
        return this.captinService.assignCar(+id);
    }
    requestCar(createCarDto) {
        return this.captinService.requestCar(createCarDto);
    }
    findAll() {
        return this.captinService.findAll();
    }
    uploadDocument(id, file) {
        return this.captinService.uploadDocument(+id, file.filename);
    }
    findOne(id) {
        return this.captinService.findOne(+id);
    }
    updateCaptinProfile(id, updateCaptinDto) {
        return this.captinService.updateCaptinProfile(+id, updateCaptinDto);
    }
    update(id, updateCaptinDto) {
        return this.captinService.update(+id, updateCaptinDto);
    }
    remove(id) {
        return this.captinService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CaptinController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('change-working-state/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaptinController.prototype, "changeCaptinStatus", null);
__decorate([
    (0, common_1.Put)('assign-car/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaptinController.prototype, "assignCar", null);
__decorate([
    (0, common_1.Post)('request-car'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_car_dto_1.CreateCarDto]),
    __metadata("design:returntype", void 0)
], CaptinController.prototype, "requestCar", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_admin_guard_1.RoleAdminGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaptinController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('documents/:id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_admin_guard_1.RoleAdminGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './upload/',
            filename: (req, file, cb) => {
                const filename = path.parse(file.originalname).name.replace(/\s/g, '') + (0, uuid_1.v4)();
                const extension = path.parse(file.originalname).ext;
                cb(null, `${filename}${extension}`);
            }
        }),
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CaptinController.prototype, "uploadDocument", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CaptinController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('profile/:id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_captin_profile_1.UpdateCaptinProfileDto]),
    __metadata("design:returntype", void 0)
], CaptinController.prototype, "updateCaptinProfile", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_admin_guard_1.RoleAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_captin_dto_1.UpdateCaptinDto]),
    __metadata("design:returntype", void 0)
], CaptinController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_admin_guard_1.RoleAdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CaptinController.prototype, "remove", null);
CaptinController = __decorate([
    (0, common_1.Controller)('captin'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [captin_service_1.CaptinService])
], CaptinController);
exports.CaptinController = CaptinController;
//# sourceMappingURL=captin.controller.js.map