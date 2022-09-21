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
exports.GroupRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const group_entity_1 = require("./entities/group.entity");
const student_group_entity_1 = require("./entities/student-group.entity");
const group_days_view_1 = require("./views/group-days.view");
let GroupRepository = class GroupRepository {
    constructor(connection, groupRepository, studentGroupRepository) {
        this.connection = connection;
        this.groupRepository = groupRepository;
        this.studentGroupRepository = studentGroupRepository;
    }
    async creategroup(student_group, captin, creategroupDto) {
        const { day } = creategroupDto;
        const group = new group_entity_1.Group();
        group.captin = captin;
        group.student_group = student_group;
        group.day = day;
        return await this.groupRepository.save(group);
    }
    async findAllGroups() {
        return await this.groupRepository.find({
            relations: ['captin', 'student_group'],
        });
    }
    async findOneGroup(id) {
        const group = await this.groupRepository.findOne(id, {
            relations: ['captin', 'student_group'],
        });
        if (!group) {
            throw new common_1.NotFoundException('group day not found');
        }
        return group;
    }
    async findDaysForStudent(id) {
        const days = await this.connection.manager.find(group_days_view_1.GroupDays, {
            select: ['id', 'day'],
            where: { studentId: id },
        });
        return days;
    }
    async findDaysForCaptin(id) {
        const days = await this.groupRepository.createQueryBuilder('groups').where('groups.captinId = :id', { id }).getMany();
        return days;
    }
    async findTomorrowForCaptin(id) {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        const group = await this.groupRepository
            .createQueryBuilder('groups')
            .leftJoinAndSelect('groups.captin', 'captin')
            .leftJoinAndSelect('captin.user', 'captin_user')
            .leftJoinAndSelect('captin.polygon', 'polygon')
            .leftJoinAndSelect('captin.cars', 'car')
            .leftJoinAndSelect('groups.student_group', 'student_group')
            .leftJoinAndSelect('student_group.students', 'students')
            .leftJoinAndSelect('students.user', 'student_user')
            .leftJoinAndSelect('students.polygons', 'polygons')
            .leftJoinAndSelect('students.region', 'region')
            .where('groups.captinId = :id', { id })
            .where('groups.day = :tomorrow', { tomorrow: tomorrow.getDay() })
            .getOne();
        if (!group) {
            throw new common_1.NotFoundException('group day not found');
        }
        return group;
    }
    async findTomorrowForStudent(id) {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        const group = await this.groupRepository
            .createQueryBuilder('groups')
            .leftJoinAndSelect('groups.captin', 'captin')
            .leftJoinAndSelect('groups.student_group', 'student_group')
            .leftJoinAndSelect('student_group.students', 'students')
            .leftJoinAndSelect('captin.user', 'captin_user')
            .leftJoinAndSelect('captin.cars', 'car')
            .leftJoinAndSelect('students.polygons', 'polygons')
            .leftJoinAndSelect('captin.polygon', 'polygon')
            .leftJoinAndSelect('students.user', 'student_user')
            .leftJoinAndSelect('students.region', 'region')
            .where('students.id = :id', { id })
            .where('groups.day = :tomorrow', { tomorrow: tomorrow.getDay() })
            .getOne();
        if (!group) {
            throw new common_1.NotFoundException('group day not found');
        }
        return group;
    }
    async reAssignPrimaryCaptin(captin) {
        await this.groupRepository.update({ temp_captin_id: captin.id }, { captin, temp_captin_id: 0 });
    }
    async findStudentGroup(id) {
        const group = await this.studentGroupRepository.findOne(id, {
            relations: ['student_group', 'captin'],
        });
        if (!group) {
            throw new common_1.NotFoundException('student group not found');
        }
        console.log(group);
        return group;
    }
    async checkStudentGroup(id) {
        const day = new Date().getDay();
        const hasGroup = await this.connection.manager.findOne(group_days_view_1.GroupDays, {
            where: { studentId: id, day },
        });
        if (!hasGroup) {
            return new common_1.NotFoundException('The student has not group today');
        }
    }
    async moveStudent(student, moveStudentDto) {
        const { oldGroupId, newGroupId } = moveStudentDto;
        const oldGroup = await this.findStudentGroup(oldGroupId);
        const newGroup = await this.findStudentGroup(newGroupId);
        newGroup.students.push(student);
        oldGroup.students.filter((s) => student != s);
        await this.groupRepository.save(oldGroup);
        await this.groupRepository.save(newGroup);
    }
    async createStudentsGroup(students) {
        const studentsGroup = new student_group_entity_1.StudentGroup();
        studentsGroup.students = students;
        return await this.studentGroupRepository.save(studentsGroup);
    }
    async findTodayGroups() {
        const day = new Date().getDay();
        return await this.groupRepository.find({
            where: {
                day,
            },
        });
    }
    async deleteGroup(id) {
        const deleted = await this.groupRepository.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException('Group Not Found');
        }
    }
    async findTodayCaptin(id) {
        const today = new Date();
        const group = await this.groupRepository
            .createQueryBuilder('groups')
            .leftJoinAndSelect('groups.captin', 'captin')
            .leftJoinAndSelect('groups.student_group', 'student_group')
            .leftJoinAndSelect('student_group.students', 'students')
            .where('students.id = :id', { id })
            .where('groups.day = :today', { today: today.getDay() })
            .getOne();
        if (!group) {
            throw new common_1.NotFoundException('Group Not Found');
        }
        return group.captin;
    }
};
GroupRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_2.EntityRepository)(group_entity_1.Group),
    __param(0, (0, typeorm_1.InjectConnection)()),
    __param(1, (0, typeorm_1.InjectRepository)(group_entity_1.Group)),
    __param(2, (0, typeorm_1.InjectRepository)(student_group_entity_1.StudentGroup)),
    __metadata("design:paramtypes", [typeorm_2.Connection,
        typeorm_2.Repository,
        typeorm_2.Repository])
], GroupRepository);
exports.GroupRepository = GroupRepository;
//# sourceMappingURL=group.repository.js.map