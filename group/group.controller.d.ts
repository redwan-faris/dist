import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { ChangeCaptinDto } from './dto/change-captin.dto';
import { MoveStudentDto } from './dto/move-student.dto';
import { CreateGroupByAlgorithmDto } from './dto/create-group-by-algorithm.dto';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    create(creategroupDto: CreateGroupDto): Promise<import("./entities/group.entity").Group>;
    createByAlgorithm(createGroupByAlgorithmDto: CreateGroupByAlgorithmDto): Promise<void>;
    getStudent(studentId: string, captinId: string): Promise<import("./entities/group.entity").Group[] | import("./views/group-days.view").GroupDays[]>;
    findTomorrowGroup(captindId: string, studentId: string): Promise<import("./entities/group.entity").Group>;
    findAll(): Promise<import("./entities/group.entity").Group[]>;
    findOne(id: string): Promise<import("./entities/group.entity").Group>;
    remove(id: string): Promise<void>;
    changeCaptin(changeCaptinDto: ChangeCaptinDto): Promise<import("./entities/group.entity").Group>;
    changeStudentGroup(moveStudentDto: MoveStudentDto): Promise<void>;
}
