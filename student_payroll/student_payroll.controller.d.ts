import { StudentPayrollService } from './student_payroll.service';
import { CreateStudentPayrollDto } from './dto/create-student_payroll.dto';
import { UpdateStudentPayrollDto } from './dto/update-student_payroll.dto';
export declare class StudentPayrollController {
    private readonly studentPayrollService;
    constructor(studentPayrollService: StudentPayrollService);
    create(createStudentPayrollDto: CreateStudentPayrollDto): Promise<import("./entities/student_payroll.entity").StudentPayroll>;
    findAll(): Promise<import("./entities/student_payroll.entity").StudentPayroll[]>;
    findOne(id: string): Promise<import("./entities/student_payroll.entity").StudentPayroll>;
    update(id: string, updateStudentPayrollDto: UpdateStudentPayrollDto): Promise<import("./entities/student_payroll.entity").StudentPayroll>;
    remove(id: string): Promise<void>;
}
