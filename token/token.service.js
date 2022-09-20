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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notifications_service_1 = require("../notifications/notifications.service");
const token_repository_1 = require("./token.repository");
let TokenService = class TokenService {
    constructor(tokenRepository, notificationsService) {
        this.tokenRepository = tokenRepository;
        this.notificationsService = notificationsService;
    }
    async create(createTokenDto, user = null) {
        const token = await this.tokenRepository.findOne({ where: { token: createTokenDto.token } });
        if (token) {
            return token;
        }
        const newToken = await this.tokenRepository.createToken(createTokenDto, user);
        await this.notificationsService.registerTopic("all", newToken.token);
        if (user.captin) {
            await this.notificationsService.registerTopic(user.captin.caption_type.type, newToken.token);
        }
        return newToken;
    }
    findAll(userId) {
        if (userId) {
            return this.tokenRepository.findTokenByUserId(userId);
        }
        return this.tokenRepository.findALlTokens();
    }
    findOne(id) {
        return this.tokenRepository.findTokenById(id);
    }
    update(id, updateTokenDto) {
        return this.tokenRepository.updateToken(id, updateTokenDto);
    }
    remove(id) {
        return this.tokenRepository.removeToken(id);
    }
};
TokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(token_repository_1.TokenRepositoy)),
    __metadata("design:paramtypes", [token_repository_1.TokenRepositoy,
        notifications_service_1.NotificationsService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map