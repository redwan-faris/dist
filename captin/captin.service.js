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
exports.CaptinService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const captin_type_service_1 = require("../captin_type/captin_type.service");
const polygon_service_1 = require("../polygon/polygon.service");
const recent_service_1 = require("../recent/recent.service");
const region_service_1 = require("../region/region.service");
const user_service_1 = require("../user/user.service");
const captin_repository_1 = require("./captin.repository");
const captin_transaction_1 = require("./transactions/captin.transaction");
const car_service_1 = require("../car/car.service");
let CaptinService = class CaptinService {
    constructor(captinRepository, createCaptinTransaction, regionService, captinTypeService, recentService, polygonService, userService, carService) {
        this.captinRepository = captinRepository;
        this.createCaptinTransaction = createCaptinTransaction;
        this.regionService = regionService;
        this.captinTypeService = captinTypeService;
        this.recentService = recentService;
        this.polygonService = polygonService;
        this.userService = userService;
        this.carService = carService;
    }
    async create(createCaptinDto) {
        const { regionId, captionTypeId } = createCaptinDto;
        const region = await this.regionService.findOne(regionId);
        const captinType = await this.captinTypeService.findOne(captionTypeId);
        return this.createCaptinTransaction.run(createCaptinDto, region, captinType);
    }
    findAll() {
        return this.captinRepository.findAllCaptins();
    }
    findOne(id) {
        return this.captinRepository.findCaptinById(id);
    }
    async update(id, updateCaptinDto) {
        const { regionId, captionTypeId } = updateCaptinDto;
        const region = await this.regionService.findOne(regionId);
        const captinType = await this.captinTypeService.findOne(captionTypeId);
        return await this.captinRepository.updateCaptin(id, updateCaptinDto, region, captinType);
    }
    remove(id) {
        return this.captinRepository.deleteCaptin(id);
    }
    findAllStudentsAndDays() {
        return this.captinRepository.findAllStudentsAndDays();
    }
    async changeCaptinWorkingState(id) {
        const captin = await this.captinRepository.changeCaptinWorkingState(id);
        let recentMessage = '';
        if (captin.working_status) {
            recentMessage = "الكابتن " + captin.user.full_name + " سيذهب غدا";
        }
        else {
            recentMessage = "الكابتن " + captin.user.full_name + " لن يذهب غدا";
        }
        this.recentService.create({ value: recentMessage, level: 3 });
    }
    uploadDocument(id, path) {
        return this.captinRepository.uploadDocument(id, path);
    }
    async sendAllNONActiveCaptins() {
        const captins = await this.captinRepository.findAllNONActiveCaptins();
        for (let index = 0; index < captins.length; index++) {
            const element = captins[index];
            const value = 'الكابتن' + element.user.full_name + 'لن يذهب غدا';
            const level = 3;
            this.recentService.create({ value, level });
        }
    }
    async updateCaptinProfile(id, updateCaptinPofileDto) {
        const captin = await this.captinRepository.updateCaptinProfile(id, updateCaptinPofileDto);
        console.log(updateCaptinPofileDto);
        const user = await this.userService.update(captin.user.id, { backup_phone_number: updateCaptinPofileDto.backup_phone_number });
        return captin;
    }
    findNotWorkingCaptins() {
        return this.captinRepository.findNotWorkingCaptins();
    }
    async requestCar(createCarDto) {
        const car = await this.carService.create(createCarDto);
        const captin = await this.captinRepository.requestCar(createCarDto.captin_id, car);
        this.recentService.create({ level: 2, value: `${captin.user.full_name} طلب تغيير سياره` });
    }
    async assignCar(id) {
        const captin = await this.findOne(id);
        const oldCarId = captin.cars[0].id;
        await this.captinRepository.assignCar(captin);
        console.log(oldCarId);
        await this.carService.remove(oldCarId);
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_8PM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaptinService.prototype, "sendAllNONActiveCaptins", null);
CaptinService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(captin_repository_1.CaptinRepository)),
    __metadata("design:paramtypes", [captin_repository_1.CaptinRepository,
        captin_transaction_1.CreateCaptinTransaction,
        region_service_1.RegionService,
        captin_type_service_1.CaptinTypeService,
        recent_service_1.RecentService,
        polygon_service_1.PolygonService,
        user_service_1.UserService,
        car_service_1.CarService])
], CaptinService);
exports.CaptinService = CaptinService;
//# sourceMappingURL=captin.service.js.map