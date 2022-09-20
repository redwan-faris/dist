import { PolygonType } from "src/region/types/polygon";
import { CreateUserDto } from "src/user/dto/create-user.dto";
export declare class CreateStudentDto {
    user: CreateUserDto;
    departmentDoor: string;
    leaveTime: string;
    departmentId: number;
    polygon: PolygonType;
    regionId: number;
    shiftId: number;
    studentTypeId: number;
    days: number[];
    birth_date: Date;
    parents_number: string;
    gender: string;
    stage: string;
    section: string;
}
