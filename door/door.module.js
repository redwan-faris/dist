"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoorModule = void 0;
const common_1 = require("@nestjs/common");
const door_service_1 = require("./door.service");
const door_controller_1 = require("./door.controller");
const department_module_1 = require("../department/department.module");
const typeorm_1 = require("@nestjs/typeorm");
const door_entity_1 = require("./entities/door.entity");
const door_repository_1 = require("./door.repository");
let DoorModule = class DoorModule {
};
DoorModule = __decorate([
    (0, common_1.Module)({
        controllers: [door_controller_1.DoorController],
        providers: [door_service_1.DoorService, door_repository_1.DoorRepository],
        imports: [department_module_1.DepartmentModule, typeorm_1.TypeOrmModule.forFeature([door_entity_1.Door])]
    })
], DoorModule);
exports.DoorModule = DoorModule;
//# sourceMappingURL=door.module.js.map