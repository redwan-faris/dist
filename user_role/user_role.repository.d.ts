import { Repository } from 'typeorm';
import { CreateUserRoleDto } from './dto/create-user_role.dto';
import { UpdateUserRoleDto } from './dto/update-user_role.dto';
import { UserRole } from './entities/user_role.entity';
export declare class UserRoleRepository extends Repository<UserRole> {
    createUserRole(createUserRoleDto: CreateUserRoleDto): Promise<UserRole>;
    findUserRoleById(id: number): Promise<UserRole>;
    findAllUserRoles(): Promise<UserRole[]>;
    RemoveUserRole(id: number): Promise<void>;
    updateUserRole(id: number, updateUserRoleDto: UpdateUserRoleDto): Promise<UserRole>;
}
