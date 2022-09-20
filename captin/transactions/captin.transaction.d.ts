import { CaptinType } from 'src/captin_type/entities/captin_type.entity';
import { CarService } from 'src/car/car.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { Polygon } from 'src/polygon/entities/polygon.entity';
import { Region } from 'src/region/entities/region.entity';
import { PolygonType } from 'src/region/types/polygon';
import { UserService } from 'src/user/user.service';
import { Connection, EntityManager } from 'typeorm';
import { CaptinRepository } from '../captin.repository';
import { CreateCaptinDto } from '../dto/create-captin.dto';
import { Captin } from '../entities/captin.entity';
export declare class CreateCaptinTransaction {
    private readonly connection;
    private readonly carServise;
    private readonly userService;
    private readonly captinRepository;
    private readonly notificationService;
    constructor(connection: Connection, carServise: CarService, userService: UserService, captinRepository: CaptinRepository, notificationService: NotificationsService);
    run(createCaptinDto: CreateCaptinDto, region: Region, captinType: CaptinType): Promise<Captin>;
    createPolygon(createPolygon: PolygonType, manager: EntityManager): Promise<Polygon>;
}
