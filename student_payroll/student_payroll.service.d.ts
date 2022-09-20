import { StudentService } from 'src/student/student.service';
import { CreateStudentPayrollDto } from './dto/create-student_payroll.dto';
import { UpdateStudentPayrollDto } from './dto/update-student_payroll.dto';
import { StudentPayrollRepository } from './student_payroll.repository';
export declare class StudentPayrollService {
    private readonly studentPayrollRepository;
    private readonly studentService;
    constructor(studentPayrollRepository: StudentPayrollRepository, studentService: StudentService);
    create(createStudentPayrollDto: CreateStudentPayrollDto): Promise<import("./entities/student_payroll.entity").StudentPayroll>;
    findAll(): Promise<import("./entities/student_payroll.entity").StudentPayroll[]>;
    findOne(id: number): Promise<import("./entities/student_payroll.entity").StudentPayroll>;
    update(id: number, updateStudentPayrollDto: UpdateStudentPayrollDto): Promise<import("./entities/student_payroll.entity").StudentPayroll>;
    remove(id: number): Promise<void>;
}
