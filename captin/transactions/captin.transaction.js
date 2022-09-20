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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCaptinTransaction = void 0;
const common_1 = require("@nestjs/common");
const car_service_1 = require("../../car/car.service");
const notifications_service_1 = require("../../notifications/notifications.service");
const polygon_entity_1 = require("../../polygon/entities/polygon.entity");
const user_service_1 = require("../../user/user.service");
const user_role_entity_1 = require("../../user_role/entities/user_role.entity");
const typeorm_1 = require("typeorm");
const captin_repository_1 = require("../captin.repository");
let CreateCaptinTransaction = class CreateCaptinTransaction {
    constructor(connection, carServise, userService, captinRepository, notificationService) {
        this.connection = connection;
        this.carServise = carServise;
        this.userService = userService;
        this.captinRepository = captinRepository;
        this.notificationService = notificationService;
    }
    async run(createCaptinDto, region, captinType) {
        return await this.connection.transaction(async (manager) => {
            const car = await this.carServise.create(createCaptinDto.car);
            const userRole = await this.connection
                .getRepository(user_role_entity_1.UserRole)
                .findOne({ where: { role: 'USER' } });
            const user = await this.userService.createWithTransaction(createCaptinDto.user, userRole, manager);
            const polygon = await this.createPolygon(createCaptinDto.polygon, manager);
            const createCaptinType = {
                captinType,
                polygon,
                car,
                user,
                region,
            };
            return await this.captinRepository.createCaptin(createCaptinType, createCaptinDto, manager);
        });
    }
    async createPolygon(createPolygon, manager) {
        const polygon = new polygon_entity_1.Polygon();
        polygon.lat = createPolygon.lat;
        polygon.lng = createPolygon.lng;
        await manager.save(polygon);
        return polygon;
    }
};
CreateCaptinTransaction = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        car_service_1.CarService,
        user_service_1.UserService,
        captin_repository_1.CaptinRepository,
        notifications_service_1.NotificationsService])
], CreateCaptinTransaction);
exports.CreateCaptinTransaction = CreateCaptinTransaction;
//# sourceMappingURL=captin.transaction.js.map