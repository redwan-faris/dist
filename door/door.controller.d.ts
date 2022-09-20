import { DoorService } from './door.service';
import { CreateDoorDto } from './dto/create-door.dto';
import { UpdateDoorDto } from './dto/update-door.dto';
import { Door } from './entities/door.entity';
export declare class DoorController {
    private readonly doorService;
    constructor(doorService: DoorService);
    create(createDoorDto: CreateDoorDto): Promise<Door>;
    findAll(): Promise<Door[]>;
    findOne(id: string): Promise<Door>;
    update(id: string, updateDoorDto: UpdateDoorDto): Promise<Door>;
    remove(id: string): Promise<void>;
}
