import { CreateStudentTypeDto } from './dto/create-student_type.dto';
import { UpdateStudentTypeDto } from './dto/update-student_type.dto';
import { StudentType } from './entities/student_type.entity';
import { StudentTypeRepository } from './student_type.repository';
export declare class StudentTypeService {
    private readonly studentTypeRepository;
    constructor(studentTypeRepository: StudentTypeRepository);
    create(createStudentTypeDto: CreateStudentTypeDto): Promise<StudentType>;
    findAll(): Promise<StudentType[]>;
    findOne(id: number): Promise<StudentType>;
    update(id: number, updateStudentTypeDto: UpdateStudentTypeDto): Promise<StudentType>;
    remove(id: number): Promise<void>;
}
