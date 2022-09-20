import { CaptinService } from 'src/captin/captin.service';
import { GroupService } from 'src/group/group.service';
import { StudentService } from 'src/student/student.service';
import { Trip } from './entities/trip.entity';
import { TripRepository } from './trips.repository';
export declare class TripsService {
    private readonly tripRepository;
    private readonly studentService;
    private readonly captinService;
    private readonly groupService;
    constructor(tripRepository: TripRepository, studentService: StudentService, captinService: CaptinService, groupService: GroupService);
    findAll(): Promise<Trip[]>;
    findOne(id: number): Promise<Trip>;
    remove(id: number): Promise<void>;
    addTodayTrips(): Promise<void>;
}
