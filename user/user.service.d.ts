import { UserRole } from 'src/user_role/entities/user_role.entity';
import { UserRoleService } from 'src/user_role/user_role.service';
import { EntityManager } from 'typeorm';
import { ChangePrimaryNumberDto } from './dto/change-primary-number.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
export declare class UserService {
    private readonly userRepository;
    private readonly userRoleService;
    constructor(userRepository: UserRepository, userRoleService: UserRoleService);
    create(createUserDto: CreateUserDto): Promise<User>;
    createWithTransaction(createUserDto: CreateUserDto, role: UserRole, manager: EntityManager): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
    findUsersTokens(): Promise<User[]>;
    findByIds(ids: number[]): Promise<User[]>;
    checkPhoneNumber(phone_number: string): Promise<User>;
    chagnePrimaryPhoneNumber(id: number, chagnePrimaryPhoneNumber: ChangePrimaryNumberDto): Promise<void>;
}
