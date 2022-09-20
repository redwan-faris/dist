"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const notification_entity_1 = require("./entities/notification.entity");
let NotificationRepository = class NotificationRepository extends typeorm_1.Repository {
    async createNotification(createNotificationDto, users) {
        const { notification, title } = createNotificationDto;
        const newNotification = new notification_entity_1.Notification();
        newNotification.notification = notification;
        newNotification.users = users;
        newNotification.title = title;
        return await this.save(newNotification);
    }
    async findAllNotifications() {
        return await this.find();
    }
    async findOneNotification(id) {
        const notification = await this.findOne(id);
        if (!notification) {
            throw new common_1.NotFoundException('Notification not found');
        }
        return notification;
    }
    async updateNotification(id, updateNotificationDto) {
        const notification = await this.findOneNotification(id);
        const newNotification = Object.assign(notification, updateNotificationDto);
        return this.save(newNotification);
    }
    async deleteNotification(id) {
        const deleted = await this.delete(id);
        if (deleted.affected === 0) {
            throw new common_1.NotFoundException('Notification not found');
        }
    }
    async findNotificationsByUser(user_id) {
        const notifications = await this.find();
        if (notifications.length === 0) {
            throw new common_1.NotFoundException('User has not notifications');
        }
        return notifications;
    }
};
NotificationRepository = __decorate([
    (0, typeorm_1.EntityRepository)(notification_entity_1.Notification),
    (0, common_1.Injectable)()
], NotificationRepository);
exports.NotificationRepository = NotificationRepository;
//# sourceMappingURL=notification.repository.js.map