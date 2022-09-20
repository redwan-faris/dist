"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricesModule = void 0;
const common_1 = require("@nestjs/common");
const prices_service_1 = require("./prices.service");
const prices_controller_1 = require("./prices.controller");
const typeorm_1 = require("@nestjs/typeorm");
const price_repository_1 = require("./price.repository");
const department_module_1 = require("../department/department.module");
const price_region_module_1 = require("../price_region/price_region.module");
let PricesModule = class PricesModule {
};
PricesModule = __decorate([
    (0, common_1.Module)({
        controllers: [prices_controller_1.PricesController],
        providers: [prices_service_1.PricesService],
        imports: [typeorm_1.TypeOrmModule.forFeature([price_repository_1.PriceRerpository]), department_module_1.DepartmentModule, price_region_module_1.PriceRegionModule]
    })
], PricesModule);
exports.PricesModule = PricesModule;
//# sourceMappingURL=prices.module.js.map