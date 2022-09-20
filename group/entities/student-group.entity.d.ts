import { Student } from 'src/student/entities/student.entity';
import { Trip } from 'src/trips/entities/trip.entity';
import { Group } from './group.entity';
export declare class StudentGroup {
    id: number;
    students: Student[];
    groups: Group[];
    trip: Trip;
    created_at: Date;
    updated_at: Date;
}
