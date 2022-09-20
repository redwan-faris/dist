import { DayRepository } from './days.repository';
import { CreateDayDto } from './dto/create-day.dto';
import { UpdateDayDto } from './dto/update-day.dto';
import { Day } from './entities/day.entity';
export declare class DaysService {
    private readonly dayRepository;
    constructor(dayRepository: DayRepository);
    create(createDayDto: CreateDayDto): Promise<Day>;
    findAll(): Promise<Day[]>;
    findOne(id: number): Promise<Day>;
    update(id: number, updateDayDto: UpdateDayDto): Promise<Day>;
    remove(id: number): Promise<void>;
    findDaysByIds(ids: number[]): Promise<Day[]>;
}
