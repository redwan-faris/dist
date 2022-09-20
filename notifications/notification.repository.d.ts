import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './entities/notification.entity';
export declare class NotificationRepository extends Repository<Notification> {
    createNotification(createNotificationDto: CreateNotificationDto, users: User[]): Promise<Notification>;
    findAllNotifications(): Promise<Notification[]>;
    findOneNotification(id: number): Promise<Notification>;
    updateNotification(id: number, updateNotificationDto: UpdateNotificationDto): Promise<Notification>;
    deleteNotification(id: number): Promise<void>;
    findNotificationsByUser(user_id: number): Promise<Notification[]>;
}
