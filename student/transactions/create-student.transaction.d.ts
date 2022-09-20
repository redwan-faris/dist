import { DaysService } from 'src/days/days.service';
import { Department } from 'src/department/entities/department.entity';
import { Polygon } from 'src/polygon/entities/polygon.entity';
import { Region } from 'src/region/entities/region.entity';
import { PolygonType } from 'src/region/types/polygon';
import { Shift } from 'src/shift/entities/shift.entity';
import { StudentType } from 'src/student_type/entities/student_type.entity';
import { UserService } from 'src/user/user.service';
import { Connection, EntityManager } from 'typeorm';
import { CreateStudentDto } from '../dto/create-student.dto';
import { StudentRepository } from '../student.repository';
export declare class CreateStudentTransaction {
    private readonly connection;
    private readonly userService;
    private readonly studentRepository;
    private readonly dayService;
    constructor(connection: Connection, userService: UserService, studentRepository: StudentRepository, dayService: DaysService);
    run(createStudentDto: CreateStudentDto, department: Department, studentType: StudentType, region: Region, shift: Shift): Promise<import("../entities/student.entity").Student>;
    createPolygon(data: PolygonType, manager: EntityManager): Promise<Polygon>;
}
