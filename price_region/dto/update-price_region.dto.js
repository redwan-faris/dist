"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePriceRegionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_price_region_dto_1 = require("./create-price_region.dto");
class UpdatePriceRegionDto extends (0, mapped_types_1.PartialType)(create_price_region_dto_1.CreatePriceRegionDto) {
}
exports.UpdatePriceRegionDto = UpdatePriceRegionDto;
//# sourceMappingURL=update-price_region.dto.js.map