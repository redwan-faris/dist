import { CaptinService } from 'src/captin/captin.service';
import { CaptinPayrollRepository } from './captin_payroll.repository';
import { CreateCaptinPayrollDto } from './dto/create-captin_payroll.dto';
import { UpdateCaptinPayrollDto } from './dto/update-captin_payroll.dto';
export declare class CaptinPayrollService {
    private readonly captinPayrollRepository;
    private readonly captinService;
    constructor(captinPayrollRepository: CaptinPayrollRepository, captinService: CaptinService);
    create(createCaptinPayrollDto: CreateCaptinPayrollDto): Promise<import("./entities/captin_payroll.entity").CaptinPayroll>;
    findAll(): Promise<import("./entities/captin_payroll.entity").CaptinPayroll[]>;
    findOne(id: number): Promise<import("./entities/captin_payroll.entity").CaptinPayroll>;
    update(id: number, updateCaptinPayrollDto: UpdateCaptinPayrollDto): Promise<import("./entities/captin_payroll.entity").CaptinPayroll>;
    remove(id: number): Promise<void>;
}
