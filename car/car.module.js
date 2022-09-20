"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModule = void 0;
const common_1 = require("@nestjs/common");
const car_service_1 = require("./car.service");
const car_controller_1 = require("./car.controller");
const typeorm_1 = require("@nestjs/typeorm");
const car_repository_1 = require("./car.repository");
const car_picture_1 = require("./car-picture");
let CarModule = class CarModule {
};
CarModule = __decorate([
    (0, common_1.Module)({
        controllers: [car_controller_1.CarController],
        providers: [car_service_1.CarService, car_picture_1.CarPicture],
        imports: [typeorm_1.TypeOrmModule.forFeature([car_repository_1.CarRepository])],
        exports: [car_service_1.CarService]
    })
], CarModule);
exports.CarModule = CarModule;
//# sourceMappingURL=car.module.js.map