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
exports.RecentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const recent_gateway_1 = require("./recent.gateway");
const recent_repository_1 = require("./recent.repository");
let RecentService = class RecentService {
    constructor(recentRepository, recentGateWay) {
        this.recentRepository = recentRepository;
        this.recentGateWay = recentGateWay;
    }
    create(createRecentDto) {
        this.recentGateWay.server.emit('recents', createRecentDto);
        return this.recentRepository.createRecent(createRecentDto);
    }
    findAll() {
        return this.recentRepository.findAllRecents();
    }
    findOne(id) {
        return this.recentRepository.findRecentById(id);
    }
    remove(id) {
        return this.recentRepository.removeRecent(id);
    }
};
RecentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(recent_repository_1.RecentRepository)),
    __metadata("design:paramtypes", [recent_repository_1.RecentRepository,
        recent_gateway_1.RecentGateway])
], RecentService);
exports.RecentService = RecentService;
//# sourceMappingURL=recent.service.js.map