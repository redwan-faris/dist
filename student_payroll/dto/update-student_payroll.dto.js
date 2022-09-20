"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentPayrollDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_student_payroll_dto_1 = require("./create-student_payroll.dto");
class UpdateStudentPayrollDto extends (0, mapped_types_1.PartialType)(create_student_payroll_dto_1.CreateStudentPayrollDto) {
}
exports.UpdateStudentPayrollDto = UpdateStudentPayrollDto;
//# sourceMappingURL=update-student_payroll.dto.js.map