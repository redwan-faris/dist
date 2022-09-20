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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const days_service_1 = require("../days/days.service");
const department_service_1 = require("../department/department.service");
const polygon_service_1 = require("../polygon/polygon.service");
const recent_service_1 = require("../recent/recent.service");
const region_service_1 = require("../region/region.service");
const shift_service_1 = require("../shift/shift.service");
const student_type_service_1 = require("../student_type/student_type.service");
const user_service_1 = require("../user/user.service");
const student_repository_1 = require("./student.repository");
const create_student_transaction_1 = require("./transactions/create-student.transaction");
let StudentService = class StudentService {
    constructor(studentRepostory, departmentService, studentTypeService, regionServise, shiftService, createStudentTransaction, recentService, userService, dayService, polygonService) {
        this.studentRepostory = studentRepostory;
        this.departmentService = departmentService;
        this.studentTypeService = studentTypeService;
        this.regionServise = regionServise;
        this.shiftService = shiftService;
        this.createStudentTransaction = createStudentTransaction;
        this.recentService = recentService;
        this.userService = userService;
        this.dayService = dayService;
        this.polygonService = polygonService;
    }
    async create(createStudentDto) {
        const { departmentId, studentTypeId, shiftId, regionId } = createStudentDto;
        const department = await this.departmentService.findOne(departmentId);
        const studentType = await this.studentTypeService.findOne(studentTypeId);
        const region = await this.regionServise.findOne(regionId);
        const shift = await this.shiftService.findOne(shiftId);
        return this.createStudentTransaction.run(createStudentDto, department, studentType, region, shift);
    }
    findAll() {
        return this.studentRepostory.findAllStudents();
    }
    findOne(id) {
        return this.studentRepostory.findOneStudent(id);
    }
    async updateStudent(id, updateStudentDto) {
        const { departmentId, regionId, shiftId, studentTypeId, polygon } = updateStudentDto;
        const department = await this.departmentService.findOne(departmentId);
        const region = await this.regionServise.findOne(regionId);
        const shift = await this.shiftService.findOne(shiftId);
        const days = await this.dayService.findDaysByIds(updateStudentDto.days);
        const studentType = await this.studentTypeService.findOne(studentTypeId);
        const student = await this.studentRepostory.updateStudentForAdmin(id, updateStudentDto, department, studentType, region, shift, days);
        const studentPolygon = student.polygons;
        const user = student.user;
        await this.polygonService.update(studentPolygon.id, { lat: polygon.lat, lng: polygon.lng });
        await this.userService.update(user.id, updateStudentDto.user);
    }
    remove(id) {
        return this.studentRepostory.deleteStudent(id);
    }
    findMultiple(ids) {
        return this.studentRepostory.findMultipleStudents(ids);
    }
    async changeVecationStatus(id) {
        const student = await this.studentRepostory.changeVecationStatus(id);
        if (student.vecation) {
            this.recentService.create({ level: 3, value: `الطالب ${student.user.full_name}  يذهب غدا` });
        }
        else {
            this.recentService.create({ level: 3, value: `الطالب ${student.user.full_name} لن يذهب غدا` });
        }
        return student.vecation;
    }
    async updateStudentProfile(id, updateStudentProfileDto) {
        const student = await this.studentRepostory.updateStudentProfile(id, updateStudentProfileDto);
        await this.userService.update(student.user.id, { backup_phone_number: updateStudentProfileDto.backup_phone_number });
    }
    changeStudentStatus() {
        this.studentRepostory.changeVecationStatusSchedule();
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_3PM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentService.prototype, "changeStudentStatus", null);
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_repository_1.StudentRepository)),
    __metadata("design:paramtypes", [student_repository_1.StudentRepository,
        department_service_1.DepartmentService,
        student_type_service_1.StudentTypeService,
        region_service_1.RegionService,
        shift_service_1.ShiftService,
        create_student_transaction_1.CreateStudentTransaction,
        recent_service_1.RecentService,
        user_service_1.UserService,
        days_service_1.DaysService,
        polygon_service_1.PolygonService])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map