import { Repository } from "typeorm";
import { CreateDayDto } from "./dto/create-day.dto";
import { UpdateDayDto } from "./dto/update-day.dto";
import { Day } from "./entities/day.entity";
export declare class DayRepository extends Repository<Day> {
    createDay(createDayDto: CreateDayDto): Promise<Day>;
    findAllDays(): Promise<Day[]>;
    findDayById(id: number): Promise<Day>;
    updateDay(id: number, updateDayDto: UpdateDayDto): Promise<Day>;
    removeDay(id: number): Promise<void>;
    findDaysByIds(ids: number[]): Promise<Day[]>;
}
