import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './entities/region.entity';
import { CreateRegionTransaction } from './region.transaction';
import { RegionRepository } from './regoin.repository';
export declare class RegionService {
    private readonly regionRepository;
    private readonly createRegionTransaction;
    constructor(regionRepository: RegionRepository, createRegionTransaction: CreateRegionTransaction);
    create(createRegionDto: CreateRegionDto): Promise<Region>;
    findAll(): Promise<Region[]>;
    findOne(id: number): Promise<Region>;
    update(id: number, updateRegionDto: UpdateRegionDto): Promise<Region>;
    remove(id: number): Promise<void>;
}
