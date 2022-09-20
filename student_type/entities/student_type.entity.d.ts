import { Student } from 'src/student/entities/student.entity';
export declare class StudentType {
    id: number;
    type: string;
    students: Student[];
    created_at: Date;
    updated_at: Date;
}
