import { User } from 'src/user/entities/user.entity';
export declare class UserRole {
    id: number;
    role: string;
    user: User;
    created_at: Date;
    updated_at: Date;
}
