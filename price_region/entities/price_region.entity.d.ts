import { Polygon } from "src/polygon/entities/polygon.entity";
import { Price } from "src/prices/entities/price.entity";
export declare class PriceRegion {
    id: number;
    name: string;
    prices: Price[];
    polygons: Polygon[];
    created_at: Date;
    updated_At: Date;
}
