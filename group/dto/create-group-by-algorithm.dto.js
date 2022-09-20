"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGroupByAlgorithmDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_group_dto_1 = require("./create-group.dto");
class CreateGroupByAlgorithmDto {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(2),
    (0, class_validator_1.ArrayMaxSize)(2),
    (0, class_transformer_1.Type)(() => create_group_dto_1.CreateGroupDto),
    __metadata("design:type", Array)
], CreateGroupByAlgorithmDto.prototype, "groups", void 0);
exports.CreateGroupByAlgorithmDto = CreateGroupByAlgorithmDto;
//# sourceMappingURL=create-group-by-algorithm.dto.js.map