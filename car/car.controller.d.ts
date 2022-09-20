/// <reference types="multer" />
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
    downloadPicture(path: string, res: any): import("rxjs").Observable<any>;
    uploadPhoto(id: string, file: Express.Multer.File): Promise<void>;
    changePicture(id: string, file: Express.Multer.File): Promise<void>;
    create(createCarDto: CreateCarDto): Promise<Car>;
    findAll(): Promise<Car[]>;
    findOne(id: string): Promise<Car>;
    update(id: string, updateCarDto: UpdateCarDto): Promise<Car>;
    remove(id: string): Promise<void>;
}
