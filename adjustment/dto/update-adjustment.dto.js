"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdjustmentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_adjustment_dto_1 = require("./create-adjustment.dto");
class UpdateAdjustmentDto extends (0, mapped_types_1.PartialType)(create_adjustment_dto_1.CreateAdjustmentDto) {
}
exports.UpdateAdjustmentDto = UpdateAdjustmentDto;
//# sourceMappingURL=update-adjustment.dto.js.map