import { Repository } from "typeorm";
import { CreateRecentDto } from "./dto/create-recent.dto";
import { Recent } from "./entities/recent.entity";
export declare class RecentRepository extends Repository<Recent> {
    createRecent(createRecentDto: CreateRecentDto): Promise<Recent>;
    findAllRecents(): Promise<Recent[]>;
    findRecentById(id: number): Promise<Recent>;
    removeRecent(id: number): Promise<void>;
}
