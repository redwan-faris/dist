"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModule = void 0;
const common_1 = require("@nestjs/common");
const token_service_1 = require("./token.service");
const token_controller_1 = require("./token.controller");
const typeorm_1 = require("@nestjs/typeorm");
const token_repository_1 = require("./token.repository");
const notifications_module_1 = require("../notifications/notifications.module");
let TokenModule = class TokenModule {
};
TokenModule = __decorate([
    (0, common_1.Module)({
        controllers: [token_controller_1.TokenController],
        providers: [token_service_1.TokenService],
        imports: [typeorm_1.TypeOrmModule.forFeature([token_repository_1.TokenRepositoy]), notifications_module_1.NotificationsModule],
        exports: [token_service_1.TokenService]
    })
], TokenModule);
exports.TokenModule = TokenModule;
//# sourceMappingURL=token.module.js.map