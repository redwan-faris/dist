import { Day } from "src/days/entities/day.entity";
import { Department } from "src/department/entities/department.entity";
import { Polygon } from "src/polygon/entities/polygon.entity";
import { Region } from "src/region/entities/region.entity";
import { Shift } from "src/shift/entities/shift.entity";
import { StudentType } from "src/student_type/entities/student_type.entity";
import { User } from "src/user/entities/user.entity";
import { EntityManager, Repository } from "typeorm";
import { CreateStudentDto } from "./dto/create-student.dto";
import { Student } from "./entities/student.entity";
import { UpdateStudentProfileDto } from "./dto/update-student.dto";
import { UpdateStudentDto } from "./dto/update-student-for-user.dto";
export declare class StudentRepository extends Repository<Student> {
    findMultipleStudents(ids: number[]): Promise<Student[]>;
    createStudent(createStudentDto: CreateStudentDto, department: Department, studentType: StudentType, region: Region, shift: Shift, user: User, polygon: Polygon, days: Day[], manager: EntityManager): Promise<Student>;
    findAllStudents(): Promise<Student[]>;
    findOneStudent(id: number): Promise<Student>;
    deleteStudent(id: number): Promise<void>;
    changeVecationStatus(id: number): Promise<Student>;
    changeVecationStatusSchedule(): Promise<void>;
    updateStudentForAdmin(id: number, updateStudentDto: UpdateStudentDto, department: Department, studentType: StudentType, region: Region, shift: Shift, days: Day[]): Promise<Student>;
    updateStudentProfile(id: number, updateStudentProfileDto: UpdateStudentProfileDto): Promise<Student>;
    updateStudentDays(id: number, days: Day[]): Promise<Student>;
}
