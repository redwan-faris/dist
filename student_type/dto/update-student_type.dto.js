"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_student_type_dto_1 = require("./create-student_type.dto");
class UpdateStudentTypeDto extends (0, mapped_types_1.PartialType)(create_student_type_dto_1.CreateStudentTypeDto) {
}
exports.UpdateStudentTypeDto = UpdateStudentTypeDto;
//# sourceMappingURL=update-student_type.dto.js.map