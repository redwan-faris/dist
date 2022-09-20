"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDayDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_day_dto_1 = require("./create-day.dto");
class UpdateDayDto extends (0, mapped_types_1.PartialType)(create_day_dto_1.CreateDayDto) {
}
exports.UpdateDayDto = UpdateDayDto;
//# sourceMappingURL=update-day.dto.js.map