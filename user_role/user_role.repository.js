"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_role_entity_1 = require("./entities/user_role.entity");
let UserRoleRepository = class UserRoleRepository extends typeorm_1.Repository {
    async createUserRole(createUserRoleDto) {
        const { role } = createUserRoleDto;
        const userRole = new user_role_entity_1.UserRole();
        userRole.role = role;
        await this.save(userRole);
        return userRole;
    }
    async findUserRoleById(id) {
        const userRole = await this.findOne(id);
        if (!userRole) {
            throw new common_1.NotFoundException('UserRole not found');
        }
        return userRole;
    }
    async findAllUserRoles() {
        return await this.find();
    }
    async RemoveUserRole(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException('UserRole not found');
        }
    }
    async updateUserRole(id, updateUserRoleDto) {
        const { role } = updateUserRoleDto;
        const userRole = await this.findUserRoleById(id);
        userRole.role = role;
        await this.save(userRole);
        return userRole;
    }
};
UserRoleRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_role_entity_1.UserRole),
    (0, common_1.Injectable)()
], UserRoleRepository);
exports.UserRoleRepository = UserRoleRepository;
//# sourceMappingURL=user_role.repository.js.map