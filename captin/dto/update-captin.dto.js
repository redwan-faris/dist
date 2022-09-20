"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCaptinDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_captin_dto_1 = require("./create-captin.dto");
class UpdateCaptinDto extends (0, mapped_types_1.PartialType)(create_captin_dto_1.CreateCaptinDto) {
}
exports.UpdateCaptinDto = UpdateCaptinDto;
//# sourceMappingURL=update-captin.dto.js.map