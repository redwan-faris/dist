import { Repository } from 'typeorm';
import { CreateStudentTypeDto } from './dto/create-student_type.dto';
import { UpdateStudentTypeDto } from './dto/update-student_type.dto';
import { StudentType } from './entities/student_type.entity';
export declare class StudentTypeRepository extends Repository<StudentType> {
    createStudentType(createStudentTypeDto: CreateStudentTypeDto): Promise<StudentType>;
    findOneStudentType(id: number): Promise<StudentType>;
    findAllStudentTypes(): Promise<StudentType[]>;
    updateStudentType(id: number, updateStudentTypeDto: UpdateStudentTypeDto): Promise<StudentType>;
    deleteStudentType(id: number): Promise<void>;
}
