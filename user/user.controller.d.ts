import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ChangePrimaryNumberDto } from './dto/change-primary-number.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    checkPhoneNumber(phone: string): Promise<User>;
    findOne(id: string): Promise<{
        user: User;
    }>;
    chagnePrimaryPhoneNumber(user: User, changePrimaryNumberDto: ChangePrimaryNumberDto): Promise<void>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<void>;
}
