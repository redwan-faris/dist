import { CaptinTypeService } from 'src/captin_type/captin_type.service';
import { PolygonService } from 'src/polygon/polygon.service';
import { RecentService } from 'src/recent/recent.service';
import { RegionService } from 'src/region/region.service';
import { UserService } from 'src/user/user.service';
import { CaptinRepository } from './captin.repository';
import { CreateCaptinDto } from './dto/create-captin.dto';
import { UpdateCaptinProfileDto } from './dto/update-captin-profile';
import { UpdateCaptinDto } from './dto/update-captin.dto';
import { Captin } from './entities/captin.entity';
import { CreateCaptinTransaction } from './transactions/captin.transaction';
import { CarService } from 'src/car/car.service';
import { CreateCarDto } from 'src/car/dto/create-car.dto';
export declare class CaptinService {
    private readonly captinRepository;
    private readonly createCaptinTransaction;
    private readonly regionService;
    private readonly captinTypeService;
    private readonly recentService;
    private readonly polygonService;
    private readonly userService;
    private readonly carService;
    constructor(captinRepository: CaptinRepository, createCaptinTransaction: CreateCaptinTransaction, regionService: RegionService, captinTypeService: CaptinTypeService, recentService: RecentService, polygonService: PolygonService, userService: UserService, carService: CarService);
    create(createCaptinDto: CreateCaptinDto): Promise<Captin>;
    findAll(): Promise<Captin[]>;
    findOne(id: number): Promise<Captin>;
    update(id: number, updateCaptinDto: UpdateCaptinDto): Promise<Captin>;
    remove(id: number): Promise<void>;
    findAllStudentsAndDays(): Promise<Captin[]>;
    changeCaptinWorkingState(id: number): Promise<void>;
    uploadDocument(id: number, path: string): Promise<void>;
    sendAllNONActiveCaptins(): Promise<void>;
    updateCaptinProfile(id: number, updateCaptinPofileDto: UpdateCaptinProfileDto): Promise<Captin>;
    findNotWorkingCaptins(): Promise<Captin[]>;
    requestCar(createCarDto: CreateCarDto): Promise<void>;
    assignCar(id: number): Promise<void>;
}
