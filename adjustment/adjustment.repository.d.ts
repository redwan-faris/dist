import { Repository } from 'typeorm';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { UpdateAdjustmentDto } from './dto/update-adjustment.dto';
import { Adjustment } from './entities/adjustment.entity';
export declare class AdjustmentRepository extends Repository<Adjustment> {
    createAdjustment(createAdjustmentDto: CreateAdjustmentDto): Promise<Adjustment>;
    findAllAdjustment(): Promise<Adjustment[]>;
    findOneAdjustment(id: number): Promise<Adjustment>;
    updateAdjustment(id: number, updateAdjustmentDto: UpdateAdjustmentDto): Promise<Adjustment>;
    removeAdjustment(id: number): Promise<void>;
}
