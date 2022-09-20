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
exports.DaysService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const days_repository_1 = require("./days.repository");
let DaysService = class DaysService {
    constructor(dayRepository) {
        this.dayRepository = dayRepository;
    }
    create(createDayDto) {
        return this.dayRepository.createDay(createDayDto);
    }
    findAll() {
        return this.dayRepository.findAllDays();
    }
    findOne(id) {
        return this.dayRepository.findDayById(id);
    }
    update(id, updateDayDto) {
        return this.dayRepository.updateDay(id, updateDayDto);
    }
    remove(id) {
        return this.dayRepository.removeDay(id);
    }
    findDaysByIds(ids) {
        return this.dayRepository.findDaysByIds(ids);
    }
};
DaysService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(days_repository_1.DayRepository)),
    __metadata("design:paramtypes", [days_repository_1.DayRepository])
], DaysService);
exports.DaysService = DaysService;
//# sourceMappingURL=days.service.js.map