import { CaptinPayrollService } from './captin_payroll.service';
import { CreateCaptinPayrollDto } from './dto/create-captin_payroll.dto';
import { UpdateCaptinPayrollDto } from './dto/update-captin_payroll.dto';
export declare class CaptinPayrollController {
    private readonly captinPayrollService;
    constructor(captinPayrollService: CaptinPayrollService);
    create(createCaptinPayrollDto: CreateCaptinPayrollDto): Promise<import("./entities/captin_payroll.entity").CaptinPayroll>;
    findAll(): Promise<import("./entities/captin_payroll.entity").CaptinPayroll[]>;
    findOne(id: string): Promise<import("./entities/captin_payroll.entity").CaptinPayroll>;
    update(id: string, updateCaptinPayrollDto: UpdateCaptinPayrollDto): Promise<import("./entities/captin_payroll.entity").CaptinPayroll>;
    remove(id: string): Promise<void>;
}
