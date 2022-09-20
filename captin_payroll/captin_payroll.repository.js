"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptinPayrollRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const captin_payroll_entity_1 = require("./entities/captin_payroll.entity");
let CaptinPayrollRepository = class CaptinPayrollRepository extends typeorm_1.Repository {
    async createCaptinPayroll(createCaptinPayrollDto, captin) {
        const { salary } = createCaptinPayrollDto;
        const payroll = new captin_payroll_entity_1.CaptinPayroll();
        payroll.salary = salary;
        payroll.captin = captin;
        return await this.save(payroll);
    }
    async findAllCaptinPayrolls() {
        return await this.find();
    }
    async findOneCaptinPyroll(id) {
        const payroll = await this.findOne(id);
        if (!payroll) {
            throw new Error('Captin Payroll not found');
        }
        return payroll;
    }
    async updateCaptinPayroll(id, updateCaptinPayrollDto) {
        const payroll = await this.findOneCaptinPyroll(id);
        const newPayroll = Object.assign(payroll, updateCaptinPayrollDto);
        return await this.save(newPayroll);
    }
    async removeCaptinPayroll(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new Error('Captin Payroll not found');
        }
    }
};
CaptinPayrollRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(captin_payroll_entity_1.CaptinPayroll)
], CaptinPayrollRepository);
exports.CaptinPayrollRepository = CaptinPayrollRepository;
//# sourceMappingURL=captin_payroll.repository.js.map