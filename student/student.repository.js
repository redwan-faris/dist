"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const student_entity_1 = require("./entities/student.entity");
let StudentRepository = class StudentRepository extends typeorm_1.Repository {
    async findMultipleStudents(ids) {
        const students = await this.find({ where: {
                id: (0, typeorm_1.In)(ids),
            } });
        if (students.length === 0) {
            throw new common_1.NotFoundException('Students not found');
        }
        return students;
    }
    async createStudent(createStudentDto, department, studentType, region, shift, user, polygon, days, manager) {
        const student = new student_entity_1.Student();
        student.polygons = polygon;
        student.shift = shift;
        student.user = user;
        student.days = days;
        student.region = region;
        student.department = department;
        student.student_type = studentType;
        student.department_door = createStudentDto.departmentDoor;
        student.birth_date = new Date(createStudentDto.birth_date);
        student.gender = createStudentDto.gender;
        student.parents_number = createStudentDto.parents_number;
        student.section = createStudentDto.section;
        student.stage = createStudentDto.stage;
        student.leave_time = createStudentDto.leaveTime;
        student.collage = createStudentDto.collage;
        return await manager.getRepository(student_entity_1.Student).save(student);
    }
    async findAllStudents() {
        return this.find({ relations: ["student_type", "department", "shift", "region", "polygons"], loadEagerRelations: true });
    }
    async findOneStudent(id) {
        const student = await this.findOne(id, { relations: ["student_type", "department", "shift", "region", "polygons"] });
        if (!student) {
            throw new common_1.NotFoundException('Student not found');
        }
        return student;
    }
    async deleteStudent(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException('Student not found');
        }
    }
    async changeVecationStatus(id) {
        const student = await this.findOne(id);
        student.vecation = !student.vecation;
        console.log(student.vecation);
        return await (await this.save(student));
    }
    async changeVecationStatusSchedule() {
        await this.createQueryBuilder()
            .update(student_entity_1.Student)
            .set({ vecation: false })
            .where("vecation = true")
            .execute();
    }
    async updateStudentForAdmin(id, updateStudentDto, department, studentType, region, shift, days) {
        const student = await this.findOneStudent(id);
        student.shift = shift;
        student.days = days;
        student.region = region;
        student.department = department;
        student.student_type = studentType;
        student.department_door = updateStudentDto.departmentDoor;
        student.birth_date = new Date(updateStudentDto.birth_date);
        student.gender = updateStudentDto.gender;
        student.parents_number = updateStudentDto.parents_number;
        student.section = updateStudentDto.section;
        student.stage = updateStudentDto.stage;
        student.leave_time = updateStudentDto.leaveTime;
        return await this.save(student);
    }
    async updateStudentProfile(id, updateStudentProfileDto) {
        const { leave_time, stage, backup_phone_number, parents_number } = updateStudentProfileDto;
        const student = await this.findOneStudent(id);
        student.leave_time = leave_time;
        student.stage = stage;
        student.user.backup_phone_number = backup_phone_number;
        student.parents_number = parents_number;
        return await this.save(student);
    }
    async updateStudentDays(id, days) {
        const student = await this.findOneStudent(id);
        student.days = days;
        return await this.save(student);
    }
};
StudentRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(student_entity_1.Student)
], StudentRepository);
exports.StudentRepository = StudentRepository;
//# sourceMappingURL=student.repository.js.map