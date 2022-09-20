import { PolygonService } from './polygon.service';
import { CreatePolygonDto } from './dto/create-polygon.dto';
import { UpdatePolygonDto } from './dto/update-polygon.dto';
import { Polygon } from './entities/polygon.entity';
export declare class PolygonController {
    private readonly polygonService;
    constructor(polygonService: PolygonService);
    create(createPolygonDto: CreatePolygonDto): Promise<Polygon>;
    findAll(regionId: number): Promise<Polygon[]>;
    findOne(id: string): Promise<Polygon>;
    update(id: string, updatePolygonDto: UpdatePolygonDto): Promise<Polygon>;
    remove(id: string): Promise<void>;
}
