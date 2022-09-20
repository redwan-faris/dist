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
exports.CaptinPayrollService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const captin_service_1 = require("../captin/captin.service");
const captin_payroll_repository_1 = require("./captin_payroll.repository");
let CaptinPayrollService = class CaptinPayrollService {
    constructor(captinPayrollRepository, captinService) {
        this.captinPayrollRepository = captinPayrollRepository;
        this.captinService = captinService;
    }
    async create(createCaptinPayrollDto) {
        const { captin_id } = createCaptinPayrollDto;
        const captin = await this.captinService.findOne(captin_id);
        return await this.captinPayrollRepository.createCaptinPayroll(createCaptinPayrollDto, captin);
    }
    findAll() {
        return this.captinPayrollRepository.findAllCaptinPayrolls();
    }
    findOne(id) {
        return this.captinPayrollRepository.findOne(id);
    }
    update(id, updateCaptinPayrollDto) {
        return this.captinPayrollRepository.updateCaptinPayroll(id, updateCaptinPayrollDto);
    }
    remove(id) {
        return this.captinPayrollRepository.removeCaptinPayroll(id);
    }
};
CaptinPayrollService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(captin_payroll_repository_1.CaptinPayrollRepository)),
    __metadata("design:paramtypes", [captin_payroll_repository_1.CaptinPayrollRepository, captin_service_1.CaptinService])
], CaptinPayrollService);
exports.CaptinPayrollService = CaptinPayrollService;
//# sourceMappingURL=captin_payroll.service.js.map