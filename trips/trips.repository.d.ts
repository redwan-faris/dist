import { Group } from "src/group/entities/group.entity";
import { Repository } from "typeorm";
import { Trip } from "./entities/trip.entity";
export declare class TripRepository extends Repository<Trip> {
    getAllTrips(): Promise<Trip[]>;
    findAllTripsForCaptins(): Promise<Trip[]>;
    getTripById(id: number): Promise<Trip>;
    deleteTrip(id: number): Promise<void>;
    addTodayTrips(groups: Group[]): Promise<void>;
}
