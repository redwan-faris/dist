"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentPayrollModule = void 0;
const common_1 = require("@nestjs/common");
const student_payroll_service_1 = require("./student_payroll.service");
const student_payroll_controller_1 = require("./student_payroll.controller");
const typeorm_1 = require("@nestjs/typeorm");
const student_payroll_repository_1 = require("./student_payroll.repository");
const student_module_1 = require("../student/student.module");
let StudentPayrollModule = class StudentPayrollModule {
};
StudentPayrollModule = __decorate([
    (0, common_1.Module)({
        controllers: [student_payroll_controller_1.StudentPayrollController],
        providers: [student_payroll_service_1.StudentPayrollService],
        imports: [typeorm_1.TypeOrmModule.forFeature([student_payroll_repository_1.StudentPayrollRepository]), student_module_1.StudentModule]
    })
], StudentPayrollModule);
exports.StudentPayrollModule = StudentPayrollModule;
//# sourceMappingURL=student_payroll.module.js.map