import { RecentService } from './recent.service';
import { CreateRecentDto } from './dto/create-recent.dto';
import { RecentGateway } from './recent.gateway';
import { Recent } from './entities/recent.entity';
export declare class RecentController {
    private readonly recentService;
    private readonly recentGateway;
    constructor(recentService: RecentService, recentGateway: RecentGateway);
    create(createRecentDto: CreateRecentDto): Promise<Recent>;
    findAll(): Promise<Recent[]>;
    findOne(id: string): Promise<Recent>;
    remove(id: string): Promise<void>;
}
