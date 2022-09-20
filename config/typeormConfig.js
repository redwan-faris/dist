"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfigAsync = void 0;
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const group_days_view_1 = require("../group/views/group-days.view");
class TypeOrmConfig {
    static getOrmConfig(configServise) {
        return {
            type: 'mysql',
            username: configServise.get("DATABASE_USERNAME"),
            password: configServise.get("DATABASE_PASSWORD"),
            database: configServise.get("DATABASE_NAME"),
            entities: [(0, path_1.join)(__dirname, "../**/*.entity{.ts,.js}"), group_days_view_1.GroupDays],
            migrations: ['dist/migration/**/*.ts'],
            synchronize: true,
        };
    }
}
exports.default = TypeOrmConfig;
exports.typeOrmConfigAsync = {
    imports: [config_1.ConfigModule],
    useFactory: async (configServise) => TypeOrmConfig.getOrmConfig(configServise),
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=typeormConfig.js.map