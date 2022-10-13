import { User } from "src/user/entities/user.entity";
export declare class Note {
    id: number;
    note: string;
    user: User;
    admin: string;
    created_at: Date;
    updated_at: Date;
}
