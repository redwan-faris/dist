import { User } from "src/user/entities/user.entity";
export declare class Messenger {
    id: number;
    message: string;
    user: User;
    created_at: Date;
    updated_at: Date;
}
