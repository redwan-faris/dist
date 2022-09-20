"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjustmentModule = void 0;
const common_1 = require("@nestjs/common");
const adjustment_service_1 = require("./adjustment.service");
const adjustment_controller_1 = require("./adjustment.controller");
const typeorm_1 = require("@nestjs/typeorm");
const adjustment_repository_1 = require("./adjustment.repository");
let AdjustmentModule = class AdjustmentModule {
};
AdjustmentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([adjustment_repository_1.AdjustmentRepository])],
        controllers: [adjustment_controller_1.AdjustmentController],
        providers: [adjustment_service_1.AdjustmentService],
        exports: [adjustment_service_1.AdjustmentService]
    })
], AdjustmentModule);
exports.AdjustmentModule = AdjustmentModule;
//# sourceMappingURL=adjustment.module.js.map