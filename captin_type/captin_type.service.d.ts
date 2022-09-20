import { CaptinTypeRepository } from './captin_type.repository';
import { CreateCaptinTypeDto } from './dto/create-captin_type.dto';
import { UpdateCaptinTypeDto } from './dto/update-captin_type.dto';
import { CaptinType } from './entities/captin_type.entity';
export declare class CaptinTypeService {
    private readonly captinTypeRepository;
    constructor(captinTypeRepository: CaptinTypeRepository);
    create(createCaptinTypeDto: CreateCaptinTypeDto): Promise<CaptinType>;
    findAll(): Promise<CaptinType[]>;
    findOne(id: number): Promise<CaptinType>;
    update(id: number, updateCaptinTypeDto: UpdateCaptinTypeDto): Promise<CaptinType>;
    remove(id: number): Promise<void>;
}
