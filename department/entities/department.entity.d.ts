import { Door } from 'src/door/entities/door.entity';
import { Price } from 'src/prices/entities/price.entity';
import { Student } from 'src/student/entities/student.entity';
export declare class Department {
    id: number;
    name: string;
    students: Student;
    prices: Price[];
    doors: Door[];
    created_at: Date;
    updated_at: Date;
}
