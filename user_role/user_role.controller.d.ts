import { UserRoleService } from './user_role.service';
import { CreateUserRoleDto } from './dto/create-user_role.dto';
import { UpdateUserRoleDto } from './dto/update-user_role.dto';
import { UserRole } from './entities/user_role.entity';
export declare class UserRoleController {
    private readonly userRoleService;
    constructor(userRoleService: UserRoleService);
    create(createUserRoleDto: CreateUserRoleDto): Promise<UserRole>;
    findAll(): Promise<UserRole[]>;
    findOne(id: string): Promise<UserRole>;
    update(id: string, updateUserRoleDto: UpdateUserRoleDto): Promise<UserRole>;
    remove(id: string): Promise<void>;
}
