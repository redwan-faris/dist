import { Repository } from 'typeorm';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { Shift } from './entities/shift.entity';
export declare class ShiftRepository extends Repository<Shift> {
    createShift(createShiftDto: CreateShiftDto): Promise<Shift>;
    findAllShifts(): Promise<Shift[]>;
    findShiftById(id: number): Promise<Shift>;
    updateShift(id: number, updateShiftDto: UpdateShiftDto): Promise<Shift>;
    deleteShift(id: number): Promise<void>;
}
