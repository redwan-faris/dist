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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_role_service_1 = require("../user_role/user_role.service");
const user_repository_1 = require("./user.repository");
let UserService = class UserService {
    constructor(userRepository, userRoleService) {
        this.userRepository = userRepository;
        this.userRoleService = userRoleService;
    }
    async create(createUserDto) {
        const role = await this.userRoleService.findOne(createUserDto.userRoleId);
        return await this.userRepository.createUser(createUserDto, role);
    }
    async createWithTransaction(createUserDto, role, manager) {
        return await this.userRepository.createUser(createUserDto, role, manager);
    }
    findAll() {
        return this.userRepository.findAllUsers();
    }
    findOne(id) {
        return this.userRepository.findOneUser(id);
    }
    update(id, updateUserDto) {
        return this.userRepository.updateUser(id, updateUserDto);
    }
    remove(id) {
        return this.userRepository.deleteUser(id);
    }
    findUsersTokens() {
        return this.userRepository.findUsersTokens();
    }
    findByIds(ids) {
        return this.userRepository.findByIds(ids);
    }
    async checkPhoneNumber(phone_number) {
        return this.userRepository.checkPhoneNumber(phone_number);
    }
    chagnePrimaryPhoneNumber(id, chagnePrimaryPhoneNumber) {
        return this.userRepository.chagnePrimaryPhoneNumber(id, chagnePrimaryPhoneNumber.phone_number);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        user_role_service_1.UserRoleService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map