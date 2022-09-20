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
exports.DoorService = void 0;
const common_1 = require("@nestjs/common");
const department_service_1 = require("../department/department.service");
const door_repository_1 = require("./door.repository");
let DoorService = class DoorService {
    constructor(doorRepository, departmentRepository) {
        this.doorRepository = doorRepository;
        this.departmentRepository = departmentRepository;
    }
    async create(createDoorDto) {
        const department = await this.departmentRepository.findOne(createDoorDto.department_id);
        return this.doorRepository.createDoor(createDoorDto, department);
    }
    findAll() {
        return this.doorRepository.findAllDoors();
    }
    findOne(id) {
        return this.doorRepository.findOneDoor(id);
    }
    update(id, updateDoorDto) {
        return this.doorRepository.updateDoor(id, updateDoorDto);
    }
    remove(id) {
        return this.doorRepository.removeDoor(id);
    }
};
DoorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [door_repository_1.DoorRepository,
        department_service_1.DepartmentService])
], DoorService);
exports.DoorService = DoorService;
//# sourceMappingURL=door.service.js.map