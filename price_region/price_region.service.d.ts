import { CreatePriceRegionDto } from './dto/create-price_region.dto';
import { UpdatePriceRegionDto } from './dto/update-price_region.dto';
import { PriceRegion } from './entities/price_region.entity';
import { PriceRegionRepository } from './price.repository';
import { CreatePriceRegionTransaction } from './transaction/create-priceregion.transaction';
export declare class PriceRegionService {
    private readonly priceRegionRepository;
    private readonly createPriceRegionTransaction;
    constructor(priceRegionRepository: PriceRegionRepository, createPriceRegionTransaction: CreatePriceRegionTransaction);
    create(createPriceRegionDto: CreatePriceRegionDto): Promise<PriceRegion>;
    findAll(): Promise<PriceRegion[]>;
    findOne(id: number): Promise<PriceRegion>;
    update(id: number, updatePriceRegionDto: UpdatePriceRegionDto): Promise<PriceRegion>;
    remove(id: number): Promise<void>;
}
