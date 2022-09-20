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
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const captin_service_1 = require("../captin/captin.service");
const student_service_1 = require("../student/student.service");
const group_repository_1 = require("./group.repository");
const changeCaptin_transaction_1 = require("./transactions/changeCaptin.transaction");
let GroupService = class GroupService {
    constructor(groupRepositpry, studentService, captinService, changeCaptinTransaction) {
        this.groupRepositpry = groupRepositpry;
        this.studentService = studentService;
        this.captinService = captinService;
        this.changeCaptinTransaction = changeCaptinTransaction;
    }
    async create(creategroupDto) {
        const { studentIds, captin_id } = creategroupDto;
        const students = await this.studentService.findMultiple(studentIds);
        const captin = await this.captinService.findOne(captin_id);
        const studentGroup = await this.groupRepositpry.createStudentsGroup(students);
        return this.groupRepositpry.creategroup(studentGroup, captin, creategroupDto);
    }
    async findAll() {
        return this.groupRepositpry.findAllGroups();
    }
    findTomorrowGroup(captinId, studentId) {
        if (studentId) {
            return this.groupRepositpry.findTomorrowForStudent(+studentId);
        }
        return this.groupRepositpry.findTomorrowForCaptin(+captinId);
    }
    findOne(id) {
        return this.groupRepositpry.findOneGroup(id);
    }
    remove(id) {
        return this.groupRepositpry.deleteGroup(id);
    }
    async getDays(studentId, captinId) {
        if (captinId) {
            return await this.groupRepositpry.findDaysForCaptin(captinId);
        }
        return this.groupRepositpry.findDaysForStudent(studentId);
    }
    async assignSecondaryCaptin(changeCaptinDto) {
        const { captin_id, group_id } = changeCaptinDto;
        const captin = await this.captinService.findOne(captin_id);
        if (captin.caption_type.type !== 'secondary') {
            throw new common_1.BadRequestException('The captin type is not secondary');
        }
        const group = await this.findOne(group_id);
        return this.changeCaptinTransaction.run(captin, group, changeCaptinDto);
    }
    async reAssignPrimaryCaptin(captin) {
        return await this.groupRepositpry.reAssignPrimaryCaptin(captin);
    }
    async moveStudent(moveStudentDto) {
        const { studentId } = moveStudentDto;
        const student = await this.studentService.findOne(studentId);
        return this.groupRepositpry.moveStudent(student, moveStudentDto);
    }
    findTodayGroups() {
        return this.groupRepositpry.findTodayGroups();
    }
    checkStudentGroup(id) {
        return this.groupRepositpry.checkStudentGroup(id);
    }
    async changeStatus() {
        const captins = await this.captinService.findNotWorkingCaptins();
        for (let i = 0; i < captins.length; i++) {
            await this.reAssignPrimaryCaptin(captins[i]);
        }
    }
    async createGroupByAlgorithm(createGroupByAlgorithmDto) {
        const { groups } = createGroupByAlgorithmDto;
        return groups.forEach(async (group) => {
            await this.create(group);
        });
    }
    findTodayCaptin(id) {
        return this.groupRepositpry.findTodayCaptin(id);
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_3PM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GroupService.prototype, "changeStatus", null);
GroupService = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => captin_service_1.CaptinService))),
    __metadata("design:paramtypes", [group_repository_1.GroupRepository,
        student_service_1.StudentService,
        captin_service_1.CaptinService,
        changeCaptin_transaction_1.ChangeCaptinTransaction])
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map