"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePolygonDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_polygon_dto_1 = require("./create-polygon.dto");
class UpdatePolygonDto extends (0, mapped_types_1.PartialType)(create_polygon_dto_1.CreatePolygonDto) {
}
exports.UpdatePolygonDto = UpdatePolygonDto;
//# sourceMappingURL=update-polygon.dto.js.map