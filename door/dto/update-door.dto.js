"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDoorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_door_dto_1 = require("./create-door.dto");
class UpdateDoorDto extends (0, mapped_types_1.PartialType)(create_door_dto_1.CreateDoorDto) {
}
exports.UpdateDoorDto = UpdateDoorDto;
//# sourceMappingURL=update-door.dto.js.map