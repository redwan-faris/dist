import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './entities/notification.entity';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(type: string, createNotificationDto: CreateNotificationDto): Promise<Notification>;
    findAll(userId: any): Promise<Notification[]>;
    findOne(id: string): Promise<Notification>;
    update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<Notification>;
    remove(id: string): Promise<void>;
}
