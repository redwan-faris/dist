import { Repository } from 'typeorm';
import { CreateCaptinTypeDto } from './dto/create-captin_type.dto';
import { UpdateCaptinTypeDto } from './dto/update-captin_type.dto';
import { CaptinType } from './entities/captin_type.entity';
export declare class CaptinTypeRepository extends Repository<CaptinType> {
    createCaptinType(createCaptinTypeDto: CreateCaptinTypeDto): Promise<CaptinType>;
    findAllCaptinsType(): Promise<CaptinType[]>;
    findCaptinTypeById(id: number): Promise<CaptinType>;
    updateCaptinType(id: number, updateCaptinTypeDto: UpdateCaptinTypeDto): Promise<CaptinType>;
    deleteCaptinType(id: number): Promise<void>;
}
