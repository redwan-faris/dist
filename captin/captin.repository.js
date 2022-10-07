"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptinRepository = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const typeorm_1 = require("typeorm");
const captin_entity_1 = require("./entities/captin.entity");
let CaptinRepository = class CaptinRepository extends typeorm_1.Repository {
    findAllStudentsAndDays() {
        return this.find({ relations: ["groups"], loadEagerRelations: true });
    }
    async createCaptin(createCaptinType, createCaptinDto, manager) {
        const { captinType, polygon, car, user, region } = createCaptinType;
        const { driving_license, is_captin, birth_date } = createCaptinDto;
        const captin = new captin_entity_1.Captin();
        captin.is_captin = is_captin;
        captin.driving_license = driving_license;
        captin.caption_type = captinType;
        captin.polygon = polygon;
        captin.birth_date = birth_date;
        captin.cars = [car];
        captin.user = user;
        captin.region = region;
        return await manager.save(captin);
    }
    async findAllCaptins() {
        return await this.find({ relations: ["caption_type", "polygon", "cars", "user", "region"] });
    }
    async findCaptinById(id) {
        const captin = await this.findOne(id, { relations: ["caption_type", "polygon", "cars", "user", "region"] });
        if (!captin) {
            throw new common_1.NotFoundException(`Captin not found`);
        }
        return captin;
    }
    async deleteCaptin(id) {
        const captin = await this.findCaptinById(id);
        const path = (0, path_1.join)(process.cwd(), 'upload', `${captin.documents}.pdf`);
        (0, fs_1.unlink)(path, (err) => { });
        this.delete(captin.id);
    }
    async changeCaptinWorkingState(id) {
        const captin = await this.findCaptinById(id);
        captin.working_status = !captin.working_status;
        await this.save(captin);
        return captin;
    }
    async uploadDocument(id, path) {
        const captin = await this.findCaptinById(id);
        captin.documents = path;
        await this.save(captin);
    }
    async findAllNONActiveCaptins() {
        const captin = await this.find({
            where: {
                working_status: false,
                caption_type: 'primary'
            }
        });
        if (captin.length === 0) {
            throw new common_1.NotFoundException('Non active captins not found');
        }
        return captin;
    }
    async updateCaptin(id, updateCaptinDto, region, captin_type) {
        const captin = await this.findCaptinById(id);
        const newCaptin = Object.assign(captin, updateCaptinDto);
        newCaptin.region = region;
        newCaptin.caption_type = captin_type;
        return await this.save(newCaptin);
    }
    async updateCaptinProfile(id, updateCaptinProfile) {
        const captin = await this.findCaptinById(id);
        captin.driving_license = updateCaptinProfile.driving_license;
        return await this.save(captin);
    }
    async findNotWorkingCaptins() {
        const captins = await this.find({ where: {
                working_status: false
            } });
        return captins;
    }
    async requestCar(captin_id, car) {
        const captin = await this.findCaptinById(captin_id);
        captin.cars.push(car);
        return await this.save(captin);
    }
    async assignCar(captin) {
        captin.cars.shift();
        if (captin.cars.length === 0) {
            throw new common_1.NotFoundException('This captin did not request a car');
        }
        captin.cars[0].is_active = true;
        return await this.save(captin);
    }
};
CaptinRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(captin_entity_1.Captin)
], CaptinRepository);
exports.CaptinRepository = CaptinRepository;
//# sourceMappingURL=captin.repository.js.map