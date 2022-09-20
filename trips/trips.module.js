"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsModule = void 0;
const common_1 = require("@nestjs/common");
const trips_service_1 = require("./trips.service");
const trips_controller_1 = require("./trips.controller");
const typeorm_1 = require("@nestjs/typeorm");
const trips_repository_1 = require("./trips.repository");
const captin_module_1 = require("../captin/captin.module");
const student_module_1 = require("../student/student.module");
const group_module_1 = require("../group/group.module");
let TripsModule = class TripsModule {
};
TripsModule = __decorate([
    (0, common_1.Module)({
        controllers: [trips_controller_1.TripsController],
        providers: [trips_service_1.TripsService],
        imports: [typeorm_1.TypeOrmModule.forFeature([trips_repository_1.TripRepository]), captin_module_1.CaptinModule, student_module_1.StudentModule, group_module_1.GroupModule]
    })
], TripsModule);
exports.TripsModule = TripsModule;
//# sourceMappingURL=trips.module.js.map