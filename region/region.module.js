"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionModule = void 0;
const common_1 = require("@nestjs/common");
const region_service_1 = require("./region.service");
const region_controller_1 = require("./region.controller");
const typeorm_1 = require("@nestjs/typeorm");
const regoin_repository_1 = require("./regoin.repository");
const region_transaction_1 = require("./region.transaction");
let RegionModule = class RegionModule {
};
RegionModule = __decorate([
    (0, common_1.Module)({
        controllers: [region_controller_1.RegionController],
        providers: [region_service_1.RegionService, region_transaction_1.CreateRegionTransaction],
        imports: [typeorm_1.TypeOrmModule.forFeature([regoin_repository_1.RegionRepository])],
        exports: [region_service_1.RegionService]
    })
], RegionModule);
exports.RegionModule = RegionModule;
//# sourceMappingURL=region.module.js.map