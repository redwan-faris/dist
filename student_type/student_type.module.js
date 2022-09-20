"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentTypeModule = void 0;
const common_1 = require("@nestjs/common");
const student_type_service_1 = require("./student_type.service");
const student_type_controller_1 = require("./student_type.controller");
const typeorm_1 = require("@nestjs/typeorm");
const student_type_repository_1 = require("./student_type.repository");
let StudentTypeModule = class StudentTypeModule {
};
StudentTypeModule = __decorate([
    (0, common_1.Module)({
        controllers: [student_type_controller_1.StudentTypeController],
        providers: [student_type_service_1.StudentTypeService],
        imports: [typeorm_1.TypeOrmModule.forFeature([student_type_repository_1.StudentTypeRepository])],
        exports: [student_type_service_1.StudentTypeService]
    })
], StudentTypeModule);
exports.StudentTypeModule = StudentTypeModule;
//# sourceMappingURL=student_type.module.js.map