"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentPayrollRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const student_payroll_entity_1 = require("./entities/student_payroll.entity");
let StudentPayrollRepository = class StudentPayrollRepository extends typeorm_1.Repository {
    async createStudentPayroll(createStudentPayrollDto, captin) {
        const { salary } = createStudentPayrollDto;
        const payroll = new student_payroll_entity_1.StudentPayroll();
        payroll.salary = salary;
        payroll.student = captin;
        return await this.save(payroll);
    }
    async findAllStudentPayrolls() {
        return await this.find();
    }
    async findOneStudentPyroll(id) {
        const payroll = await this.findOne(id);
        if (!payroll) {
            throw new Error('Student Payroll not found');
        }
        return payroll;
    }
    async updateStudentPayroll(id, updateStudentPayrollDto) {
        const payroll = await this.findOneStudentPyroll(id);
        const newPayroll = Object.assign(payroll, updateStudentPayrollDto);
        return await this.save(newPayroll);
    }
    async removeStudentPayroll(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new Error('Student Payroll not found');
        }
    }
};
StudentPayrollRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(student_payroll_entity_1.StudentPayroll)
], StudentPayrollRepository);
exports.StudentPayrollRepository = StudentPayrollRepository;
//# sourceMappingURL=student_payroll.repository.js.map