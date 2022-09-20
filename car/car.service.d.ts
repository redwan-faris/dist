import { CarPicture } from './car-picture';
import { CarRepository } from './car.repository';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
export declare class CarService {
    private readonly carRepository;
    private readonly carPicture;
    constructor(carRepository: CarRepository, carPicture: CarPicture);
    uploadPhoto(filePath: string, id: number): Promise<void>;
    changePhoto(filePath: string, id: number): Promise<void>;
    create(createCarDto: CreateCarDto): Promise<Car>;
    findAll(): Promise<Car[]>;
    findOne(id: number): Promise<Car>;
    update(id: number, updateCarDto: UpdateCarDto): Promise<Car>;
    remove(id: number): Promise<void>;
}
