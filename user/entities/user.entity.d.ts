import { UserRole } from 'src/user_role/entities/user_role.entity';
import { Student } from 'src/student/entities/student.entity';
import { Captin } from 'src/captin/entities/captin.entity';
import { Notification } from 'src/notifications/entities/notification.entity';
import { Token } from 'src/token/entities/token.entity';
import { Messenger } from 'src/messenger/entities/messenger.entity';
export declare class User {
    id: number;
    password: string;
    full_name: string;
    phone: string;
    backup_phone_number: string;
    user_role: UserRole;
    student: Student;
    captin: Captin;
    notifications: Notification[];
    tokens: Token[];
    messeges: Messenger[];
    created_at: Date;
    updated_at: Date;
    isValidPassword(textPassword: string, hashedPassword: string): boolean;
    hashUserPassword(): void;
}
