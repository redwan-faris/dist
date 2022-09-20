import { Captin } from "src/captin/entities/captin.entity";
import { Day } from "src/days/entities/day.entity";
import { Student } from "src/student/entities/student.entity";
export declare class CreateGroupType {
    captin: Captin;
    student: Student;
    day: Day;
}
