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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const token_service_1 = require("../token/token.service");
const user_service_1 = require("../user/user.service");
const auth_repository_1 = require("./auth.repository");
let AuthService = class AuthService {
    constructor(authRepo, jwtService, tokenService, userService) {
        this.authRepo = authRepo;
        this.jwtService = jwtService;
        this.tokenService = tokenService;
        this.userService = userService;
    }
    async login(loginDto) {
        const { phone_number, password, token } = loginDto;
        const user = await this.authRepo.findUserByPhoneNumber(phone_number);
        if (!user || !user.isValidPassword(password, user.password)) {
            throw new common_1.UnauthorizedException("phone_number or password is not valid");
        }
        const { id, full_name, user_role } = user;
        const jwtToken = await this.jwtService.sign({ id, name: full_name, role: user_role.role, phone_number, });
        await this.tokenService.create({ token }, user);
        return { jwtToken, user };
    }
    async forgotPassword(forgotPasswordDto) {
        const user = await this.userService.checkPhoneNumber(forgotPasswordDto.phone_number);
        return await this.authRepo.forgotPassword(forgotPasswordDto.password, user);
    }
    async changePassword(userId, changePasswordDto) {
        const { oldPassword, newPassword } = changePasswordDto;
        const user = await this.userService.findOne(userId);
        if (!user || !user.isValidPassword(oldPassword, user.password)) {
            throw new common_1.UnauthorizedException("Password is wrong");
        }
        console.log(changePasswordDto);
        await this.authRepo.forgotPassword(newPassword, user);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(auth_repository_1.AuthRepository)),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository, jwt_1.JwtService, token_service_1.TokenService, user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map