"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRepositoy = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const token_entity_1 = require("./entities/token.entity");
let TokenRepositoy = class TokenRepositoy extends typeorm_1.Repository {
    async createToken(createTokenDto, user) {
        const { token } = createTokenDto;
        const newToken = new token_entity_1.Token();
        newToken.token = token;
        newToken.user = user;
        return await this.save(newToken);
    }
    async findALlTokens() {
        return await this.find();
    }
    async findTokenById(id) {
        const token = await this.findOne(id);
        if (!token) {
            throw new common_1.NotFoundException("Token not found");
        }
        return token;
    }
    async updateToken(id, updateTokenDto) {
        const token = await this.findTokenById(id);
        const newToken = Object.assign(token, updateTokenDto);
        return await this.save(newToken);
    }
    async removeToken(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException("Token not found");
        }
    }
    async findTokenByUserId(userId) {
        const tokens = await this.find({ where: { user_id: userId } });
        return tokens;
    }
};
TokenRepositoy = __decorate([
    (0, typeorm_1.EntityRepository)(token_entity_1.Token)
], TokenRepositoy);
exports.TokenRepositoy = TokenRepositoy;
//# sourceMappingURL=token.repository.js.map