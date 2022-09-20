import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
export default class TypeOrmConfig {
    static getOrmConfig(configServise: ConfigService): TypeOrmModuleOptions;
}
export declare const typeOrmConfigAsync: TypeOrmModuleAsyncOptions;
