import { DaysService } from 'src/days/days.service';
import { DepartmentService } from 'src/department/department.service';
import { PolygonService } from 'src/polygon/polygon.service';
import { RecentService } from 'src/recent/recent.service';
import { RegionService } from 'src/region/region.service';
import { ShiftService } from 'src/shift/shift.service';
import { StudentTypeService } from 'src/student_type/student_type.service';
import { UserService } from 'src/user/user.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student-for-user.dto';
import { UpdateStudentProfileDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { StudentRepository } from './student.repository';
import { CreateStudentTransaction } from './transactions/create-student.transaction';
export declare class StudentService {
    private readonly studentRepostory;
    private readonly departmentService;
    private readonly studentTypeService;
    private readonly regionServise;
    private readonly shiftService;
    private readonly createStudentTransaction;
    private readonly recentService;
    private readonly userService;
    private readonly dayService;
    private readonly polygonService;
    constructor(studentRepostory: StudentRepository, departmentService: DepartmentService, studentTypeService: StudentTypeService, regionServise: RegionService, shiftService: ShiftService, createStudentTransaction: CreateStudentTransaction, recentService: RecentService, userService: UserService, dayService: DaysService, polygonService: PolygonService);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    updateStudent(id: number, updateStudentDto: UpdateStudentDto): Promise<void>;
    remove(id: number): Promise<void>;
    findMultiple(ids: number[]): Promise<Student[]>;
    changeVecationStatus(id: number): Promise<boolean>;
    updateStudentProfile(id: number, updateStudentProfileDto: UpdateStudentProfileDto): Promise<void>;
    changeStudentStatus(): void;
}
