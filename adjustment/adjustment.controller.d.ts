import { AdjustmentService } from './adjustment.service';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { UpdateAdjustmentDto } from './dto/update-adjustment.dto';
export declare class AdjustmentController {
    private readonly adjustmentService;
    constructor(adjustmentService: AdjustmentService);
    create(createAdjustmentDto: CreateAdjustmentDto): Promise<import("./entities/adjustment.entity").Adjustment>;
    findAll(): Promise<import("./entities/adjustment.entity").Adjustment[]>;
    findOne(id: string): Promise<import("./entities/adjustment.entity").Adjustment>;
    update(id: string, updateAdjustmentDto: UpdateAdjustmentDto): Promise<import("./entities/adjustment.entity").Adjustment>;
    remove(id: string): Promise<void>;
}
