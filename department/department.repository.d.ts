import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
export declare class DepartmentRepository extends Repository<Department> {
    createDepartment(createDepartmentDto: CreateDepartmentDto): Promise<Department>;
    findAllDepartment(): Promise<Department[]>;
    findOneDepartment(id: number): Promise<Department>;
    updateDepartment(id: number, updateDepartmentDto: UpdateDepartmentDto): Promise<Department>;
    deleteDepartment(id: number): Promise<void>;
}
