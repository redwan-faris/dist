"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const student_controller_1 = require("./student.controller");
const typeorm_1 = require("@nestjs/typeorm");
const student_repository_1 = require("./student.repository");
const user_module_1 = require("../user/user.module");
const create_student_transaction_1 = require("./transactions/create-student.transaction");
const department_module_1 = require("../department/department.module");
const student_type_module_1 = require("../student_type/student_type.module");
const region_module_1 = require("../region/region.module");
const shift_module_1 = require("../shift/shift.module");
const days_module_1 = require("../days/days.module");
const recent_module_1 = require("../recent/recent.module");
const polygon_module_1 = require("../polygon/polygon.module");
let StudentModule = class StudentModule {
};
StudentModule = __decorate([
    (0, common_1.Module)({
        controllers: [student_controller_1.StudentController],
        providers: [student_service_1.StudentService, create_student_transaction_1.CreateStudentTransaction],
        imports: [recent_module_1.RecentModule, typeorm_1.TypeOrmModule.forFeature([student_repository_1.StudentRepository]), user_module_1.UserModule, department_module_1.DepartmentModule, student_type_module_1.StudentTypeModule, region_module_1.RegionModule, shift_module_1.ShiftModule, days_module_1.DaysModule, polygon_module_1.PolygonModule],
        exports: [student_service_1.StudentService]
    })
], StudentModule);
exports.StudentModule = StudentModule;
//# sourceMappingURL=student.module.js.map