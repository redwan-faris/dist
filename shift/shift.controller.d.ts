import { ShiftService } from './shift.service';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { Shift } from './entities/shift.entity';
export declare class ShiftController {
    private readonly shiftService;
    constructor(shiftService: ShiftService);
    create(createShiftDto: CreateShiftDto): Promise<Shift>;
    findAll(): Promise<Shift[]>;
    findOne(id: string): Promise<Shift>;
    update(id: string, updateShiftDto: UpdateShiftDto): Promise<Shift>;
    remove(id: string): Promise<void>;
}
