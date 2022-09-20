"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCaptinTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_captin_type_dto_1 = require("./create-captin_type.dto");
class UpdateCaptinTypeDto extends (0, mapped_types_1.PartialType)(create_captin_type_dto_1.CreateCaptinTypeDto) {
}
exports.UpdateCaptinTypeDto = UpdateCaptinTypeDto;
//# sourceMappingURL=update-captin_type.dto.js.map