import { DepartmentService } from 'src/department/department.service';
import { DoorRepository } from './door.repository';
import { CreateDoorDto } from './dto/create-door.dto';
import { UpdateDoorDto } from './dto/update-door.dto';
import { Door } from './entities/door.entity';
export declare class DoorService {
    private readonly doorRepository;
    private readonly departmentRepository;
    constructor(doorRepository: DoorRepository, departmentRepository: DepartmentService);
    create(createDoorDto: CreateDoorDto): Promise<Door>;
    findAll(): Promise<Door[]>;
    findOne(id: number): Promise<Door>;
    update(id: number, updateDoorDto: UpdateDoorDto): Promise<Door>;
    remove(id: number): Promise<void>;
}
