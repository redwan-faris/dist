import { CaptinType } from "src/captin_type/entities/captin_type.entity";
import { Car } from "src/car/entities/car.entity";
import { Polygon } from "src/polygon/entities/polygon.entity";
import { Region } from "src/region/entities/region.entity";
import { User } from "src/user/entities/user.entity";
export declare class CreateCaptinType {
    captinType: CaptinType;
    region: Region;
    polygon: Polygon;
    car: Car;
    user: User;
}
