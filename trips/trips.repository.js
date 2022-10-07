"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const trip_entity_1 = require("./entities/trip.entity");
let TripRepository = class TripRepository extends typeorm_1.Repository {
    async getAllTrips() {
        const trips = await this.find({ relations: ['captin', 'students'] });
        return trips;
    }
    async findAllTripsForCaptins() {
        const trips = await this.find({ relations: ['captin'] });
        return trips;
    }
    async getTripById(id) {
        const trip = await this.findOne(id);
        if (!trip) {
            throw new common_1.NotFoundException('Trip not found');
        }
        return trip;
    }
    async deleteTrip(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException('Trip not found');
        }
    }
    async addTodayTrips(groups) {
        const trips = [];
        const date = new Date();
        for (let index = 0; index < groups.length; index++) {
            const element = groups[index];
            const trip = new trip_entity_1.Trip();
            trip.students = element.student_group;
            trip.captin = element.captin;
            trip.date = date;
            trips.push(trip);
        }
        await this.save(trips);
    }
};
TripRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(trip_entity_1.Trip)
], TripRepository);
exports.TripRepository = TripRepository;
//# sourceMappingURL=trips.repository.js.map