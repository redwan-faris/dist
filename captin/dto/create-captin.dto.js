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
exports.CreateCaptinDto = void 0;
const class_validator_1 = require("class-validator");
const create_car_dto_1 = require("../../car/dto/create-car.dto");
const polygon_1 = require("../../region/types/polygon");
const create_user_dto_1 = require("../../user/dto/create-user.dto");
class CreateCaptinDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCaptinDto.prototype, "captionTypeId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], CreateCaptinDto.prototype, "driving_license", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], CreateCaptinDto.prototype, "is_captin", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateCaptinDto.prototype, "regionId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", polygon_1.PolygonType)
], CreateCaptinDto.prototype, "polygon", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", create_car_dto_1.CreateCarDto)
], CreateCaptinDto.prototype, "car", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", create_user_dto_1.CreateUserDto)
], CreateCaptinDto.prototype, "user", void 0);
exports.CreateCaptinDto = CreateCaptinDto;
//# sourceMappingURL=create-captin.dto.js.map