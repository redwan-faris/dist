"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptinTypeRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const captin_type_entity_1 = require("./entities/captin_type.entity");
let CaptinTypeRepository = class CaptinTypeRepository extends typeorm_1.Repository {
    async createCaptinType(createCaptinTypeDto) {
        const { type } = createCaptinTypeDto;
        const captinType = new captin_type_entity_1.CaptinType();
        captinType.type = type;
        try {
            return await this.save(captinType);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('CaptinType already exists');
            }
        }
    }
    async findAllCaptinsType() {
        return await this.find();
    }
    async findCaptinTypeById(id) {
        const captinType = await this.findOne(id);
        if (!captinType) {
            throw new common_1.NotFoundException(`CaptinType not found`);
        }
        return captinType;
    }
    async updateCaptinType(id, updateCaptinTypeDto) {
        const captinType = await this.findCaptinTypeById(id);
        const newCaptinType = Object.assign(captinType, updateCaptinTypeDto);
        try {
            return await this.save(newCaptinType);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('CaptinType already exists');
            }
        }
    }
    async deleteCaptinType(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException(`CaptinType not found`);
        }
    }
};
CaptinTypeRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(captin_type_entity_1.CaptinType)
], CaptinTypeRepository);
exports.CaptinTypeRepository = CaptinTypeRepository;
//# sourceMappingURL=captin_type.repository.js.map