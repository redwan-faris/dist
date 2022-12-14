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
exports.RatingRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rating_entity_1 = require("./entities/rating.entity");
let RatingRepository = class RatingRepository {
    constructor(rateRepository) {
        this.rateRepository = rateRepository;
    }
    async createRating(createRatingDto, student, captin) {
        const { messege, rating } = createRatingDto;
        const rate = new rating_entity_1.Rating();
        rate.rating = rating;
        rate.message = messege;
        rate.student = student;
        rate.captin = captin;
        console.log(createRatingDto);
        return await this.rateRepository.save(rate);
    }
    async findOneRating(id) {
        const rate = await this.rateRepository.findOne(id);
        if (!rate) {
            throw new common_1.NotFoundException('Rating not found');
        }
        return rate;
    }
    async findAllRatings() {
        return await this.rateRepository.find();
    }
    async updateRating(id, updateRatingDto) {
        const door = await this.findOneRating(id);
        const newDoor = await Object.assign(door, updateRatingDto);
        return await this.rateRepository.save(newDoor);
    }
    async removeRating(id) {
        const door = await this.rateRepository.delete(id);
        if (door.affected === 0) {
            throw new common_1.NotFoundException('Rate not found');
        }
    }
};
RatingRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(rating_entity_1.Rating)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RatingRepository);
exports.RatingRepository = RatingRepository;
//# sourceMappingURL=rating.repository.js.map