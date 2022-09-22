"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const car_picture_1 = require("./car-picture");
const car_repository_1 = require("./car.repository");
let CarService = class CarService {
    constructor(carRepository, carPicture) {
        this.carRepository = carRepository;
        this.carPicture = carPicture;
    }
    async uploadPhoto(filePath, id) {
        const carPicture = await this.carPicture.run(filePath);
        console.log(id);
        return this.carRepository.addPicture(carPicture, id);
    }
    async changePhoto(filePath, id) {
        const car = await this.findOne(id);
        const carPicture = await this.carPicture.updatePhoto(filePath, car.picture);
        return this.carRepository.addPicture(carPicture, id);
    }
    async create(createCarDto) {
        return this.carRepository.createCar(createCarDto);
    }
    findAll() {
        return this.carRepository.findAllCars();
    }
    findOne(id) {
        return this.carRepository.findCarById(id);
    }
    async update(id, updateCarDto) {
        return this.carRepository.updateCar(id, updateCarDto);
    }
    remove(id) {
        return this.carRepository.deleteCar(id);
    }
};
CarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(car_repository_1.CarRepository)),
    __metadata("design:paramtypes", [car_repository_1.CarRepository,
        car_picture_1.CarPicture])
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map