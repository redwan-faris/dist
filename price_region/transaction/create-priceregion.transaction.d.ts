import { Polygon } from 'src/polygon/entities/polygon.entity';
import { PolygonType } from 'src/region/types/polygon';
import { Connection, EntityManager } from 'typeorm';
import { CreatePriceRegionDto } from '../dto/create-price_region.dto';
import { PriceRegion } from '../entities/price_region.entity';
import { PriceRegionRepository } from '../price.repository';
export declare class CreatePriceRegionTransaction {
    private readonly connection;
    private readonly priceRegionRepository;
    constructor(connection: Connection, priceRegionRepository: PriceRegionRepository);
    run(createPriceRegionDto: CreatePriceRegionDto): Promise<PriceRegion>;
    createPolygon(createPolygon: PolygonType, manager: EntityManager): Promise<Polygon>;
}
