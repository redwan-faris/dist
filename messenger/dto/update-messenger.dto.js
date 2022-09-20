"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMessengerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_messenger_dto_1 = require("./create-messenger.dto");
class UpdateMessengerDto extends (0, mapped_types_1.PartialType)(create_messenger_dto_1.CreateMessengerDto) {
}
exports.UpdateMessengerDto = UpdateMessengerDto;
//# sourceMappingURL=update-messenger.dto.js.map