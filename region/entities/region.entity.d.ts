import { Captin } from 'src/captin/entities/captin.entity';
import { Polygon } from 'src/polygon/entities/polygon.entity';
import { Student } from 'src/student/entities/student.entity';
export declare class Region {
    id: number;
    name: string;
    captin: Captin;
    students: Student[];
    polygon: Polygon[];
    created_at: Date;
    updated_at: Date;
}
