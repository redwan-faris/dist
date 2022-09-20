import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { UserService } from 'src/user/user.service';
import { NotificationRepository } from './notification.repository';
import { Notification } from './entities/notification.entity';
import { CreateNotificationForUsersDto } from './dto/create-notifications-forusers';
export declare class NotificationsService {
    private readonly userService;
    private readonly notificationRepository;
    constructor(userService: UserService, notificationRepository: NotificationRepository);
    registerTopic(topic: string, token: string): Promise<void>;
    create(createNotificationDto: CreateNotificationDto, type: string): Promise<Notification>;
    findAll(userId: number): Promise<Notification[]>;
    findOne(id: number): Promise<Notification>;
    update(id: number, updateNotificationDto: UpdateNotificationDto): Promise<Notification>;
    remove(id: number): Promise<void>;
    sendNotification(createNotificationDto: CreateNotificationForUsersDto): Promise<Notification>;
    sendNotificationToSecondaryCaptins(createNotificationDto: CreateNotificationDto): Promise<Notification>;
}
