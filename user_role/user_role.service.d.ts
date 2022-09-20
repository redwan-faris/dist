import { CreateUserRoleDto } from './dto/create-user_role.dto';
import { UpdateUserRoleDto } from './dto/update-user_role.dto';
import { UserRole } from './entities/user_role.entity';
import { UserRoleRepository } from './user_role.repository';
export declare class UserRoleService {
    private readonly userRoleRepository;
    constructor(userRoleRepository: UserRoleRepository);
    create(createUserRoleDto: CreateUserRoleDto): Promise<UserRole>;
    findAll(): Promise<UserRole[]>;
    findOne(id: number): Promise<UserRole>;
    update(id: number, updateUserRoleDto: UpdateUserRoleDto): Promise<UserRole>;
    remove(id: number): Promise<void>;
}
