import { UserRole } from 'src/user_role/entities/user_role.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UserRepository extends Repository<User> {
    createUser(createUserDto: CreateUserDto, role: UserRole, manager?: EntityManager): Promise<User>;
    findAllUsers(): Promise<User[]>;
    findOneUser(id: number): Promise<User>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    deleteUser(id: number): Promise<void>;
    findUsersTokens(): Promise<User[]>;
    checkPhoneNumber(phone_number: string): Promise<User>;
    chagnePrimaryPhoneNumber(id: number, phone_number: string): Promise<void>;
}
