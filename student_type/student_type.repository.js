"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentTypeRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const student_type_entity_1 = require("./entities/student_type.entity");
let StudentTypeRepository = class StudentTypeRepository extends typeorm_1.Repository {
    async createStudentType(createStudentTypeDto) {
        const { type } = createStudentTypeDto;
        const student_type = new student_type_entity_1.StudentType();
        student_type.type = type;
        try {
            return await this.save(student_type);
        }
        catch (error) {
            if (error === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('Student Type not found');
            }
        }
    }
    async findOneStudentType(id) {
        const student_type = await this.findOne();
        if (!student_type) {
            throw new common_1.NotFoundException('Student Type not found');
        }
        return student_type;
    }
    async findAllStudentTypes() {
        return await this.find();
    }
    async updateStudentType(id, updateStudentTypeDto) {
        const student_type = await this.findOneStudentType(id);
        const newStudentType = Object.assign(student_type, updateStudentTypeDto);
        try {
            return await this.save(newStudentType);
        }
        catch (error) {
            if (error === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('Student Type not found');
            }
        }
    }
    async deleteStudentType(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException('Student Type Not found');
        }
    }
};
StudentTypeRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(student_type_entity_1.StudentType)
], StudentTypeRepository);
exports.StudentTypeRepository = StudentTypeRepository;
//# sourceMappingURL=student_type.repository.js.map