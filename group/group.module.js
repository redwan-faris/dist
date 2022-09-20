"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupModule = void 0;
const common_1 = require("@nestjs/common");
const group_service_1 = require("./group.service");
const group_controller_1 = require("./group.controller");
const typeorm_1 = require("@nestjs/typeorm");
const group_repository_1 = require("./group.repository");
const student_module_1 = require("../student/student.module");
const captin_module_1 = require("../captin/captin.module");
const days_module_1 = require("../days/days.module");
const user_module_1 = require("../user/user.module");
const adjustment_module_1 = require("../adjustment/adjustment.module");
const group_entity_1 = require("./entities/group.entity");
const changeCaptin_transaction_1 = require("./transactions/changeCaptin.transaction");
const student_group_entity_1 = require("./entities/student-group.entity");
let GroupModule = class GroupModule {
};
GroupModule = __decorate([
    (0, common_1.Module)({
        controllers: [group_controller_1.GroupController],
        providers: [group_service_1.GroupService, group_repository_1.GroupRepository, changeCaptin_transaction_1.ChangeCaptinTransaction],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([group_entity_1.Group, student_group_entity_1.StudentGroup]), student_module_1.StudentModule, (0, common_1.forwardRef)(() => captin_module_1.CaptinModule), days_module_1.DaysModule, user_module_1.UserModule, adjustment_module_1.AdjustmentModule
        ],
        exports: [group_service_1.GroupService]
    })
], GroupModule);
exports.GroupModule = GroupModule;
//# sourceMappingURL=group.module.js.map