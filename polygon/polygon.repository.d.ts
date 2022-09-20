import { Region } from "src/region/entities/region.entity";
import { Repository } from "typeorm";
import { CreatePolygonDto } from "./dto/create-polygon.dto";
import { UpdatePolygonDto } from "./dto/update-polygon.dto";
import { Polygon } from "./entities/polygon.entity";
export declare class PolygonRepository extends Repository<Polygon> {
    createPolygon(createPolygonDto: CreatePolygonDto, region: Region): Promise<Polygon>;
    findAllPolygons(): Promise<Polygon[]>;
    findOnePolygon(id: number): Promise<Polygon>;
    updatePolygon(id: number, updatePolygonDto: UpdatePolygonDto): Promise<Polygon>;
    deletePolygon(id: number): Promise<void>;
    findPolygonsByRegion(regionId: number): Promise<Polygon[]>;
}
