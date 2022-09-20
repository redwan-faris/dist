import { Polygon } from 'src/polygon/entities/polygon.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreatePriceRegionDto } from './dto/create-price_region.dto';
import { UpdatePriceRegionDto } from './dto/update-price_region.dto';
import { PriceRegion } from './entities/price_region.entity';
export declare class PriceRegionRepository extends Repository<PriceRegion> {
    createPriceRegion(createPriceRegionDto: CreatePriceRegionDto, polygons: Polygon[], manager: EntityManager): Promise<PriceRegion>;
    findALlPriceRegions(): Promise<PriceRegion[]>;
    findPriceRegionById(id: number): Promise<PriceRegion>;
    updatePriceRegion(id: number, updatePriceREgionDto: UpdatePriceRegionDto): Promise<PriceRegion>;
    removePriceRegion(id: number): Promise<void>;
}
