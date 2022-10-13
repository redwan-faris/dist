"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const user_role_module_1 = require("./user_role/user_role.module");
const captin_module_1 = require("./captin/captin.module");
const student_module_1 = require("./student/student.module");
const student_type_module_1 = require("./student_type/student_type.module");
const captin_type_module_1 = require("./captin_type/captin_type.module");
const captin_payroll_module_1 = require("./captin_payroll/captin_payroll.module");
const student_payroll_module_1 = require("./student_payroll/student_payroll.module");
const region_module_1 = require("./region/region.module");
const department_module_1 = require("./department/department.module");
const shift_module_1 = require("./shift/shift.module");
const group_module_1 = require("./group/group.module");
const messenger_module_1 = require("./messenger/messenger.module");
const typeorm_1 = require("@nestjs/typeorm");
const adjustment_module_1 = require("./adjustment/adjustment.module");
const car_module_1 = require("./car/car.module");
const polygon_module_1 = require("./polygon/polygon.module");
const days_module_1 = require("./days/days.module");
const notifications_module_1 = require("./notifications/notifications.module");
const token_module_1 = require("./token/token.module");
const auth_module_1 = require("./auth/auth.module");
const price_region_module_1 = require("./price_region/price_region.module");
const prices_module_1 = require("./prices/prices.module");
const recent_module_1 = require("./recent/recent.module");
const trips_module_1 = require("./trips/trips.module");
const schedule_1 = require("@nestjs/schedule");
const door_module_1 = require("./door/door.module");
const rating_module_1 = require("./rating/rating.module");
const config_1 = require("@nestjs/config");
const typeormConfig_1 = require("./config/typeormConfig");
const notes_module_1 = require("./notes/notes.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(), schedule_1.ScheduleModule.forRoot(), auth_module_1.AuthModule, user_module_1.UserModule, user_role_module_1.UserRoleModule, captin_module_1.CaptinModule, student_module_1.StudentModule, student_type_module_1.StudentTypeModule, captin_type_module_1.CaptinTypeModule, captin_payroll_module_1.CaptinPayrollModule, student_payroll_module_1.StudentPayrollModule, region_module_1.RegionModule, department_module_1.DepartmentModule, shift_module_1.ShiftModule, group_module_1.GroupModule, messenger_module_1.MessengerModule, polygon_module_1.PolygonModule, car_module_1.CarModule, adjustment_module_1.AdjustmentModule, days_module_1.DaysModule, typeorm_1.TypeOrmModule.forRootAsync(typeormConfig_1.typeOrmConfigAsync), notifications_module_1.NotificationsModule, token_module_1.TokenModule, price_region_module_1.PriceRegionModule, prices_module_1.PricesModule, recent_module_1.RecentModule, trips_module_1.TripsModule, door_module_1.DoorModule, rating_module_1.RatingModule, notes_module_1.NotesModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map