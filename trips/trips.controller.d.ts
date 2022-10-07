import { TripsService } from './trips.service';
import { Trip } from './entities/trip.entity';
export declare class TripsController {
    private readonly tripsService;
    constructor(tripsService: TripsService);
    findAll(): Promise<Trip[]>;
    findAllTripsForCaptins(): Promise<Trip[]>;
    findOne(id: string): Promise<Trip>;
    remove(id: string): Promise<void>;
}
