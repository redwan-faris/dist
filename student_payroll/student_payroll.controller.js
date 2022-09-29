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
exports.StudentPayrollController = void 0;
const common_1 = require("@nestjs/common");
const student_payroll_service_1 = require("./student_payroll.service");
const create_student_payroll_dto_1 = require("./dto/create-student_payroll.dto");
const update_student_payroll_dto_1 = require("./dto/update-student_payroll.dto");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let StudentPayrollController = class StudentPayrollController {
    constructor(studentPayrollService) {
        this.studentPayrollService = studentPayrollService;
    }
    create(createStudentPayrollDto) {
        return this.studentPayrollService.create(createStudentPayrollDto);
    }
    findAll() {
        return this.studentPayrollService.findAll();
    }
    findOne(id) {
        return this.studentPayrollService.findOne(+id);
    }
    update(id, updateStudentPayrollDto) {
        return this.studentPayrollService.update(+id, updateStudentPayrollDto);
    }
    remove(id) {
        return this.studentPayrollService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_payroll_dto_1.CreateStudentPayrollDto]),
    __metadata("design:returntype", void 0)
], StudentPayrollController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentPayrollController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentPayrollController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_student_payroll_dto_1.UpdateStudentPayrollDto]),
    __metadata("design:returntype", void 0)
], StudentPayrollController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentPayrollController.prototype, "remove", null);
StudentPayrollController = __decorate([
    (0, common_1.Controller)('student-payroll'),
    (0, roles_decorator_1.hasRoles)('ACCOUNTANT'),
    __metadata("design:paramtypes", [student_payroll_service_1.StudentPayrollService])
], StudentPayrollController);
exports.StudentPayrollController = StudentPayrollController;
//# sourceMappingURL=student_payroll.controller.js.map