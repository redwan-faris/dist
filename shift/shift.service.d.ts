import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { Shift } from './entities/shift.entity';
import { ShiftRepository } from './shift.repository';
export declare class ShiftService {
    private shiftRepository;
    constructor(shiftRepository: ShiftRepository);
    create(createShiftDto: CreateShiftDto): Promise<Shift>;
    findAll(): Promise<Shift[]>;
    findOne(id: number): Promise<Shift>;
    update(id: number, updateShiftDto: UpdateShiftDto): Promise<Shift>;
    remove(id: number): Promise<void>;
}
