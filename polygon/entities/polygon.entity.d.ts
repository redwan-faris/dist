import { Captin } from 'src/captin/entities/captin.entity';
import { PriceRegion } from 'src/price_region/entities/price_region.entity';
import { Region } from 'src/region/entities/region.entity';
import { Student } from 'src/student/entities/student.entity';
export declare class Polygon {
    id: number;
    lng: number;
    lat: number;
    priceRegion: PriceRegion;
    region: Region;
    student: Student;
    captin: Captin;
    created_at: Date;
    updated_at: Date;
}
