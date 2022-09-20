import { PriceRegionService } from './price_region.service';
import { CreatePriceRegionDto } from './dto/create-price_region.dto';
import { UpdatePriceRegionDto } from './dto/update-price_region.dto';
import { PriceRegion } from './entities/price_region.entity';
export declare class PriceRegionController {
    private readonly priceRegionService;
    constructor(priceRegionService: PriceRegionService);
    create(createPriceRegionDto: CreatePriceRegionDto): Promise<PriceRegion>;
    findAll(): Promise<PriceRegion[]>;
    findOne(id: string): Promise<PriceRegion>;
    update(id: string, updatePriceRegionDto: UpdatePriceRegionDto): Promise<PriceRegion>;
    remove(id: string): Promise<void>;
}
