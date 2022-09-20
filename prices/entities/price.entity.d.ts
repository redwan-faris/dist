import { Department } from "src/department/entities/department.entity";
import { PriceRegion } from "src/price_region/entities/price_region.entity";
export declare class Price {
    id: number;
    days: number;
    price: number;
    department: Department;
    price_region: PriceRegion;
    created_at: Date;
    updated_At: Date;
}
