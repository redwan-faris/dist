import { Repository } from "typeorm";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";
import { Car } from "./entities/car.entity";
export declare class CarRepository extends Repository<Car> {
    createCar(createCarDto: CreateCarDto): Promise<Car>;
    findCarById(id: number): Promise<Car>;
    findAllCars(): Promise<Car[]>;
    updateCar(id: number, updateCarDto: UpdateCarDto): Promise<Car>;
    addPicture(path: string, id: number): Promise<void>;
    deleteCar(id: number): Promise<void>;
}
