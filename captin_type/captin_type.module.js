"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptinTypeModule = void 0;
const common_1 = require("@nestjs/common");
const captin_type_service_1 = require("./captin_type.service");
const captin_type_controller_1 = require("./captin_type.controller");
const typeorm_1 = require("@nestjs/typeorm");
const captin_type_repository_1 = require("./captin_type.repository");
let CaptinTypeModule = class CaptinTypeModule {
};
CaptinTypeModule = __decorate([
    (0, common_1.Module)({
        controllers: [captin_type_controller_1.CaptinTypeController],
        providers: [captin_type_service_1.CaptinTypeService],
        imports: [typeorm_1.TypeOrmModule.forFeature([captin_type_repository_1.CaptinTypeRepository])],
        exports: [captin_type_service_1.CaptinTypeService]
    })
], CaptinTypeModule);
exports.CaptinTypeModule = CaptinTypeModule;
//# sourceMappingURL=captin_type.module.js.map