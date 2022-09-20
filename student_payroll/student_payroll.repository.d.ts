import { Student } from 'src/student/entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentPayrollDto } from './dto/create-student_payroll.dto';
import { UpdateStudentPayrollDto } from './dto/update-student_payroll.dto';
import { StudentPayroll } from './entities/student_payroll.entity';
export declare class StudentPayrollRepository extends Repository<StudentPayroll> {
    createStudentPayroll(createStudentPayrollDto: CreateStudentPayrollDto, captin: Student): Promise<StudentPayroll>;
    findAllStudentPayrolls(): Promise<StudentPayroll[]>;
    findOneStudentPyroll(id: number): Promise<StudentPayroll>;
    updateStudentPayroll(id: number, updateStudentPayrollDto: UpdateStudentPayrollDto): Promise<StudentPayroll>;
    removeStudentPayroll(id: number): Promise<void>;
}
