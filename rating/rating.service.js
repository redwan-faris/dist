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
exports.RatingService = void 0;
const common_1 = require("@nestjs/common");
const group_service_1 = require("../group/group.service");
const student_service_1 = require("../student/student.service");
const rating_repository_1 = require("./rating.repository");
let RatingService = class RatingService {
    constructor(ratingRepository, studentService, groupService) {
        this.ratingRepository = ratingRepository;
        this.studentService = studentService;
        this.groupService = groupService;
    }
    async create(createRatingDto) {
        const { student_id } = createRatingDto;
        const captin = await this.groupService.findTodayCaptin(student_id);
        const student = await this.studentService.findOne(student_id);
        return await this.ratingRepository.createRating(createRatingDto, student, captin);
    }
    findAll() {
        return this.ratingRepository.findAllRatings();
    }
    findOne(id) {
        return this.ratingRepository.findOneRating(id);
    }
    update(id, updateRatingDto) {
        return this.ratingRepository.updateRating(id, updateRatingDto);
    }
    remove(id) {
        return this.ratingRepository.removeRating(id);
    }
};
RatingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [rating_repository_1.RatingRepository,
        student_service_1.StudentService,
        group_service_1.GroupService])
], RatingService);
exports.RatingService = RatingService;
//# sourceMappingURL=rating.service.js.map