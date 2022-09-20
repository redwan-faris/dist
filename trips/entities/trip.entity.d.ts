import { Captin } from "src/captin/entities/captin.entity";
import { StudentGroup } from "src/group/entities/student-group.entity";
export declare class Trip {
    id: number;
    students: StudentGroup;
    captin: Captin;
    date: Date;
    created_at: Date;
    updated_at: Date;
}
