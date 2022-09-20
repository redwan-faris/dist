"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async createUser(createUserDto, role, manager = null) {
        const { password, full_name, phone, backup_phone_number } = createUserDto;
        const user = new user_entity_1.User();
        user.backup_phone_number = backup_phone_number;
        user.password = password;
        user.full_name = full_name;
        user.phone = phone;
        user.user_role = role;
        user.hashUserPassword();
        console.log(user);
        try {
            if (manager === null) {
                return await this.save(user);
            }
            else {
                return await manager.getRepository(user_entity_1.User).save(user);
            }
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.BadRequestException('Username already exists');
            }
        }
    }
    async findAllUsers() {
        return await this.find({ relations: ['user_role'] });
    }
    async findOneUser(id) {
        const user = await this.findOne(id, { relations: ['student', 'captin'] });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async updateUser(id, updateUserDto) {
        const user = await this.findOneUser(id);
        const newUser = Object.assign(user, updateUserDto);
        console.log(newUser);
        try {
            return await this.save(newUser);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new Error('Username already exists');
            }
        }
    }
    async deleteUser(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException('User not found');
        }
    }
    async findUsersTokens() {
        return await this.find({ relations: ['tokens'] });
    }
    async checkPhoneNumber(phone_number) {
        const phoneNumber = await this.findOne({ where: {
                phone: phone_number
            } });
        if (!phoneNumber) {
            throw new common_1.NotFoundException('No user with this phone number');
        }
        return phoneNumber;
    }
    async chagnePrimaryPhoneNumber(id, phone_number) {
        const user = await this.findOneUser(id);
        user.phone = phone_number;
        await this.save(user);
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map