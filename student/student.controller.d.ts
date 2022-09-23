import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentProfileDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { UpdateStudentDto } from './dto/update-student-for-user.dto';
import { UpdateStudentDaysDto } from './dto/update-days.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    changeVecationStatus(id: string): Promise<{
        vecation: boolean;
    }>;
    findOne(id: string): Promise<Student>;
    udpateDays(id: string, updateStudentDaysDto: UpdateStudentDaysDto): Promise<Student>;
    update(id: string, updateStudentProfileDto: UpdateStudentProfileDto): Promise<void>;
    updateStudentForAdmin(id: string, udpateStudentDto: UpdateStudentDto): Promise<void>;
    remove(id: string): Promise<void>;
}
