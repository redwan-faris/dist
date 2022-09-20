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
exports.DoorRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const door_entity_1 = require("./entities/door.entity");
let DoorRepository = class DoorRepository {
    constructor(doorRepository) {
        this.doorRepository = doorRepository;
    }
    async createDoor(createDoorDto, department) {
        const door = new door_entity_1.Door();
        door.name = createDoorDto.name;
        door.department = department;
        return await this.doorRepository.save(door);
    }
    async findOneDoor(id) {
        const door = await this.doorRepository.findOne(id);
        if (!door) {
            throw new common_1.NotFoundException('Door not found');
        }
        return door;
    }
    async findAllDoors() {
        return await this.doorRepository.find();
    }
    async updateDoor(id, updateDoorDto) {
        const door = await this.findOneDoor(id);
        const newDoor = await Object.assign(door, updateDoorDto);
        return await this.doorRepository.save(newDoor);
    }
    async removeDoor(id) {
        const door = await this.doorRepository.delete(id);
        if (door.affected === 0) {
            throw new common_1.NotFoundException('Door not found');
        }
    }
};
DoorRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(door_entity_1.Door)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DoorRepository);
exports.DoorRepository = DoorRepository;
//# sourceMappingURL=door.repository.js.map