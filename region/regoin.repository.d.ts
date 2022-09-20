import { EntityManager, Repository } from 'typeorm';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './entities/region.entity';
export declare class RegionRepository extends Repository<Region> {
    createRegion(createRegionDto: CreateRegionDto, manager: EntityManager): Promise<Region>;
    findAllRegions(): Promise<Region[]>;
    findOneRegion(id: number): Promise<Region>;
    updateRegion(id: number, updateRegionDto: UpdateRegionDto): Promise<Region>;
    deleteRegion(id: number): Promise<void>;
}
