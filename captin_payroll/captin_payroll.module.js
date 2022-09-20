"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptinPayrollModule = void 0;
const common_1 = require("@nestjs/common");
const captin_payroll_service_1 = require("./captin_payroll.service");
const captin_payroll_controller_1 = require("./captin_payroll.controller");
const typeorm_1 = require("@nestjs/typeorm");
const captin_payroll_repository_1 = require("./captin_payroll.repository");
const captin_module_1 = require("../captin/captin.module");
let CaptinPayrollModule = class CaptinPayrollModule {
};
CaptinPayrollModule = __decorate([
    (0, common_1.Module)({
        controllers: [captin_payroll_controller_1.CaptinPayrollController],
        providers: [captin_payroll_service_1.CaptinPayrollService],
        imports: [
            captin_module_1.CaptinModule,
            typeorm_1.TypeOrmModule.forFeature([captin_payroll_repository_1.CaptinPayrollRepository])
        ]
    })
], CaptinPayrollModule);
exports.CaptinPayrollModule = CaptinPayrollModule;
//# sourceMappingURL=captin_payroll.module.js.map