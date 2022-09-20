"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonModule = void 0;
const common_1 = require("@nestjs/common");
const polygon_service_1 = require("./polygon.service");
const polygon_controller_1 = require("./polygon.controller");
const typeorm_1 = require("@nestjs/typeorm");
const polygon_repository_1 = require("./polygon.repository");
const region_module_1 = require("../region/region.module");
let PolygonModule = class PolygonModule {
};
PolygonModule = __decorate([
    (0, common_1.Module)({
        controllers: [polygon_controller_1.PolygonController],
        providers: [polygon_service_1.PolygonService],
        imports: [typeorm_1.TypeOrmModule.forFeature([polygon_repository_1.PolygonRepository]), region_module_1.RegionModule],
        exports: [polygon_service_1.PolygonService]
    })
], PolygonModule);
exports.PolygonModule = PolygonModule;
//# sourceMappingURL=polygon.module.js.map