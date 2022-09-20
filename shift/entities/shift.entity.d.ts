import { Student } from 'src/student/entities/student.entity';
export declare class Shift {
    id: number;
    shift: string;
    students: Student[];
    craeted_at: Date;
    updated_at: Date;
}
