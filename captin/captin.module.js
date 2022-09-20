"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptinModule = void 0;
const common_1 = require("@nestjs/common");
const captin_service_1 = require("./captin.service");
const captin_controller_1 = require("./captin.controller");
const typeorm_1 = require("@nestjs/typeorm");
const captin_repository_1 = require("./captin.repository");
const captin_transaction_1 = require("./transactions/captin.transaction");
const car_module_1 = require("../car/car.module");
const region_module_1 = require("../region/region.module");
const captin_type_module_1 = require("../captin_type/captin_type.module");
const user_module_1 = require("../user/user.module");
const recent_module_1 = require("../recent/recent.module");
const notifications_module_1 = require("../notifications/notifications.module");
const polygon_module_1 = require("../polygon/polygon.module");
let CaptinModule = class CaptinModule {
};
CaptinModule = __decorate([
    (0, common_1.Module)({
        controllers: [captin_controller_1.CaptinController],
        providers: [captin_service_1.CaptinService, captin_transaction_1.CreateCaptinTransaction],
        imports: [notifications_module_1.NotificationsModule, recent_module_1.RecentModule, typeorm_1.TypeOrmModule.forFeature([captin_repository_1.CaptinRepository]), polygon_module_1.PolygonModule, car_module_1.CarModule, region_module_1.RegionModule, captin_type_module_1.CaptinTypeModule, user_module_1.UserModule],
        exports: [captin_service_1.CaptinService]
    })
], CaptinModule);
exports.CaptinModule = CaptinModule;
//# sourceMappingURL=captin.module.js.map