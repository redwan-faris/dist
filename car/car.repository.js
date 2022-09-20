"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRepository = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const typeorm_1 = require("typeorm");
const car_entity_1 = require("./entities/car.entity");
let CarRepository = class CarRepository extends typeorm_1.Repository {
    async createCar(createCarDto) {
        const { model, color, number, type, is_active } = createCarDto;
        const car = new car_entity_1.Car();
        car.color = color;
        car.model = model;
        car.number = number;
        car.type = type;
        car.is_active = is_active;
        return await this.save(car);
    }
    async findCarById(id) {
        const car = await this.findOne(id);
        if (!car) {
            throw new common_1.NotFoundException('Car not found');
        }
        return car;
    }
    async findAllCars() {
        return await this.find();
    }
    async updateCar(id, updateCarDto) {
        const car = await this.findCarById(id);
        const newCar = Object.assign(car, updateCarDto);
        if (updateCarDto.picture) {
            const path = (0, path_1.join)(process.cwd(), 'gallary', `${car.picture}.webp`);
            (0, fs_1.unlink)(path, (err) => {
                if (err) {
                    throw new common_1.NotFoundException('Car not found');
                }
            });
        }
        return await this.save(newCar);
    }
    async addPicture(path, id) {
        const car = await this.findCarById(id);
        car.picture = path;
        await this.save(car);
    }
    async deleteCar(id) {
        const car = await this.findCarById(id);
        const path = (0, path_1.join)(process.cwd(), 'gallary', `${car.picture}.webp`);
        (0, fs_1.unlink)(path, (err) => {
        });
        await this.remove(car);
    }
};
CarRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(car_entity_1.Car)
], CarRepository);
exports.CarRepository = CarRepository;
//# sourceMappingURL=car.repository.js.map