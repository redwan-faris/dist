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
exports.CaptinTypeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const captin_type_repository_1 = require("./captin_type.repository");
let CaptinTypeService = class CaptinTypeService {
    constructor(captinTypeRepository) {
        this.captinTypeRepository = captinTypeRepository;
    }
    create(createCaptinTypeDto) {
        return this.captinTypeRepository.createCaptinType(createCaptinTypeDto);
    }
    findAll() {
        return this.captinTypeRepository.findAllCaptinsType();
    }
    findOne(id) {
        return this.captinTypeRepository.findCaptinTypeById(id);
    }
    update(id, updateCaptinTypeDto) {
        return this.captinTypeRepository.updateCaptinType(id, updateCaptinTypeDto);
    }
    remove(id) {
        return this.captinTypeRepository.deleteCaptinType(id);
    }
};
CaptinTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(captin_type_repository_1.CaptinTypeRepository)),
    __metadata("design:paramtypes", [captin_type_repository_1.CaptinTypeRepository])
], CaptinTypeService);
exports.CaptinTypeService = CaptinTypeService;
//# sourceMappingURL=captin_type.service.js.map