"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const recent_entity_1 = require("./entities/recent.entity");
let RecentRepository = class RecentRepository extends typeorm_1.Repository {
    async createRecent(createRecentDto) {
        const { value, level } = createRecentDto;
        const recent = new recent_entity_1.Recent();
        recent.level = level;
        recent.value = value;
        return await this.save(recent);
    }
    async findAllRecents() {
        return await this.find();
    }
    async findRecentById(id) {
        const recent = await this.findOne(id);
        if (!recent) {
            throw new common_1.NotFoundException('Recent Not Found');
        }
        return recent;
    }
    async removeRecent(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException('Recent Not Found');
        }
    }
};
RecentRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(recent_entity_1.Recent)
], RecentRepository);
exports.RecentRepository = RecentRepository;
//# sourceMappingURL=recent.repository.js.map