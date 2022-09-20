"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRecentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_recent_dto_1 = require("./create-recent.dto");
class UpdateRecentDto extends (0, mapped_types_1.PartialType)(create_recent_dto_1.CreateRecentDto) {
}
exports.UpdateRecentDto = UpdateRecentDto;
//# sourceMappingURL=update-recent.dto.js.map