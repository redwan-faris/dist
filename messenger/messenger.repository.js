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
exports.MessengerRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const messenger_entity_1 = require("./entities/messenger.entity");
let MessengerRepository = class MessengerRepository {
    constructor(messengerRepository) {
        this.messengerRepository = messengerRepository;
    }
    async addMessege(createMessengerDto, user) {
        const { messege } = createMessengerDto;
        const newMessege = new messenger_entity_1.Messenger();
        newMessege.message = messege;
        newMessege.user = user;
        return await this.messengerRepository.save(newMessege);
    }
    async findAllMesseges() {
        return this.messengerRepository.find({ select: ['message', 'id'], relations: ['user'] });
    }
    async findOneMessege(id) {
        const messege = await this.messengerRepository.findOne(id);
        if (!messege) {
            throw new common_1.NotFoundException('Messege not found');
        }
        return messege;
    }
    async updateMessege(updateMessegeDto, id) {
        const message = await this.findOneMessege(id);
        const newMessege = Object.assign(message, updateMessegeDto);
        return await this.messengerRepository.save(newMessege);
    }
    async deleteMessege(id) {
        const meesege = await this.messengerRepository.delete(id);
        if (meesege.affected === 0) {
            throw new common_1.NotFoundException('Messege not found');
        }
    }
};
MessengerRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(messenger_entity_1.Messenger)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MessengerRepository);
exports.MessengerRepository = MessengerRepository;
//# sourceMappingURL=messenger.repository.js.map