import { AdjustmentRepository } from './adjustment.repository';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { UpdateAdjustmentDto } from './dto/update-adjustment.dto';
import { Adjustment } from './entities/adjustment.entity';
export declare class AdjustmentService {
    private adjustmentRepository;
    constructor(adjustmentRepository: AdjustmentRepository);
    create(createAdjustmentDto: CreateAdjustmentDto): Promise<Adjustment>;
    findAll(): Promise<Adjustment[]>;
    findOne(id: number): Promise<Adjustment>;
    update(id: number, updateAdjustmentDto: UpdateAdjustmentDto): Promise<Adjustment>;
    remove(id: number): Promise<void>;
}
