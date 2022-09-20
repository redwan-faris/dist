"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const department_entity_1 = require("./entities/department.entity");
let DepartmentRepository = class DepartmentRepository extends typeorm_1.Repository {
    async createDepartment(createDepartmentDto) {
        const { name } = createDepartmentDto;
        const department = new department_entity_1.Department();
        department.name = name;
        try {
            return await this.save(department);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('Department already exists');
            }
        }
    }
    async findAllDepartment() {
        return await this.find();
    }
    async findOneDepartment(id) {
        const dep = await this.findOne(id);
        if (!dep) {
            throw new common_1.NotFoundException('Department Not Found');
        }
        return dep;
    }
    async updateDepartment(id, updateDepartmentDto) {
        const dep = await this.findOneDepartment(id);
        const newDep = Object.assign(dep, updateDepartmentDto);
        try {
            return await this.save(newDep);
        }
        catch (error) {
            if (error == 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('Department already exists');
            }
        }
    }
    async deleteDepartment(id) {
        try {
            const deleted = await this.delete(id);
            if (deleted.affected === 0) {
                throw new common_1.NotFoundException('Department Not Found');
            }
        }
        catch (error) {
            console.log(error.code);
            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                throw new common_1.BadRequestException('This Department Has users');
            }
        }
    }
};
DepartmentRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(department_entity_1.Department)
], DepartmentRepository);
exports.DepartmentRepository = DepartmentRepository;
//# sourceMappingURL=department.repository.js.map