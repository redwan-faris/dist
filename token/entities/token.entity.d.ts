import { User } from "src/user/entities/user.entity";
export declare class Token {
    id: number;
    token: string;
    user: User;
    create_at: Date;
    updated_at: Date;
}
