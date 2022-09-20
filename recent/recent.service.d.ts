import { CreateRecentDto } from './dto/create-recent.dto';
import { Recent } from './entities/recent.entity';
import { RecentGateway } from './recent.gateway';
import { RecentRepository } from './recent.repository';
export declare class RecentService {
    private readonly recentRepository;
    private readonly recentGateWay;
    constructor(recentRepository: RecentRepository, recentGateWay: RecentGateway);
    create(createRecentDto: CreateRecentDto): Promise<Recent>;
    findAll(): Promise<Recent[]>;
    findOne(id: number): Promise<Recent>;
    remove(id: number): Promise<void>;
}
