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
exports.CreateStudentTransaction = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const days_service_1 = require("../../days/days.service");
const polygon_entity_1 = require("../../polygon/entities/polygon.entity");
const user_service_1 = require("../../user/user.service");
const user_role_entity_1 = require("../../user_role/entities/user_role.entity");
const typeorm_2 = require("typeorm");
const student_repository_1 = require("../student.repository");
let CreateStudentTransaction = class CreateStudentTransaction {
    constructor(connection, userService, studentRepository, dayService) {
        this.connection = connection;
        this.userService = userService;
        this.studentRepository = studentRepository;
        this.dayService = dayService;
    }
    async run(createStudentDto, department, studentType, region, shift) {
        const student = await this.connection.transaction(async (manager) => {
            const userRole = await this.connection
                .getRepository(user_role_entity_1.UserRole)
                .findOne({ where: { role: 'USER' } });
            const user = await this.userService.createWithTransaction(createStudentDto.user, userRole, manager);
            const polygon = await this.createPolygon(createStudentDto.polygon, manager);
            const days = await this.dayService.findDaysByIds(createStudentDto.days);
            return this.studentRepository.createStudent(createStudentDto, department, studentType, region, shift, user, polygon, days, manager);
        });
        return student;
    }
    async createPolygon(data, manager) {
        const polygon = new polygon_entity_1.Polygon();
        polygon.lat = data.lat;
        polygon.lng = data.lng;
        return await manager.save(polygon);
    }
};
CreateStudentTransaction = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(student_repository_1.StudentRepository)),
    __metadata("design:paramtypes", [typeorm_2.Connection,
        user_service_1.UserService,
        student_repository_1.StudentRepository,
        days_service_1.DaysService])
], CreateStudentTransaction);
exports.CreateStudentTransaction = CreateStudentTransaction;
//# sourceMappingURL=create-student.transaction.js.map