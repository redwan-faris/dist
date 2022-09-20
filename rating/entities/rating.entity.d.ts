import { Captin } from "src/captin/entities/captin.entity";
import { Student } from "src/student/entities/student.entity";
export declare class Rating {
    id: number;
    rating: number;
    message: string;
    student: Student;
    captin: Captin;
    created_at: Date;
    updated_At: Date;
}
