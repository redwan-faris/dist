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
exports.TripsService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const captin_service_1 = require("../captin/captin.service");
const group_service_1 = require("../group/group.service");
const student_service_1 = require("../student/student.service");
const trips_repository_1 = require("./trips.repository");
let TripsService = class TripsService {
    constructor(tripRepository, studentService, captinService, groupService) {
        this.tripRepository = tripRepository;
        this.studentService = studentService;
        this.captinService = captinService;
        this.groupService = groupService;
    }
    findAll() {
        return this.tripRepository.getAllTrips();
    }
    findAllTripsForCaptins() {
        return this.tripRepository.findAllTripsForCaptins();
    }
    findOne(id) {
        return this.tripRepository.getTripById(id);
    }
    remove(id) {
        return this.tripRepository.deleteTrip(id);
    }
    async addTodayTrips() {
        const groups = await this.groupService.findTodayGroups();
        return this.tripRepository.addTodayTrips(groups);
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_3AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TripsService.prototype, "addTodayTrips", null);
TripsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(trips_repository_1.TripRepository)),
    __metadata("design:paramtypes", [trips_repository_1.TripRepository,
        student_service_1.StudentService,
        captin_service_1.CaptinService,
        group_service_1.GroupService])
], TripsService);
exports.TripsService = TripsService;
//# sourceMappingURL=trips.service.js.map