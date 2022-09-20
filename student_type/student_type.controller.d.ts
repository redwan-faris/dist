import { StudentTypeService } from './student_type.service';
import { CreateStudentTypeDto } from './dto/create-student_type.dto';
import { UpdateStudentTypeDto } from './dto/update-student_type.dto';
import { StudentType } from './entities/student_type.entity';
export declare class StudentTypeController {
    private readonly studentTypeService;
    constructor(studentTypeService: StudentTypeService);
    create(createStudentTypeDto: CreateStudentTypeDto): Promise<StudentType>;
    findAll(): Promise<StudentType[]>;
    findOne(id: string): Promise<StudentType>;
    update(id: string, updateStudentTypeDto: UpdateStudentTypeDto): Promise<StudentType>;
    remove(id: string): Promise<void>;
}
