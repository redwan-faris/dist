import { Department } from "src/department/entities/department.entity";
import { Repository } from "typeorm";
import { CreateDoorDto } from "./dto/create-door.dto";
import { UpdateDoorDto } from "./dto/update-door.dto";
import { Door } from "./entities/door.entity";
export declare class DoorRepository {
    private readonly doorRepository;
    constructor(doorRepository: Repository<Door>);
    createDoor(createDoorDto: CreateDoorDto, department: Department): Promise<Door>;
    findOneDoor(id: number): Promise<Door>;
    findAllDoors(): Promise<Door[]>;
    updateDoor(id: number, updateDoorDto: UpdateDoorDto): Promise<Door>;
    removeDoor(id: number): Promise<void>;
}
