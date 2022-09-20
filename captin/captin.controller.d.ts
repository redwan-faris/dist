/// <reference types="multer" />
import { CaptinService } from './captin.service';
import { UpdateCaptinDto } from './dto/update-captin.dto';
import { Captin } from './entities/captin.entity';
import { UpdateCaptinProfileDto } from './dto/update-captin-profile';
import { CreateCarDto } from 'src/car/dto/create-car.dto';
export declare class CaptinController {
    private readonly captinService;
    constructor(captinService: CaptinService);
    create(createCaptinDto: any): Promise<Captin>;
    changeCaptinStatus(id: string): Promise<void>;
    assignCar(id: string): Promise<void>;
    requestCar(createCarDto: CreateCarDto): Promise<void>;
    findAll(): Promise<Captin[]>;
    uploadDocument(id: string, file: Express.Multer.File): Promise<void>;
    findOne(id: string): Promise<Captin>;
    updateCaptinProfile(id: string, updateCaptinDto: UpdateCaptinProfileDto): Promise<Captin>;
    update(id: string, updateCaptinDto: UpdateCaptinDto): Promise<Captin>;
    remove(id: string): Promise<void>;
}
