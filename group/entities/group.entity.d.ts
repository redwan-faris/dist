import { Captin } from 'src/captin/entities/captin.entity';
import { StudentGroup } from './student-group.entity';
export declare class Group {
    id: number;
    student_group: StudentGroup;
    captin: Captin;
    temp_captin_id: number;
    day: number;
    created_at: Date;
    updated_at: Date;
}
