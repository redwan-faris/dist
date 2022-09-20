import { CaptinType } from "src/captin_type/entities/captin_type.entity";
import { Car } from "src/car/entities/car.entity";
import { Region } from "src/region/entities/region.entity";
import { EntityManager, Repository } from "typeorm";
import { CreateCaptinDto } from "./dto/create-captin.dto";
import { UpdateCaptinProfileDto } from "./dto/update-captin-profile";
import { UpdateCaptinDto } from "./dto/update-captin.dto";
import { Captin } from "./entities/captin.entity";
import { CreateCaptinType } from "./types/create-captin.type";
export declare class CaptinRepository extends Repository<Captin> {
    findAllStudentsAndDays(): Promise<Captin[]>;
    createCaptin(createCaptinType: CreateCaptinType, createCaptinDto: CreateCaptinDto, manager: EntityManager): Promise<Captin>;
    findAllCaptins(): Promise<Captin[]>;
    findCaptinById(id: number): Promise<Captin>;
    deleteCaptin(id: number): Promise<void>;
    changeCaptinWorkingState(id: any): Promise<Captin>;
    uploadDocument(id: number, path: string): Promise<void>;
    findAllNONActiveCaptins(): Promise<Captin[]>;
    updateCaptin(id: number, updateCaptinDto: UpdateCaptinDto, region: Region, captin_type: CaptinType): Promise<Captin>;
    updateCaptinProfile(id: number, updateCaptinProfile: UpdateCaptinProfileDto): Promise<Captin>;
    findNotWorkingCaptins(): Promise<Captin[]>;
    requestCar(captin_id: number, car: Car): Promise<Captin>;
    assignCar(captin: Captin): Promise<Captin>;
}
