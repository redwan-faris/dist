import { Polygon } from 'src/polygon/entities/polygon.entity';
import { Connection, EntityManager } from 'typeorm';
import { CreateRegionDto } from './dto/create-region.dto';
import { Region } from './entities/region.entity';
import { RegionRepository } from './regoin.repository';
import { PolygonType } from './types/polygon';
export declare class CreateRegionTransaction {
    private readonly connection;
    private readonly regionRepository;
    constructor(connection: Connection, regionRepository: RegionRepository);
    createRegion(createRegionDto: CreateRegionDto): Promise<Region>;
    createPolygon(data: PolygonType[], region: Region, manager: EntityManager): Promise<Polygon[]>;
}
