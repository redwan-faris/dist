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
exports.MessengerController = void 0;
const common_1 = require("@nestjs/common");
const messenger_service_1 = require("./messenger.service");
const create_messenger_dto_1 = require("./dto/create-messenger.dto");
const update_messenger_dto_1 = require("./dto/update-messenger.dto");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let MessengerController = class MessengerController {
    constructor(messengerService) {
        this.messengerService = messengerService;
    }
    create(createMessengerDto) {
        return this.messengerService.create(createMessengerDto);
    }
    findAll() {
        return this.messengerService.findAll();
    }
    findOne(id) {
        return this.messengerService.findOne(+id);
    }
    update(id, updateMessengerDto) {
        return this.messengerService.update(+id, updateMessengerDto);
    }
    remove(id) {
        return this.messengerService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_messenger_dto_1.CreateMessengerDto]),
    __metadata("design:returntype", void 0)
], MessengerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MessengerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MessengerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_messenger_dto_1.UpdateMessengerDto]),
    __metadata("design:returntype", void 0)
], MessengerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.hasRoles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MessengerController.prototype, "remove", null);
MessengerController = __decorate([
    (0, common_1.Controller)('messenger'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __metadata("design:paramtypes", [messenger_service_1.MessengerService])
], MessengerController);
exports.MessengerController = MessengerController;
//# sourceMappingURL=messenger.controller.js.map