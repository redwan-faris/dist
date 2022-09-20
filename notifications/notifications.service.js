"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const serviceAccount = require(".././config/fire-base.config.json");
const user_service_1 = require("../user/user.service");
const typeorm_1 = require("@nestjs/typeorm");
const notification_repository_1 = require("./notification.repository");
let NotificationsService = class NotificationsService {
    constructor(userService, notificationRepository) {
        this.userService = userService;
        this.notificationRepository = notificationRepository;
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    }
    async registerTopic(topic, token) {
        admin.messaging().subscribeToTopic(token, topic);
    }
    async create(createNotificationDto, type) {
        const { title, notification } = createNotificationDto;
        const message = {
            notification: {
                title: title,
                body: notification,
            },
        };
        await admin.messaging().sendToTopic('all', message);
        const users = await this.userService.findAll();
        return await this.notificationRepository.createNotification(createNotificationDto, users);
    }
    findAll(userId) {
        if (userId) {
            return this.notificationRepository.findNotificationsByUser(userId);
        }
        return this.notificationRepository.findAllNotifications();
    }
    findOne(id) {
        return this.notificationRepository.findOne(id);
    }
    update(id, updateNotificationDto) {
        return this.notificationRepository.updateNotification(id, updateNotificationDto);
    }
    remove(id) {
        return this.notificationRepository.deleteNotification(id);
    }
    async sendNotification(createNotificationDto) {
        const { title, notification } = createNotificationDto;
        const users = await this.userService.findByIds(createNotificationDto.userIds);
        let tokens = [];
        for (let i = 0; i < users.length; i++) {
            for (let j = 0; j < users[i].tokens.length; j++) {
                tokens.push(users[i].tokens[j]);
            }
        }
        const message = {
            tokens,
            notification: {
                title: title,
                body: notification,
            },
        };
        await admin.messaging().sendMulticast(message);
        return await this.notificationRepository.createNotification({ title, notification }, users);
    }
    async sendNotificationToSecondaryCaptins(createNotificationDto) {
        const { title, notification } = createNotificationDto;
        const message = {
            notification: {
                title: title,
                body: notification,
            },
        };
        await admin.messaging().sendToTopic('secondary', message);
        const users = await this.userService.findAll();
        return await this.notificationRepository.createNotification(createNotificationDto, users);
    }
};
NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(notification_repository_1.NotificationRepository)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        notification_repository_1.NotificationRepository])
], NotificationsService);
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=notifications.service.js.map