import { CaptinTypeService } from './captin_type.service';
import { CreateCaptinTypeDto } from './dto/create-captin_type.dto';
import { UpdateCaptinTypeDto } from './dto/update-captin_type.dto';
import { CaptinType } from './entities/captin_type.entity';
export declare class CaptinTypeController {
    private readonly captinTypeService;
    constructor(captinTypeService: CaptinTypeService);
    create(createCaptinTypeDto: CreateCaptinTypeDto): Promise<CaptinType>;
    findAll(): Promise<CaptinType[]>;
    findOne(id: string): Promise<CaptinType>;
    update(id: string, updateCaptinTypeDto: UpdateCaptinTypeDto): Promise<CaptinType>;
    remove(id: string): Promise<void>;
}
