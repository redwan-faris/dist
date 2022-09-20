import { DaysService } from './days.service';
import { CreateDayDto } from './dto/create-day.dto';
import { UpdateDayDto } from './dto/update-day.dto';
import { Day } from './entities/day.entity';
export declare class DaysController {
    private readonly daysService;
    constructor(daysService: DaysService);
    create(createDayDto: CreateDayDto): Promise<Day>;
    findAll(): Promise<Day[]>;
    findOne(id: string): Promise<Day>;
    update(id: string, updateDayDto: UpdateDayDto): Promise<Day>;
    remove(id: string): Promise<void>;
}
