import { CreateAdjustmentDto } from 'src/adjustment/dto/create-adjustment.dto';
import { Captin } from 'src/captin/entities/captin.entity';
import { Connection, EntityManager } from 'typeorm';
import { ChangeCaptinDto } from '../dto/change-captin.dto';
import { Group } from '../entities/group.entity';
export declare class ChangeCaptinTransaction {
    private readonly connection;
    constructor(connection: Connection);
    run(captin: Captin, group: Group, changeCaptinDto: ChangeCaptinDto): Promise<Group>;
    createAdjustment(captin: Captin, createAdjustmentDto: CreateAdjustmentDto, manager: EntityManager): Promise<void>;
}
