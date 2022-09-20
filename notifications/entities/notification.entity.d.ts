import { User } from "src/user/entities/user.entity";
export declare class Notification {
    id: number;
    notification: string;
    title: string;
    users: User[];
    created_at: Date;
    updated_at: Date;
}
