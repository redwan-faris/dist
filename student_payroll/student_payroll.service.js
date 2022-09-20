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
exports.StudentPayrollService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const student_service_1 = require("../student/student.service");
const student_payroll_repository_1 = require("./student_payroll.repository");
let StudentPayrollService = class StudentPayrollService {
    constructor(studentPayrollRepository, studentService) {
        this.studentPayrollRepository = studentPayrollRepository;
        this.studentService = studentService;
    }
    async create(createStudentPayrollDto) {
        const { student_id } = createStudentPayrollDto;
        const student = await this.studentService.findOne(student_id);
        return await this.studentPayrollRepository.createStudentPayroll(createStudentPayrollDto, student);
    }
    findAll() {
        return this.studentPayrollRepository.findAllStudentPayrolls();
    }
    findOne(id) {
        return this.studentPayrollRepository.findOneStudentPyroll(id);
    }
    update(id, updateStudentPayrollDto) {
        return this.studentPayrollRepository.updateStudentPayroll(id, updateStudentPayrollDto);
    }
    remove(id) {
        return this.studentPayrollRepository.removeStudentPayroll(id);
    }
};
StudentPayrollService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_payroll_repository_1.StudentPayrollRepository)),
    __metadata("design:paramtypes", [student_payroll_repository_1.StudentPayrollRepository, student_service_1.StudentService])
], StudentPayrollService);
exports.StudentPayrollService = StudentPayrollService;
//# sourceMappingURL=student_payroll.service.js.map