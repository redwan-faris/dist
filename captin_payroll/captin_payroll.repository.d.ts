import { Captin } from 'src/captin/entities/captin.entity';
import { Repository } from 'typeorm';
import { CreateCaptinPayrollDto } from './dto/create-captin_payroll.dto';
import { UpdateCaptinPayrollDto } from './dto/update-captin_payroll.dto';
import { CaptinPayroll } from './entities/captin_payroll.entity';
export declare class CaptinPayrollRepository extends Repository<CaptinPayroll> {
    createCaptinPayroll(createCaptinPayrollDto: CreateCaptinPayrollDto, captin: Captin): Promise<CaptinPayroll>;
    findAllCaptinPayrolls(): Promise<CaptinPayroll[]>;
    findOneCaptinPyroll(id: number): Promise<CaptinPayroll>;
    updateCaptinPayroll(id: number, updateCaptinPayrollDto: UpdateCaptinPayrollDto): Promise<CaptinPayroll>;
    removeCaptinPayroll(id: number): Promise<void>;
}
