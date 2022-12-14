import { Adjustment } from 'src/adjustment/entities/adjustment.entity';
import { CaptinPayroll } from 'src/captin_payroll/entities/captin_payroll.entity';
import { CaptinType } from 'src/captin_type/entities/captin_type.entity';
import { Car } from 'src/car/entities/car.entity';
import { Polygon } from 'src/polygon/entities/polygon.entity';
import { Region } from 'src/region/entities/region.entity';
import { Group } from 'src/group/entities/group.entity';
import { Trip } from 'src/trips/entities/trip.entity';
import { User } from 'src/user/entities/user.entity';
import { Rating } from 'src/rating/entities/rating.entity';
export declare class Captin {
    id: number;
    driving_license: boolean;
    is_captin: boolean;
    is_active: boolean;
    working_status: boolean;
    documents: string;
    caption_type: CaptinType;
    user: User;
    cars: Car[];
    captin_payrolls: CaptinPayroll[];
    groups: Group[];
    region: Region;
    ratings: Rating;
    adjustment: Adjustment;
    trips: Trip[];
    polygon: Polygon;
    birth_date: Date;
    created_at: Date;
    updated_at: Date;
}
