import { DepartmentRepository } from './department.repository';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
export declare class DepartmentService {
    private readonly departmentRepository;
    constructor(departmentRepository: DepartmentRepository);
    create(createDepartmentDto: CreateDepartmentDto): Promise<Department>;
    findAll(): Promise<Department[]>;
    findOne(id: number): Promise<Department>;
    update(id: number, updateDepartmentDto: UpdateDepartmentDto): Promise<Department>;
    remove(id: number): Promise<void>;
}
