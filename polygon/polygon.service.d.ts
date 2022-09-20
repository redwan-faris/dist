import { RegionService } from 'src/region/region.service';
import { CreatePolygonDto } from './dto/create-polygon.dto';
import { UpdatePolygonDto } from './dto/update-polygon.dto';
import { Polygon } from './entities/polygon.entity';
import { PolygonRepository } from './polygon.repository';
export declare class PolygonService {
    private readonly polygonRepository;
    private regionService;
    constructor(polygonRepository: PolygonRepository, regionService: RegionService);
    create(createPolygonDto: CreatePolygonDto): Promise<Polygon>;
    findAll(regionId: number): Promise<Polygon[]>;
    findOne(id: number): Promise<Polygon>;
    update(id: number, updatePolygonDto: UpdatePolygonDto): Promise<Polygon>;
    remove(id: number): Promise<void>;
}
