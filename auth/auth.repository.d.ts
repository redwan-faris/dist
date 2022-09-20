import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
export declare class AuthRepository extends Repository<User> {
    constructor();
    findUserByPhoneNumber(phone: string): Promise<User>;
    forgotPassword(password: string, user: User): Promise<void>;
}
