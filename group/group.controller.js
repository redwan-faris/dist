"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupController = void 0;
const common_1 = require("@nestjs/common");
const group_service_1 = require("./group.service");
const create_group_dto_1 = require("./dto/create-group.dto");
const change_captin_dto_1 = require("./dto/change-captin.dto");
const move_student_dto_1 = require("./dto/move-student.dto");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const create_group_by_algorithm_dto_1 = require("./dto/create-group-by-algorithm.dto");
let GroupController = class GroupController {
    constructor(groupService) {
        this.groupService = groupService;
    }
    create(creategroupDto) {
        return this.groupService.create(creategroupDto);
    }
    createByAlgorithm(createGroupByAlgorithmDto) {
        return this.groupService.createGroupByAlgorithm(createGroupByAlgorithmDto);
    }
    getStudent(studentId, captinId) {
        return this.groupService.getDays(+studentId, +captinId);
    }
    findTomorrowGroup(captindId, studentId) {
        return this.groupService.findTomorrowGroup(captindId, studentId);
    }
    findAll() {
        return this.groupService.findAll();
    }
    findOne(id) {
        console.log(id);
        return this.groupService.findOne(+id);
    }
    remove(id) {
        return this.groupService.remove(+id);
    }
    changeCaptin(changeCaptinDto) {
        return this.groupService.assignSecondaryCaptin(changeCaptinDto);
    }
    changeStudentGroup(moveStudentDto) {
        return this.groupService.moveStudent(moveStudentDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_group_dto_1.CreateGroupDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_group_by_algorithm_dto_1.CreateGroupByAlgorithmDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "createByAlgorithm", null);
__decorate([
    (0, common_1.Get)('days'),
    __param(0, (0, common_1.Query)('studentId')),
    __param(1, (0, common_1.Query)('captinId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "getStudent", null);
__decorate([
    (0, common_1.Get)(' '),
    __param(0, (0, common_1.Query)('captindId')),
    __param(1, (0, common_1.Query)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "findTomorrowGroup", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)('/change-captin'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_captin_dto_1.ChangeCaptinDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "changeCaptin", null);
__decorate([
    (0, common_1.Put)('/move-student/'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [move_student_dto_1.MoveStudentDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "changeStudentGroup", null);
GroupController = __decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('groups'),
    __metadata("design:paramtypes", [group_service_1.GroupService])
], GroupController);
exports.GroupController = GroupController;
//# sourceMappingURL=group.controller.js.map