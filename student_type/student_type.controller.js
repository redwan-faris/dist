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
exports.StudentTypeController = void 0;
const common_1 = require("@nestjs/common");
const student_type_service_1 = require("./student_type.service");
const create_student_type_dto_1 = require("./dto/create-student_type.dto");
const update_student_type_dto_1 = require("./dto/update-student_type.dto");
const accountant_guard_1 = require("../auth/guards/accountant.guard");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let StudentTypeController = class StudentTypeController {
    constructor(studentTypeService) {
        this.studentTypeService = studentTypeService;
    }
    create(createStudentTypeDto) {
        return this.studentTypeService.create(createStudentTypeDto);
    }
    findAll() {
        return this.studentTypeService.findAll();
    }
    findOne(id) {
        return this.studentTypeService.findOne(+id);
    }
    update(id, updateStudentTypeDto) {
        return this.studentTypeService.update(+id, updateStudentTypeDto);
    }
    remove(id) {
        return this.studentTypeService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_type_dto_1.CreateStudentTypeDto]),
    __metadata("design:returntype", Promise)
], StudentTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_student_type_dto_1.UpdateStudentTypeDto]),
    __metadata("design:returntype", Promise)
], StudentTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, accountant_guard_1.RoleAccountantGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentTypeController.prototype, "remove", null);
StudentTypeController = __decorate([
    (0, common_1.Controller)('student-type'),
    __metadata("design:paramtypes", [student_type_service_1.StudentTypeService])
], StudentTypeController);
exports.StudentTypeController = StudentTypeController;
//# sourceMappingURL=student_type.controller.js.map